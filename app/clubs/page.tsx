import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClubsSection } from "@/components/clubs-section"

export default function ClubsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ClubsSection />
      </div>
      <Footer />
    </main>
  )
}
