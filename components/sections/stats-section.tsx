"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Target, Lightbulb, Heart } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: { value: number; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (t: number) => {
      if (!startTime) startTime = t
      const p = Math.min((t - startTime) / duration, 1)
      setDisplayValue(Math.floor(value * p))
      if (p < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <motion.div
      ref={ref}
      className="text-3xl md:text-4xl font-serif font-bold text-foreground"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {displayValue}{suffix}
    </motion.div>
  )
}

export function StatsSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  const stats = [
    { label: "Consultants experts", value: 40, suffix: "+" },
    { label: "Années d'expérience", value: 15, suffix: "+" },
    { label: "Projets réalisés", value: 200, suffix: "+" },
    { label: "Chiffre d'affaires", value: 800, suffix: "K€" },
  ]

  const principles = [
    {
      icon: Lightbulb,
      title: "Apprentissage continu",
      description: "Nous investissons constamment dans la formation et la veille technologique.",
      accent: "from-amber-500 to-orange-600",
      ring: "ring-amber-500/25",
    },
    {
      icon: Heart,
      title: "Feedback constructif",
      description: "Une culture du retour bienveillant pour progresser ensemble.",
      accent: "from-rose-500 to-red-600",
      ring: "ring-rose-500/25",
    },
    {
      icon: Target,
      title: "Excellence technique",
      description: "La qualité et les bonnes pratiques au cœur de nos développements.",
      accent: "from-sky-500 to-cyan-600",
      ring: "ring-sky-500/25",
    },
    {
      icon: Users,
      title: "Bienveillance",
      description: "Un environnement de travail respectueux et collaboratif.",
      accent: "from-emerald-500 to-green-600",
      ring: "ring-emerald-500/25",
    },
  ]

  // Variants propres et réutilisables
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <section id="principes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* ==== STATS ==== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="group"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg"
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-4 h-1.5 w-16 rounded-full bg-primary/20 group-hover:w-24 transition-all" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ==== PRINCIPES ==== */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">Nos principes</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              {/* Conteneur gradient-border propre */}
              <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${p.accent} opacity-60 group-hover:opacity-100 transition-opacity`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={`rounded-2xl bg-card/70 backdrop-blur-md ring-1 ${p.ring} p-6 h-full`}
                >
                  {/* Icône – taille/contraste maîtrisés */}
                  <div className="flex items-center justify-center">
                    <div className={`relative grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${p.accent} shadow-sm`}>
                      <p.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      {/* halo discret au hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${p.accent} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
                    </div>
                  </div>

                  {/* Titre */}
                  <h4 className="mt-5 text-lg font-semibold text-foreground text-center">{p.title}</h4>

                  {/* Description (AnimatePresence pour un fondu propre) */}
                  <div className="mt-3 min-h-[48px]">
                    <AnimatePresence mode="wait">
                      {hovered === i ? (
                        <motion.p
                          key="desc-visible"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.25 }}
                          className="text-sm text-muted-foreground text-center leading-relaxed"
                        >
                          {p.description}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="desc-placeholder"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-sm text-muted-foreground/70 text-center"
                        >
                          Survolez pour en savoir plus
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Barre d’accent en bas */}
                  <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${p.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
