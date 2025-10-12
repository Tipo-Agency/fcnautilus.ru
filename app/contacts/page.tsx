import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactsSection } from "@/components/contacts-section"

export default function ContactsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactsSection />
      </div>
      <Footer />
    </main>
  )
}
