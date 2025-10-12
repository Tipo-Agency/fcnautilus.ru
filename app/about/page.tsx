import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Trophy,
  Users,
  Heart,
  Award,
  Target,
  CheckCircle2,
  TrendingUp,
  Building,
  Clock,
} from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Building, value: "3", label: "Клуба в городе" },
    { icon: Users, value: "15 000+", label: "Довольных клиентов" },
    { icon: Clock, value: "12", label: "Лет на рынке" },
    { icon: Trophy, value: "50+", label: "Профессиональных тренеров" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Забота о клиентах",
      desc: "Мы создаем комфортные условия для каждого посетителя и помогаем достигать целей",
    },
    {
      icon: Award,
      title: "Высокое качество",
      desc: "Премиальное оборудование, квалифицированные тренеры и современные помещения",
    },
    {
      icon: Target,
      title: "Индивидуальный подход",
      desc: "Персональные программы тренировок и консультации для каждого клиента",
    },
    {
      icon: TrendingUp,
      title: "Постоянное развитие",
      desc: "Мы следим за трендами фитнес-индустрии и регулярно обновляем оборудование",
    },
  ]

  const achievements = [
    "Лучший фитнес-клуб Хабаровска 2023",
    "Премия 'Выбор года' в категории 'Спорт и фитнес'",
    "Более 10 000 успешных историй трансформации",
    "Партнер международных фитнес-федераций",
    "Сертифицированные тренеры с международными дипломами",
    "Инновационное оборудование последнего поколения",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/fitness-gym-interior.jpg"
          alt="О компании Наутилус"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />

        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="text-white max-w-3xl">
            <Badge className="bg-cyan-600 text-white mb-4 text-sm px-4 py-2">О компании</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">История успеха Наутилус</h1>
            <p className="text-xl text-white/90">
              Мы создаем пространство для здорового образа жизни более 12 лет
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <Card key={idx} className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <p className="text-slate-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Наша история</h2>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                <strong>Наутилус</strong> — это сеть премиальных фитнес-клубов, которая работает в Хабаровске с
                2013 года. Мы начали с небольшого зала и большой мечты — создать пространство, где каждый человек
                сможет заботиться о своем здоровье в комфортных условиях.
              </p>

              <p>
                За 12 лет работы мы выросли до трех современных клубов общей площадью более 16 000 м². Наши клубы
                оснащены новейшим оборудованием от ведущих мировых производителей, включают бассейны олимпийского
                стандарта, термальные комплексы, детские зоны и многое другое.
              </p>

              <p>
                Мы гордимся тем, что помогли более 15 000 клиентам изменить свою жизнь к лучшему. Каждый день наши
                тренеры работают над тем, чтобы сделать ваши тренировки эффективными, безопасными и приятными.
              </p>

              <p>
                <strong>Наша миссия</strong> — делать фитнес доступным и комфортным для всех. Мы верим, что забота
                о здоровье должна приносить радость, а не быть обязанностью.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-cyan-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши достижения</h2>
              <p className="text-xl text-white/90">Признание и награды за 12 лет работы</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle2 className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                  <p className="text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
              Команда профессионалов
            </h2>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  В Наутилусе работает более 50 квалифицированных тренеров с международными сертификатами и опытом
                  работы от 3 до 15 лет. Каждый член нашей команды — это не просто профессионал своего дела, но и
                  человек, искренне увлеченный спортом и здоровым образом жизни.
                </p>

                <p>
                  Мы регулярно проводим обучение персонала, следим за новыми методиками тренировок и внедряем
                  инновационные подходы в работу с клиентами. Наши тренеры помогут вам независимо от вашего уровня
                  подготовки — от новичка до профессионального спортсмена.
                </p>

                <div className="bg-cyan-50 rounded-2xl p-6 mt-8">
                  <p className="font-semibold text-slate-900 mb-2">
                    Наша цель — не просто помочь вам похудеть или накачать мышцы.
                  </p>
                  <p className="text-slate-700">
                    Мы хотим, чтобы спорт стал неотъемлемой частью вашей жизни, источником энергии, здоровья и
                    хорошего настроения.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Станьте частью нашей истории</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые уже изменили свою жизнь с Наутилусом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors inline-block"
            >
              Выбрать абонемент
            </a>
            <a
              href="/clubs"
              className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-full text-lg font-medium transition-colors inline-block"
            >
              Выбрать клуб
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
