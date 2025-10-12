"use client"

import { Dumbbell, Waves, Users, Heart, Sparkles, Baby } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Тренажёрный зал",
    description: "Современное оборудование от ведущих мировых производителей",
  },
  {
    icon: Waves,
    title: "Бассейн",
    description: "Олимпийские бассейны 25м и 50м с системой очистки воды",
  },
  {
    icon: Users,
    title: "Групповые программы",
    description: "Более 50 направлений: йога, пилатес, функциональный тренинг",
  },
  {
    icon: Heart,
    title: "Персональные тренировки",
    description: "Индивидуальный подход с сертифицированными тренерами",
  },
  {
    icon: Sparkles,
    title: "SPA & Термальный комплекс",
    description: "Сауны, хаммам, джакузи для полного восстановления",
  },
  {
    icon: Baby,
    title: "Детский клуб",
    description: "Безопасное пространство для детей с профессиональными педагогами",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">Услуги</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Всё для вашего здоровья
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Комплексный подход к фитнесу и wellness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 glow-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
