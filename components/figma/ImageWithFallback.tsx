"use client";
import React, { useState, useEffect } from 'react'
import { IMAGE_MAPPING, LOCAL_IMAGES } from '../../lib/images'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// Функция для создания placeholder изображения
function createPlaceholderSvg(width: number = 400, height: number = 250, text: string = 'Лесное изображение'): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff"/>
      <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="#e0f2fe" stroke="#0369a1" stroke-width="2" rx="8"/>
      <text x="50%" y="40%" text-anchor="middle" fill="#0369a1" font-family="Arial, sans-serif" font-size="16">${text}</text>
      <text x="50%" y="60%" text-anchor="middle" fill="#0369a1" font-family="Arial, sans-serif" font-size="12">Placeholder</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// Функция для получения правильного источника изображения
function getImageSource(originalSrc: string): string {
  if (!originalSrc) return LOCAL_IMAGES.fallback;
  
  // Если это уже локальный URL или data URL, возвращаем как есть
  if (originalSrc.startsWith('/') || originalSrc.startsWith('data:')) {
    return originalSrc;
  }
  
  // Проверяем маппинг для внешних изображений
  if (IMAGE_MAPPING[originalSrc]) {
    return IMAGE_MAPPING[originalSrc];
  }
  
  // Для других внешних URL используем прокси
  if (originalSrc.startsWith('http')) {
    return `/api/proxy-image?url=${encodeURIComponent(originalSrc)}`;
  }
  
  return LOCAL_IMAGES.fallback;
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Исправление hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleError = () => {
    setDidError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { src, alt, style, className, ...rest } = props;

  // Предотвращение hydration error - показываем skeleton до монтирования
  if (!mounted) {
    return (
      <div
        className={`inline-block bg-gradient-to-br from-green-100 to-green-200 animate-pulse ${className ?? ''}`}
        style={style}
        {...rest}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  const imageSrc = getImageSource(src || '');

  if (didError) {
    return (
      <div
        className={`inline-block bg-gradient-to-br from-green-50 to-green-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm text-green-700">Лесное изображение</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-green-300 rounded-full animate-spin flex items-center justify-center">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
          </div>
        </div>
      )}
      <img 
        src={imageSrc} 
        alt={alt || 'Лесное изображение'} 
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 w-full h-full object-cover`}
        style={{}}
        {...rest} 
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
}
