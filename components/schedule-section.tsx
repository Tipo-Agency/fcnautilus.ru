"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, MapPin, Smartphone } from "lucide-react"
import Link from "next/link"
import { BookingModal } from "@/components/booking-modal"

// Преобразуем данные расписания в формат по дням недели
const scheduleRows = [
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

// Преобразуем в формат по дням недели
const scheduleData = {
  monday: scheduleRows
    .filter((row) => row.monday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.monday,
      level: "Все уровни",
      day: "monday",
    })),
  tuesday: scheduleRows
    .filter((row) => row.tuesday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.tuesday,
      level: "Все уровни",
      day: "tuesday",
    })),
  wednesday: scheduleRows
    .filter((row) => row.wednesday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.wednesday,
      level: "Все уровни",
      day: "wednesday",
    })),
  thursday: scheduleRows
    .filter((row) => row.thursday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.thursday,
      level: "Все уровни",
      day: "thursday",
    })),
  friday: scheduleRows
    .filter((row) => row.friday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.friday,
      level: "Все уровни",
      day: "friday",
    })),
  saturday: scheduleRows
    .filter((row) => row.saturday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.saturday,
      level: "Все уровни",
      day: "saturday",
    })),
  sunday: scheduleRows
    .filter((row) => row.sunday !== "-")
    .map((row) => ({
      time: row.time,
      activity: row.sunday,
      level: "Все уровни",
      day: "sunday",
    })),
}

const appFeatures = [
  {
    icon: Clock,
    title: "Актуальное расписание",
    description: "Всегда свежая информация о занятиях и изменениях",
  },
  {
    icon: Users,
    title: "Быстрая запись",
    description: "Записывайтесь на занятия в один клик",
  },
  {
    icon: MapPin,
    title: "Напоминания",
    description: "Уведомления о предстоящих тренировках",
  },
]

export function ScheduleSection() {
  const [selectedActivity, setSelectedActivity] = useState<typeof scheduleData.monday[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBook = (activity: typeof scheduleData.monday[0]) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
  }

  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-balance">
              Расписание <span className="text-primary">занятий</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Выберите день и направление, запишитесь в один клик через мобильное приложение
            </p>
          </div>

          {/* Schedule Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="monday" className="w-full" orientation="horizontal">
              <TabsList 
                className="flex w-full md:grid md:grid-cols-7 mb-8 gap-1"
                role="tablist"
                aria-label="Выбор дня недели для просмотра расписания"
              >
                <TabsTrigger 
                  value="monday" 
                  id="tab-monday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Понедельник"
                  aria-controls="tabpanel-monday"
                >
                  Пн
                </TabsTrigger>
                <TabsTrigger 
                  value="tuesday" 
                  id="tab-tuesday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Вторник"
                  aria-controls="tabpanel-tuesday"
                >
                  Вт
                </TabsTrigger>
                <TabsTrigger 
                  value="wednesday" 
                  id="tab-wednesday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Среда"
                  aria-controls="tabpanel-wednesday"
                >
                  Ср
                </TabsTrigger>
                <TabsTrigger 
                  value="thursday" 
                  id="tab-thursday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Четверг"
                  aria-controls="tabpanel-thursday"
                >
                  Чт
                </TabsTrigger>
                <TabsTrigger 
                  value="friday" 
                  id="tab-friday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Пятница"
                  aria-controls="tabpanel-friday"
                >
                  Пт
                </TabsTrigger>
                <TabsTrigger 
                  value="saturday" 
                  id="tab-saturday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Суббота"
                  aria-controls="tabpanel-saturday"
                >
                  Сб
                </TabsTrigger>
                <TabsTrigger 
                  value="sunday" 
                  id="tab-sunday"
                  className="flex-1 md:flex-none text-xs md:text-sm px-2 md:px-2"
                  aria-label="Воскресенье"
                  aria-controls="tabpanel-sunday"
                >
                  Вс
                </TabsTrigger>
              </TabsList>

              {Object.entries(scheduleData).map(([day, activities]) => {
                const dayNames: Record<string, string> = {
                  monday: "Понедельник",
                  tuesday: "Вторник",
                  wednesday: "Среда",
                  thursday: "Четверг",
                  friday: "Пятница",
                  saturday: "Суббота",
                  sunday: "Воскресенье",
                }
                return (
                  <TabsContent 
                    key={day} 
                    value={day}
                    role="tabpanel"
                    aria-labelledby={`tab-${day}`}
                    id={`tabpanel-${day}`}
                    tabIndex={-1}
                  >
                    {activities.length > 0 ? (
                      <div className="grid gap-4" role="list">
                        {activities.map((activity, index) => (
                          <Card 
                            key={index} 
                            className="hover:shadow-md transition-shadow"
                            role="listitem"
                          >
                            <CardContent className="p-4">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="text-xl font-bold text-primary min-w-[120px]" aria-label={`Время: ${activity.time}`}>
                                    {activity.time}
                                  </div>
                                  <div>
                                    <h3 className="font-heading font-semibold text-lg">{activity.activity}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                      <Badge variant="secondary" className="text-xs" aria-label={`Уровень: ${activity.level}`}>
                                        {activity.level}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  className="md:min-w-[120px]"
                                  onClick={() => handleBook(activity)}
                                  aria-label={`Записаться на ${activity.activity} в ${activity.time}`}
                                >
                                  Записаться
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <Card>
                        <CardContent className="p-8 text-center text-muted-foreground" role="status" aria-live="polite">
                          В этот день занятий нет
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-8">
            <Link href="/schedule">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-cyan-700 hover:bg-cyan-800 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-200"
              >
                Посмотреть полное расписание
              </Button>
            </Link>
          </div>

          {/* Mobile App CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl mb-2">Скачайте мобильное приложение</CardTitle>
              <p className="text-muted-foreground">Управляйте тренировками прямо с телефона</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="bg-black text-white hover:bg-gray-900 font-medium"
                  onClick={() => window.open("https://apps.apple.com/ru/app/наутилус-фитнес/id6504984719", "_blank")}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-green-700 text-white hover:bg-green-800 font-medium"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=fit.nautilus.app&hl=ru", "_blank")}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Модальное окно для записи */}
      {selectedActivity && (
        <BookingModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          activity={selectedActivity}
        />
      )}
    </section>
  )
}
