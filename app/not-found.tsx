"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-cyan-600 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Страница не найдена</h2>
          <p className="text-xl text-slate-600 mb-8">
            К сожалению, страница, которую вы ищете, не существует или была перемещена.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <p className="text-slate-700 mb-6">Возможно, вас заинтересует:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/pricing"
              className="p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors text-left"
            >
              <h3 className="font-semibold text-cyan-900 mb-1">Тарифы</h3>
              <p className="text-sm text-cyan-700">Выберите подходящий абонемент</p>
            </Link>
            <Link
              href="/schedule"
              className="p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors text-left"
            >
              <h3 className="font-semibold text-cyan-900 mb-1">Расписание</h3>
              <p className="text-sm text-cyan-700">Групповые занятия и тренировки</p>
            </Link>
            <Link
              href="/clubs"
              className="p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors text-left"
            >
              <h3 className="font-semibold text-cyan-900 mb-1">Клубы</h3>
              <p className="text-sm text-cyan-700">Найдите ближайший клуб</p>
            </Link>
            <Link
              href="/contacts"
              className="p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors text-left"
            >
              <h3 className="font-semibold text-cyan-900 mb-1">Контакты</h3>
              <p className="text-sm text-cyan-700">Свяжитесь с нами</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8">
              <Home className="w-5 h-5 mr-2" />
              На главную
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Назад
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Нужна помощь?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74212000000"
              className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
            >
              +7 (4212) 00-00-00
            </a>
            <a
              href="mailto:info@nautilus-fitness.ru"
              className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
            >
              info@nautilus-fitness.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

