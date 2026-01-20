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

// Разделение имени на имя и фамилию (как в open-pool.ru)
const splitName = (fullName: string): { name: string; last_name: string } => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length >= 2) {
    return {
      name: parts[0],
      last_name: parts.slice(1).join(' ')
    };
  }
  return {
    name: fullName || '',
    last_name: ''
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
    
    // Формируем данные ТОЧНО как в panovalife.ru и open-pool.ru
    const utmParams = getUtmParams();
    const metricsParams = getMetricsParams();
    
    // В panovalife.ru они отправляют пустые строки, а не undefined
    const webhookData: WebhookData = {
      name: name,
      last_name: last_name,
      phone: phoneDigits.startsWith('7') ? phoneDigits : `7${phoneDigits}`,
      email: data.email || '',
      comment: data.comment || 'Новая заявка с сайта',
      ...utmParams,
      ...metricsParams,
    };
    
    // Используем данные как есть (без фильтрации) - как в panovalife.ru
    const cleanData = webhookData;

    console.log('=== WEBHOOK REQUEST ===');
    console.log('URL:', webhookUrl);
    console.log('Data (cleaned):', JSON.stringify(cleanData, null, 2));
    console.log('Phone format:', cleanData.phone, '(length:', cleanData.phone.length, ')');
    console.log('Name:', cleanData.name || 'not provided', '| Last name:', cleanData.last_name || 'not provided');
    console.log('Email:', cleanData.email || 'not provided');
    console.log('Comment:', cleanData.comment);
    console.log('========================');

    // КАК В OPEN-POOL.RU: В dev режиме пробуем прокси Vite, в production - прямой URL с no-cors
    const isDev = typeof import.meta !== 'undefined' && (import.meta as any).env?.MODE === 'development';
    
    if (isDev) {
      // В dev режиме пробуем через прокси Vite
      try {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cleanData),
        });

        if (response.ok) {
          console.log('✅ Webhook success (via Vite proxy in dev)');
          if (typeof window !== 'undefined') {
            (window as any).__lastWebhookMethod = 'vite-proxy';
          }
          return true;
        }
      } catch (proxyError) {
        // В dev режиме прокси должен работать, но на всякий случай fallback
        console.warn('Dev proxy failed, using direct URL:', proxyError);
      }
    }
    
    // В production (и fallback в dev) - прямой запрос с no-cors (КАК В OPEN-POOL.RU)
    // В режиме no-cors мы не можем проверить response, но запрос отправится и обойдет CORS
    try {
      await fetch(WEBHOOK_DIRECT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      // В режиме no-cors нет ошибки = запрос отправился успешно
      console.log('✅ Webhook request sent (no-cors mode - как в open-pool.ru)');
      if (typeof window !== 'undefined') {
        (window as any).__lastWebhookMethod = 'no-cors';
      }
      return true;
    } catch (directError) {
      console.warn('Direct fetch failed, trying sendBeacon:', directError);
      
      // Последняя попытка через sendBeacon (работает даже при CORS)
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(webhookData)], { type: 'application/json' });
        const sent = navigator.sendBeacon(WEBHOOK_DIRECT_URL, blob);
        if (sent) {
          console.log('✅ Webhook sent via sendBeacon');
          if (typeof window !== 'undefined') {
            (window as any).__lastWebhookMethod = 'sendBeacon';
          }
          return sent;
        }
      }
      
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
// КАК В OPEN-POOL.RU: В dev используем прокси, в production - прямой URL с no-cors
const WEBHOOK_URL = '/api/webhook';
const WEBHOOK_DIRECT_URL = 'https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e';
export const WEBHOOK_URL_SOUTH = WEBHOOK_URL; // Для обратной совместимости
