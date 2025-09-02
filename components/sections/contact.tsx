"use client"

/* eslint-disable react/no-unescaped-entities */

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import dynamic from "next/dynamic"

// Map dynamically imported to avoid SSR issues with window
const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false })

// -------- Floating Inputs --------
function FloatingLabelInput({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  ...props
}: {
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  [key: string]: unknown
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <Input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer pt-6 pb-2 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
        required={required}
        {...props}
      />
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          isFocused || value
            ? "top-2 text-xs text-primary font-medium"
            : "top-1/2 -translate-y-1/2 text-muted-foreground"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  )
}

function FloatingLabelTextarea({
  label,
  required = false,
  value,
  onChange,
  ...props
}: {
  label: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  [key: string]: unknown
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <Textarea
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer pt-6 pb-2 transition-all duration-200 focus:ring-2 focus:ring-primary/20 min-h-[120px]"
        required={required}
        {...props}
      />
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          isFocused || value ? "top-2 text-xs text-primary font-medium" : "top-4 text-muted-foreground"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  )
}

// --------- Contact Section ---------
export function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitStatus("success")
    setTimeout(() => {
      setFormData({ nom: "", email: "", telephone: "", message: "" })
      setSubmitStatus("idle")
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Contactez-nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parlons de votre projet et découvrons comment nous pouvons vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <Card className="group hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold font-serif text-foreground mb-6">Envoyez un message</h3>
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 text-sm">Votre message a été envoyé avec succès !</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FloatingLabelInput label="Nom" required value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
                  <FloatingLabelInput label="Email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <FloatingLabelInput label="Téléphone" type="tel" required value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} />
                <FloatingLabelTextarea label="Votre message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Coordonnées + Map */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold font-serif text-foreground mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-all">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">06.63.47.25.45</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-all">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">y.lori@data4you.fr</span>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-muted/50 transition-all">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                    <span className="text-foreground font-medium">
                      1-3, 1 ALLEE LAVOISIER
                      <br />59650 VILLENEUVE-D'ASCQ
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map interactive */}
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-64 w-full rounded-lg overflow-hidden">
                  <LeafletMap />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
