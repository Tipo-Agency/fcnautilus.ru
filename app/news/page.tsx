import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar } from "lucide-react"

export default function NewsPage() {
  const news = [
    {
      title: "Открытие нового бассейна",
      date: "15 марта 2025",
      image: "/modern-swimming-pool.jpg",
      excerpt:
        "Мы рады сообщить об открытии нового открытого бассейна с подогревом. Теперь вы можете наслаждаться плаванием круглый год!",
    },
    {
      title: "Новые групповые программы",
      date: "10 марта 2025",
      image: "/group-fitness-class.png",
      excerpt: "В расписании появились новые направления: функциональный тренинг, кроссфит и танцевальные программы.",
    },
    {
      title: "Специальное предложение на годовые абонементы",
      date: "5 марта 2025",
      image: "/fitness-gym-interior.jpg",
      excerpt: "Только в марте скидка 20% на все годовые абонементы. Успейте воспользоваться выгодным предложением!",
    },
    {
      title: "Обновление тренажерного зала",
      date: "1 марта 2025",
      image: "/modern-gym-equipment.png",
      excerpt:
        "Мы установили новое современное оборудование от ведущих производителей для более эффективных тренировок.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">Новости</h1>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Следите за последними событиями и обновлениями наших клубов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-slate-700 leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
