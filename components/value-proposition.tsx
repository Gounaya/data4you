import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BarChart3, Handshake } from "lucide-react"

export function ValueProposition() {
  const values = [
    {
      icon: Users,
      title: "Expertise senior",
      description: "Consultants expérimentés, mentors & leads techniques pour garantir la qualité de vos projets.",
    },
    {
      icon: Award,
      title: "Culture qualité",
      description: "QA & sécurité intégrées dès le jour 1, avec des processus éprouvés et des standards élevés.",
    },
    {
      icon: BarChart3,
      title: "Delivery mesurable",
      description: "KPIs, SLOs et reporting clair pour un suivi transparent de la performance.",
    },
    {
      icon: Handshake,
      title: "Engagement proche",
      description: "Proximité, transparence, rituels agiles pour une collaboration optimale.",
    },
  ]

  return (
    <section id="value" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Notre valeur ajoutée</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce qui fait la différence dans notre approche et nos résultats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-serif text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
