import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Dumbbell,
  Waves,
  Users,
  Heart,
  Baby,
  UtensilsCrossed,
  Wifi,
  Lock,
  Coffee,
  CheckCircle2,
  Star,
} from "lucide-react"

export default function YuzhnyClubPage() {
  const features = [
    { icon: Dumbbell, title: "Тренажёрный зал", desc: "2000 м² современного оборудования" },
    { icon: Waves, title: "Бассейн 25м", desc: "4 дорожки, подогрев воды" },
    { icon: Heart, title: "Термальный комплекс", desc: "Сауна, хаммам, соляная комната" },
    { icon: Baby, title: "Детский клуб", desc: "Программы для детей 3-16 лет" },
    { icon: Users, title: "Групповые программы", desc: "Более 50 занятий в неделю" },
    { icon: UtensilsCrossed, title: "Фитнес-бар", desc: "Здоровое питание и напитки" },
    { icon: Wifi, title: "WiFi", desc: "Бесплатный высокоскоростной интернет" },
    { icon: Car, title: "Парковка", desc: "150 мест, бесплатно для клиентов" },
  ]

  const trainers = [
    { name: "Алексей Иванов", role: "Персональный тренер", exp: "8 лет", image: "/male-fitness-trainer.png" },
    { name: "Мария Петрова", role: "Инструктор йоги", exp: "6 лет", image: "/female-yoga-instructor.png" },
    {
      name: "Дмитрий Соколов",
      role: "Тренер по плаванию",
      exp: "10 лет",
      image: "/swimming-coach-male.jpg",
    },
    { name: "Елена Волкова", role: "Фитнес-инструктор", exp: "5 лет", image: "/dance-instructor-female.jpg" },
  ]

  const schedule = [
    { day: "Понедельник - Пятница", time: "06:00 - 24:00" },
    { day: "Суббота - Воскресенье", time: "08:00 - 22:00" },
    { day: "Бассейн", time: "07:00 - 22:00 ежедневно" },
    { day: "Детский клуб", time: "09:00 - 20:00 ежедневно" },
  ]

  const advantages = [
    "Премиум-оборудование Technogym",
    "Профессиональные тренеры с международными сертификатами",
    "Индивидуальная программа тренировок",
    "Бесплатная консультация диетолога",
    "Современные раздевалки с душевыми",
    "Безлимитные полотенца",
    "Сейфы в раздевалках",
    "Кафе с правильным питанием",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/fitness-gym-interior.jpg"
          alt="Наутилус Южный"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
          <div className="text-white">
            <Badge className="bg-cyan-600 text-white mb-4 text-sm px-4 py-2">Флагманский клуб</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Наутилус Южный</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl">
              Премиальный фитнес-клуб с бассейном, термальным комплексом и детским клубом
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8">
                Купить абонемент
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8"
              >
                Записаться на тренировку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Адрес</p>
                <p className="font-semibold text-slate-900">ул. Суворова, 25а</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Phone className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Телефон</p>
                <a href="tel:+74212000001" className="font-semibold text-slate-900 hover:text-cyan-600">
                  +7 (4212) 00-00-01
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Clock className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Режим работы</p>
                <p className="font-semibold text-slate-900">Пн-Вс: 06:00 - 24:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Возможности клуба</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              8 000 м² современного пространства для вашего здоровья и комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-cyan-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/fitness-gym-interior.jpg",
              "/modern-swimming-pool-interior.jpg",
              "/modern-gym-equipment.png",
              "/group-fitness-class.png",
              "/peaceful-yoga-studio.png",
              "/kids-swimming-pool.jpg",
              "/modern-swimming-pool.jpg",
              "/martial-arts-training.jpg",
            ].map((image, idx) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                <Image src={image} alt={`Gallery ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Наши тренеры</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом и международными сертификатами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, idx) => (
              <Card key={idx} className="border-none shadow-lg overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{trainer.name}</h3>
                  <p className="text-cyan-600 font-medium mb-2">{trainer.role}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>Опыт: {trainer.exp}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-xl text-white/90">Преимущества клуба Наутилус Южный</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                  <p className="text-lg">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">Режим работы</h2>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0">
                      <div className="flex items-center gap-4">
                        <Clock className="w-6 h-6 text-cyan-600" />
                        <span className="text-lg font-semibold text-slate-900">{item.day}</span>
                      </div>
                      <span className="text-lg text-cyan-600 font-bold">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Приходите на бесплатную экскурсию и первую тренировку. Убедитесь сами в качестве нашего сервиса!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-10 py-6 text-lg">
              Купить абонемент
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-10 py-6 text-lg"
            >
              Записаться на экскурсию
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="tel:+74212000001" className="flex items-center gap-3 text-white/80 hover:text-white">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+7 (4212) 00-00-01</span>
            </a>
            <a href="mailto:yuzhny@nautilus-fitness.ru" className="flex items-center gap-3 text-white/80 hover:text-white">
              <Mail className="w-5 h-5" />
              <span className="text-lg">yuzhny@nautilus-fitness.ru</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

