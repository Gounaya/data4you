import type React from "react"
export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  image: string
  metrics: {
    label: string
    value: string
    description: string
  }[]
  technologies: string[]
  icon: React.ComponentType<{ className?: string }>
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export interface Testimonial {
  id: string
  content: string
  author: string
  role: string
  company: string
  avatar: string
}

export interface IndustrySector {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  useCases: string[]
}

export interface CompanyStats {
  employees: number
  revenue: number
  clients: number
  projects: number
}
