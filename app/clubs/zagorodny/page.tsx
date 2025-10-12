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
  Users,
  Heart,
  UtensilsCrossed,
  Wifi,
  Trees,
  Coffee,
  CheckCircle2,
  Star,
  Sun,
} from "lucide-react"

export default function ZagorodnyClubPage() {
  const features = [
    { icon: Dumbbell, title: "Тренажёрный зал", desc: "1500 м² с панорамными окнами" },
    { icon: Trees, title: "Вид на природу", desc: "Тренировки с видом на лес" },
    { icon: Heart, title: "Кардио-зона", desc: "Современное оборудование Technogym" },
    { icon: Users, title: "Групповые программы", desc: "Просторные залы для занятий" },
    { icon: Sun, title: "Много света", desc: "Панорамные окна в пол" },
    { icon: UtensilsCrossed, title: "Фитнес-кафе", desc: "Меню здорового питания" },
    { icon: Wifi, title: "WiFi", desc: "Высокоскоростной интернет" },
    { icon: Car, title: "Парковка", desc: "100 мест, бесплатно" },
  ]

  const trainers = [
    { name: "Сергей Морозов", role: "Персональный тренер", exp: "12 лет", image: "/boxing-trainer-male.jpg" },
    {
      name: "Мария Петрова",
      role: "Инструктор групповых программ",
      exp: "6 лет",
      image: "/female-yoga-instructor.png",
    },
    {
      name: "Елена Волкова",
      role: "Фитнес-инструктор",
      exp: "5 лет",
      image: "/dance-instructor-female.jpg",
    },
  ]

  const schedule = [
    { day: "Понедельник - Пятница", time: "07:00 - 23:00" },
    { day: "Суббота - Воскресенье", time: "09:00 - 21:00" },
    { day: "Групповые занятия", time: "По расписанию" },
  ]

  const advantages = [
    "Панорамные окна с видом на природу",
    "Тихое и спокойное место вдали от центра",
    "Новейшее оборудование 2024 года",
    "Просторные залы без толпы",
    "Бесплатная парковка на 100 мест",
    "Уютное кафе с террасой",
    "Профессиональные тренеры",
    "Кондиционирование и вентиляция",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image src="/modern-gym-equipment.png" alt="Наутилус Загородный" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/60 to-transparent" />

        <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
          <div className="text-white">
            <Badge className="bg-emerald-600 text-white mb-4 text-sm px-4 py-2">Фитнес на природе</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Наутилус Загородный</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl">
              Современный фитнес-клуб с панорамными окнами и видом на природу
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8">
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
              <div className="bg-emerald-100 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Адрес</p>
                <p className="font-semibold text-slate-900">Загородное шоссе, 15</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Телефон</p>
                <a href="tel:+74212000002" className="font-semibold text-slate-900 hover:text-emerald-600">
                  +7 (4212) 00-00-02
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Режим работы</p>
                <p className="font-semibold text-slate-900">Пн-Вс: 07:00 - 23:00</p>
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
              5 500 м² современного пространства с видом на природу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-emerald-600" />
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/modern-gym-equipment.png",
              "/group-fitness-class.png",
              "/peaceful-yoga-studio.png",
              "/fitness-gym-interior.jpg",
              "/martial-arts-training.jpg",
              "/modern-swimming-pool.jpg",
            ].map((image, idx) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
              Профессионалы с опытом и любовью к своему делу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  <p className="text-emerald-600 font-medium mb-2">{trainer.role}</p>
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
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-xl text-white/90">Преимущества клуба Наутилус Загородный</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
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
                    <div
                      key={idx}
                      className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0"
                    >
                      <div className="flex items-center gap-4">
                        <Clock className="w-6 h-6 text-emerald-600" />
                        <span className="text-lg font-semibold text-slate-900">{item.day}</span>
                      </div>
                      <span className="text-lg text-emerald-600 font-bold">{item.time}</span>
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
            Приходите на бесплатную экскурсию. Оцените атмосферу и панорамные виды!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-6 text-lg"
            >
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
            <a href="tel:+74212000002" className="flex items-center gap-3 text-white/80 hover:text-white">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+7 (4212) 00-00-02</span>
            </a>
            <a
              href="mailto:zagorodny@nautilus-fitness.ru"
              className="flex items-center gap-3 text-white/80 hover:text-white"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">zagorodny@nautilus-fitness.ru</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

