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

    console.log('[Webhook] Отправка заявки в 1C:', cleanData);
    
    // КАК В FCRIVERCLUB.RU: Используем прокси как основной метод
    // В dev режиме используем Vite прокси, в production - PHP прокси
    // Прокси возвращает полный ответ от 1С, можно проверить реальные ошибки
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanData),
      });
      
      console.log('[Webhook] Ответ сервера:', response.status, response.statusText);
      
      // Проверяем статус ответа
      const responseText = await response.text().catch(() => '');
      
      console.log('[Webhook] Полный ответ от 1C:', responseText);
      
      // Если ответ не OK, возвращаем ошибку
      if (!response.ok) {
        console.error('[Webhook] Failed to send lead:', {
          status: response.status,
          statusText: response.statusText,
          response: responseText
        });
        return false;
      }
      
      // Пытаемся распарсить JSON ответ (может быть пустой или не JSON)
      let result;
      try {
        result = responseText ? JSON.parse(responseText) : {};
        console.log('[Webhook] Распарсенный ответ от 1C:', result);
      } catch (e) {
        // Если ответ не JSON, но статус OK - считаем успехом
        console.log('[Webhook] Ответ не JSON, но статус OK. Текст ответа:', responseText);
        result = {};
      }
      
      // Если 1C вернул ошибку в JSON
      if (result.error) {
        console.error('[Webhook] 1C returned error:', result.error);
        return false;
      }
      
      // Проверяем есть ли в ответе информация об успехе или ошибке
      if (result.success === false || result.status === 'error') {
        console.error('[Webhook] 1C returned error in response:', result);
        return false;
      }
      
      console.log('[Webhook] ✅ Заявка успешно отправлена в 1C');
      return true;
    } catch (error) {
      console.error('[Webhook] Error sending lead to 1C:', error);
      if (error instanceof Error) {
        console.error('[Webhook] Error message:', error.message);
        console.error('[Webhook] Error stack:', error.stack);
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
// КАК В FCRIVERCLUB.RU: Используем прокси как основной метод
// В dev режиме: Vite проксирует `/api/webhook` → прямой URL 1С
// В production: Nginx проксирует `/api/webhook.php` → PHP прокси → 1С
// Прокси возвращает полный ответ от 1С, можно проверить реальные ошибки
const isDev = typeof import.meta !== 'undefined' && (import.meta as any).env?.MODE === 'development';
const WEBHOOK_URL = isDev ? '/api/webhook' : '/api/webhook.php';
export const WEBHOOK_URL_SOUTH = WEBHOOK_URL; // Для обратной совместимости
