# Конфигурации для развертывания на Vercel

## Текущие конфигурации (полные/расширенные)

### next.config.js
- ✅ experimental.forceSwcTransforms
- ✅ images с remotePatterns и локальными настройками
- ✅ async headers() с поддержкой CORS и кэширования
- ✅ async rewrites() для статических файлов
- ✅ compiler.removeConsole для production
- ✅ Настройки для SVG и Content Security Policy

### vercel.json
- ✅ builds секция с @vercel/next
- ✅ functions секция с runtime nodejs20.x
- ✅ headers секция с MIME типами и кэшированием
- ✅ routes секция с fallback маршрутизацией
- ✅ framework: "nextjs"

## Упрощенные конфигурации (для отката)

### next.config.js (упрощенная версия)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
}

module.exports = nextConfig
```

### vercel.json (упрощенная версия)
```json
{
  "version": 2,
  "framework": "nextjs"
}
```

## Команды для переключения

### Для использования полных конфигураций:
```bash
fix-vercel-deploy-full.bat
```

### Для проверки конфигураций:
```bash
check-configs.bat
```

### Для отката к упрощенным конфигурациям:
```bash
rollback-to-simple-configs.bat
```

## Различия между конфигурациями

| Функция | Полная | Упрощенная |
|---------|--------|------------|
| Experimental features | ✅ | ❌ |
| Custom headers | ✅ | ❌ |
| Rewrites | ✅ | ❌ |
| Functions runtime | ✅ | ❌ |
| Builds specification | ✅ | ❌ |
| Routes fallback | ✅ | ❌ |
| MIME type headers | ✅ | ❌ |
| CORS headers | ✅ | ❌ |

## Рекомендации

1. **Используйте полные конфигурации** если:
   - Нужна точная настройка кэширования
   - Требуется поддержка CORS
   - Используются кастомные API роуты
   - Нужна поддержка старых браузеров

2. **Используйте упрощенные конфигурации** если:
   - Возникают проблемы с развертыванием
   - Нужно быстро протестировать базовую функциональность
   - Проект простой без сложных требований

3. **Отладка проблем**:
   - Сначала попробуйте полную конфигурацию
   - При проблемах откатитесь к упрощенной
   - Добавляйте функции постепенно
