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

    root /var/www/new.fcnautilus.ru;  # ЗАМЕНИТЕ на ваш SERVER_PATH!
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
# Найдите, где находится index.html
sudo find /var/www -name "index.html" 2>/dev/null
# или
sudo find /home -name "index.html" 2>/dev/null
```

2. **Проверьте текущую конфигурацию:**
```bash
sudo cat /etc/nginx/sites-available/new.fcnautilus.ru
```

3. **Проверьте, что файлы на месте:**
```bash
# Замените путь на ваш SERVER_PATH
cd /var/www/new.fcnautilus.ru  # или ваш путь
ls -la
# Должен быть index.html
```

4. **Исправьте права:**
```bash
sudo chown -R www-data:www-data /var/www/new.fcnautilus.ru
sudo chmod -R 755 /var/www/new.fcnautilus.ru
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
