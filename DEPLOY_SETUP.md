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
4. Добавьте следующие секреты:

   - **DEPLOY_HOST** - IP адрес или домен вашего сервера (например: `192.168.1.100` или `example.com`)
   - **DEPLOY_USER** - имя пользователя для SSH (например: `root` или `deploy`)
   - **DEPLOY_SSH_KEY** - содержимое приватного ключа (скопируйте весь файл `~/.ssh/github_deploy`):
     ```bash
     cat ~/.ssh/github_deploy
     ```
   - **DEPLOY_PORT** - порт SSH (обычно `22`, можно не указывать если стандартный)
   - **DEPLOY_PATH** - путь на сервере, куда деплоить (например: `/var/www/html` или `/home/user/www`)

### Шаг 4: Проверьте подключение

Проверьте, что ключ работает:
```bash
ssh -i ~/.ssh/github_deploy user@your-server.com
```

### Шаг 5: Запустите деплой

После настройки всех секретов:
1. Сделайте push в main: `npm run push`
2. Или запустите вручную через GitHub Actions: **Actions** → выберите workflow → **Run workflow**

## Альтернативный вариант: Использование пароля (не рекомендуется)

Если не хотите использовать SSH ключ, можно использовать пароль, но это менее безопасно:

В `.github/workflows/deploy.yml` замените:
```yaml
key: ${{ secrets.DEPLOY_SSH_KEY }}
```

На:
```yaml
password: ${{ secrets.DEPLOY_PASSWORD }}
```

И добавьте `DEPLOY_PASSWORD` в GitHub Secrets.
