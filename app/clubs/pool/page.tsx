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
  Waves,
  Baby,
  Sun,
  Umbrella,
  Coffee,
  CheckCircle2,
  Star,
  Thermometer,
  Users,
} from "lucide-react"

export default function PoolClubPage() {
  const features = [
    { icon: Waves, title: "Олимпийский бассейн", desc: "50м × 25м, 8 дорожек" },
    { icon: Thermometer, title: "Подогрев воды", desc: "Комфортная температура 27-29°C" },
    { icon: Baby, title: "Детская зона", desc: "Безопасный бассейн для детей" },
    { icon: Sun, title: "Под открытым небом", desc: "Наслаждайтесь солнцем" },
    { icon: Umbrella, title: "Зона отдыха", desc: "Шезлонги и зонтики" },
    { icon: Coffee, title: "Бар у бассейна", desc: "Прохладительные напитки" },
    { icon: Users, title: "Раздевалки", desc: "Современные душевые" },
    { icon: Car, title: "Парковка", desc: "60 мест" },
  ]

  const trainers = [
    {
      name: "Дмитрий Соколов",
      role: "Тренер по плаванию",
      exp: "10 лет",
      image: "/swimming-coach-male.jpg",
    },
    {
      name: "Анна Смирнова",
      role: "Детский тренер",
      exp: "7 лет",
      image: "/kids-trainer-female.jpg",
    },
  ]

  const schedule = [
    { day: "Май - Сентябрь", time: "08:00 - 22:00" },
    { day: "Детские секции", time: "10:00 - 18:00" },
    { day: "Аквааэробика", time: "По расписанию" },
    { day: "Октябрь - Апрель", time: "Закрыто (сезонный)" },
  ]

  const advantages = [
    "Единственный открытый олимпийский бассейн в городе",
    "Подогрев воды в любую погоду",
    "Профессиональные тренеры по плаванию",
    "Детские группы от 3 лет",
    "Занятия аквааэробикой",
    "Шезлонги и зонтики включены в абонемент",
    "Бар с полезными напитками и снеками",
    "Бесплатная парковка",
  ]

  const pricing = [
    { name: "Разовое посещение", price: "500", period: "1 день" },
    { name: "Абонемент на месяц", price: "3 500", period: "30 дней" },
    { name: "Сезонный абонемент", price: "12 000", period: "май-сентябрь" },
    { name: "Детский абонемент", price: "2 500", period: "30 дней" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/modern-swimming-pool-with-clear-blue-water-and-fit.jpg"
          alt="Открытый бассейн"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent" />

        <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
          <div className="text-white">
            <Badge className="bg-blue-600 text-white mb-4 text-sm px-4 py-2">Летний сезон</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Открытый бассейн</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl">
              Олимпийский бассейн 50 метров под открытым небом с подогревом воды
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                Купить абонемент
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8"
              >
                Записаться на занятие
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
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Адрес</p>
                <p className="font-semibold text-slate-900">ул. Тихоокеанская, 88</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Телефон</p>
                <a href="tel:+74212000003" className="font-semibold text-slate-900 hover:text-blue-600">
                  +7 (4212) 00-00-03
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Сезон</p>
                <p className="font-semibold text-slate-900">Май - Сентябрь</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Возможности комплекса</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              3 000 м² открытого пространства для плавания и отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-blue-600" />
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
              "/modern-swimming-pool-with-clear-blue-water-and-fit.jpg",
              "/modern-swimming-pool-interior.jpg",
              "/modern-swimming-pool.jpg",
              "/kids-swimming-pool.jpg",
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Тарифы</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Выгодные цены на посещение открытого бассейна</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-slate-600">₽</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{plan.period}</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">Купить</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Наши тренеры</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Профессиональные тренеры по плаванию с опытом работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainers.map((trainer, idx) => (
              <Card key={idx} className="border-none shadow-lg overflow-hidden group">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{trainer.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{trainer.role}</p>
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-xl text-white/90">Преимущества открытого бассейна Наутилус</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
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
                        <Clock className="w-6 h-6 text-blue-600" />
                        <span className="text-lg font-semibold text-slate-900">{item.day}</span>
                      </div>
                      <span className="text-lg text-blue-600 font-bold">{item.time}</span>
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
            Приходите и наслаждайтесь плаванием под открытым небом в любую погоду!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 text-lg">
              Купить абонемент
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-10 py-6 text-lg"
            >
              Записаться на занятие
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="tel:+74212000003" className="flex items-center gap-3 text-white/80 hover:text-white">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+7 (4212) 00-00-03</span>
            </a>
            <a href="mailto:pool@nautilus-fitness.ru" className="flex items-center gap-3 text-white/80 hover:text-white">
              <Mail className="w-5 h-5" />
              <span className="text-lg">pool@nautilus-fitness.ru</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

