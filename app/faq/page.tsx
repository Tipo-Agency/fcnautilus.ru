import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Какие документы нужны для оформления абонемента?",
      answer:
        "Для оформления абонемента вам понадобится паспорт или другой документ, удостоверяющий личность. Для детей до 14 лет — свидетельство о рождении.",
    },
    {
      question: "Можно ли заморозить абонемент?",
      answer:
        "Да, вы можете заморозить абонемент на срок от 7 до 30 дней. Заморозка доступна при наличии медицинской справки или по другим уважительным причинам. Подробности уточняйте у администратора.",
    },
    {
      question: "Есть ли пробное занятие?",
      answer:
        "Да, мы предлагаем бесплатное пробное посещение для новых клиентов. Вы сможете оценить качество наших услуг, познакомиться с тренерами и оборудованием.",
    },
    {
      question: "Какой график работы клуба?",
      answer:
        "Наши клубы работают ежедневно с 07:00 до 23:00. Бассейн открыт с 07:00 до 22:00. Расписание групповых занятий доступно на сайте.",
    },
    {
      question: "Можно ли привести гостя?",
      answer:
        "Да, владельцы безлимитных абонементов могут приводить гостей. Количество гостевых визитов зависит от типа вашего абонемента. Уточняйте детали у администратора.",
    },
    {
      question: "Есть ли парковка?",
      answer:
        "Да, все наши клубы оборудованы бесплатной парковкой для клиентов. Парковочные места расположены на прилегающей территории.",
    },
    {
      question: "Предоставляются ли полотенца?",
      answer:
        "Да, полотенца предоставляются бесплатно для посетителей бассейна и термального комплекса. Для занятий в тренажерном зале можно взять полотенце на ресепшн под залог.",
    },
    {
      question: "Можно ли вернуть абонемент?",
      answer:
        "Возврат абонемента возможен в течение 14 дней с момента покупки при наличии уважительной причины согласно законодательству о защите прав потребителей.",
    },
    {
      question: "Есть ли детские группы?",
      answer:
        "Да, у нас работает детский клуб с различными программами для детей от 3 до 16 лет: плавание, детский фитнес, игровые занятия. Все занятия проводятся под руководством профессиональных детских тренеров.",
    },
    {
      question: "Нужна ли справка от врача?",
      answer:
        "Справка от врача необязательна для посещения тренажерного зала, но рекомендуется. Для посещения бассейна медицинская справка обязательна согласно санитарным нормам.",
    },
    {
      question: "Есть ли персональные тренировки?",
      answer:
        "Да, в наших клубах работают опытные персональные тренеры по различным направлениям. Первая консультация — бесплатная. Стоимость персональных тренировок уточняйте у администратора.",
    },
    {
      question: "Можно ли купить абонемент в подарок?",
      answer:
        "Да, вы можете приобрести подарочный сертификат на любой абонемент или услугу. Сертификат оформляется на ресепшн или онлайн на нашем сайте.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Часто задаваемые вопросы
          </h1>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы наших клиентов
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 shadow-md border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-cyan-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Не нашли ответ на свой вопрос?</h3>
            <p className="text-slate-700 mb-6">
              Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74212456789"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Позвонить
              </a>
              <a
                href="/contacts"
                className="bg-white hover:bg-slate-50 text-cyan-600 px-8 py-3 rounded-full font-medium border-2 border-cyan-600 transition-colors"
              >
                Написать нам
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

