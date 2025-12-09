"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Clock, Calendar, X, Loader2 } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

interface BookingModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  activity: {
    time: string
    activity: string
    level: string
    day: string
  }
}

const dayNames: Record<string, string> = {
  monday: "Понедельник",
  tuesday: "Вторник",
  wednesday: "Среда",
  thursday: "Четверг",
  friday: "Пятница",
  saturday: "Суббота",
  sunday: "Воскресенье",
}

export function BookingModal({ isOpen, onOpenChange, activity }: BookingModalProps) {
  const [step, setStep] = useState<"booking" | "confirming" | "success" | "app">("booking")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const isMobile = useIsMobile()

  // Определяем ближайшую дату для выбранного дня недели
  useEffect(() => {
    if (isOpen && activity.day) {
      // Сбрасываем состояние при открытии
      setStep("booking")
      
      const today = new Date()
      const currentDay = today.getDay()
      const dayMap: Record<string, number> = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 0,
      }
      const targetDay = dayMap[activity.day]
      const daysUntilTarget = (targetDay - currentDay + 7) % 7 || 7
      const nextDate = new Date(today)
      nextDate.setDate(today.getDate() + daysUntilTarget)
      setSelectedDate(nextDate.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }))
    }
  }, [isOpen, activity.day])

  const handleBook = async () => {
    setStep("confirming")
    
    // Симуляция процесса записи
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setStep("success")
    
    // Автоматически закрываем через 4 секунды или переходим к предложению приложения
    setTimeout(() => {
      if (isMobile) {
        setStep("app")
      } else {
        onOpenChange(false)
        setTimeout(() => {
          setStep("booking")
        }, 300)
      }
    }, 4000)
  }

  const handleOpenApp = (store: "ios" | "android") => {
    if (store === "ios") {
      // App Store ссылка на реальное приложение Наутилус Фитнес
      window.open("https://apps.apple.com/ru/app/наутилус-фитнес/id6504984719", "_blank")
    } else {
      // Google Play ссылка на реальное приложение Наутилус Фитнес
      window.open("https://play.google.com/store/apps/details?id=fit.nautilus.app&hl=ru", "_blank")
    }
  }

  const handleClose = () => {
    if (step === "confirming") return
    onOpenChange(false)
    setTimeout(() => {
      setStep("booking")
    }, 300)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === "booking" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading text-center">Запись на тренировку</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Информация о тренировке */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-lg">{activity.time}</span>
                  </div>
                  <Badge variant="secondary">{activity.level}</Badge>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1">{activity.activity}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{dayNames[activity.day]}, {selectedDate}</span>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="space-y-3">
                <Button onClick={handleBook} className="w-full" size="lg">
                  Записаться на тренировку
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">или</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-center text-muted-foreground mb-3">
                    Записывайтесь через мобильное приложение
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 bg-black text-white hover:bg-gray-900 font-medium"
                      onClick={() => handleOpenApp("ios")}
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      App Store
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-green-700 text-white hover:bg-green-800 font-medium"
                      onClick={() => handleOpenApp("android")}
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      Google Play
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {step === "confirming" && (
          <div className="text-center py-8">
            <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
            <h3 className="font-heading font-semibold text-lg mb-2">Обрабатываем запрос...</h3>
            <p className="text-muted-foreground">Пожалуйста, подождите</p>
          </div>
        )}

        {step === "success" && (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-2">Вы успешно записаны!</h3>
            <div className="bg-muted/50 rounded-lg p-4 mt-4 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">{activity.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{activity.activity}</p>
              <p className="text-sm text-muted-foreground">
                {dayNames[activity.day]}, {selectedDate}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Мы отправили вам подтверждение. До встречи на тренировке!
            </p>
          </div>
        )}

        {step === "app" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-heading text-center">Скачайте приложение</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-center text-muted-foreground">
                Для удобной записи на тренировки и управления абонементом скачайте наше мобильное приложение
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full bg-black text-white hover:bg-gray-900 font-medium"
                  onClick={() => handleOpenApp("ios")}
                  size="lg"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Скачать в App Store
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-green-700 text-white hover:bg-green-800 font-medium"
                  onClick={() => handleOpenApp("android")}
                  size="lg"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Скачать в Google Play
                </Button>
              </div>
              <Button
                variant="ghost"
                className="w-full"
                onClick={handleClose}
              >
                Закрыть
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

