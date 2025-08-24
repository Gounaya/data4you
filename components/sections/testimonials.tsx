"use client"

/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

function TypingText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayText("")
    setIsComplete(false)
    let i = 0

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      content:
        "Data4You a transformé notre approche des tests. Leur expertise technique et leur accompagnement ont permis de réduire drastiquement nos incidents en production.",
      author: "Marie Dubois",
      role: "CTO",
      company: "TechBank",
      rating: 5,
      avatar: "/professional-woman-executive.png",
    },
    {
      content:
        "Une équipe exceptionnelle qui a su moderniser notre SI legacy en respectant nos contraintes métier. Le résultat dépasse nos attentes.",
      author: "Pierre Martin",
      role: "Directeur IT",
      company: "RetailCorp",
      rating: 5,
      avatar: "/professional-ceo.png",
    },
    {
      content:
        "Grâce à Data4You, nous avons mis en place une architecture data moderne qui nous permet enfin de prendre des décisions basées sur des données fiables.",
      author: "Sophie Laurent",
      role: "Chief Data Officer",
      company: "LogiFlow",
      rating: 5,
      avatar: "/professional-woman-cto.png",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-primary/5 to-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Témoignages clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients disent de notre collaboration
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-border bg-background/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20 shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].author}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</div>
                    <div className="text-primary font-medium text-sm">{testimonials[currentIndex].company}</div>
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic min-h-[120px] flex items-center">
                    &ldquo;<TypingText text={testimonials[currentIndex].content} speed={30} />&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="flex justify-center items-center space-x-6 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 p-0 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`relative transition-all duration-300 ${
                        index === currentIndex ? "w-8 h-3" : "w-3 h-3"
                      }`}
                      onClick={() => {
                        setCurrentIndex(index)
                        setIsAutoPlay(false)
                      }}
                    >
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-primary shadow-lg"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 p-0 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isAutoPlay ? "⏸ Pause auto-play" : "▶ Resume auto-play"}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
