import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar } from "lucide-react"

const coaches = [
  {
    name: "Анна Петрова",
    specialization: "Персональный тренер",
    experience: "8 лет",
    photo: "/professional-female-fitness-trainer.png",
    directions: ["Силовые тренировки", "Функциональный тренинг", "Реабилитация"],
    bio: "Мастер спорта по пауэрлифтингу. Специализируется на работе с начинающими и восстановлении после травм.",
    rating: 4.9,
  },
  {
    name: "Дмитрий Волков",
    specialization: "Тренер по плаванию",
    experience: "12 лет",
    photo: "/professional-male-swimming-coach.jpg",
    directions: ["Плавание", "Аквааэробика", "Детское плавание"],
    bio: "Кандидат в мастера спорта по плаванию. Работает с детьми и взрослыми всех уровней подготовки.",
    rating: 5.0,
  },
  {
    name: "Елена Смирнова",
    specialization: "Инструктор групповых программ",
    experience: "6 лет",
    photo: "/professional-female-yoga-instructor.png",
    directions: ["Йога", "Пилатес", "Стретчинг"],
    bio: "Сертифицированный инструктор йоги. Помогает найти баланс между телом и разумом.",
    rating: 4.8,
  },
  {
    name: "Максим Козлов",
    specialization: "Тренер боевых искусств",
    experience: "10 лет",
    photo: "/professional-martial-arts-trainer.jpg",
    directions: ["Бокс", "Кикбоксинг", "Самооборона"],
    bio: "Мастер спорта по боксу. Чемпион региональных соревнований. Тренирует спортсменов разного уровня.",
    rating: 4.9,
  },
  {
    name: "Ольга Иванова",
    specialization: "Детский тренер",
    experience: "7 лет",
    photo: "/professional-female-kids-trainer.jpg",
    directions: ["Детская гимнастика", "Игровые программы", "Развивающие занятия"],
    bio: "Педагог по физической культуре. Специализируется на работе с детьми от 3 до 16 лет.",
    rating: 5.0,
  },
  {
    name: "Сергей Морозов",
    specialization: "Фитнес-консультант",
    experience: "9 лет",
    photo: "/professional-male-fitness-consultant.jpg",
    directions: ["Консультации", "Программы питания", "Реабилитация"],
    bio: "Специалист по спортивной медицине. Составляет индивидуальные программы тренировок и питания.",
    rating: 4.7,
  },
]

export function CoachesSection() {
  return (
    <section id="coaches" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
              Наши <span className="text-primary">тренеры</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Профессиональные инструкторы с многолетним опытом помогут вам достичь ваших целей
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={coach.photo || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-lg">{coach.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{coach.rating}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{coach.specialization}</p>
                  <p className="text-muted-foreground text-sm mb-4">Опыт: {coach.experience}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {coach.directions.map((direction, dirIndex) => (
                      <Badge key={dirIndex} variant="secondary" className="text-xs">
                        {direction}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{coach.bio}</p>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
