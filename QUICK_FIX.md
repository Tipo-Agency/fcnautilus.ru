# БЫСТРОЕ ИСПРАВЛЕНИЕ - Правильный путь для deploy пользователя

## Проблема
В конфигурации nginx указан неправильный путь - должен быть путь пользователя `deploy`, а не `/var/www/`

## Решение

### 1. Узнайте ваш реальный SERVER_PATH

Он указан в GitHub Secrets → `SERVER_PATH`. Обычно это что-то вроде:
- `/home/deploy/new.fcnautilus.ru`
- `/home/deploy/www`
- `/home/deploy/...`

### 2. Исправьте конфигурацию nginx

```bash
sudo nano /etc/nginx/sites-available/new.fcnautilus.ru
```

**Замените весь файл на это** (замените путь на ваш реальный SERVER_PATH):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name new.fcnautilus.ru;

    root /home/deploy/new.fcnautilus.ru;  # ← ВАШ РЕАЛЬНЫЙ SERVER_PATH!
    index index.html;

    # Статические файлы - обрабатываем первыми
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Явно указываем index.html - без try_files чтобы избежать цикла
    location = /index.html {
        try_files /index.html =404;
    }

    # Все остальные запросы - отдаем index.html
    location / {
        try_files $uri $uri/ @fallback;
    }

    # Fallback для SPA
    location @fallback {
        rewrite ^.*$ /index.html last;
    }
}
```

**ВАЖНО:** Путь в `root` должен **ТОЧНО** совпадать с вашим `SERVER_PATH` из GitHub Secrets!

### 3. Проверьте, что файлы на месте

```bash
# Замените на ваш реальный SERVER_PATH
cd /home/deploy/new.fcnautilus.ru
ls -la
# Должен быть index.html, assets/, images/ и т.д.
```

### 4. Исправьте права

```bash
# Замените на ваш реальный SERVER_PATH
SERVER_PATH="/home/deploy/new.fcnautilus.ru"  # ваш путь
sudo chown -R deploy:deploy $SERVER_PATH
sudo chmod -R 755 $SERVER_PATH
sudo chmod -R o+r $SERVER_PATH  # nginx должен иметь доступ на чтение
```

### 5. Проверьте и перезапустите

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Проверьте логи

```bash
sudo tail -f /var/log/nginx/error.log
```

## Как узнать ваш SERVER_PATH?

1. Откройте GitHub → Settings → Secrets and variables → Actions
2. Найдите секрет `SERVER_PATH`
3. Скопируйте значение
4. Используйте его в конфигурации nginx как `root`

**Пример:**
- Если `SERVER_PATH` = `/home/deploy/new.fcnautilus.ru`
- То в nginx: `root /home/deploy/new.fcnautilus.ru;`
