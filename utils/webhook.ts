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
    
    const webhookData: WebhookData = {
      name,
      last_name,
      phone: data.phone.replace(/\D/g, ''), // Убираем все нецифровые символы
      email: data.email || undefined,
      comment: data.comment || 'Новая заявка с сайта',
      ...getUtmParams(),
      ...getMetricsParams(),
    };

    console.log('Sending to webhook:', webhookUrl);
    console.log('Webhook data:', webhookData);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    console.log('Webhook response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No error details');
      console.error('Webhook error:', response.status, response.statusText, errorText);
      return false;
    }

    const responseData = await response.text().catch(() => '');
    console.log('Webhook success:', responseData);
    return true;
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
// В режиме разработки используем прокси, в продакшене - прямой URL
const isDevelopment = import.meta.env.DEV;
export const WEBHOOK_URL_SOUTH = isDevelopment 
  ? '/api/webhook'
  : 'https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e';
