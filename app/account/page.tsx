import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  CreditCard,
  Calendar,
  Clock,
  Activity,
  Settings,
  Bell,
  Gift,
  LogOut,
  Edit,
} from "lucide-react"

export default function AccountPage() {
  // Демо-данные пользователя
  const user = {
    name: "Александр Донских",
    email: "aleksandr@example.com",
    phone: "+7 (914) 123-45-67",
    avatar: "/placeholder-user.jpg",
    memberSince: "Январь 2024",
  }

  const subscription = {
    type: "Безлимитная",
    status: "active",
    validUntil: "15.06.2026",
    daysLeft: 180,
    club: "Наутилус Южный",
  }

  const visits = [
    { date: "12.10.2025", time: "18:30", zone: "Тренажёрный зал", duration: "1ч 30мин" },
    { date: "10.10.2025", time: "19:00", zone: "Бассейн", duration: "45мин" },
    { date: "08.10.2025", time: "18:00", zone: "Групповая программа - Йога", duration: "1ч" },
    { date: "06.10.2025", time: "19:30", zone: "Тренажёрный зал", duration: "1ч 15мин" },
    { date: "04.10.2025", time: "18:30", zone: "Бассейн", duration: "1ч" },
  ]

  const upcomingClasses = [
    { name: "Йога", date: "13.10.2025", time: "19:00", trainer: "Мария Петрова", spots: 3 },
    { name: "Аквааэробика", date: "15.10.2025", time: "18:30", trainer: "Дмитрий Соколов", spots: 5 },
    { name: "Функциональный тренинг", date: "17.10.2025", time: "20:00", trainer: "Алексей Иванов", spots: 2 },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Профиль пользователя */}
            <Card className="mb-8 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-2xl bg-cyan-600 text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 mb-2">{user.name}</h1>
                      <p className="text-slate-600 mb-1">{user.email}</p>
                      <p className="text-slate-600 mb-1">{user.phone}</p>
                      <p className="text-sm text-slate-500">Участник с {user.memberSince}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="rounded-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Редактировать
                    </Button>
                    <Button variant="outline" className="rounded-full text-red-600 hover:text-red-700">
                      <LogOut className="w-4 h-4 mr-2" />
                      Выйти
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Активный абонемент */}
            <Card className="mb-8 border-none shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="bg-white/20 text-white border-white/30 mb-3">
                      {subscription.status === "active" ? "Активен" : "Неактивен"}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">{subscription.type}</h2>
                    <p className="text-white/90">{subscription.club}</p>
                  </div>
                  <CreditCard className="w-12 h-12 opacity-50" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Действует до</p>
                    <p className="text-xl font-bold">{subscription.validUntil}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Осталось дней</p>
                    <p className="text-xl font-bold">{subscription.daysLeft}</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-cyan-600 hover:bg-white/90 rounded-full py-6 font-medium">
                  Продлить абонемент
                </Button>
              </div>
            </Card>

            {/* Вкладки с информацией */}
            <Tabs defaultValue="visits" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="visits">
                  <Activity className="w-4 h-4 mr-2" />
                  Посещения
                </TabsTrigger>
                <TabsTrigger value="classes">
                  <Calendar className="w-4 h-4 mr-2" />
                  Записи
                </TabsTrigger>
                <TabsTrigger value="bonuses">
                  <Gift className="w-4 h-4 mr-2" />
                  Бонусы
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Настройки
                </TabsTrigger>
              </TabsList>

              {/* История посещений */}
              <TabsContent value="visits">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>История посещений</CardTitle>
                    <CardDescription>Ваши последние визиты в клуб</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {visits.map((visit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-cyan-100 p-3 rounded-full">
                              <Activity className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{visit.zone}</p>
                              <p className="text-sm text-slate-600">
                                {visit.date} в {visit.time}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-slate-900">{visit.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Записи на занятия */}
              <TabsContent value="classes">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Мои записи</CardTitle>
                    <CardDescription>Предстоящие групповые занятия</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingClasses.map((class_, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-cyan-100 p-3 rounded-full">
                              <Calendar className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 text-lg mb-1">{class_.name}</p>
                              <p className="text-sm text-slate-600 mb-1">
                                {class_.date} в {class_.time}
                              </p>
                              <p className="text-sm text-slate-500">Тренер: {class_.trainer}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {class_.spots} мест
                            </Badge>
                            <Button variant="destructive" size="sm" className="w-full rounded-full">
                              Отменить
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full py-6">
                      Записаться на занятие
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Бонусы */}
              <TabsContent value="bonuses">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Программа лояльности</CardTitle>
                    <CardDescription>Ваши бонусы и привилегии</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white mb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-white/80 mb-2">Доступно бонусов</p>
                          <p className="text-5xl font-bold">1,240</p>
                        </div>
                        <Gift className="w-16 h-16 opacity-50" />
                      </div>
                      <p className="text-white/90">
                        1 бонус = 1 рубль. Оплачивайте до 30% стоимости услуг бонусами
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-bold text-slate-900 mb-4">Доступные привилегии</h3>
                      <div className="p-4 bg-cyan-50 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-slate-900">Гостевой визит</p>
                            <p className="text-sm text-slate-600">Приведите друга бесплатно</p>
                          </div>
                          <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 rounded-full">
                            Использовать
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-slate-900">Бесплатное полотенце</p>
                            <p className="text-sm text-slate-600">На 7 дней</p>
                          </div>
                          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 rounded-full">
                            Использовать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Настройки */}
              <TabsContent value="settings">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Настройки аккаунта</CardTitle>
                    <CardDescription>Управление профилем и уведомлениями</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5" />
                        Уведомления
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <div>
                            <p className="font-medium text-slate-900">Email-уведомления</p>
                            <p className="text-sm text-slate-600">О новых акциях и событиях</p>
                          </div>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 accent-cyan-600 cursor-pointer"
                          />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <div>
                            <p className="font-medium text-slate-900">SMS-напоминания</p>
                            <p className="text-sm text-slate-600">О записанных занятиях</p>
                          </div>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 accent-cyan-600 cursor-pointer"
                          />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <div>
                            <p className="font-medium text-slate-900">Push-уведомления</p>
                            <p className="text-sm text-slate-600">В мобильном приложении</p>
                          </div>
                          <input type="checkbox" className="w-5 h-5 accent-cyan-600 cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Персональные данные
                      </h3>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
                        Изменить данные
                      </Button>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        Безопасность
                      </h3>
                      <Button variant="outline" className="w-full rounded-full">
                        Изменить пароль
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

