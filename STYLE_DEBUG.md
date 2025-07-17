# Диагностика проблем со стилями на Vercel

## Возможные причины отсутствия стилей:

### 1. Проблемы с Tailwind CSS на Vercel
- PostCSS не обрабатывает @tailwind директивы
- Конфликт версий зависимостей
- Проблемы с кэшированием

### 2. Кодировка файлов
- ✅ Исправлено: убраны кракозябры из globals.css

### 3. Конфигурация Next.js
- ✅ Добавлено: forceSwcTransforms в experimental

### 4. Fallback стили
- ✅ Добавлено: fallback.css с базовыми стилями

## Команды для исправления:

### Локальная проверка:
```bash
# Очистка и пересборка
npm run clean
npm run build
npm run start
```

### Принудительная очистка кэша Vercel:
```bash
# В настройках проекта на Vercel:
# 1. Перейти в Settings -> General
# 2. Scroll down до "Build & Output Settings"
# 3. Включить "Skip Build Step" временно
# 4. Сделать коммит с изменениями
# 5. Отключить "Skip Build Step"
# 6. Заново задеплоить
```

### Альтернативное решение - CDN версия стилей:
Если Tailwind не компилируется, можно временно добавить CDN версию в layout.tsx:

```tsx
<link 
  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" 
  rel="stylesheet"
/>
```

## Проверка работы стилей:

1. **Локально**: http://localhost:3000
2. **Vercel**: проверить в Developer Tools -> Network вкладка
   - Должны загружаться .css файлы
   - Проверить статус 200 для CSS

## Шаги для деплоя с исправлениями:

1. Коммит изменений
2. Push на GitHub
3. Vercel автоматически пересобирает
4. Если не помогло - очистить кэш Vercel вручную
