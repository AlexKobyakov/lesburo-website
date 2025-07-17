import Link from 'next/link'

export const metadata = {
  title: 'Страница не найдена | ООО "Лесбюро"',
  description: 'Запрашиваемая страница не найдена',
  robots: 'noindex, nofollow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Страница не найдена
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
