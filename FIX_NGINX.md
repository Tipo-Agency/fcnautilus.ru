# Быстрое исправление ошибки 500

## Проблема
```
rewrite or internal redirection cycle while internally redirecting to "/index.html"
```

## Решение

### Вариант 1: Простая конфигурация (рекомендуется)

Отредактируйте конфигурацию nginx:
```bash
sudo nano /etc/nginx/sites-available/new.fcnautilus.ru
```

Используйте эту конфигурацию:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name new.fcnautilus.ru;

    root /home/deploy/new.fcnautilus.ru;  # ЗАМЕНИТЕ на ваш реальный SERVER_PATH (обычно /home/deploy/... или /home/USERNAME/...)
    index index.html;

    access_log /var/log/nginx/new.fcnautilus.ru.access.log;
    error_log /var/log/nginx/new.fcnautilus.ru.error.log;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**ВАЖНО:** Замените `/var/www/new.fcnautilus.ru` на ваш реальный `SERVER_PATH`!

### Вариант 2: Если Вариант 1 не работает

Проблема может быть в том, что `root` указан неправильно или файлы не в том месте.

1. **Проверьте, где реально находятся файлы:**
```bash
# Найдите, где находится index.html (обычно в /home/deploy/...)
sudo find /home/deploy -name "index.html" 2>/dev/null
# или если другой пользователь
sudo find /home -name "index.html" 2>/dev/null
# или проверьте ваш SERVER_PATH напрямую
ls -la $SERVER_PATH  # замените на реальный путь из GitHub Secrets
```

2. **Проверьте текущую конфигурацию:**
```bash
sudo cat /etc/nginx/sites-available/new.fcnautilus.ru
```

3. **Проверьте, что файлы на месте:**
```bash
# Замените путь на ваш реальный SERVER_PATH (обычно /home/deploy/...)
cd /home/deploy/new.fcnautilus.ru  # или ваш реальный путь из GitHub Secrets
ls -la
# Должен быть index.html
```

4. **Исправьте права:**
```bash
# Замените путь на ваш реальный SERVER_PATH
sudo chown -R deploy:deploy /home/deploy/new.fcnautilus.ru  # или ваш путь
sudo chmod -R 755 /home/deploy/new.fcnautilus.ru
# Также дайте nginx доступ на чтение
sudo chmod -R o+r /home/deploy/new.fcnautilus.ru
```

### После исправления:

1. **Проверьте конфигурацию:**
```bash
sudo nginx -t
```

2. **Если все ОК, перезапустите nginx:**
```bash
sudo systemctl restart nginx
```

3. **Проверьте логи (если все еще не работает):**
```bash
sudo tail -f /var/log/nginx/error.log
```

## Частые причины ошибки:

1. ❌ `root` указан неправильно - не совпадает с `SERVER_PATH`
2. ❌ Файл `index.html` не существует в указанной директории
3. ❌ Неправильные права на файлы
4. ❌ Конфликт с другой конфигурацией nginx
