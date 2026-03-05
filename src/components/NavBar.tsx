import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const leftLinks = [
    { to: "/", label: "HOME" },
    { to: "/aboutus", label: "ABOUT" },
    { to: "/services", label: "SERVICES" },
  ]

  const rightLinks = [
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Left Links */}
          <div className="hidden md:flex items-center space-x-8">
            {leftLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-wider text-primary hover:text-primary/80 transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo - Hidden on mobile, visible on desktop */}
          <Link to="/" className="hidden md:flex flex-col items-center">
            <div className="font-['Playfair_Display'] italic text-2xl text-primary hover:text-primary/80">Godolias</div>
            <div className="text-[10px] tracking-[0.2em] text-primary hover:text-primary/80 uppercase">photo video & Bridal</div>
          </Link>

          {/* Desktop Navigation - Right Links */}
          <div className="hidden md:flex items-center space-x-8">
            {rightLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-wider text-primary hover:text-primary/80 transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: Logo, ThemeToggle, and Menu Button */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Mobile Logo */}
            <Link to="/" className="flex flex-col items-start">
              <div className="font-['Playfair_Display'] italic text-xl text-primary">Godolias</div>
            </Link>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm tracking-wider text-primary hover:text-primary/80 transition-colors uppercase py-2"
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
