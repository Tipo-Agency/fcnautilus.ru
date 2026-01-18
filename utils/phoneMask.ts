// Утилита для маски телефона +7

/**
 * Форматирует номер телефона в формат +7 (XXX) XXX-XX-XX
 */
export const formatPhoneNumber = (value: string): string => {
  // Убираем все символы кроме цифр
  const numbers = value.replace(/\D/g, '');
  
  // Если начинается не с 7 или 8, добавляем 7
  let formatted = numbers;
  if (formatted.length > 0) {
    if (formatted[0] === '8') {
      formatted = '7' + formatted.slice(1);
    } else if (formatted[0] !== '7') {
      formatted = '7' + formatted;
    }
  }
  
  // Ограничиваем длину до 11 цифр (7 + 10 цифр)
  formatted = formatted.slice(0, 11);
  
  // Форматируем: +7 (XXX) XXX-XX-XX
  if (formatted.length === 0) {
    return '';
  } else if (formatted.length <= 1) {
    return `+7`;
  } else if (formatted.length <= 4) {
    return `+7 (${formatted.slice(1)}`;
  } else if (formatted.length <= 7) {
    return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4)}`;
  } else if (formatted.length <= 9) {
    return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)}-${formatted.slice(7)}`;
  } else {
    return `+7 (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)}-${formatted.slice(7, 9)}-${formatted.slice(9, 11)}`;
  }
};

/**
 * Извлекает только цифры из номера телефона
 */
export const getPhoneDigits = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  // Если начинается с 8, заменяем на 7
  if (digits[0] === '8') {
    return '7' + digits.slice(1);
  }
  // Если не начинается с 7, добавляем 7
  if (digits[0] !== '7' && digits.length > 0) {
    return '7' + digits;
  }
  return digits;
};

/**
 * Валидация номера телефона (должен быть 11 цифр: 7 + 10 цифр)
 */
export const isValidPhone = (phone: string): boolean => {
  const digits = getPhoneDigits(phone);
  return digits.length === 11 && digits[0] === '7';
};
