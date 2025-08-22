import { Card, CardContent } from "@/components/ui/card"
import { Database, TestTube, Code, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export function Services() {
  const services = [
    {
      icon: Database,
      title: "Data & IA",
      description: "Data engineering, BI/analytics, MLOps, gouvernance, gen-AI",
      features: [
        "Architecture de données moderne",
        "Pipelines ETL/ELT performants",
        "Tableaux de bord interactifs",
        "Intelligence artificielle générative",
        "Gouvernance et qualité des données",
      ],
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Stratégie de test, automatisation (UI/API), performance, sécurité",
      features: [
        "Tests automatisés UI/API",
        "Tests de performance",
        "Tests de sécurité",
        "Stratégie de test complète",
        "Intégration continue",
      ],
    },
    {
      icon: Code,
      title: "Développement",
      description: "Front/back, cloud-native, API, intégration, modernisation SI",
      features: [
        "Applications web modernes",
        "APIs REST et GraphQL",
        "Architecture cloud-native",
        "Microservices",
        "Modernisation legacy",
      ],
    },
  ]

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise complète pour accélérer votre transformation digitale
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 200} direction="up">
              <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border hover:border-primary/30 hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-foreground group-hover:text-foreground/90 transition-colors duration-300"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
