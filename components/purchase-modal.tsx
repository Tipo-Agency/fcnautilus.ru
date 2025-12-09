"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, ArrowRight, Phone, CreditCard } from "lucide-react"
import Link from "next/link"

interface PurchaseModalProps {
  children: React.ReactNode
}

export function PurchaseModal({ children }: PurchaseModalProps) {
  const [isOpen, setIsOpen] = useState(false)
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
    
    setIsOpen(open)
    
    if (!open && isSuccess) {
      setIsSuccess(false)
      setFormData({ name: "", phone: "", club: "", comment: "", consent: false })
    }
  }

  const handleSuccessButtonClick = () => {
    setIsSuccess(false)
    setFormData({ name: "", phone: "", club: "", comment: "", consent: false })
    setIsOpen(false)
  }

  const isFormValid = formData.name.trim() && formData.phone.length >= 18 && formData.club && formData.consent

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-heading text-xl">Купить абонемент</DialogTitle>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Оставьте заявку, и мы подберём для вас оптимальный тариф
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl mb-2">Спасибо!</h3>
            <p className="text-muted-foreground mb-6">Ваша заявка успешно отправлена.</p>
            <p className="text-muted-foreground text-sm mb-6">Мы свяжемся с вами в ближайшее время</p>
            
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="purchase-name">Имя *</Label>
              <Input
                id="purchase-name"
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                autoComplete="name"
              />
            </div>

            <div>
              <Label htmlFor="purchase-phone">Телефон *</Label>
              <Input
                id="purchase-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                autoComplete="tel"
              />
            </div>

            <div>
              <Label htmlFor="purchase-club">Выбор клуба *</Label>
              <Select value={formData.club} onValueChange={(value) => setFormData({ ...formData, club: value })}>
                <SelectTrigger id="purchase-club" className="w-full">
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
              <Label htmlFor="purchase-comment">Комментарий</Label>
              <Textarea
                id="purchase-comment"
                placeholder="Ваши пожелания или вопросы (необязательно)"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={3}
                className="resize-none"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="purchase-consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              />
              <Label htmlFor="purchase-consent" className="text-sm text-muted-foreground leading-relaxed">
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
        )}
      </DialogContent>
    </Dialog>
  )
}

