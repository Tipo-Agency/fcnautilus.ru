import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Briefcase } from "lucide-react"

export default function CareersPage() {
  const vacancies = [
    {
      title: "Персональный тренер",
      location: "Наутилус Южный",
      type: "Полная занятость",
      schedule: "Гибкий график",
      description:
        "Ищем опытного персонального тренера для работы с клиентами. Требуется опыт работы от 2 лет, сертификаты.",
    },
    {
      title: "Инструктор групповых программ",
      location: "Наутилус Загородный",
      type: "Частичная занятость",
      schedule: "Вечерние часы",
      description: "Требуется инструктор для проведения групповых занятий по йоге, пилатесу и стретчингу.",
    },
    {
      title: "Тренер по плаванию",
      location: "Открытый бассейн",
      type: "Полная занятость",
      schedule: "Сменный график",
      description: "Ищем тренера по плаванию для работы с детьми и взрослыми. Опыт работы обязателен.",
    },
    {
      title: "Администратор",
      location: "Наутилус Южный",
      type: "Полная занятость",
      schedule: "2/2",
      description: "Требуется администратор на ресепшн. Опыт работы в фитнес-индустрии приветствуется.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">Вакансии</h1>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Присоединяйтесь к команде профессионалов. Мы всегда рады талантливым специалистам!
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{vacancy.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-600" />
                        <span>{vacancy.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-cyan-600" />
                        <span>{vacancy.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        <span>{vacancy.schedule}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 whitespace-nowrap">
                    Откликнуться
                  </Button>
                </div>
                <p className="text-slate-700 leading-relaxed">{vacancy.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-cyan-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Не нашли подходящую вакансию?</h3>
            <p className="text-slate-700 mb-6">
              Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
            </p>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
              Отправить резюме
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
