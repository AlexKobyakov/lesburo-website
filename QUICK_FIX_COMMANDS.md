# Команды для исправления проблем с Tailwind CSS

## Проблемы обнаружены:
1. ✅ BOM символы в конфигурационных файлах - ИСПРАВЛЕНО
2. ✅ Добавлены fallback стили - ДОБАВЛЕНО
3. ✅ Обновлена конфигурация Next.js - ОБНОВЛЕНО

## Выполните эти команды в PowerShell:

```powershell
# Переход в директорию проекта
cd C:\AlexKo\lesburo\lesburo-website

# Очистка кэша и node_modules
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Переустановка зависимостей
npm install

# Проверка сборки
npm run build

# Если сборка успешна, запуск локального сервера
npm run start
```

## Или используйте готовый скрипт:

```powershell
# Запуск автоматического исправления
.\fix-and-test.bat
```

## После успешного локального тестирования:

```powershell
# Коммит изменений
git add .
git commit -m "Fix Tailwind CSS BOM issues and add fallback styles for Vercel deployment"

# Пуш на GitHub
git push origin main
```

## Дополнительные шаги для Vercel:

1. **Зайти в панель Vercel** (https://vercel.com)
2. **Найти проект Лесбюро**
3. **Перейти в Settings → Functions**
4. **Нажать "Clear Build Cache"**
5. **Перейти в Deployments**
6. **Нажать "Redeploy" на последнем деплое**

## Проверка результата:

1. **Дождаться завершения деплоя**
2. **Открыть сайт на Vercel**
3. **Проверить в DevTools → Network**:
   - Должны загружаться CSS файлы
   - Статус 200 для всех ресурсов
4. **Убедиться что стили применяются**

## Если проблема остается:

1. **Проверить логи деплоя на Vercel**
2. **Добавить временный CDN Tailwind**:
   ```tsx
   // В app/layout.tsx после импорта globals.css
   <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
   ```

3. **Использовать fallback стили**:
   ```tsx
   // В app/layout.tsx
   import './fallback.css'
   ```

## Контакты для поддержки:

- **GitHub Issues**: создать issue в репозитории
- **Vercel Support**: через панель управления
- **Stack Overflow**: тег `vercel` + `tailwindcss`

---

**Все исправления уже применены к вашему проекту!**
**Готов к деплою после выполнения команд выше.**
