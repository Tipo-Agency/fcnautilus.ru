import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ZonesSection } from "@/components/zones-section"
import { ServicesSection } from "@/components/services-section"
import { PromoSection } from "@/components/promo-section"
import { ScheduleSection } from "@/components/schedule-section"
import { CardsSection } from "@/components/cards-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PromoSection />
      <ScheduleSection />
      <ZonesSection />
      <CardsSection />
      <GallerySection />
      <ContactsSection />
      <Footer />
    </main>
  )
}
