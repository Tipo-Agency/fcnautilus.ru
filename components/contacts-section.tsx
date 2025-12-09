"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Car, Bus, Navigation } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
                      href="tel:+79509389509"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      +7 (4212) 95-09-38
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

        {/* Interactive Maps */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Наши клубы на карте</h3>
            <p className="text-muted-foreground">Выберите клуб и постройте маршрут</p>
          </div>

          <Tabs defaultValue="yuzhny" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6">
              <TabsTrigger value="yuzhny">Южный</TabsTrigger>
              <TabsTrigger value="zagorodny">Загородный</TabsTrigger>
              <TabsTrigger value="pool">Бассейн</TabsTrigger>
            </TabsList>


            <TabsContent value="yuzhny" className="space-y-4">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-muted/50 border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-1">Наутилус Южный</h4>
                        <p className="text-sm text-muted-foreground">г. Хабаровск, ул. Суворова, 25а</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          window.open(
                            "https://yandex.uz/maps/76/khabarovsk/house/ulitsa_suvorova_25a/ZUoDaAZgTkIPW0Jua2JyeHpmbAs=/?indoorLevel=1&ll=135.105115%2C48.397323&z=16",
                            "_blank"
                          )
                        }}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Построить маршрут
                      </Button>
                    </div>
                  </div>
                  <div className="aspect-[16/9] relative">
                    <iframe
                      src="https://yandex.uz/map-widget/v1/?indoorLevel=1&ll=135.105115%2C48.397323&mode=whatshere&whatshere%5Bpoint%5D=135.107787%2C48.396583&whatshere%5Bzoom%5D=17&z=16"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0 }}
                      title="Наутилус Южный - ул. Суворова, 25а"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="zagorodny" className="space-y-4">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-muted/50 border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-1">Наутилус Загородный</h4>
                        <p className="text-sm text-muted-foreground">г. Хабаровск, Загородное шоссе, 15</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          window.open(
                            "https://yandex.uz/maps/76/khabarovsk/house/vostochnoye_shosse_15/ZUoDaAZkQUAFWUJua2J1dnVlZwA=/?ll=135.148525%2C48.479638&z=16",
                            "_blank"
                          )
                        }}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Построить маршрут
                      </Button>
                    </div>
                  </div>
                  <div className="aspect-[16/9] relative">
                    <iframe
                      src="https://yandex.uz/map-widget/v1/?ll=135.148525%2C48.479638&mode=whatshere&whatshere%5Bpoint%5D=135.148525%2C48.479638&whatshere%5Bzoom%5D=17&z=16"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0 }}
                      title="Наутилус Загородный - Восточное шоссе, 15"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pool" className="space-y-4">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-muted/50 border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-1">Открытый бассейн</h4>
                        <p className="text-sm text-muted-foreground">г. Хабаровск, ул. Тихоокеанская, 88</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          window.open(
                            "https://yandex.uz/maps/76/khabarovsk/house/tikhookeanskaya_ulitsa_88/ZUoDaAdkQEQAXUJua2J0cH9kZgE=/?ll=135.049171%2C48.513729&z=16",
                            "_blank"
                          )
                        }}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Построить маршрут
                      </Button>
                    </div>
                  </div>
                  <div className="aspect-[16/9] relative">
                    <iframe
                      src="https://yandex.uz/map-widget/v1/?ll=135.049171%2C48.513729&mode=whatshere&whatshere%5Bpoint%5D=135.049171%2C48.513729&whatshere%5Bzoom%5D=17&z=16"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0 }}
                      title="Открытый бассейн - ул. Тихоокеанская, 88"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
