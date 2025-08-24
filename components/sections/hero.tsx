import { Button } from "@/components/ui/button"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { ArrowRight } from "lucide-react"
import TypingAnimation from "@/components/typing-animation"
import CounterAnimation from "@/components/counter-animation"
import ScrollReveal from "@/components/scroll-reveal"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/diverse-team-collaboration.png" alt="Équipe Data4You" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/20 animate-gradient-shift" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <ScrollReveal className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-foreground mb-6">
            Accélérez vos projets{" "}
            <span className="text-primary">
              <TypingAnimation
                texts={["Data & IA", "Testing & QA", "Développement"]}
                className="inline-block min-w-[300px] text-left"
              />
            </span>
          </h1>

          <ScrollReveal delay={200} direction="fade">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              De la stratégie à l'exécution, nos experts accompagnent banque/assurance, retail, logistique & commerce
              dans leur transformation digitale.
            </p>
          </ScrollReveal>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScrollReveal delay={400} direction="up">
              <Button
                size="lg"
                asChild
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              >
                <a href="#contact">
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <ScrollReveal delay={800} direction="up">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-serif group-hover:text-primary/80 transition-colors">
                  <CounterAnimation end={40} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Experts</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1000} direction="up">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-serif group-hover:text-primary/80 transition-colors">
                  <CounterAnimation end={200} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Projets livrés</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1200} direction="up">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-serif group-hover:text-primary/80 transition-colors">
                  <CounterAnimation end={800} suffix="k€" />
                </div>
                <div className="text-sm text-muted-foreground">Chiffre d'affaires</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1400} direction="up">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-serif group-hover:text-primary/80 transition-colors">
                  <CounterAnimation end={5} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Années d'expertise</div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
