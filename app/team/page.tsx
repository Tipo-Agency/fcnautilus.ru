import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function TeamPage() {
  const trainers = [
    {
      name: "Алексей Иванов",
      role: "Персональный тренер",
      specialization: "Силовые тренировки, функциональный тренинг",
      experience: "8 лет опыта",
      image: "/male-fitness-trainer.png",
    },
    {
      name: "Мария Петрова",
      role: "Инструктор групповых программ",
      specialization: "Йога, пилатес, стретчинг",
      experience: "6 лет опыта",
      image: "/female-yoga-instructor.png",
    },
    {
      name: "Дмитрий Соколов",
      role: "Тренер по плаванию",
      specialization: "Обучение плаванию, аквааэробика",
      experience: "10 лет опыта",
      image: "/swimming-coach-male.jpg",
    },
    {
      name: "Елена Волкова",
      role: "Фитнес-инструктор",
      specialization: "Зумба, степ-аэробика, танцы",
      experience: "5 лет опыта",
      image: "/dance-instructor-female.jpg",
    },
    {
      name: "Сергей Морозов",
      role: "Тренер по боксу",
      specialization: "Бокс, кикбоксинг, функциональный тренинг",
      experience: "12 лет опыта",
      image: "/boxing-trainer-male.jpg",
    },
    {
      name: "Анна Смирнова",
      role: "Детский тренер",
      specialization: "Детское плавание, игровые программы",
      experience: "7 лет опыта",
      image: "/kids-trainer-female.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">Наша команда</h1>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Профессиональные тренеры с многолетним опытом помогут вам достичь ваших целей
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{trainer.name}</h3>
                  <p className="text-cyan-600 font-medium mb-3">{trainer.role}</p>
                  <p className="text-slate-700 mb-2">{trainer.specialization}</p>
                  <p className="text-sm text-slate-500">{trainer.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
