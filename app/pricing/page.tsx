import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Тренажёрный зал",
      badge: "Популярная",
      badgeColor: "bg-cyan-500",
      price: "4 500",
      period: "3 месяца",
      features: [
        "В любое время работы",
        "Доступ в тренажёрный зал",
        "Кардио-зона",
        "Силовые тренажеры",
        "Свободные веса",
        "Раздевалки и душевые",
      ],
    },
    {
      name: "Бассейн",
      badge: "Рекомендуем",
      badgeColor: "bg-cyan-600",
      price: "5 500",
      period: "3 месяца",
      features: [
        "В любое время работы",
        "Бассейн 25м",
        "Термальный комплекс",
        "Сауна и хаммам",
        "Зона отдыха",
        "Полотенца включены",
      ],
    },
    {
      name: "Безлимитная",
      badge: "Максимум возможностей",
      badgeColor: "bg-cyan-700",
      price: "7 500",
      period: "6 месяцев",
      features: [
        "Посещения не ограничены",
        "Все зоны клуба",
        "Групповые программы",
        "Бассейн и термальный комплекс",
        "Персональная консультация",
        "Заморозка абонемента",
        "Гостевые визиты",
      ],
      highlighted: true,
    },
    {
      name: "Детская",
      badge: "Для детей",
      badgeColor: "bg-cyan-500",
      price: "3 500",
      period: "3 месяца",
      features: [
        "По расписанию занятий",
        "Детский бассейн",
        "Групповые занятия",
        "Игровые программы",
        "Профессиональные тренеры",
        "Безопасная среда",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">Тарифы и цены</h1>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Выберите подходящий абонемент для достижения ваших целей
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.highlighted ? "ring-2 ring-cyan-500 scale-105" : ""
                }`}
              >
                <div
                  className={`${plan.badgeColor} text-white text-sm font-medium px-4 py-2 rounded-full inline-block mb-6`}
                >
                  {plan.badge}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-slate-600">от</span>
                    <span className="text-4xl font-bold text-cyan-600">{plan.price}</span>
                    <span className="text-slate-600">₽/мес</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{plan.period}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full py-6 font-medium">
                  Оформить
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
