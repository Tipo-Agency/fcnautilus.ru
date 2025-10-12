import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Gift, Users, Zap } from "lucide-react"

const promotions = [
  {
    title: "60 дней в подарок",
    description: "При покупке годового абонемента получите 2 месяца бесплатно",
    validUntil: "31 декабря 2024",
    image: "/fitness-promotion-gift.jpg",
    badge: "Хит",
    icon: Gift,
    color: "bg-gradient-to-br from-primary/20 to-primary/5",
  },
  {
    title: "Приведи друга",
    description: "Скидка 20% на абонемент для вас и вашего друга при совместной покупке",
    validUntil: "Постоянная акция",
    image: "/friends-workout-together.jpg",
    badge: "Популярная",
    icon: Users,
    color: "bg-gradient-to-br from-green-500/20 to-green-500/5",
  },
  {
    title: "Первый месяц за 1990₽",
    description: "Специальная цена для новых клиентов на любой тип абонемента",
    validUntil: "Для новых клиентов",
    image: "/new-member-special-offer.jpg",
    badge: "Новинка",
    icon: Zap,
    color: "bg-gradient-to-br from-orange-500/20 to-orange-500/5",
  },
  {
    title: "Семейный абонемент",
    description: "Скидка до 30% при покупке абонементов для всей семьи",
    validUntil: "Постоянная акция",
    image: "/family-fitness-activities.jpg",
    badge: "Семейная",
    icon: Users,
    color: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
  },
]

export function PromoSection() {
  return (
    <section id="promo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
              Акции и <span className="text-primary">предложения</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Выгодные предложения для новых и постоянных клиентов фитнес-клуба
            </p>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 relative">
                <div className={`absolute inset-0 ${promo.color} opacity-50`} />
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary text-primary-foreground">{promo.badge}</Badge>
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <promo.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="font-heading text-xl">{promo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 text-pretty">{promo.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{promo.validUntil}</span>
                      </div>
                      <Button size="sm">Узнать условия</Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Не упустите возможность начать тренировки выгодно!</p>
            <Button size="lg" className="px-8">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
