import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Users, Infinity } from "lucide-react"

const membershipCards = [
  {
    title: "Тренажёрный зал",
    duration: "3 месяца",
    price: "от 4 500 ₽/мес",
    badge: "Популярная",
    features: [
      "Доступ в тренажёрный зал",
      "Кардио-зона",
      "Силовые тренажеры",
      "Свободные веса",
      "Раздевалки и душевые",
    ],
    timeAccess: "В любое время работы",
    highlight: true,
  },
  {
    title: "Бассейн",
    duration: "3 месяца",
    price: "от 5 500 ₽/мес",
    badge: "Рекомендуем",
    features: ["Бассейн 25м", "Термальный комплекс", "Сауна и хаммам", "Зона отдыха", "Полотенца включены"],
    timeAccess: "В любое время работы",
    highlight: false,
  },
  {
    title: "Безлимитная",
    duration: "6 месяцев",
    price: "от 7 500 ₽/мес",
    badge: "Максимум возможностей",
    features: [
      "Все зоны клуба",
      "Групповые программы",
      "Бассейн и термальный комплекс",
      "Персональная консультация",
      "Заморозка абонемента",
      "Гостевые визиты",
    ],
    timeAccess: "Посещения не ограничены",
    highlight: false,
  },
  {
    title: "Детская",
    duration: "3 месяца",
    price: "от 3 500 ₽/мес",
    badge: "Для детей",
    features: [
      "Детский бассейн",
      "Групповые занятия",
      "Игровые программы",
      "Профессиональные тренеры",
      "Безопасная среда",
    ],
    timeAccess: "По расписанию занятий",
    highlight: false,
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Заморозка абонемента",
    description: "Возможность приостановить абонемент на время отпуска или болезни",
  },
  {
    icon: Users,
    title: "Мобильное приложение",
    description: "Удобная запись на занятия и контроль посещений",
  },
  {
    icon: Infinity,
    title: "Гибкие условия",
    description: "Различные варианты оплаты и продления абонементов",
  },
]

export function CardsSection() {
  return (
    <section id="cards" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance text-slate-900">
              Клубные <span className="text-cyan-600">карты</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed">
              Выберите подходящий абонемент для достижения ваших фитнес-целей
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {membershipCards.map((card, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl border-2 bg-white ${
                  card.highlight ? "border-cyan-600" : "border-slate-100"
                }`}
              >
                {card.badge && (
                  <Badge className="absolute top-4 right-4 bg-cyan-700 text-white rounded-full px-3 py-1 text-xs font-semibold">
                    {card.badge}
                  </Badge>
                )}
                <CardHeader className="pb-4 pt-6 px-6">
                  <CardTitle className="text-xl font-heading mb-4 text-slate-900">{card.title}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-cyan-600">{card.price}</div>
                    <div className="text-sm text-slate-500">{card.duration}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-6 pb-6">
                  <div className="text-sm font-medium text-slate-700 pt-2 border-t border-slate-100">
                    {card.timeAccess}
                  </div>
                  <ul className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-4 rounded-xl py-5 font-semibold ${
                      card.highlight
                        ? "bg-cyan-700 hover:bg-cyan-800 text-white"
                        : "bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200"
                    }`}
                  >
                    Оформить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 text-sm text-pretty leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
