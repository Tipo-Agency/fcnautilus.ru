import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Gift, Users, Clock } from "lucide-react"

export default function PromoPage() {
  const activePromos = [
    {
      title: "Новый участник",
      badge: "НЮ",
      discount: "30%",
      description: "Скидка 30% на первый абонемент для новых участников клуба",
      validUntil: "31.12.2025",
      conditions: [
        "Действует только для новых клиентов",
        "Не суммируется с другими акциями",
        "Применяется к абонементам от 3 месяцев",
      ],
      icon: <Gift className="w-8 h-8" />,
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
      title: "Приведи друга",
      badge: "НЮ",
      discount: "50%",
      description: "Скидка 50% на месяц для вас и вашего друга при совместной покупке абонементов",
      validUntil: "Постоянно",
      conditions: [
        "Друг должен быть новым клиентом",
        "Покупка двух абонементов одновременно",
        "Минимальный срок — 3 месяца",
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
    },
    {
      title: "Утренняя птичка",
      badge: "НЗ",
      discount: "20%",
      description: "Скидка 20% на абонементы с посещением до 12:00",
      validUntil: "31.03.2026",
      conditions: [
        "Доступ только в утренние часы (07:00-12:00)",
        "Действует в будние дни",
        "Минимальный срок — 6 месяцев",
      ],
      icon: <Clock className="w-8 h-8" />,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
  ]

  const familyPromos = [
    {
      title: "Семейный абонемент",
      badge: "НЗ",
      discount: "40%",
      description: "Скидка 40% при покупке абонементов для всей семьи (от 3 человек)",
      validUntil: "Постоянно",
      conditions: [
        "Минимум 3 человека из одной семьи",
        "Покупка абонементов одновременно",
        "Минимальный срок — 6 месяцев",
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      title: "Детский + Взрослый",
      badge: "НЗ",
      discount: "25%",
      description: "Скидка 25% на детский абонемент при покупке взрослого",
      validUntil: "31.12.2025",
      conditions: [
        "Одновременная покупка взрослого и детского абонемента",
        "Минимальный срок — 3 месяца",
        "Не суммируется с другими акциями",
      ],
      icon: <Gift className="w-8 h-8" />,
      color: "bg-gradient-to-br from-rose-500 to-red-600",
    },
  ]

  const seasonalPromos = [
    {
      title: "Новогодняя акция",
      badge: "НЮ",
      discount: "35%",
      description: "Специальное новогоднее предложение с максимальной скидкой",
      validUntil: "15.01.2026",
      conditions: [
        "Действует с 20 декабря по 15 января",
        "При покупке годового абонемента",
        "Количество мест ограничено",
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
  ]

  const PromoCard = ({ promo }: { promo: any }) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className={`${promo.color} p-8 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
          <div className="scale-[3]">{promo.icon}</div>
        </div>
        <div className="relative">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">{promo.badge}</Badge>
          <div className="text-5xl font-bold mb-2">{promo.discount}</div>
          <div className="text-xl font-medium mb-4">{promo.title}</div>
        </div>
      </div>

      <div className="p-8">
        <p className="text-slate-700 text-lg mb-6">{promo.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="w-4 h-4 text-cyan-600" />
            <span>Действует до: {promo.validUntil}</span>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 mb-6">
          <h4 className="font-medium text-slate-900 mb-3">Условия акции:</h4>
          <ul className="space-y-2">
            {promo.conditions.map((condition: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full py-6 text-lg font-medium">
          Активировать акцию
        </Button>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Акции и специальные предложения
          </h1>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Выгодные предложения для новых участников и постоянных клиентов
          </p>

          <Tabs defaultValue="all" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="all">Все акции</TabsTrigger>
              <TabsTrigger value="new">Новым участникам</TabsTrigger>
              <TabsTrigger value="existing">Постоянным клиентам</TabsTrigger>
              <TabsTrigger value="seasonal">Сезонные</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Для новых участников</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activePromos
                    .filter((p) => p.badge === "НЮ")
                    .map((promo, idx) => (
                      <PromoCard key={idx} promo={promo} />
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Для постоянных клиентов</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...activePromos.filter((p) => p.badge === "НЗ"), ...familyPromos].map((promo, idx) => (
                    <PromoCard key={idx} promo={promo} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Сезонные предложения</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {seasonalPromos.map((promo, idx) => (
                    <PromoCard key={idx} promo={promo} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...activePromos.filter((p) => p.badge === "НЮ"), ...seasonalPromos].map((promo, idx) => (
                  <PromoCard key={idx} promo={promo} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="existing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...activePromos.filter((p) => p.badge === "НЗ"), ...familyPromos].map((promo, idx) => (
                  <PromoCard key={idx} promo={promo} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="seasonal">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seasonalPromos.map((promo, idx) => (
                  <PromoCard key={idx} promo={promo} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </main>
  )
}

