import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ООО "Лесбюро" - Лесопроектная организация',
  description: 'Комплексные решения для лесного хозяйства. Лесоустройство, проектирование и сопровождение лесных участков.',
  keywords: 'лесбюро, лесопроектная организация, лесоустройство, лесные участки, проектирование',
  authors: [{ name: 'ООО "Лесбюро"' }],
  robots: 'index, follow',
  openGraph: {
    title: 'ООО "Лесбюро" - Лесопроектная организация',
    description: 'Комплексные решения для лесного хозяйства',
    type: 'website',
    locale: 'ru_RU',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #ffffff;
              color: #1a1a1a;
              line-height: 1.6;
            }
            
            /* Layout */
            .min-h-screen { min-height: 100vh; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            
            /* Display */
            .flex { display: flex; }
            .block { display: block; }
            .inline-block { display: inline-block; }
            .hidden { display: none; }
            .grid { display: grid; }
            
            /* Flexbox */
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .justify-between { justify-content: space-between; }
            .flex-col { flex-direction: column; }
            .flex-wrap { flex-wrap: wrap; }
            
            /* Text */
            .text-center { text-align: center; }
            .text-left { text-align: left; }
            .text-right { text-align: right; }
            .text-sm { font-size: 0.875rem; }
            .text-base { font-size: 1rem; }
            .text-lg { font-size: 1.125rem; }
            .text-xl { font-size: 1.25rem; }
            .text-2xl { font-size: 1.5rem; }
            .text-3xl { font-size: 1.875rem; }
            .text-4xl { font-size: 2.25rem; }
            .text-5xl { font-size: 3rem; }
            .text-6xl { font-size: 3.75rem; }
            
            /* Font weights */
            .font-light { font-weight: 300; }
            .font-normal { font-weight: 400; }
            .font-medium { font-weight: 500; }
            .font-semibold { font-weight: 600; }
            .font-bold { font-weight: 700; }
            
            /* Colors */
            .bg-white { background-color: #ffffff; }
            .bg-gray-50 { background-color: #f9fafb; }
            .bg-gray-100 { background-color: #f3f4f6; }
            .bg-gray-200 { background-color: #e5e7eb; }
            .bg-gray-800 { background-color: #1f2937; }
            .bg-gray-900 { background-color: #111827; }
            .bg-green-50 { background-color: #f0fdf4; }
            .bg-green-100 { background-color: #dcfce7; }
            .bg-green-500 { background-color: #22c55e; }
            .bg-green-600 { background-color: #16a34a; }
            .bg-green-700 { background-color: #15803d; }
            .bg-blue-600 { background-color: #2563eb; }
            .bg-blue-700 { background-color: #1d4ed8; }
            
            .text-white { color: #ffffff; }
            .text-black { color: #000000; }
            .text-gray-600 { color: #4b5563; }
            .text-gray-700 { color: #374151; }
            .text-gray-800 { color: #1f2937; }
            .text-gray-900 { color: #111827; }
            .text-green-600 { color: #16a34a; }
            .text-green-700 { color: #15803d; }
            .text-blue-600 { color: #2563eb; }
            
            /* Spacing */
            .m-0 { margin: 0; }
            .m-4 { margin: 1rem; }
            .m-8 { margin: 2rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
            .my-16 { margin-top: 4rem; margin-bottom: 4rem; }
            .mb-2 { margin-bottom: 0.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-12 { margin-bottom: 3rem; }
            .mt-8 { margin-top: 2rem; }
            .mt-16 { margin-top: 4rem; }
            
            .p-4 { padding: 1rem; }
            .p-6 { padding: 1.5rem; }
            .p-8 { padding: 2rem; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .px-8 { padding-left: 2rem; padding-right: 2rem; }
            .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
            .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
            .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
            .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
            .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
            .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
            .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
            
            /* Sizes */
            .w-full { width: 100%; }
            .w-auto { width: auto; }
            .h-full { height: 100%; }
            .h-64 { height: 16rem; }
            .h-96 { height: 24rem; }
            .max-w-md { max-width: 28rem; }
            .max-w-lg { max-width: 32rem; }
            .max-w-xl { max-width: 36rem; }
            .max-w-2xl { max-width: 42rem; }
            .max-w-4xl { max-width: 56rem; }
            .max-w-6xl { max-width: 72rem; }
            .max-w-7xl { max-width: 80rem; }
            
            /* Borders */
            .border { border: 1px solid #d1d5db; }
            .border-gray-200 { border-color: #e5e7eb; }
            .border-gray-300 { border-color: #d1d5db; }
            .rounded { border-radius: 0.25rem; }
            .rounded-md { border-radius: 0.375rem; }
            .rounded-lg { border-radius: 0.5rem; }
            .rounded-xl { border-radius: 0.75rem; }
            .rounded-full { border-radius: 9999px; }
            
            /* Shadows */
            .shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
            .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
            .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
            .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
            
            /* Transitions */
            .transition { transition: all 0.15s ease; }
            .transition-colors { 
              transition-property: color, background-color, border-color;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
            }
            .transition-transform { 
              transition-property: transform;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
            }
            
            /* Hover effects */
            .hover\\:bg-green-700:hover { background-color: #15803d; }
            .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
            .hover\\:bg-gray-700:hover { background-color: #374151; }
            .hover\\:text-green-600:hover { color: #16a34a; }
            .hover\\:text-blue-600:hover { color: #2563eb; }
            .hover\\:scale-105:hover { transform: scale(1.05); }
            .hover\\:shadow-lg:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
            
            /* Grid */
            .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            .gap-4 { gap: 1rem; }
            .gap-6 { gap: 1.5rem; }
            .gap-8 { gap: 2rem; }
            
            /* Responsive */
            @media (min-width: 640px) {
              .sm\\:text-lg { font-size: 1.125rem; }
              .sm\\:text-xl { font-size: 1.25rem; }
              .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            }
            
            @media (min-width: 768px) {
              .md\\:text-xl { font-size: 1.25rem; }
              .md\\:text-2xl { font-size: 1.5rem; }
              .md\\:text-5xl { font-size: 3rem; }
              .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
              .md\\:flex-row { flex-direction: row; }
            }
            
            @media (min-width: 1024px) {
              .lg\\:text-6xl { font-size: 3.75rem; }
              .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            }
            
            /* Buttons */
            .btn {
              display: inline-block;
              font-weight: 500;
              text-align: center;
              text-decoration: none;
              border: none;
              cursor: pointer;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              transition: all 0.15s ease;
            }
            
            .btn-primary {
              background-color: #16a34a;
              color: #ffffff;
            }
            
            .btn-primary:hover {
              background-color: #15803d;
            }
            
            /* Additional utility classes */
            .object-cover { object-fit: cover; }
            .object-center { object-position: center; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .z-10 { z-index: 10; }
            .overflow-hidden { overflow: hidden; }
            .whitespace-nowrap { white-space: nowrap; }
            .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            
            /* Links */
            a { color: inherit; text-decoration: none; }
            a:hover { text-decoration: none; }
          `
        }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}