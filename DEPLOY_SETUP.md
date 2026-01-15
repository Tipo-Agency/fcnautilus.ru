# Инструкция по настройке автодеплоя

## Проблема
Автодеплой не работает, потому что не настроен SSH ключ для подключения к серверу.

## Решение

### Шаг 1: Создайте SSH ключ (если его еще нет)

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy
```

Или если ed25519 не поддерживается:
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ~/.ssh/github_deploy
```

**Важно:** Не указывайте пароль (просто нажмите Enter), иначе GitHub Actions не сможет использовать ключ.

### Шаг 2: Добавьте публичный ключ на сервер

Скопируйте публичный ключ на сервер:
```bash
ssh-copy-id -i ~/.ssh/github_deploy.pub user@your-server.com
```

Или вручную:
```bash
cat ~/.ssh/github_deploy.pub
# Скопируйте вывод и добавьте в ~/.ssh/authorized_keys на сервере
```

### Шаг 3: Добавьте приватный ключ в GitHub Secrets

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Добавьте следующие секреты (важно: используйте именно эти имена!):

   - **SERVER_HOST** - IP адрес или домен вашего сервера (например: `192.168.1.100` или `example.com`)
   - **SERVER_USER** - имя пользователя для SSH (например: `root` или `deploy`)
   - **SERVER_SSH_KEY** - содержимое приватного ключа (скопируйте весь файл `~/.ssh/github_deploy`):
     ```bash
     cat ~/.ssh/github_deploy
     ```
     **Важно:** Скопируйте весь ключ, включая строки `-----BEGIN OPENSSH PRIVATE KEY-----` и `-----END OPENSSH PRIVATE KEY-----`
   - **SERVER_PORT** - порт SSH (обычно `22`, можно не указывать если стандартный)
   - **SERVER_PATH** - путь на сервере, куда деплоить (например: `/home/deploy/new.fcnautilus.ru` или `/home/deploy/www`)

### Шаг 4: Проверьте подключение

Проверьте, что ключ работает:
```bash
ssh -i ~/.ssh/github_deploy user@your-server.com
```

### Шаг 5: Настройте nginx (ВАЖНО!)

После деплоя нужно настроить nginx для работы с SPA:

1. **Создайте конфигурацию nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/new.fcnautilus.ru
   ```

2. **Используйте пример из `nginx.conf.example`** в репозитории:
   - **КРИТИЧНО:** `root` должен указывать на ваш `SERVER_PATH` (обычно `/home/deploy/...`, а НЕ `/var/www/...`)
   - Ключевая строка: `try_files $uri $uri/ /index.html;` (для HashRouter)
   - **Пример:** если `SERVER_PATH` = `/home/deploy/new.fcnautilus.ru`, то `root` должен быть `/home/deploy/new.fcnautilus.ru`

3. **Создайте симлинк:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/new.fcnautilus.ru /etc/nginx/sites-enabled/
   ```

4. **Проверьте конфигурацию:**
   ```bash
   sudo nginx -t
   ```

5. **Перезапустите nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

6. **Проверьте права на файлы:**
   ```bash
   # Замените на ваш реальный SERVER_PATH
   SERVER_PATH="/home/deploy/new.fcnautilus.ru"  # или ваш путь
   sudo chown -R deploy:deploy $SERVER_PATH
   sudo chmod -R 755 $SERVER_PATH
   # Дайте nginx доступ на чтение
   sudo chmod -R o+r $SERVER_PATH
   ```

### Шаг 6: Запустите деплой

После настройки всех секретов и nginx:
1. Сделайте push в main: `npm run push`
2. Или запустите вручную через GitHub Actions: **Actions** → выберите workflow → **Run workflow**

## Проверка работы автодеплоя

После настройки:

1. **Проверьте секреты в GitHub:**
   - Откройте репозиторий → **Settings** → **Secrets and variables** → **Actions**
   - Убедитесь, что все секреты добавлены с правильными именами:
     - `SERVER_HOST`
     - `SERVER_USER`
     - `SERVER_SSH_KEY`
     - `SERVER_PATH` (и опционально `SERVER_PORT`)

2. **Проверьте логи деплоя:**
   - Откройте **Actions** в репозитории
   - Выберите последний workflow run
   - Проверьте логи на наличие ошибок

3. **Частые проблемы:**
   - ❌ "can't connect without a private SSH key" → Не добавлен `SERVER_SSH_KEY` или ключ неправильный
   - ❌ "Permission denied" → Публичный ключ не добавлен в `authorized_keys` на сервере
   - ❌ "No such file or directory" → Неправильный `SERVER_PATH`
   - ❌ "dist folder not found" → Ошибка сборки проекта
   - ❌ **"500 Internal Server Error"** → Проблема с конфигурацией nginx:
     - Проверьте, что nginx настроен для SPA: `try_files $uri $uri/ /index.html;`
     - Проверьте права на файлы: `chmod -R 755` и `chown -R www-data:www-data`
     - Проверьте логи: `sudo tail -f /var/log/nginx/error.log`
     - Убедитесь, что `root` в nginx указывает на правильный `SERVER_PATH`

## Альтернативный вариант: Использование пароля (не рекомендуется)

Если не хотите использовать SSH ключ, можно использовать пароль, но это менее безопасно:

В `.github/workflows/deploy.yml` замените:
```yaml
key: ${{ secrets.SERVER_SSH_KEY }}
```

На:
```yaml
password: ${{ secrets.SERVER_PASSWORD }}
```

И добавьте `SERVER_PASSWORD` в GitHub Secrets.
