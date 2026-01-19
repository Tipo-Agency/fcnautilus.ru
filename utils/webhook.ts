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
    
    // Валидация: телефон должен быть 11 цифр (7 + 10 цифр)
    if (phoneDigits.length !== 11 || !phoneDigits.startsWith('7')) {
      console.error('Invalid phone format:', phoneDigits, '(expected: 11 digits starting with 7)');
      return false;
    }
    
    // Собираем данные, убирая undefined и пустые строки (1C может не принимать их)
    const utmParams = getUtmParams();
    const metricsParams = getMetricsParams();
    
    const webhookData: WebhookData = {
      phone: phoneDigits, // Только цифры, начинается с 7 - обязательное поле
      comment: data.comment || 'Новая заявка с сайта',
    };
    
    // Добавляем name только если оно не пустое
    if (name && name.trim()) {
      webhookData.name = name.trim();
    }
    
    // Добавляем last_name только если оно не пустое
    if (last_name && last_name.trim()) {
      webhookData.last_name = last_name.trim();
    }
    
    // Добавляем email только если он есть
    if (data.email && data.email.trim()) {
      webhookData.email = data.email.trim();
    }
    
    // Добавляем UTM параметры только если они есть
    if (utmParams.utm_source) webhookData.utm_source = utmParams.utm_source;
    if (utmParams.utm_medium) webhookData.utm_medium = utmParams.utm_medium;
    if (utmParams.utm_campaign) webhookData.utm_campaign = utmParams.utm_campaign;
    if (utmParams.utm_term) webhookData.utm_term = utmParams.utm_term;
    if (utmParams.utm_content) webhookData.utm_content = utmParams.utm_content;
    
    // Добавляем метрики только если они есть
    if (metricsParams.ga_cid) webhookData.ga_cid = metricsParams.ga_cid;
    if (metricsParams.ym_cid) webhookData.ym_cid = metricsParams.ym_cid;
    if (metricsParams.rs_cid) webhookData.rs_cid = metricsParams.rs_cid;
    if (metricsParams.rs_vid) webhookData.rs_vid = metricsParams.rs_vid;
    if (metricsParams.ct_cid) webhookData.ct_cid = metricsParams.ct_cid;

    console.log('=== WEBHOOK REQUEST ===');
    console.log('URL:', webhookUrl);
    console.log('Data:', JSON.stringify(webhookData, null, 2));
    console.log('Phone format:', webhookData.phone, '(length:', webhookData.phone.length, ')');
    console.log('Name:', webhookData.name, '| Last name:', webhookData.last_name);
    console.log('Email:', webhookData.email || 'not provided');
    console.log('Comment:', webhookData.comment);
    console.log('UTM params:', {
      utm_source: webhookData.utm_source,
      utm_medium: webhookData.utm_medium,
      utm_campaign: webhookData.utm_campaign,
    });
    console.log('Analytics IDs:', {
      ga_cid: webhookData.ga_cid,
      ym_cid: webhookData.ym_cid,
      rs_cid: webhookData.rs_cid,
      ct_cid: webhookData.ct_cid,
    });
    console.log('========================');

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

    // Fallback: прямой запрос с no-cors (как в open-pool.ru и panovalife.ru)
    // В режиме no-cors мы не можем проверить response, но запрос отправится и обойдет CORS
    try {
      // Убираем пустые значения из JSON перед отправкой (1C может не принимать их)
      const cleanData = Object.fromEntries(
        Object.entries(webhookData).filter(([_, v]) => v !== undefined && v !== null && v !== '')
      );
      
      await fetch(WEBHOOK_DIRECT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanData),
      });
      // В режиме no-cors нет ошибки = запрос отправился успешно
      console.log('Webhook request sent (no-cors mode - response cannot be checked)');
      console.warn('⚠️  NOTE: Using no-cors mode. Request sent but server response cannot be verified.');
      console.warn('⚠️  This usually means Nginx proxy is not configured. Please check server configuration.');
      // Помечаем, что использовался no-cors
      if (typeof window !== 'undefined') {
        (window as any).__lastWebhookMethod = 'no-cors';
      }
      return true; // В режиме no-cors считаем успешным, так как не можем проверить ответ
    } catch (directError) {
      console.warn('Direct no-cors fetch failed, trying sendBeacon...', directError);
      
      // Последняя попытка через sendBeacon (работает даже при CORS)
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        try {
          // Убираем пустые значения из JSON перед отправкой
          const cleanData = Object.fromEntries(
            Object.entries(webhookData).filter(([_, v]) => v !== undefined && v !== null && v !== '')
          );
          const blob = new Blob([JSON.stringify(cleanData)], { type: 'application/json' });
          const sent = navigator.sendBeacon(WEBHOOK_DIRECT_URL, blob);
          if (sent) {
            console.log('Webhook sent via sendBeacon (CORS bypass - cannot verify response)');
            console.warn('⚠️  WARNING: Using sendBeacon fallback. Request sent but server response cannot be verified.');
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
