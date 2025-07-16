# Сайт ООО "Лесбюро"

Современный веб-сайт лесопроектной организации, построенный на Next.js 14 с TypeScript и Tailwind CSS.

## 🚀 Функциональность

- **Современный дизайн** с адаптивной версткой
- **Высокая производительность** благодаря Next.js 14
- **TypeScript** для безопасности типов
- **Tailwind CSS** для стилей
- **Radix UI** компоненты для интерфейса
- **Оптимизированные изображения** и SEO

## 🛠 Установка и запуск

### Локальный запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Создание продакшен сборки
npm run build

# Запуск продакшен версии
npm start
```

### Системные требования

- Node.js 18+ 
- npm или yarn
- Git

## 📦 Деплой

### 1. Vercel (Рекомендуется)

1. Создайте репозиторий на GitHub
2. Загрузите код проекта в репозиторий
3. Перейдите на [vercel.com](https://vercel.com)
4. Подключите GitHub аккаунт
5. Выберите репозиторий с проектом
6. Vercel автоматически определит настройки Next.js
7. Нажмите "Deploy"

**Команды для загрузки в GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/lesburo-website.git
git push -u origin main
```

### 2. Netlify

1. Создайте аккаунт на [netlify.com](https://netlify.com)
2. Перетащите папку проекта в Netlify Deploy
3. Или подключите GitHub репозиторий
4. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `out`

### 3. GitHub Pages

1. Добавьте в `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lesburo-website',
  images: {
    unoptimized: true
  }
}
```

2. Создайте `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## 🔧 Структура проекта

```
├── app/                 # Next.js 14 App Router
│   ├── layout.tsx      # Основной layout
│   ├── page.tsx        # Главная страница
│   └── globals.css     # Глобальные стили
├── components/         # React компоненты
│   ├── ui/            # UI библиотека
│   ├── figma/         # Figma компоненты
│   └── *.tsx          # Компоненты секций
├── lib/               # Утилиты
├── public/            # Статические файлы
├── styles/            # Дополнительные стили
└── package.json       # Зависимости
```

## 📝 Основные секции сайта

1. **Header** - Навигация с меню
2. **HeroSection** - Главный баннер
3. **AboutSection** - О компании
4. **ClientServicesSection** - Услуги по клиентам
5. **ServicesSection** - Ключевые услуги
6. **SoliSection** - Система СОЛИ
7. **ProjectsSection** - Портфолио проектов
8. **LibrarySection** - Библиотека документов
9. **GlossarySection** - Глоссарий
10. **BlogSection** - Блог
11. **ContactSection** - Контакты
12. **Footer** - Подвал сайта

## 🎨 Дизайн-система

- **Основной цвет**: Зеленый (#22c55e)
- **Шрифт**: Inter
- **Компоненты**: Radix UI
- **Иконки**: Lucide React
- **Стили**: Tailwind CSS

## 🌐 Настройка домена

После успешного деплоя на любой платформе, вы можете настроить свой домен:

### Vercel
1. Зайдите в настройки проекта
2. Добавьте свой домен в разделе "Domains"
3. Настройте DNS записи у вашего провайдера

### Netlify
1. Перейдите в Site settings > Domain management
2. Добавьте свой домен
3. Следуйте инструкциям по настройке DNS

## 📞 Поддержка

Если у вас возникли вопросы по деплою или настройке, обратитесь к документации:

- [Next.js документация](https://nextjs.org/docs)
- [Vercel документация](https://vercel.com/docs)
- [Netlify документация](https://docs.netlify.com)

## 🔄 Обновления

Для обновления проекта:

```bash
# Обновить зависимости
npm update

# Проверить безопасность
npm audit

# Собрать проект
npm run build
```

---

© 2025 ООО "Лесбюро" - Лесопроектная организация