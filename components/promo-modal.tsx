"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, Calendar, Gift, Phone, CreditCard } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PromoModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  promo: {
    title: string
    description: string
    validUntil: string
    badge: string
    icon: React.ComponentType<{ className?: string }>
  }
}

export function PromoModal({ isOpen, onOpenChange, promo }: PromoModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    club: "",
    comment: "",
    consent: false,
  })

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length === 0) return ""
    if (numbers.length <= 1) return `+7 (${numbers}`
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formatted })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSuccess(true)
  }

  const handleClose = (open: boolean) => {
    if (isLoading) return
    
    onOpenChange(open)
    
    if (!open && isSuccess) {
      setIsSuccess(false)
      setFormData({ name: "", phone: "", club: "", comment: "", consent: false })
    }
  }

  const handleSuccessButtonClick = () => {
    setIsSuccess(false)
    setFormData({ name: "", phone: "", club: "", comment: "", consent: false })
    onOpenChange(false)
  }

  const isFormValid = formData.name.trim() && formData.phone.length >= 18 && formData.club && formData.consent

  // Определяем условия акции на основе названия
  const getConditions = () => {
    const conditions: string[] = []
    
    if (promo.title.includes("60 дней") || promo.title.includes("годовой")) {
      conditions.push("Действует при покупке годового абонемента")
      conditions.push("Дополнительные 60 дней добавляются автоматически")
      conditions.push("Не суммируется с другими акциями")
    } else if (promo.title.includes("Приведи друга")) {
      conditions.push("Друг должен быть новым клиентом клуба")
      conditions.push("Покупка двух абонементов одновременно")
      conditions.push("Минимальный срок абонемента — 3 месяца")
      conditions.push("Скидка применяется к обоим абонементам")
    } else if (promo.title.includes("Первый месяц")) {
      conditions.push("Действует только для новых клиентов")
      conditions.push("Применяется к любому типу абонемента")
      conditions.push("Минимальный срок абонемента — 3 месяца")
      conditions.push("Не суммируется с другими акциями")
    } else if (promo.title.includes("Семейный")) {
      conditions.push("Минимум 2 человека из одной семьи")
      conditions.push("Покупка абонементов одновременно")
      conditions.push("Минимальный срок — 6 месяцев")
      conditions.push("Скидка зависит от количества участников")
    } else {
      conditions.push("Подробности уточняйте у менеджеров клуба")
      conditions.push("Акция действует в соответствии с правилами клуба")
    }
    
    return conditions
  }

  const conditions = getConditions()
  const IconComponent = promo.icon

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-heading">{promo.title}</DialogTitle>
              <Badge className="mt-2 bg-primary text-primary-foreground">{promo.badge}</Badge>
            </div>
          </div>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl mb-2">Спасибо!</h3>
            <p className="text-muted-foreground mb-2">Ваша заявка успешно отправлена.</p>
            <p className="text-muted-foreground text-sm mb-6">Мы свяжемся с вами в ближайшее время для уточнения деталей акции</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/pricing" onClick={handleSuccessButtonClick} className="flex-1">
                <Button className="w-full bg-cyan-700 hover:bg-cyan-800 text-white">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Перейти к оплате
                </Button>
              </Link>
              <a href="tel:+79509389509" onClick={handleSuccessButtonClick} className="flex-1">
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвоните мне
                </Button>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Описание акции */}
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">{promo.description}</p>
              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Действует до: {promo.validUntil}</span>
              </div>
            </div>

            {/* Условия акции */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Gift className="w-4 h-4 text-primary" />
                Условия акции:
              </h4>
              <ul className="space-y-2">
                {conditions.map((condition, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Форма заявки */}
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-4">Оставить заявку на акцию</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="promo-name">Имя *</Label>
                  <Input
                    id="promo-name"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <Label htmlFor="promo-phone">Телефон *</Label>
                  <Input
                    id="promo-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <Label htmlFor="promo-club">Выбор клуба *</Label>
                  <Select value={formData.club} onValueChange={(value) => setFormData({ ...formData, club: value })}>
                    <SelectTrigger id="promo-club" className="w-full">
                      <SelectValue placeholder="Выберите клуб" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yuzhny">Наутилус Южный</SelectItem>
                      <SelectItem value="zagorodny">Наутилус Загородный</SelectItem>
                      <SelectItem value="pool">Открытый бассейн</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="promo-comment">Комментарий</Label>
                  <Textarea
                    id="promo-comment"
                    placeholder="Ваши пожелания или вопросы (необязательно)"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="promo-consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  />
                  <Label htmlFor="promo-consent" className="text-sm text-muted-foreground leading-relaxed">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </Label>
                </div>

                <Button type="submit" className="w-full" disabled={!isFormValid || isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    "Отправить"
                  )}
                </Button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

