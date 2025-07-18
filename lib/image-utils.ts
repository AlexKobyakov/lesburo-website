/**
 * Утилита для проксирования внешних изображений через API route
 */

export function getProxiedImageUrl(originalUrl: string): string {
  // В продакшене используем прокси, в разработке - оригинальный URL
  if (process.env.NODE_ENV === 'development') {
    return originalUrl;
  }

  // Проверяем, нужно ли проксировать URL
  const needsProxy = originalUrl.includes('images.unsplash.com') || 
                     originalUrl.includes('via.placeholder.com');

  if (!needsProxy) {
    return originalUrl;
  }

  // Кодируем URL для передачи в query параметр
  const encodedUrl = encodeURIComponent(originalUrl);
  
  // Возвращаем URL через наш прокси
  return `/api/proxy-image?url=${encodedUrl}`;
}

/**
 * Список локальных изображений как альтернатива
 */
export const fallbackImages = {
  forest: '/images/forest-landscape.jpg',
  team: '/images/team-work.jpg',
  project1: '/images/project-1.jpg',
  project2: '/images/project-2.jpg',
  project3: '/images/project-3.jpg',
  project4: '/images/project-4.jpg',
  blog1: '/images/blog-1.jpg',
  blog2: '/images/blog-2.jpg',
  blog3: '/images/blog-3.jpg',
  blog4: '/images/blog-4.jpg',
  blog5: '/images/blog-5.jpg',
  blog6: '/images/blog-6.jpg',
};

/**
 * Получить изображение с fallback на локальное
 */
export function getImageWithFallback(originalUrl: string, fallbackKey?: keyof typeof fallbackImages): string {
  // Если есть fallback ключ, используем локальное изображение
  if (fallbackKey && fallbackImages[fallbackKey]) {
    return fallbackImages[fallbackKey];
  }

  // Иначе используем прокси
  return getProxiedImageUrl(originalUrl);
}
