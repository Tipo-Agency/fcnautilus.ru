#!/bin/bash
# БЫСТРОЕ ИСПРАВЛЕНИЕ ПРОКСИ НА СЕРВЕРЕ
# Запустите этот скрипт на сервере: sudo bash FIX_SERVER_NOW.sh

set -e

echo "=========================================="
echo "НАСТРОЙКА ПРОКСИ ДЛЯ /api/webhook"
echo "=========================================="
echo ""

# Определяем конфиг nginx
NGINX_CONFIG=""
if [ -f "/etc/nginx/sites-available/fcnautilus.ru" ]; then
  NGINX_CONFIG="/etc/nginx/sites-available/fcnautilus.ru"
  echo "✅ Найден конфиг: $NGINX_CONFIG"
elif [ -f "/etc/nginx/sites-available/new.fcnautilus.ru" ]; then
  NGINX_CONFIG="/etc/nginx/sites-available/new.fcnautilus.ru"
  echo "✅ Найден конфиг: $NGINX_CONFIG"
else
  echo "❌ Конфиг nginx не найден!"
  echo "Ищем все конфиги с fcnautilus..."
  find /etc/nginx -name "*fcnautilus*" -type f 2>/dev/null
  exit 1
fi

# Проверяем, есть ли уже прокси блок
if grep -qE "location\s*=?\s*/api/webhook" "$NGINX_CONFIG"; then
  echo "⚠️  Прокси блок уже существует"
  
  # Проверяем порядок - должен быть ПЕРЕД location /
  API_LINE=$(grep -n "location.*/api/webhook" "$NGINX_CONFIG" | head -1 | cut -d: -f1)
  LOCATION_LINE=$(grep -n "location /" "$NGINX_CONFIG" | head -1 | cut -d: -f1)
  
  if [ -n "$API_LINE" ] && [ -n "$LOCATION_LINE" ]; then
    if [ "$API_LINE" -lt "$LOCATION_LINE" ]; then
      echo "✅ Прокси блок правильно размещен (строка $API_LINE < $LOCATION_LINE)"
      echo "✅ Конфигурация правильная!"
    else
      echo "❌ Прокси блок находится ПОСЛЕ location / (строка $API_LINE > $LOCATION_LINE)"
      echo "⚠️  Это вызывает 405 ошибку! Исправляю..."
      
      # Удаляем неправильный блок
      sed -i '/location.*\/api\/webhook/,/^[[:space:]]*}/d' "$NGINX_CONFIG"
      echo "✅ Удален неправильный блок"
    fi
  fi
fi

# Если блока нет или он был удален, добавляем
if ! grep -qE "location\s*=?\s*/api/webhook" "$NGINX_CONFIG"; then
  echo "Добавляю прокси блок..."
  
  # Создаем временный файл с блоком
  cat > /tmp/nginx_proxy_block.txt << 'EOF'
    # Прокси для webhook 1С (чтобы избежать CORS) - ВАЖНО: должен быть ПЕРЕД location /
    location = /api/webhook {
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*' always;
            add_header 'Access-Control-Allow-Methods' 'POST, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'Content-Type' always;
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
        }
        proxy_pass https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e;
        proxy_set_header Host cloud.1c.fitness;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffering off;
        proxy_request_buffering off;
        proxy_ssl_server_name on;
        proxy_ssl_verify off;
        proxy_http_version 1.1;
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Content-Type' always;
    }
EOF

  # Находим location / и вставляем ПЕРЕД ним
  LOCATION_LINE=$(grep -n "location /" "$NGINX_CONFIG" | head -1 | cut -d: -f1)
  
  if [ -n "$LOCATION_LINE" ]; then
    echo "Найдена строка location / на строке $LOCATION_LINE"
    # Используем awk для вставки перед этой строкой
    awk -v line="$LOCATION_LINE" -v file="/tmp/nginx_proxy_block.txt" '
      NR == line {
        while ((getline < file) > 0) print
        close(file)
      }
      {print}
    ' "$NGINX_CONFIG" > /tmp/nginx_config_new.txt
    mv /tmp/nginx_config_new.txt "$NGINX_CONFIG"
    echo "✅ Прокси блок добавлен перед location /"
  else
    echo "❌ Не найдена строка location /"
    echo "Показываю структуру конфига:"
    grep -n "location" "$NGINX_CONFIG" | head -10
    exit 1
  fi
  
  rm -f /tmp/nginx_proxy_block.txt
fi

# Проверяем синтаксис
echo ""
echo "Проверяю синтаксис nginx..."
if nginx -t; then
  echo "✅ Синтаксис правильный"
  echo ""
  echo "Перезагружаю nginx..."
  systemctl reload nginx
  echo "✅ Nginx перезагружен!"
  echo ""
  echo "=========================================="
  echo "✅ ГОТОВО! Прокси настроен и работает"
  echo "=========================================="
  echo ""
  echo "Проверьте работу формы на сайте."
else
  echo "❌ Ошибка в синтаксисе nginx!"
  echo "Проверьте конфиг вручную:"
  echo "  sudo nano $NGINX_CONFIG"
  exit 1
fi
