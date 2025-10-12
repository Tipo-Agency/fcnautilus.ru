"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

const navigation = [
  { name: "Клубы", href: "/clubs" },
  { name: "Услуги", href: "/services" },
  { name: "Тарифы", href: "/pricing" },
  { name: "Расписание", href: "/schedule" },
  { name: "Команда", href: "/team" },
  { name: "О компании", href: "/about" },
  { name: "Акции", href: "/promo" },
  { name: "FAQ", href: "/faq" },
  { name: "Контакты", href: "/contacts" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image src="/nautilus-logo.png" alt="Наутилус" width={180} height={50} className="h-12 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-6"
            >
              <Link href="tel:+74212000000" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Позвонить</span>
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-strong w-80">
              <div className="flex flex-col gap-8 mt-8">
                <Image src="/nautilus-logo.png" alt="Наутилус" width={180} height={50} className="h-10 w-auto" />

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground/80 hover:text-primary transition-colors duration-200 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  <Link href="tel:+74212000000" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
