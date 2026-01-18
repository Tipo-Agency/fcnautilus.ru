# ИСПРАВЛЕНИЕ CORS ОШИБКИ - Настройка прокси через nginx

## Проблема
Ошибка CORS: "Access to fetch at 'https://cloud.1c.fitness/...' from origin 'https://fcnautilus.ru' has been blocked by CORS policy"

Браузер блокирует прямые запросы к webhook из-за CORS политики сервера.

## Решение: Прокси через nginx

### 1. Обновить конфигурацию nginx

Откройте конфигурацию nginx:
```bash
sudo nano /etc/nginx/sites-available/fcnautilus.ru
```

**Или для нового домена:**
```bash
sudo nano /etc/nginx/sites-available/new.fcnautilus.ru
```

### 2. Добавьте блок прокси ПЕРЕД секцией "Безопасность"

Найдите строку:
```nginx
    # Безопасность
```

И **ДОБАВЬТЕ ПЕРЕД НЕЙ**:
```nginx
    # Прокси для webhook 1С (чтобы избежать CORS)
    location /api/webhook {
        proxy_pass https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e;
        proxy_http_version 1.1;
        proxy_set_header Host cloud.1c.fitness;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Content-Type application/json;
        proxy_buffering off;
        
        # CORS headers для предварительных запросов
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;
            add_header 'Access-Control-Max-Age' 1728000 always;
            add_header 'Content-Type' 'text/plain charset=UTF-8' always;
            add_header 'Content-Length' 0 always;
            return 204;
        }
    }
```

### 3. Проверьте и перезапустите nginx

```bash
# Проверьте конфигурацию
sudo nginx -t

# Если ошибок нет, перезапустите nginx
sudo systemctl restart nginx
```

### 4. Проверьте логи (если что-то не работает)

```bash
# Логи ошибок nginx
sudo tail -f /var/log/nginx/fcnautilus.ru.error.log

# Или для нового домена:
sudo tail -f /var/log/nginx/new.fcnautilus.ru.error.log
```

### 5. Проверьте работу прокси

После настройки, запросы будут идти так:
- **Клиент** → `https://fcnautilus.ru/api/webhook`
- **nginx** → проксирует на → `https://cloud.1c.fitness/api/hs/lead/Webhook/...`
- **Ответ** → возвращается через nginx клиенту

Это решает проблему CORS, так как запрос идет на тот же домен (fcnautilus.ru), а nginx проксирует его на webhook.

## Важно

Код уже обновлен для использования `/api/webhook` вместо прямого URL. После настройки nginx все должно заработать!

## Пример полной конфигурации nginx

См. `nginx.conf.example` в репозитории - там уже добавлен блок прокси.
