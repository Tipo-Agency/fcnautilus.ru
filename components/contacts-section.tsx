"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Car, Bus } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом или приезжайте к нам в гости
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Телефон</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Администратор:</p>
                    <a
                      href="tel:+74212000000"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      +7 (4212) 00-00-00
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">Email</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">Общие вопросы:</p>
                    <a
                      href="mailto:info@nautilus-khv.ru"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      info@nautilus-khv.ru
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-foreground font-medium mb-2">г. Хабаровск, ул. Муравьева-Амурского, 15</p>
                    <p className="text-muted-foreground text-sm">Центр города, рядом с площадью Ленина</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-4">Режим работы</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Понедельник - Пятница:</span>
                        <span className="font-medium">06:00 - 24:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Суббота - Воскресенье:</span>
                        <span className="font-medium">08:00 - 22:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">Как добраться</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Парковка: 50 мест</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bus className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Автобусы: 1, 5, 18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-xl mb-6">Оставьте заявку</h3>
                <p className="text-muted-foreground mb-6">
                  Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
                </p>

                <ContactFormModal>
                  <Button size="lg" className="w-full">
                    Получить консультацию
                  </Button>
                </ContactFormModal>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-medium mb-4">Или приходите на экскурсию</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Каждый день с 10:00 до 20:00 проводим бесплатные экскурсии по клубу
                  </p>
                  <Button variant="outline" size="sm">
                    Записаться на экскурсию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-[16/9] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Интерактивная карта будет здесь</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
