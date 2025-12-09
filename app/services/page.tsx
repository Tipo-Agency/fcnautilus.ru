import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dumbbell,
  Waves,
  Users,
  Heart,
  Sparkles,
  Baby,
  Check,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PurchaseModal } from "@/components/purchase-modal"

const services = [
  {
    id: "gym",
    icon: Dumbbell,
    title: "Тренажёрный зал",
    description: "Современное оборудование от ведущих мировых производителей",
    fullDescription:
      "Наш тренажёрный зал оснащён оборудованием премиум-класса от таких производителей, как Technogym, Life Fitness и Hammer Strength. Пространство разделено на функциональные зоны для максимального комфорта тренировок.",
    features: [
      "Кардио-зона с беговыми дорожками, эллиптическими тренажерами и велотренажерами",
      "Силовые тренажеры для всех групп мышц",
      "Зона свободных весов с гантелями, штангами и блинами",
      "Функциональная зона с TRX, канатами и другим оборудованием",
      "Профессиональные тренеры для консультаций",
      "Индивидуальные программы тренировок",
    ],
    benefits: ["Доступ в любое время работы клуба", "Персональные консультации", "Групповые занятия"],
    image: "/modern-gym-equipment.png",
  },
  {
    id: "pool",
    icon: Waves,
    title: "Бассейн",
    description: "Олимпийские бассейны 25м и 50м с системой очистки воды",
    fullDescription:
      "Наши бассейны соответствуют олимпийским стандартам и оснащены современной системой очистки воды. Идеально подходят как для профессиональных пловцов, так и для любителей плавания.",
    features: [
      "Бассейн 25 метров с 6 дорожками",
      "Открытый бассейн 50 метров (сезонный)",
      "Система очистки воды последнего поколения",
      "Температура воды 27-28°C",
      "Детская зона с мелким бассейном",
      "Профессиональные инструкторы по плаванию",
    ],
    benefits: ["Групповые занятия по плаванию", "Персональные тренировки", "Аквааэробика"],
    image: "/modern-swimming-pool-interior.jpg",
  },
  {
    id: "group-programs",
    icon: Users,
    title: "Групповые программы",
    description: "Более 50 направлений: йога, пилатес, функциональный тренинг",
    fullDescription:
      "Широкий выбор групповых занятий для всех уровней подготовки. От спокойных восстановительных практик до интенсивных кардио-тренировок.",
    features: [
      "Более 50 различных направлений",
      "Йога (Хатха, Виньяса, Аштанга)",
      "Пилатес и стретчинг",
      "Функциональный тренинг",
      "Танцевальные программы (Zumba, Latin Dance)",
      "Силовые классы (Body Pump, CrossFit)",
      "Кардио-программы (HIIT, Tabata)",
    ],
    benefits: ["Расписание на каждый день", "Занятия для всех уровней", "Опытные инструкторы"],
    image: "/group-fitness-class.png",
  },
  {
    id: "personal-training",
    icon: Heart,
    title: "Персональные тренировки",
    description: "Индивидуальный подход с сертифицированными тренерами",
    fullDescription:
      "Персональные тренировки с опытными тренерами помогут вам достичь поставленных целей максимально эффективно и безопасно.",
    features: [
      "Индивидуальная программа тренировок",
      "Анализ физической формы и постановка целей",
      "Корректировка техники выполнения упражнений",
      "Мотивация и поддержка на каждом этапе",
      "Питание и восстановление",
      "Тренеры с международными сертификатами",
    ],
    benefits: ["Гибкий график", "Индивидуальный подход", "Быстрые результаты"],
    image: "/professional-male-fitness-trainer.png",
  },
  {
    id: "spa",
    icon: Sparkles,
    title: "SPA & Термальный комплекс",
    description: "Сауны, хаммам, джакузи для полного восстановления",
    fullDescription:
      "Термальный комплекс создан для полного восстановления после тренировок. Расслабьтесь в сауне, хаммаме или джакузи после активных занятий.",
    features: [
      "Финская сауна с температурой до 90°C",
      "Турецкий хаммам с мраморными лежаками",
      "Джакузи с гидромассажем",
      "Зона релаксации с удобными креслами",
      "Контрастные души",
      "Массажные кабинеты",
    ],
    benefits: ["Восстановление после тренировок", "Снятие стресса", "Улучшение кровообращения"],
    image: "/modern-swimming-pool.jpg",
  },
  {
    id: "kids-club",
    icon: Baby,
    title: "Детский клуб",
    description: "Безопасное пространство для детей с профессиональными педагогами",
    fullDescription:
      "Детский клуб Наутилус — это безопасное и развивающее пространство для детей от 3 до 14 лет. Профессиональные педагоги помогут вашему ребёнку полюбить спорт.",
    features: [
      "Детский бассейн с тёплой водой",
      "Групповые занятия по плаванию",
      "Гимнастика и акробатика",
      "Игровые программы и эстафеты",
      "Развивающие занятия",
      "Безопасная среда с профессиональным присмотром",
    ],
    benefits: ["Развитие физических навыков", "Социализация", "Здоровый образ жизни с детства"],
    image: "/kids-swimming-pool.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="bg-cyan-600 text-white mb-4 text-sm px-4 py-2">Наши услуги</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
              Всё для вашего здоровья
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Комплексный подход к фитнесу и wellness. Выберите услугу, которая подходит именно вам
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-24 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <section key={service.id} id={service.id} className="scroll-mt-24">
                  <Card className="border-2 border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-full min-h-[300px]">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-6 left-6">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                            <Icon className="w-8 h-8 text-cyan-600" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.fullDescription}</p>

                        <div className="space-y-4 mb-6">
                          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                            <Award className="w-5 h-5 text-cyan-600" />
                            Что включено:
                          </h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-700">
                                <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-cyan-50 text-cyan-700">
                              {benefit}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                          <PurchaseModal>
                            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white flex-1">
                              Записаться
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </PurchaseModal>
                          <Link href="/pricing">
                            <Button variant="outline" className="flex-1 border-2 border-slate-200">
                              Посмотреть цены
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </section>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white border-none p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-lg text-white/90 mb-8">
                Выберите подходящий абонемент и начните свой путь к здоровому образу жизни уже сегодня
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PurchaseModal>
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
                    Купить абонемент
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </PurchaseModal>
                <Link href="/clubs">
                  <Button size="lg" variant="outline" className="border-2 border-white text-cyan-600 hover:bg-slate-100">
                    Выбрать клуб
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
