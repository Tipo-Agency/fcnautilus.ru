import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Waves, Thermometer, Baby, Dumbbell, Users, Heart } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "Бассейн 25 м",
    description: "Профессиональный бассейн с системой очистки воды",
  },
  {
    icon: Thermometer,
    title: "Термальный комплекс",
    description: "Сауна, хаммам и зона релаксации",
  },
  {
    icon: Baby,
    title: "Детский бассейн",
    description: "Безопасная зона для самых маленьких",
  },
  {
    icon: Dumbbell,
    title: "Премиальные тренажеры",
    description: "Современное оборудование ведущих брендов",
  },
  {
    icon: Users,
    title: "50+ групповых программ",
    description: "Разнообразные направления для всех уровней",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "Персональные тренировки и консультации",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance text-slate-900">
              О фитнес-клубе <span className="text-cyan-600">Наутилус</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              Сеть из трёх современных фитнес-центров в Хабаровске, где каждый найдет свой путь к здоровью и красоте. Мы
              предлагаем комплексный подход к фитнесу для взрослых и детей с уникальным термальным комплексом.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-slate-100 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-100 transition-colors">
                    <feature.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="px-10 py-6 text-lg bg-cyan-700 hover:bg-cyan-800 text-white rounded-xl font-semibold">
              Получить предложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
