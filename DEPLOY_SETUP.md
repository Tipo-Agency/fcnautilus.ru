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
   - **SERVER_PATH** - путь на сервере, куда деплоить (например: `/var/www/html` или `/home/user/www`)

### Шаг 4: Проверьте подключение

Проверьте, что ключ работает:
```bash
ssh -i ~/.ssh/github_deploy user@your-server.com
```

### Шаг 5: Запустите деплой

После настройки всех секретов:
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
