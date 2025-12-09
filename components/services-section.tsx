"use client"

import { Dumbbell, Waves, Users, Heart, Sparkles, Baby, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Dumbbell,
    title: "Тренажёрный зал",
    description: "Современное оборудование от ведущих мировых производителей",
    slug: "gym",
  },
  {
    icon: Waves,
    title: "Бассейн",
    description: "Олимпийские бассейны 25м и 50м с системой очистки воды",
    slug: "pool",
  },
  {
    icon: Users,
    title: "Групповые программы",
    description: "Более 50 направлений: йога, пилатес, функциональный тренинг",
    slug: "group-programs",
  },
  {
    icon: Heart,
    title: "Персональные тренировки",
    description: "Индивидуальный подход с сертифицированными тренерами",
    slug: "personal-training",
  },
  {
    icon: Sparkles,
    title: "SPA & Термальный комплекс",
    description: "Сауны, хаммам, джакузи для полного восстановления",
    slug: "spa",
  },
  {
    icon: Baby,
    title: "Детский клуб",
    description: "Безопасное пространство для детей с профессиональными педагогами",
    slug: "kids-club",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-gradient-to-b from-slate-50 via-white to-cyan-50/30">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">Услуги</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Всё для вашего здоровья
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Комплексный подход к фитнесу и wellness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 glow-hover group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Link href={`/services#${service.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full glass-strong bg-primary/20 hover:bg-primary/30 text-primary border-primary/30 group-hover:border-primary/50 transition-all"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
