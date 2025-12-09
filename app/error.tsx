"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw, AlertTriangle } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Логирование ошибки в сервис мониторинга
    console.error("Error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Что-то пошло не так</h1>
          <p className="text-xl text-slate-600 mb-8">
            Произошла непредвиденная ошибка. Мы уже работаем над её устранением.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">Что можно сделать?</h3>
          <div className="space-y-3 text-left text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-cyan-600 mt-1">•</span>
              <span>Попробуйте обновить страницу</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-600 mt-1">•</span>
              <span>Проверьте подключение к интернету</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-600 mt-1">•</span>
              <span>Очистите кэш браузера</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-600 mt-1">•</span>
              <span>Попробуйте зайти позже</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8"
            onClick={reset}
          >
            <RefreshCcw className="w-5 h-5 mr-2" />
            Попробовать снова
          </Button>
          <Link href="/">
            <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              На главную
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-4">Если проблема сохраняется, свяжитесь с нами:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74212456789"
              className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
            >
              +7 (4212) 45-67-89
            </a>
            <a
              href="mailto:support@nautilus-fitness.ru"
              className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
            >
              support@nautilus-fitness.ru
            </a>
          </div>
        </div>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800">
              <strong>Dev Error:</strong> {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

