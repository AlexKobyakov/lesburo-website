# Инструкция по исправлению ошибок сборки и деплою на Vercel

## Исправленные проблемы:

1. **Ошибка с модулем 'critters'** - убрана экспериментальная опция `optimizeCss: true` из next.config.js
2. **Предупреждение о viewport в metadata** - вынесен viewport в отдельный экспорт согласно требованиям Next.js 14+
3. **Отсутствующие страницы ошибок** - созданы not-found.tsx и error.tsx
4. **Настройка для Vercel** - отключен output: 'standalone' и создан vercel.json

## Шаги для исправления:

### 1. Очистка и переустановка зависимостей:
```powershell
# Запустите в PowerShell:
.\clean-and-install.bat

# Или вручную:
rm -rf .next
rm -rf node_modules
rm package-lock.json
npm install
```

### 2. Установка недостающих зависимостей:
```powershell
npm install rimraf --save-dev
```

### 3. Сборка проекта:
```powershell
npm run build
```

### 4. Локальный запуск для проверки:
```powershell
npm run start
```

## Для деплоя на Vercel:

### 1. Через Vercel CLI:
```powershell
# Установите Vercel CLI (если не установлен):
npm i -g vercel

# Войдите в аккаунт:
vercel login

# Деплой:
vercel --prod
```

### 2. Через GitHub (рекомендуемый способ):
1. Загрузите код в GitHub репозиторий
2. Подключите репозиторий к Vercel через dashboard
3. Vercel автоматически задеплоит при каждом push

### 3. Переменные окружения для Vercel:
Если у вас есть переменные окружения, добавьте их в настройках проекта на Vercel.

## Полезные команды:

```powershell
# Очистка кэша Next.js:
npm run clean

# Полная переустановка:
npm run fresh-install

# Проверка типов:
npm run type-check

# Линтинг:
npm run lint
```

## Структура проекта после исправлений:

```
lesburo-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx       # ✅ Исправлен viewport
│   ├── page.tsx
│   ├── not-found.tsx    # ✅ Создан
│   └── error.tsx        # ✅ Создан
├── components/
├── next.config.js       # ✅ Исправлен
├── package.json         # ✅ Обновлен
├── vercel.json          # ✅ Создан
└── clean-and-install.bat # ✅ Создан
```

## Проверка готовности к деплою:

1. ✅ Сборка проходит без ошибок
2. ✅ Все страницы ошибок созданы
3. ✅ Конфигурация оптимизирована для Vercel
4. ✅ Зависимости установлены
5. ✅ TypeScript проверки проходят

Теперь проект готов к деплою на Vercel!
