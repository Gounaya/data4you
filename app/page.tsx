import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { ClientLogos } from "@/components/sections/client-logos"
import { StatsSection } from "@/components/sections/stats-section"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"
import AnimatedBackground from "@/components/animations/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <ClientLogos />
        <StatsSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
