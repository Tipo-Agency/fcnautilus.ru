#!/bin/bash
# Скрипт для диагностики проблем с nginx и деплоем

echo "=== ДИАГНОСТИКА NGINX И ДЕПЛОЯ ==="
echo ""

# 1. Проверка текущей конфигурации nginx
echo "1. Текущая конфигурация nginx для new.fcnautilus.ru:"
echo "----------------------------------------"
if [ -f "/etc/nginx/sites-available/new.fcnautilus.ru" ]; then
    cat /etc/nginx/sites-available/new.fcnautilus.ru
else
    echo "❌ Файл конфигурации не найден!"
    echo "Проверяю sites-enabled:"
    ls -la /etc/nginx/sites-enabled/ | grep new.fcnautilus.ru
fi
echo ""

# 2. Проверка root директории
echo "2. Проверка root директории из конфигурации:"
echo "----------------------------------------"
ROOT_PATH=$(grep -E "^\s*root\s+" /etc/nginx/sites-available/new.fcnautilus.ru 2>/dev/null | head -1 | awk '{print $2}' | tr -d ';')
if [ -n "$ROOT_PATH" ]; then
    echo "Root из конфигурации: $ROOT_PATH"
    if [ -d "$ROOT_PATH" ]; then
        echo "✅ Директория существует"
        echo "Содержимое:"
        ls -la "$ROOT_PATH"
        echo ""
        if [ -f "$ROOT_PATH/index.html" ]; then
            echo "✅ index.html найден"
            echo "Первые строки index.html:"
            head -5 "$ROOT_PATH/index.html"
        else
            echo "❌ index.html НЕ найден в $ROOT_PATH"
        fi
    else
        echo "❌ Директория НЕ существует: $ROOT_PATH"
    fi
else
    echo "❌ Не удалось определить root из конфигурации"
fi
echo ""

# 3. Поиск index.html на сервере
echo "3. Поиск всех index.html на сервере:"
echo "----------------------------------------"
find /var/www /home -name "index.html" -type f 2>/dev/null | head -10
echo ""

# 4. Проверка прав доступа
echo "4. Проверка прав доступа:"
echo "----------------------------------------"
if [ -n "$ROOT_PATH" ] && [ -d "$ROOT_PATH" ]; then
    echo "Права на директорию:"
    ls -ld "$ROOT_PATH"
    echo ""
    echo "Права на index.html:"
    ls -l "$ROOT_PATH/index.html" 2>/dev/null || echo "index.html не найден"
    echo ""
    echo "Владелец:"
    stat -c "%U:%G" "$ROOT_PATH" 2>/dev/null || stat -f "%Su:%Sg" "$ROOT_PATH" 2>/dev/null
fi
echo ""

# 5. Проверка синтаксиса nginx
echo "5. Проверка синтаксиса nginx:"
echo "----------------------------------------"
nginx -t 2>&1
echo ""

# 6. Последние ошибки nginx
echo "6. Последние ошибки nginx (последние 20 строк):"
echo "----------------------------------------"
tail -20 /var/log/nginx/error.log
echo ""

# 7. Проверка процесса nginx
echo "7. Статус nginx:"
echo "----------------------------------------"
systemctl status nginx --no-pager -l | head -10
echo ""

echo "=== КОНЕЦ ДИАГНОСТИКИ ==="
