#!/bin/bash
# Быстрый скрипт для добавления прокси /api/webhook в nginx

set -e

# Определяем имя конфига (проверяем оба варианта)
NGINX_CONFIG=""
if [ -f "/etc/nginx/sites-available/fcnautilus.ru" ]; then
  NGINX_CONFIG="/etc/nginx/sites-available/fcnautilus.ru"
elif [ -f "/etc/nginx/sites-available/new.fcnautilus.ru" ]; then
  NGINX_CONFIG="/etc/nginx/sites-available/new.fcnautilus.ru"
else
  echo "❌ Nginx config not found! Expected /etc/nginx/sites-available/fcnautilus.ru or new.fcnautilus.ru"
  exit 1
fi

echo "✅ Found nginx config: $NGINX_CONFIG"

# Проверяем наличие прокси для /api/webhook
if grep -qE "location\s*=?\s*/api/webhook" "$NGINX_CONFIG"; then
  echo "⚠️  Proxy block for /api/webhook already exists"
  echo "Showing existing block:"
  grep -A 20 "location.*/api/webhook" "$NGINX_CONFIG" | head -25
  echo ""
  
  # КРИТИЧНО: Проверяем порядок блоков - если /api/webhook после location /, это вызовет 405!
  API_LINE=$(grep -n "location.*/api/webhook" "$NGINX_CONFIG" | head -1 | cut -d: -f1)
  LOCATION_LINE=$(grep -n "location /" "$NGINX_CONFIG" | head -1 | cut -d: -f1)
  
  if [ -n "$API_LINE" ] && [ -n "$LOCATION_LINE" ]; then
    if [ "$API_LINE" -lt "$LOCATION_LINE" ]; then
      echo "✅ Proxy block is correctly placed BEFORE location / (line $API_LINE < $LOCATION_LINE)"
      echo "✅ Configuration is correct. Exiting."
      exit 0
    else
      echo "❌ ERROR: Proxy block is AFTER location / (line $API_LINE > $LOCATION_LINE)"
      echo "⚠️  This will cause 405 errors! Need to fix the order."
      echo ""
      read -p "Fix the order now? (y/n) " -n 1 -r
      echo
      if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "⚠️  Skipping fix. Please fix manually or run script again."
        exit 1
      fi
      echo "Removing incorrect block and re-adding in correct position..."
      # Удаляем неправильно размещенный блок (от location до закрывающей скобки)
      sed -i '/location.*\/api\/webhook/,/^[[:space:]]*}/d' "$NGINX_CONFIG"
      echo "✅ Removed incorrect block. Will add in correct position below..."
    fi
  else
    echo "⚠️  Could not determine line numbers. Block exists but order is unknown."
    echo "⚠️  If you see 405 errors, block might be after location /"
    exit 0
  fi
fi

echo "⚠️  Proxy block for /api/webhook not found. Adding it..."

# Создаем прокси блок
cat > /tmp/nginx_proxy_block.txt << 'PROXY_EOF'
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

PROXY_EOF

# Пробуем найти location / и вставить перед ним
if grep -q "location / {" "$NGINX_CONFIG"; then
  sed -i '/location \/ {/r /tmp/nginx_proxy_block.txt' "$NGINX_CONFIG"
  echo "✅ Inserted before 'location / {'"
elif grep -qE "^\s*location / {" "$NGINX_CONFIG"; then
  sed -i '/^\s*location \/ {/r /tmp/nginx_proxy_block.txt' "$NGINX_CONFIG"
  echo "✅ Inserted before '^\s*location / {'"
elif grep -q "location /" "$NGINX_CONFIG"; then
  sed -i '0,/location \//{ /location \//r /tmp/nginx_proxy_block.txt }' "$NGINX_CONFIG"
  echo "✅ Inserted before first 'location /'"
else
  # Если не нашли location /, добавляем перед закрывающей скобкой server блока
  sed -i '0,/^}/{ /^}/r /tmp/nginx_proxy_block.txt }' "$NGINX_CONFIG"
  echo "✅ Inserted before server block closing brace"
fi

rm -f /tmp/nginx_proxy_block.txt

# Проверяем что блок добавился
if grep -qE "location\s*=?\s*/api/webhook" "$NGINX_CONFIG"; then
  echo "✅ Verified: proxy block found in config"
  echo ""
  echo "Showing added block:"
  grep -A 20 "location.*/api/webhook" "$NGINX_CONFIG" | head -25
else
  echo "❌ ERROR: proxy block NOT found after insertion!"
  exit 1
fi

# Проверяем синтаксис nginx
echo ""
echo "Testing nginx configuration..."
if nginx -t; then
  echo "✅ Nginx config is valid"
  echo ""
  read -p "Reload nginx now? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    systemctl reload nginx
    echo "✅ Nginx reloaded successfully"
  else
    echo "⚠️  Remember to reload nginx: sudo systemctl reload nginx"
  fi
else
  echo "❌ Nginx config test failed! Check the config manually."
  exit 1
fi
