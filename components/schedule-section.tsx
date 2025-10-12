import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, MapPin, Smartphone } from "lucide-react"

const scheduleData = {
  monday: [
    { time: "07:00", activity: "Плавание", trainer: "Дмитрий Волков", level: "Все уровни", room: "Бассейн" },
    { time: "09:00", activity: "Силовая тренировка", trainer: "Анна Петрова", level: "Начинающие", room: "Зал №1" },
    { time: "11:00", activity: "Аквааэробика", trainer: "Дмитрий Волков", level: "Все уровни", room: "Бассейн" },
    { time: "18:00", activity: "Йога", trainer: "Елена Смирнова", level: "Все уровни", room: "Зал йоги" },
    { time: "19:30", activity: "Бокс", trainer: "Максим Козлов", level: "Продвинутые", room: "Зал единоборств" },
  ],
  tuesday: [
    {
      time: "08:00",
      activity: "Детское плавание",
      trainer: "Ольга Иванова",
      level: "Дети 6-12 лет",
      room: "Детский бассейн",
    },
    { time: "10:00", activity: "Пилатес", trainer: "Елена Смирнова", level: "Все уровни", room: "Зал йоги" },
    { time: "12:00", activity: "Функциональный тренинг", trainer: "Анна Петрова", level: "Средний", room: "Зал №2" },
    { time: "17:00", activity: "Групповая тренировка", trainer: "Сергей Морозов", level: "Все уровни", room: "Зал №1" },
    { time: "19:00", activity: "Кикбоксинг", trainer: "Максим Козлов", level: "Начинающие", room: "Зал единоборств" },
  ],
  wednesday: [
    { time: "07:30", activity: "Плавание", trainer: "Дмитрий Волков", level: "Все уровни", room: "Бассейн" },
    { time: "09:30", activity: "Стретчинг", trainer: "Елена Смирнова", level: "Все уровни", room: "Зал йоги" },
    { time: "11:30", activity: "Силовая тренировка", trainer: "Анна Петрова", level: "Продвинутые", room: "Зал №1" },
    {
      time: "16:00",
      activity: "Детская гимнастика",
      trainer: "Ольга Иванова",
      level: "Дети 3-6 лет",
      room: "Детская зона",
    },
    { time: "18:30", activity: "Аквааэробика", trainer: "Дмитрий Волков", level: "Все уровни", room: "Бассейн" },
  ],
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
            <Tabs defaultValue="monday" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="monday">Понедельник</TabsTrigger>
                <TabsTrigger value="tuesday">Вторник</TabsTrigger>
                <TabsTrigger value="wednesday">Среда</TabsTrigger>
              </TabsList>

              {Object.entries(scheduleData).map(([day, activities]) => (
                <TabsContent key={day} value={day}>
                  <div className="grid gap-4">
                    {activities.map((activity, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="text-2xl font-bold text-primary min-w-[60px]">{activity.time}</div>
                              <div>
                                <h3 className="font-heading font-semibold text-lg">{activity.activity}</h3>
                                <p className="text-muted-foreground text-sm">Тренер: {activity.trainer}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {activity.level}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {activity.room}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" className="md:min-w-[120px]">
                              Записаться
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
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
                <Button variant="outline" className="bg-black text-white hover:bg-black/90">
                  <Smartphone className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline" className="bg-green-600 text-white hover:bg-green-600/90">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
