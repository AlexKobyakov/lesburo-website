'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Ошибка</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Что-то пошло не так
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Произошла непредвиденная ошибка. Пожалуйста, попробуйте ещё раз.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Попробовать снова
          </button>
          <a
            href="/"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Главная страница
          </a>
        </div>
      </div>
    </div>
  )
}
