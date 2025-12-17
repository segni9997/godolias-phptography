
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const leftLinks = [
    { to: "/", label: "HOME" },
    { to: "/aboutus", label: "ABOUT" },
    { to: "/services", label: "SERVICES" },
  ]

  const rightLinks = [
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/blogs", label: "BLOG" },
    { to: "/contact", label: "CONTACT" },
  ]

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Left Links */}
          <div className="hidden md:flex items-center space-x-8">
            {leftLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-wider text-stone-600 hover:text-stone-900 transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex flex-col items-center">
            <div className="font-['Playfair_Display'] italic text-2xl text-stone-800">Godolias</div>
            <div className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">Photography</div>
          </Link>

          {/* Desktop Navigation - Right Links */}
          <div className="hidden md:flex items-center space-x-8">
            {rightLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-wider text-stone-600 hover:text-stone-900 transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-wider text-stone-600 hover:text-stone-900 transition-colors uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
