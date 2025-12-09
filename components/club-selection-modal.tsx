"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ClubSelectionModalProps {
  children: React.ReactNode
}

const clubs = [
  {
    id: 1,
    name: "Наутилус Южный",
    slug: "yuzhny",
    tagline: "Флагманский клуб премиум-класса",
    address: "ул. Суворова, 25а",
    hours: "Пн-Вс: 06:00 - 24:00",
    phone: "+7 (4212) 00-00-01",
    features: ["Бассейн 25м", "Термальный комплекс", "Детский клуб", "SPA-зона"],
  },
  {
    id: 2,
    name: "Наутилус Загородный",
    slug: "zagorodny",
    tagline: "Фитнес на природе",
    address: "Загородное шоссе, 15",
    hours: "Пн-Вс: 07:00 - 23:00",
    phone: "+7 (4212) 00-00-02",
    features: ["Панорамные окна", "Кардио-зона", "Групповые программы", "Кафе"],
  },
  {
    id: 3,
    name: "Открытый бассейн",
    slug: "pool",
    tagline: "Плавание под открытым небом",
    address: "ул. Тихоокеанская, 88",
    hours: "Май-Сентябрь: 08:00 - 22:00",
    phone: "+7 (4212) 00-00-03",
    features: ["Олимпийский бассейн 50м", "Детская зона", "Шезлонги", "Раздевалки"],
  },
]

export function ClubSelectionModal({ children }: ClubSelectionModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center font-heading text-2xl">Выберите клуб</DialogTitle>
          <p className="text-center text-muted-foreground text-sm mt-2">
            Выберите клуб, который вам больше подходит
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {clubs.map((club) => (
            <Link
              key={club.id}
              href={`/clubs/${club.slug}`}
              onClick={() => setIsOpen(false)}
              className="group"
            >
              <div className="border-2 border-slate-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {club.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{club.tagline}</p>

                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                    <span>{club.address}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                    <span>{club.hours}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                    <span>{club.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {club.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-colors"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <Link href="/clubs" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full">
              Посмотреть все клубы
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

