import { Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const quickLinks = [
    { href: "#services", name: "Services" },
    { href: "#clients", name: "Clients" },
    { href: "#principes", name: "Principes" },
    { href: "#contact", name: "Contact" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/data4yo/about/", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image src="/data4you-logo-new.png" alt="Data4You" width={320} height={84} className="h-30 w-auto" />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Expertise Data, Testing & Dev, au service de vos résultats. Cabinet de 40+ experts qui conçoivent, testent
              et délivrent des produits fiables.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold font-serif mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold font-serif mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p>06.04.34.34.34</p>
              <p>contact@data4you.com</p>
              <p>
                1-3, 1 ALLEE LAVOISIER
                <br />
                59650 VILLENEUVE-D'ASCQ
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 Data4You. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
