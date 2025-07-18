/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Конфигурация для GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Базовый путь для GitHub Pages (замените на имя вашего репозитория)
  basePath: process.env.NODE_ENV === 'production' ? '/lesburo-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lesburo-website' : '',
  
  experimental: {
    forceSwcTransforms: true,
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
}

module.exports = nextConfig
