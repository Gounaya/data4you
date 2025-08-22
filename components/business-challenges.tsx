import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Zap, Shield, Cloud, Brain } from "lucide-react"

export function BusinessChallenges() {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Fiabiliser la donnée pour décider vite",
      description: "Qualité, traçabilité et temps réel pour le pilotage stratégique et opérationnel.",
    },
    {
      icon: Zap,
      title: "Accélérer la mise en prod",
      description: "CI/CD, tests automatisés, réduction du time-to-market pour vos innovations.",
    },
    {
      icon: Shield,
      title: "Réduire le risque opérationnel",
      description: "Tests de non-régression, performance & sécurité by design.",
    },
    {
      icon: Cloud,
      title: "Moderniser le legacy",
      description: "Migration cloud, microservices, API-first, observabilité complète.",
    },
    {
      icon: Brain,
      title: "Industrialiser l'IA",
      description: "Du POC à la production (MLOps), gouvernance & conformité.",
    },
  ]

  return (
    <section id="business-challenges" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Enjeux métier que nous adressons
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des solutions concrètes pour vos défis business les plus critiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-serif text-foreground mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
