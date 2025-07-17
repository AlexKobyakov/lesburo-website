# 🚀 Инструкция по деплою сайта Лесбюро на Vercel

## Проблема
Сайт отображается без стилей - как простая HTML страница. Tailwind CSS не применяется.

## ✅ Исправления (уже сделаны)

### 1. Убраны BOM символы
- Пересохранены файлы без BOM:
  - `tailwind.config.js`
  - `postcss.config.js`
  - `next.config.js`
  - `app/globals.css`

### 2. Добавлены fallback стили
- Создан `app/fallback.css` с базовыми стилями на случай проблем с Tailwind

### 3. Обновлена конфигурация Next.js
- Добавлен `forceSwcTransforms: true` для принудительного использования SWC

### 4. Создан скрипт исправления
- `fix-and-test.bat` - для Windows
- `fix-and-test.sh` - для Linux/MacOS

## 🔧 Пошаговый алгоритм деплоя

### Шаг 1: Локальное тестирование
```bash
# Запустить скрипт исправления
./fix-and-test.bat

# Или вручную:
npm run clean
npm install
npm run build
npm run start
```

### Шаг 2: Проверка работоспособности
1. Открыть http://localhost:3000
2. Убедиться что стили применяются
3. Проверить в DevTools → Network что CSS загружается

### Шаг 3: Коммит и деплой
```bash
git add .
git commit -m "Fix Tailwind CSS BOM issues and add fallback styles"
git push origin main
```

### Шаг 4: Очистка кэша Vercel
1. Зайти в панель Vercel
2. Перейти в Settings проекта
3. Functions → "Clear Build Cache"
4. Deployments → "Redeploy" последний деплой

## 🔍 Диагностика проблем

### Если стили все еще не работают:

1. **Проверить логи деплоя на Vercel**
   - Ошибки PostCSS
   - Ошибки сборки Tailwind

2. **Проверить в браузере**
   - DevTools → Network
   - Загружаются ли .css файлы
   - Есть ли ошибки 404

3. **Проверить содержимое CSS файлов**
   - Должны содержать скомпилированные Tailwind классы
   - Не должно быть только @tailwind директив

## 🚨 Альтернативные решения

### Если проблема критическая:
1. **Добавить CDN Tailwind** (временно):
   ```tsx
   // В app/layout.tsx
   <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
   ```

2. **Использовать fallback стили**:
   ```tsx
   // В app/layout.tsx
   import './fallback.css'
   ```

3. **Переключиться на styled-components**:
   ```bash
   npm install styled-components
   ```

## 📋 Чек-лист перед деплоем

- [ ] Локально сайт работает (`npm run dev`)
- [ ] Сборка проходит без ошибок (`npm run build`)
- [ ] Production сервер запускается (`npm run start`)
- [ ] Стили применяются корректно
- [ ] Нет BOM символов в конфигурационных файлах
- [ ] Все изменения закоммичены

## 🔄 Если ничего не помогает

1. Создать новый проект на Vercel
2. Подключить тот же GitHub репозиторий
3. Использовать другую ветку для тестирования
4. Обратиться в техподдержку Vercel

## 📞 Контакты для поддержки

- GitHub Issues: создать issue в репозитории
- Vercel Support: через панель управления
- Stack Overflow: тег `vercel` + `tailwindcss`

---

**Последнее обновление:** ${new Date().toLocaleDateString('ru-RU')}
**Статус:** Исправления применены, готов к деплою
