export function ClientLogos() {
  const logos = [
    { name: "AXA", src: "/Logo_AXA.png" },
    { name: "Carrefour", src: "/Logo_Carrefour.png" },
    { name: "Auchan", src: "/Logo_Auchan.png" },
    { name: "Kiabi", src: "/Logo_kiabi.png" },
    { name: "Nocibé", src: "/Logo_Nocibe.png" },
    { name: "Oney", src: "/Logo_Oney.png" },
    { name: "Leroy Merlin", src: "/Logo_Merlin.png" },
    { name: "Adeo", src: "/Logo_adeo.png" },
    { name: "Bouygues", src: "/Logo_bouygues.png" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold font-serif text-foreground mb-2">Ils nous font confiance</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
