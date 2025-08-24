"use client"

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Shield } from "lucide-react"
import React from "react"

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""))
    if (isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentValue = Math.floor(numericValue * progress)
      const suffix = value.replace(/[\d]/g, "").replace(/^[^\d]*/, "")
      setDisplayValue(currentValue + suffix)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-lg font-bold text-primary font-serif">
      {displayValue}
    </div>
  )
}

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0)

  const caseStudies = [
    {
      icon: Shield,
      sector: "Banque",
      title: "Automatisation de tests",
      description: "Mise en place d'une stratégie de tests automatisés complète pour une banque de premier plan.",
      metrics: [
        { label: "Réduction des régressions", value: "-40%" },
        { label: "Vitesse de release", value: "×2" },
        { label: "Couverture de tests", value: "85%" },
      ],
      image: "/modern-banking-digital-transformation.png",
      details:
        "Transformation complète de l'approche qualité avec mise en place de pipelines CI/CD, tests automatisés end-to-end, et monitoring en temps réel.",
    },
    {
      icon: TrendingUp,
      sector: "Retail",
      title: "Pipeline data temps réel",
      description: "Architecture de données moderne pour l'analyse prédictive des ventes et stocks.",
      metrics: [
        { label: "Précision prévisions", value: "+25%" },
        { label: "Temps de traitement", value: "-60%" },
        { label: "ROI première année", value: "300%" },
      ],
      image: "/modern-ecommerce-platform.png",
      details:
        "Implémentation d'une architecture data lake moderne avec streaming en temps réel, machine learning et dashboards interactifs.",
    },
    {
      icon: Clock,
      sector: "Logistique",
      title: "API & microservices",
      description: "Modernisation d'un SI legacy vers une architecture microservices cloud-native.",
      metrics: [
        { label: "Incidents post-prod", value: "-30%" },
        { label: "Time-to-market", value: "-50%" },
        { label: "Disponibilité", value: "99.9%" },
      ],
      image: "/placeholder.svg?height=300&width=400",
      details:
        "Migration progressive vers une architecture microservices avec containerisation, orchestration Kubernetes et monitoring avancé.",
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Études de cas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des résultats concrets et mesurables pour nos clients
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-background/50 backdrop-blur-sm rounded-full p-1 border border-border">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {study.sector}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-border hover:border-primary/20 bg-background/80 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={caseStudies[activeTab].image || "/placeholder.svg"}
                  alt={caseStudies[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent lg:from-transparent lg:via-transparent lg:to-background/90" />
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {React.createElement(caseStudies[activeTab].icon, {
                      className: "w-6 h-6 text-primary-foreground",
                    })}
                  </div>
                </div>
              </div>

              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {caseStudies[activeTab].sector}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold font-serif text-foreground mb-4">
                  {caseStudies[activeTab].title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{caseStudies[activeTab].description}</p>

                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{caseStudies[activeTab].details}</p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {caseStudies[activeTab].metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center group/metric">
                      <AnimatedCounter value={metric.value} />
                      <div className="text-xs text-muted-foreground mt-1 group-hover/metric:text-foreground transition-colors">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full lg:w-auto group/btn bg-primary hover:bg-primary/90">
                  Lire l'étude complète
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
