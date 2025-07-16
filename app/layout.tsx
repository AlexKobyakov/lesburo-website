import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ООО "Лесбюро" - Лесопроектная организация',
  description: 'Комплексные решения для лесного хозяйства. Лесоустройство, проектирование и сопровождение лесных участков.',
  keywords: 'лесбюро, лесопроектная организация, лесоустройство, лесные участки, проектирование',
  authors: [{ name: 'ООО "Лесбюро"' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ООО "Лесбюро" - Лесопроектная организация',
    description: 'Комплексные решения для лесного хозяйства',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}