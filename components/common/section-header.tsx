interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, description, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {subtitle && <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}
