"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const clubs = [
  {
    id: 1,
    name: "Наутилус Южный",
    slug: "yuzhny",
    tagline: "Флагманский клуб премиум-класса",
    address: "ул. Суворова, 25а",
    hours: "Пн-Вс: 06:00 - 24:00",
    phone: "+7 (4212) 95-09-38",
    image: "/modern-swimming-pool-with-clear-blue-water-and-fit.jpg",
    features: ["Бассейн 25м", "Термальный комплекс", "Детский клуб", "SPA-зона"],
    area: "8 000 м²",
  },
  {
    id: 2,
    name: "Наутилус Загородный",
    slug: "zagorodny",
    tagline: "Фитнес на природе",
    address: "Загородное шоссе, 15",
    hours: "Пн-Вс: 07:00 - 23:00",
    phone: "+7 (4212) 95-09-38",
    image: "/modern-gym-equipment.png",
    features: ["Панорамные окна", "Кардио-зона", "Групповые программы", "Кафе"],
    area: "5 500 м²",
  },
  {
    id: 3,
    name: "Открытый бассейн",
    slug: "pool",
    tagline: "Плавание под открытым небом",
    address: "ул. Тихоокеанская, 88",
    hours: "Май-Сентябрь: 08:00 - 22:00",
    phone: "+7 (4212) 95-09-38",
    image: "/modern-swimming-pool-interior.jpg",
    features: ["Олимпийский бассейн 50м", "Детская зона", "Шезлонги", "Раздевалки"],
    area: "3 000 м²",
  },
]

export function ClubsSection() {
  return (
    <section id="clubs" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50/30">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium mb-4 block">Наши клубы</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Выберите свой клуб
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Три уникальных локации с современным оборудованием и профессиональными тренерами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <div
              key={club.id}
              className="glass rounded-3xl overflow-hidden glow-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={club.image || "/placeholder.svg"}
                  alt={club.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-4 right-4 glass-strong px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-primary">{club.area}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{club.name}</h3>
                <p className="text-sm text-primary mb-4">{club.tagline}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm text-foreground/70">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{club.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-foreground/70">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{club.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-foreground/70">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{club.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {club.features.map((feature) => (
                    <span key={feature} className="glass-strong px-3 py-1 rounded-full text-xs text-foreground/80">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link href={`/clubs/${club.slug}`} className="w-full">
                  <Button className="w-full glass-strong bg-primary/20 hover:bg-primary/30 text-primary border-primary/30">
                    Подробнее о клубе
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
