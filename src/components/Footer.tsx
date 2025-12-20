import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  const navigation = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "Blog", to: "#blog" },
    { name: "Contact", to: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, to: "#" },
    { icon: Instagram, to: "#" },
    { icon: Twitter, to: "#" },
    { icon: Youtube, to: "#" },
  ]

  return (
    <footer className="bg-background/90 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-2xl font-serif italic text-primary mb-2">Godolias</div>
          <div className="text-xs tracking-widest text-secondary uppercase">photo video & Bridal</div>
        </div>

        {/* Description */}
        <p className="text-center text-orange-600 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          Godolias is a freelance wedding photographer who specializes in creating art through beautiful, authentic
          images. She listens carefully to your story, capturing every moment, big or small. Her passion for life and
          capturing authentic moments creates art that tells a powerful story.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-xs tracking-wider text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              to={social.to}
              className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <social.icon className="w-4 h-4 text-primary" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-secondary">© {new Date().getFullYear()} Godolias photo video & Bridal</div>
      </div>
    </footer>
  )
}
