import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PurchaseModal } from "@/components/purchase-modal"

export default function SchedulePage() {
  const schedule = [
    {
      time: "07:00 - 08:00",
      monday: "Йога",
      tuesday: "Пилатес",
      wednesday: "Йога",
      thursday: "Стретчинг",
      friday: "Йога",
      saturday: "Пилатес",
      sunday: "-",
    },
    {
      time: "08:00 - 09:00",
      monday: "Аквааэробика",
      tuesday: "Плавание",
      wednesday: "Аквааэробика",
      thursday: "Плавание",
      friday: "Аквааэробика",
      saturday: "Плавание",
      sunday: "-",
    },
    {
      time: "09:00 - 10:00",
      monday: "Функциональный тренинг",
      tuesday: "Силовая",
      wednesday: "Функциональный тренинг",
      thursday: "Силовая",
      friday: "Функциональный тренинг",
      saturday: "Групповая",
      sunday: "Йога",
    },
    {
      time: "10:00 - 11:00",
      monday: "Зумба",
      tuesday: "Степ-аэробика",
      wednesday: "Зумба",
      thursday: "Степ-аэробика",
      friday: "Зумба",
      saturday: "Танцы",
      sunday: "Пилатес",
    },
    {
      time: "18:00 - 19:00",
      monday: "Бокс",
      tuesday: "Кроссфит",
      wednesday: "Бокс",
      thursday: "Кроссфит",
      friday: "Бокс",
      saturday: "Функциональный",
      sunday: "-",
    },
    {
      time: "19:00 - 20:00",
      monday: "Йога",
      tuesday: "Пилатес",
      wednesday: "Йога",
      thursday: "Стретчинг",
      friday: "Йога",
      saturday: "Пилатес",
      sunday: "-",
    },
    {
      time: "20:00 - 21:00",
      monday: "Плавание",
      tuesday: "Аквааэробика",
      wednesday: "Плавание",
      thursday: "Аквааэробика",
      friday: "Плавание",
      saturday: "-",
      sunday: "-",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">Расписание занятий</h1>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Групповые тренировки с профессиональными инструкторами
          </p>

          <Tabs defaultValue="yuzhny" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="yuzhny">Наутилус Южный</TabsTrigger>
              <TabsTrigger value="zagorodny">Наутилус Загородный</TabsTrigger>
              <TabsTrigger value="pool">Открытый бассейн</TabsTrigger>
            </TabsList>

            <TabsContent value="yuzhny">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-cyan-600 text-white">
                      <tr>
                        <th className="px-4 py-4 text-left font-medium">Время</th>
                        <th className="px-4 py-4 text-left font-medium">Пн</th>
                        <th className="px-4 py-4 text-left font-medium">Вт</th>
                        <th className="px-4 py-4 text-left font-medium">Ср</th>
                        <th className="px-4 py-4 text-left font-medium">Чт</th>
                        <th className="px-4 py-4 text-left font-medium">Пт</th>
                        <th className="px-4 py-4 text-left font-medium">Сб</th>
                        <th className="px-4 py-4 text-left font-medium">Вс</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="px-4 py-4 font-medium text-slate-900">{row.time}</td>
                          <td className="px-4 py-4 text-slate-700">{row.monday}</td>
                          <td className="px-4 py-4 text-slate-700">{row.tuesday}</td>
                          <td className="px-4 py-4 text-slate-700">{row.wednesday}</td>
                          <td className="px-4 py-4 text-slate-700">{row.thursday}</td>
                          <td className="px-4 py-4 text-slate-700">{row.friday}</td>
                          <td className="px-4 py-4 text-slate-700">{row.saturday}</td>
                          <td className="px-4 py-4 text-slate-700">{row.sunday}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="zagorodny">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-slate-600">Расписание для клуба Наутилус Загородный</p>
              </div>
            </TabsContent>

            <TabsContent value="pool">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-slate-600">Расписание для Открытого бассейна</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12 px-4">
            <PurchaseModal>
              <Button className="w-full sm:w-auto bg-cyan-700 hover:bg-cyan-800 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200">
                Записаться на занятие
              </Button>
            </PurchaseModal>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
