// Утилита для отправки данных на вебхук 1С

interface WebhookData {
  name?: string;
  last_name?: string;
  phone: string;
  email?: string;
  comment?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ga_cid?: string;
  rs_cid?: string;
  ym_cid?: string;
  rs_vid?: string;
  ct_cid?: string;
}

// Получение UTM меток из URL
export const getUtmParams = (): Partial<WebhookData> => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
};

// Получение метрик из cookies/localStorage
export const getMetricsParams = (): Partial<WebhookData> => {
  if (typeof window === 'undefined') return {};
  
  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
  };

  const getLocalStorage = (key: string): string | undefined => {
    try {
      return localStorage.getItem(key) || undefined;
    } catch {
      return undefined;
    }
  };

  return {
    // Google Analytics Client ID
    ga_cid: getCookie('_ga')?.split('.').slice(-2).join('.') || 
            getLocalStorage('_ga')?.split('.').slice(-2).join('.') || undefined,
    
    // Roistat Client ID
    rs_cid: getCookie('roistat_visit') || getLocalStorage('roistat_visit') || undefined,
    
    // Yandex Metrika Client ID
    ym_cid: getCookie('_ym_uid') || getLocalStorage('_ym_uid') || undefined,
    
    // Roistat Visit ID
    rs_vid: getCookie('roistat_visit') || getLocalStorage('roistat_visit') || undefined,
    
    // Calltouch Client ID
    ct_cid: getCookie('ct_client_id') || getLocalStorage('ct_client_id') || undefined,
  };
};

// Разделение имени на имя и фамилию
const splitName = (fullName: string): { name: string; last_name: string } => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { name: parts[0], last_name: '' };
  }
  return {
    name: parts[0],
    last_name: parts.slice(1).join(' ')
  };
};

// Отправка данных на вебхук 1С
export const sendToWebhook = async (
  data: {
    name: string;
    phone: string;
    email?: string;
    comment?: string;
  },
  webhookUrl: string
): Promise<boolean> => {
  try {
    const { name, last_name } = splitName(data.name);
    
    // Очищаем телефон от всех нецифровых символов и гарантируем формат 7XXXXXXXXXX
    let phoneDigits = data.phone.replace(/\D/g, '');
    // Если начинается с 8, заменяем на 7
    if (phoneDigits.startsWith('8')) {
      phoneDigits = '7' + phoneDigits.slice(1);
    }
    // Если не начинается с 7, добавляем 7
    if (!phoneDigits.startsWith('7') && phoneDigits.length > 0) {
      phoneDigits = '7' + phoneDigits;
    }
    
    const webhookData: WebhookData = {
      name,
      last_name,
      phone: phoneDigits, // Только цифры, начинается с 7
      email: data.email || undefined,
      comment: data.comment || 'Новая заявка с сайта',
      ...getUtmParams(),
      ...getMetricsParams(),
    };

    console.log('Sending to webhook:', webhookUrl);
    console.log('Webhook data:', webhookData);

    // Если используем прокси, пробуем сначала его
    if (webhookUrl === WEBHOOK_PROXY_URL) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд для прокси

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(webhookData),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        console.log('Webhook response status:', response.status);
        
        if (response.ok) {
          const responseData = await response.text().catch(() => '');
          console.log('Webhook success (via proxy):', responseData);
          // Помечаем, что использовался прокси
          if (typeof window !== 'undefined') {
            (window as any).__lastWebhookMethod = 'proxy';
          }
          return true;
        }
        
        // Если прокси вернул ошибку, пробуем прямой URL
        console.warn('Proxy returned error, trying direct URL with no-cors...');
      } catch (proxyError) {
        // Если прокси не работает (405, 404, CORS), пробуем прямой URL с no-cors
        console.warn('Proxy failed:', proxyError);
        if (proxyError instanceof Error && proxyError.message.includes('405')) {
          console.warn('405 error - proxy not configured, using no-cors fallback');
        }
      }
    }

    // Fallback: прямой запрос БЕЗ no-cors (пробуем проверить ответ)
    // Если CORS блокирует - используем sendBeacon как последний вариант
    try {
      const directResponse = await fetch(WEBHOOK_DIRECT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (directResponse.ok) {
        console.log('Webhook success (direct URL):', directResponse.status);
        // Помечаем, что использовался прямой URL
        if (typeof window !== 'undefined') {
          (window as any).__lastWebhookMethod = 'direct';
        }
        return true;
      } else {
        const errorText = await directResponse.text().catch(() => '');
        console.error('Webhook direct URL error:', {
          status: directResponse.status,
          statusText: directResponse.statusText,
          errorText,
          url: WEBHOOK_DIRECT_URL
        });
        
        // Если сервер вернул ошибку (500, 400 и т.д.) - это не CORS, это реальная ошибка
        // Не используем sendBeacon, так как он тоже не поможет при 500
        return false;
      }
    } catch (directError) {
      // Если ошибка из-за CORS (TypeError: Failed to fetch) - пробуем sendBeacon
      const isCorsError = directError instanceof TypeError && 
                          (directError.message.includes('Failed to fetch') || 
                           directError.message.includes('CORS') ||
                           directError.message.includes('NetworkError'));
      
      if (isCorsError) {
        console.warn('Direct fetch failed due to CORS, trying sendBeacon...', directError);
        
        // Последняя попытка через sendBeacon (работает даже при CORS)
        // sendBeacon не блокирует CORS и отправляет данные в фоне
        if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
          try {
            const blob = new Blob([JSON.stringify(webhookData)], { type: 'application/json' });
          const sent = navigator.sendBeacon(WEBHOOK_DIRECT_URL, blob);
          if (sent) {
            console.log('Webhook sent via sendBeacon (CORS bypass - cannot verify response)');
            console.warn('⚠️  WARNING: Using sendBeacon fallback. Request sent but server response cannot be verified.');
            console.warn('⚠️  This usually means Nginx proxy is not configured. Please check server configuration.');
            // Помечаем, что использовался sendBeacon
            if (typeof window !== 'undefined') {
              (window as any).__lastWebhookMethod = 'sendBeacon';
            }
            return true; // sendBeacon всегда возвращает true если принят браузером
          } else {
            console.error('sendBeacon returned false - request was rejected');
          }
          } catch (beaconError) {
            console.error('SendBeacon failed:', beaconError);
          }
        } else {
          console.error('sendBeacon not available');
        }
      } else {
        // Если ошибка не CORS (например, AbortError) - просто возвращаем false
        console.error('Direct fetch failed (not CORS):', directError);
      }
      
      console.error('All webhook methods failed');
      return false;
    }
  } catch (error) {
    console.error('Error sending to webhook:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
};

// URL вебхука для клуба Южный
// Используем прокси через nginx (/api/webhook) или прямой URL с no-cors как fallback
const WEBHOOK_PROXY_URL = '/api/webhook';
const WEBHOOK_DIRECT_URL = 'https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e';
export const WEBHOOK_URL_SOUTH = WEBHOOK_PROXY_URL; // Для обратной совместимости
