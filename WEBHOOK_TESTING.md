# Инструкция по тестированию отправки заявок в 1С

## Что изменилось

✅ **Переписан `utils/webhook.ts` по образцу `leadService.ts` из fcriverclub.ru:**
- Убран `mode: 'no-cors'` и `sendBeacon` fallback
- Используется `/api/webhook.php` как **основной** метод (не fallback)
- Проверяется `response.ok` и читается реальный ответ от 1С
- Добавлено детальное логирование

✅ **Обновлен PHP прокси (`/api/webhook.php`):**
- Возвращает JSON в формате `{ success: true/false, data: ... }` как в fcriverclub.ru
- Всегда возвращает HTTP 200 фронту (чтобы не было проблем с CORS)
- Логирует все запросы и ответы

## Как проверить, что все работает

### 1. Проверка в браузере (DevTools)

1. Откройте сайт в браузере
2. Откройте DevTools (F12) → вкладка **Console**
3. Отправьте тестовую заявку через форму
4. Проверьте логи в консоли:

**Ожидаемые логи:**
```
[Webhook] Отправка заявки в 1C: { name: "...", phone: "...", ... }
[Webhook] Ответ сервера: 200 OK
[Webhook] Полный ответ от 1C: {"success":true,"data":"..."}
[Webhook] Распарсенный ответ от 1C: { success: true, data: "..." }
[Webhook] ✅ Заявка успешно отправлена в 1C
```

**Если ошибка:**
```
[Webhook] Ответ сервера: 500 Internal Server Error
[Webhook] Полный ответ от 1C: {"success":false,"data":"..."}
[Webhook] Failed to send lead: { status: 500, ... }
```

### 2. Проверка в Network (DevTools)

1. Откройте DevTools → вкладка **Network**
2. Отправьте тестовую заявку
3. Найдите запрос к `/api/webhook.php`
4. Проверьте:
   - **Status:** должен быть `200 OK`
   - **Response:** должен быть JSON `{"success":true,"data":"..."}` или `{"success":false,"data":"..."}`
   - **Request Payload:** должен содержать все поля (name, phone, email, comment, utm, analytics)

### 3. Проверка на сервере (PHP логи)

1. Подключитесь к серверу по SSH
2. Проверьте логи PHP:
   ```bash
   tail -f /var/log/php-fpm/error.log
   # или
   tail -f /var/log/nginx/error.log
   ```

**Ожидаемые логи:**
```
Webhook request: POST 2026-01-XX XX:XX:XX
Webhook data: {"name":"...","phone":"...",...}
Webhook response: HTTP 200 | cURL error: none
Webhook success: HTTP 200
```

**Если ошибка от 1С:**
```
Webhook response: HTTP 500 | cURL error: none
Webhook 1C error: HTTP 500 | Response: ...
```

### 4. Проверка ответа от 1С

Если в консоли видно `[Webhook] Полный ответ от 1C:`, это означает:
- ✅ PHP прокси работает
- ✅ Запрос дошел до 1С
- ✅ 1С вернул ответ

**Если `success: false`:**
- Проблема на стороне 1С (неправильный формат данных, неправильный webhook URL, и т.д.)
- Проверьте webhook URL в `public/api/webhook.php` (строка 31)
- Проверьте формат данных в консоли

**Если `success: true`:**
- ✅ Все работает правильно!
- Заявка должна появиться в 1С

## Возможные проблемы

### 1. "Failed to fetch" или CORS ошибка
**Причина:** PHP прокси не работает или Nginx не настроен для PHP
**Решение:** 
- Проверьте, что файл `/api/webhook.php` существует на сервере
- Проверьте, что Nginx настроен для обработки PHP файлов
- Проверьте логи Nginx: `tail -f /var/log/nginx/error.log`

### 2. "405 Method Not Allowed"
**Причина:** Nginx блокирует POST запросы к PHP файлам
**Решение:**
- Проверьте конфигурацию Nginx для `/api/*.php`
- Убедитесь, что есть `location ~ \.php$` блок

### 3. "500 Internal Server Error" от PHP
**Причина:** Ошибка в PHP коде или неправильная конфигурация PHP
**Решение:**
- Проверьте логи PHP: `tail -f /var/log/php-fpm/error.log`
- Проверьте синтаксис PHP: `php -l /path/to/webhook.php`

### 4. "500 Internal Server Error" от 1С
**Причина:** 1С не принимает данные (неправильный формат, неправильный webhook URL)
**Решение:**
- Проверьте webhook URL в `public/api/webhook.php` (строка 31)
- Проверьте формат данных в консоли браузера
- Сравните с рабочим проектом (fcriverclub.ru)

### 5. Заявка не появляется в 1С, но `success: true`
**Причина:** 1С принял запрос, но не обработал его
**Решение:**
- Проверьте логи 1С
- Проверьте настройки webhook в 1С
- Убедитесь, что webhook URL правильный для fcnautilus.ru

## Сравнение с fcriverclub.ru

| Параметр | fcriverclub.ru | fcnautilus.ru |
|----------|----------------|---------------|
| Frontend сервис | `leadService.ts` | `utils/webhook.ts` |
| Прокси endpoint | `/api/lead-proxy` | `/api/webhook.php` |
| Формат ответа | `{success: true, data: ...}` | `{success: true, data: ...}` |
| Проверка ответа | `response.ok` + `result.success` | `response.ok` + `result.success` |
| Логирование | Детальное | Детальное |
| Fallback | Нет | Нет (убрали `no-cors`) |

## Следующие шаги

1. ✅ Протестировать отправку заявки в dev режиме
2. ✅ Протестировать отправку заявки в production
3. ✅ Проверить логи на сервере
4. ✅ Убедиться, что заявки появляются в 1С
5. ✅ Если все работает - удалить старый код (fallback на `no-cors`)
