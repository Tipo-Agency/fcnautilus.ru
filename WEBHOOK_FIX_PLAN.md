# План исправления отправки заявок в 1С (по образцу fcriverclub.ru)

## Проблема
В fcnautilus.ru используется `mode: 'no-cors'` для отправки заявок, из-за чего невозможно проверить реальный ответ от 1С. В fcriverclub.ru используется PHP прокси, который возвращает полный ответ от 1С.

## Различия между проектами

### fcriverclub.ru (РАБОТАЕТ ✅)
- Использует `leadService.ts` → отправляет на `/api/lead-proxy`
- PHP прокси (`lead-proxy.php`) возвращает полный ответ от 1С
- Frontend проверяет `response.ok` и видит реальные ошибки
- Нет `mode: 'no-cors'` - все через прокси

### fcnautilus.ru (НЕ РАБОТАЕТ ❌)
- Использует `utils/webhook.ts` → пробует прокси, но fallback на `mode: 'no-cors'`
- С `mode: 'no-cors'` нельзя проверить реальный ответ от сервера
- PHP прокси уже есть (`/api/webhook.php`), но используется как fallback

## Что нужно сделать

### 1. Переписать `utils/webhook.ts` по образцу `leadService.ts`
   - ✅ Убрать `mode: 'no-cors'` и `sendBeacon` fallback
   - ✅ Использовать `/api/webhook.php` как **основной** метод (не fallback)
   - ✅ Проверять `response.ok` и читать реальный ответ от 1С
   - ✅ Добавить детальное логирование как в fcriverclub.ru

### 2. Обновить PHP прокси (`/api/webhook.php`)
   - ✅ Убедиться, что возвращает правильный HTTP статус от 1С
   - ✅ Возвращать полный ответ от 1С (как в fcriverclub.ru)
   - ✅ Логировать все ошибки

### 3. Проверить формат данных
   - ✅ Убедиться, что формат данных соответствует fcriverclub.ru
   - ✅ Проверить, что все поля отправляются правильно

### 4. Тестирование
   - ✅ Проверить отправку заявки в dev режиме
   - ✅ Проверить отправку заявки в production
   - ✅ Проверить логи на сервере (PHP error_log)
   - ✅ Проверить ответ от 1С в консоли браузера

## Ключевые изменения

### `utils/webhook.ts`:
```typescript
// БЫЛО (неправильно):
await fetch(WEBHOOK_DIRECT_URL, {
  method: 'POST',
  mode: 'no-cors', // ❌ Нельзя проверить ответ
  ...
});

// СТАНЕТ (правильно):
const response = await fetch('/api/webhook.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cleanData),
});

if (!response.ok) {
  const errorText = await response.text();
  console.error('1C Webhook error:', errorText);
  return false;
}
```

### `public/api/webhook.php`:
```php
// Уже правильно реализован, но нужно убедиться:
http_response_code($httpCode); // Возвращаем реальный статус от 1С
echo $response; // Возвращаем полный ответ от 1С
```

## Порядок действий

1. ✅ Переписать `utils/webhook.ts` по образцу `leadService.ts`
2. ✅ Убрать все fallback на `mode: 'no-cors'`
3. ✅ Добавить детальное логирование
4. ✅ Протестировать в dev режиме
5. ✅ Протестировать в production
6. ✅ Проверить логи на сервере

## Ожидаемый результат

После исправлений:
- ✅ Заявки отправляются через PHP прокси
- ✅ Можно видеть реальный ответ от 1С в консоли
- ✅ Можно видеть ошибки 500/401/400 от 1С
- ✅ Логирование всех запросов и ответов
- ✅ Работает как в fcriverclub.ru
