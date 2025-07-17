// Константы для локальных изображений
export const LOCAL_IMAGES = {
  // Hero Section
  hero: '/images/forest-landscape.svg',
  
  // About Section  
  team: '/images/team-forest.svg',
  
  // Projects Section
  project1: '/images/project-vologda.svg',
  project2: '/images/project-karelia.svg', 
  project3: '/images/project-tver.svg',
  project4: '/images/project-pskov.svg',
  
  // Fallback images
  fallback: '/images/forest-landscape.svg',
  placeholder: '/images/forest-landscape.svg'
};

// Функция для получения fallback изображения
export function getImageWithFallback(imagePath: string): string {
  return imagePath || LOCAL_IMAGES.fallback;
}

// Маппинг внешних URL на локальные изображения
export const IMAGE_MAPPING: Record<string, string> = {
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop': LOCAL_IMAGES.hero,
  'https://images.unsplash.com/photo-1516358237-24c4c743dd0b?w=600&h=400&fit=crop': LOCAL_IMAGES.team,
  'https://images.unsplash.com/photo-1574946113821-178a72e61888?w=400&h=250&fit=crop': LOCAL_IMAGES.project1,
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop': LOCAL_IMAGES.project2,
  'https://images.unsplash.com/photo-1516475080664-ed2fc6a32937?w=400&h=250&fit=crop': LOCAL_IMAGES.project3,
  'https://images.unsplash.com/photo-1520637836862-4d197d17c27a?w=400&h=250&fit=crop': LOCAL_IMAGES.project4,
};

// Функция для создания placeholder изображения в случае ошибки
export function createFallbackImage(width: number = 400, height: number = 250, title: string = 'Лесное изображение'): string {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fallbackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#065f46;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fallbackGradient)"/>
      <rect x="20" y="20" width="${width-40}" height="${height-40}" fill="#10b981" opacity="0.3" rx="10"/>
      <circle cx="${width/2}" cy="${height/2 - 20}" r="20" fill="#065f46"/>
      <text x="${width/2}" y="${height/2 + 20}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${title}</text>
      <text x="${width/2}" y="${height/2 + 40}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12">ООО "Лесбюро"</text>
    </svg>
  `)}`;
}
