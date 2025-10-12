import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Building2, Users, TrendingUp } from "lucide-react"

export default function B2BPage() {
  const benefits = [
    "Корпоративные абонементы со скидкой до 30%",
    "Гибкие условия оплаты",
    "Персональный менеджер",
    "Отчетность по посещаемости",
    "Организация корпоративных мероприятий",
    "Индивидуальные программы для сотрудников",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Корпоративные программы</h1>
            <p className="text-xl text-slate-600">Забота о здоровье сотрудников — инвестиция в успех вашего бизнеса</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Для компаний</h3>
              <p className="text-slate-600">Специальные условия для корпоративных клиентов</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Здоровая команда</h3>
              <p className="text-slate-600">Повышение продуктивности и лояльности персонала</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Рост эффективности</h3>
              <p className="text-slate-600">Снижение больничных и текучести кадров</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Преимущества корпоративной программы</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span className="text-slate-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-10 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Готовы обсудить сотрудничество?</h3>
            <p className="text-cyan-50 mb-8 text-lg">
              Оставьте заявку, и наш менеджер свяжется с вами для обсуждения условий
            </p>
            <Button className="bg-white text-cyan-600 hover:bg-slate-50 rounded-full px-8 py-6 text-lg font-medium">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
