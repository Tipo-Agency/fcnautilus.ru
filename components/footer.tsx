import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src="/nautilus-logo.png"
              alt="Наутилус"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              Сеть премиальных фитнес-клубов с бассейнами и современным оборудованием
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/80 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base text-white">Навигация</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/clubs" className="text-white/90 hover:text-primary transition-colors text-sm">
                Клубы
              </Link>
              <Link href="/services" className="text-white/90 hover:text-primary transition-colors text-sm">
                Услуги
              </Link>
              <Link href="/pricing" className="text-white/90 hover:text-primary transition-colors text-sm">
                Тарифы
              </Link>
              <Link href="/schedule" className="text-white/90 hover:text-primary transition-colors text-sm">
                Расписание
              </Link>
              <Link href="/team" className="text-white/90 hover:text-primary transition-colors text-sm">
                Команда
              </Link>
              <Link href="/promo" className="text-white/90 hover:text-primary transition-colors text-sm">
                Акции
              </Link>
              <Link href="/faq" className="text-white/90 hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/about" className="text-white/90 hover:text-primary transition-colors text-sm">
                О компании
              </Link>
              <Link href="/careers" className="text-white/90 hover:text-primary transition-colors text-sm">
                Вакансии
              </Link>
              <Link href="/b2b" className="text-white/90 hover:text-primary transition-colors text-sm">
                B2B
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base text-white">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <Link href="tel:+79509389509" className="text-white/90 hover:text-primary transition-colors text-sm">
                  +7 (4212) 95-09-38
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <Link
                  href="mailto:info@nautilus-khv.ru"
                  className="text-white/90 hover:text-primary transition-colors text-sm"
                >
                  info@nautilus-khv.ru
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">г. Хабаровск</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base text-white">Режим работы</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm space-y-1">
                <div className="text-white/90">Пн-Пт: 06:00 - 24:00</div>
                <div className="text-white/90">Сб-Вс: 08:00 - 22:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">© 2025 Наутилус. Все права защищены.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/80 hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-primary transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
