"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Calendar } from "lucide-react"
import { PurchaseModal } from "@/components/purchase-modal"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Управление фокусом при открытии меню
  useEffect(() => {
    if (isMenuOpen && firstNavLinkRef.current) {
      // Небольшая задержка для корректной установки фокуса после анимации открытия
      const timer = setTimeout(() => {
        firstNavLinkRef.current?.focus()
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong shadow-lg" : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{ maxWidth: '100%', overflowX: 'hidden' }}
    >
      <div className="w-full px-1.5 min-[400px]:px-2 sm:px-3 md:px-4 lg:px-8" style={{ maxWidth: '100%', boxSizing: 'border-box', margin: '0 auto' }}>
        <div className="flex items-center justify-between h-14 min-[400px]:h-16 sm:h-20 gap-1 min-[400px]:gap-1.5 sm:gap-2 md:gap-4 min-w-0 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
            <Image 
              src="/nautilus-logo.png" 
              alt="Наутилус" 
              width={180} 
              height={50} 
              className="h-6 min-[400px]:h-7 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[90px] min-[400px]:max-w-[110px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-none object-contain" 
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="text-foreground/80 hover:text-primary"
            >
              <Link href="tel:+79509389509" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline font-medium">Позвонить</span>
              </Link>
            </Button>
            <PurchaseModal>
              <Button
                size="sm"
                className="bg-cyan-700 hover:bg-cyan-800 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-4 xl:px-6 font-semibold"
                aria-label="Записаться на занятие или купить абонемент"
              >
                <Calendar className="w-4 h-4 xl:mr-2" />
                <span className="hidden xl:inline">Записаться</span>
                <span className="xl:hidden">Запись</span>
              </Button>
            </PurchaseModal>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-0.5 min-[400px]:gap-1 sm:gap-1.5 md:gap-2 lg:hidden flex-shrink-0">
            <PurchaseModal>
              <Button
                size="sm"
                className="bg-cyan-700 hover:bg-cyan-800 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full px-1.5 min-[400px]:px-2 sm:px-3 md:px-4 text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap h-7 min-[400px]:h-8 sm:h-9 min-w-[28px] min-[400px]:min-w-auto flex-shrink-0"
                aria-label="Записаться на занятие или купить абонемент"
              >
                <Calendar className="w-2.5 h-2.5 min-[400px]:w-3 min-[400px]:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 min-[400px]:mr-0.5 sm:mr-1 md:mr-1.5 flex-shrink-0" />
                <span className="hidden min-[360px]:inline min-[400px]:hidden">Запись</span>
                <span className="hidden min-[400px]:inline sm:hidden">Запись</span>
                <span className="hidden sm:inline">Записаться</span>
              </Button>
            </PurchaseModal>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-shrink-0 p-1.5 min-[400px]:p-2 sm:p-2.5 h-7 min-[400px]:h-8 sm:h-9"
                  aria-label={isMenuOpen ? "Закрыть меню навигации" : "Открыть меню навигации"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-navigation"
                  aria-haspopup="true"
                >
                  <Menu className="w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">{isMenuOpen ? "Закрыть меню" : "Открыть меню"}</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="glass-strong w-80 sm:w-96"
                onOpenAutoFocus={(e) => {
                  // Предотвращаем автоматический фокус на кнопку закрытия
                  // Фокус будет установлен на первую ссылку через useEffect
                  e.preventDefault()
                  // Устанавливаем фокус на первую ссылку после небольшой задержки
                  setTimeout(() => {
                    firstNavLinkRef.current?.focus()
                  }, 50)
                }}
                onCloseAutoFocus={(e) => {
                  // Возвращаем фокус на кнопку меню при закрытии
                  const menuButton = document.querySelector('[aria-label*="меню навигации"]') as HTMLElement
                  if (menuButton) {
                    e.preventDefault()
                    menuButton.focus()
                  }
                }}
              >
                <SheetTitle className="sr-only">Навигация по сайту</SheetTitle>
                <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
                  <div className="flex items-center">
                    <Image 
                      src="/nautilus-logo.png" 
                      alt="Наутилус" 
                      width={180} 
                      height={50} 
                      className="h-10 w-auto max-w-[180px]" 
                      aria-hidden="true"
                    />
                  </div>

                  <nav 
                    id="mobile-navigation" 
                    className="flex flex-col gap-3 sm:gap-4" 
                    role="navigation" 
                    aria-label="Основная навигация"
                    aria-expanded={isMenuOpen}
                  >
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        ref={index === 0 ? firstNavLinkRef : null}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-200 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                        onClick={() => setIsMenuOpen(false)}
                        onKeyDown={(e) => {
                          // Улучшенная навигация клавиатурой
                          if (e.key === 'Enter' || e.key === ' ') {
                            setIsMenuOpen(false)
                          }
                          // Навигация стрелками вверх/вниз
                          if (e.key === 'ArrowDown') {
                            e.preventDefault()
                            const nav = e.currentTarget.closest('nav')
                            const links = nav?.querySelectorAll('a')
                            if (links) {
                              const currentIndex = Array.from(links).indexOf(e.currentTarget)
                              const nextLink = links[currentIndex + 1]
                              if (nextLink instanceof HTMLElement) {
                                nextLink.focus()
                              }
                            }
                          }
                          if (e.key === 'ArrowUp') {
                            e.preventDefault()
                            const nav = e.currentTarget.closest('nav')
                            const links = nav?.querySelectorAll('a')
                            if (links) {
                              const currentIndex = Array.from(links).indexOf(e.currentTarget)
                              if (currentIndex > 0) {
                                const prevLink = links[currentIndex - 1]
                                if (prevLink instanceof HTMLElement) {
                                  prevLink.focus()
                                }
                              } else {
                                // Если это первая ссылка, вернуть фокус на кнопку меню
                                const menuButton = document.querySelector('[aria-label="Открыть меню навигации"]') as HTMLElement
                                menuButton?.focus()
                              }
                            }
                          }
                          // Escape закрывает меню
                          if (e.key === 'Escape') {
                            setIsMenuOpen(false)
                            const menuButton = document.querySelector('[aria-label="Открыть меню навигации"]') as HTMLElement
                            menuButton?.focus()
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3">
                    <PurchaseModal>
                      <Button 
                        size="lg" 
                        className="w-full bg-cyan-700 hover:bg-cyan-800 text-white rounded-full font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Записаться на занятие или купить абонемент"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Записаться
                      </Button>
                    </PurchaseModal>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline"
                      className="w-full border-2 rounded-full"
                    >
                      <Link
                        href="tel:+79509389509"
                        className="flex items-center justify-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Phone className="w-4 h-4" />
                        Позвонить
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
