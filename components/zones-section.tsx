import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Waves, Dumbbell, Users, Zap, Baby, Flower2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const zones = [
  {
    icon: Waves,
    title: "Бассейн и термальный комплекс",
    description: "25-метровый бассейн, сауна, хаммам и зона релаксации для полного восстановления",
    features: ["Бассейн 25м", "Сауна", "Хаммам", "Зона отдыха"],
    image: "/modern-swimming-pool-interior.jpg",
    slug: "pool",
  },
  {
    icon: Dumbbell,
    title: "Тренажёрный зал",
    description: "Современные тренажеры и свободные веса для силовых тренировок любого уровня",
    features: ["Кардио-зона", "Силовые тренажеры", "Свободные веса", "Функциональная зона"],
    image: "/modern-gym-equipment.png",
    slug: "gym",
  },
  {
    icon: Users,
    title: "Популярные групповые программы",
    description: "Более 50 направлений: от классической аэробики до современных танцевальных программ",
    features: ["Аэробика", "Танцы", "Степ", "Силовые классы"],
    image: "/group-fitness-class.png",
    slug: "group-programs",
  },
  {
    icon: Zap,
    title: "Боевые искусства",
    description: "Тренировки по различным единоборствам для развития силы, выносливости и самодисциплины",
    features: ["Бокс", "Кикбоксинг", "Карате", "Самооборона"],
    image: "/martial-arts-training.jpg",
    slug: "martial-arts",
  },
  {
    icon: Baby,
    title: "Детский клуб",
    description: "Специальные программы для детей разных возрастов с профессиональными инструкторами",
    features: ["Плавание", "Гимнастика", "Игровые программы", "Развивающие занятия"],
    image: "/kids-swimming-pool.jpg",
    slug: "kids-club",
  },
  {
    icon: Flower2,
    title: "Йога и пилатес",
    description: "Занятия для развития гибкости, баланса и внутренней гармонии в спокойной атмосфере",
    features: ["Хатха-йога", "Виньяса", "Пилатес", "Медитация"],
    image: "/peaceful-yoga-studio.png",
    slug: "yoga-pilates",
  },
]

export function ZonesSection() {
  return (
    <section id="zones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
              Фитнес-зоны <span className="text-primary">Наутилуса</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Разнообразные зоны для тренировок любого типа и уровня подготовки
            </p>
          </div>

          {/* Zones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zones.map((zone, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={zone.image || "/placeholder.svg"}
                    alt={zone.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <zone.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading">{zone.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-pretty">{zone.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {zone.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/services#${zone.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent group-hover:bg-primary/10 group-hover:border-primary/50 transition-all"
                    >
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
