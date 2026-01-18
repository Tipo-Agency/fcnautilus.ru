# ИСПРАВЛЕНИЕ ОШИБКИ 405 - Настройка прокси для /api/webhook

## Проблема
Ошибка **405 (Not Allowed)** при отправке формы на `/api/webhook`.

**Причина:** Блок прокси для `/api/webhook` не настроен в nginx или настроен неправильно.

## Быстрое решение

### 1. Откройте конфигурацию nginx

```bash
sudo nano /etc/nginx/sites-available/fcnautilus.ru
```

**Или если используете другой домен:**
```bash
sudo nano /etc/nginx/sites-available/new.fcnautilus.ru
```

### 2. Найдите блок `location /`

Он выглядит примерно так:
```nginx
    location / {
        try_files $uri $uri/ @fallback;
    }
```

### 3. Добавьте блок прокси ПЕРЕД `location /`

**КРИТИЧНО:** Блок должен быть ПЕРЕД `location /`, иначе nginx не будет обрабатывать `/api/webhook`!

Добавьте ПЕРЕД `location /`:
```nginx
    # Прокси для webhook 1С (чтобы избежать CORS)
    location /api/webhook {
        proxy_pass https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e;
        proxy_http_version 1.1;
        proxy_method POST;
        proxy_set_header Host cloud.1c.fitness;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Content-Type application/json;
        proxy_set_header Accept application/json;
        proxy_buffering off;
        proxy_connect_timeout 30s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
        
        # Разрешаем все методы
        limit_except GET POST OPTIONS {
            deny all;
        }
    }
```

### 4. Проверьте конфигурацию

```bash
sudo nginx -t
```

Если видите ошибки - проверьте синтаксис. Если все ОК - продолжайте.

### 5. Перезапустите nginx

```bash
sudo systemctl restart nginx
```

### 6. Проверьте работу

Попробуйте отправить форму снова. Если ошибка 405 остается, проверьте логи:

```bash
sudo tail -f /var/log/nginx/fcnautilus.ru.error.log
```

## Правильный порядок location блоков

Правильный порядок в nginx конфигурации:
1. `location ~* \.(js|css|...)` - статические файлы
2. `location = /index.html` - явно index.html
3. `location /api/webhook` - **ПРОКСИ (ПЕРЕД location /)**
4. `location /` - все остальное

## Если не помогло

1. Убедитесь, что блок прокси находится ПЕРЕД `location /`
2. Проверьте логи nginx: `sudo tail -f /var/log/nginx/error.log`
3. Убедитесь, что `proxy_method POST;` указан
4. Проверьте, что `limit_except GET POST OPTIONS` разрешает POST

## Пример полной конфигурации

См. файл `nginx.conf.example` в репозитории - там правильный порядок блоков.
