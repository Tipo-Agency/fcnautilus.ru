"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/modern-swimming-pool-with-clear-blue-water-and-fit.jpg')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-8 text-balance leading-tight">
            Фитнес-клуб нового поколения
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Три уникальных клуба в Хабаровске. Профессиональные тренажёрные залы, бассейны олимпийского стандарта и
            открытый плавательный комплекс
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-6 text-lg rounded-xl font-medium"
            >
              Выбрать клуб
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-6 text-lg rounded-xl font-medium bg-white"
            >
              Купить абонемент
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-5xl md:text-6xl font-heading font-bold text-cyan-600 mb-2">3</div>
              <div className="text-slate-500 text-sm uppercase tracking-wide font-medium">Клуба в городе</div>
            </div>
            <div className="bg-white border-2 border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-5xl md:text-6xl font-heading font-bold text-cyan-600 mb-2">15 000+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wide font-medium">Довольных клиентов</div>
            </div>
            <div className="bg-white border-2 border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-5xl md:text-6xl font-heading font-bold text-cyan-600 mb-2">12</div>
              <div className="text-slate-500 text-sm uppercase tracking-wide font-medium">Лет на рынке</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
