import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-2.5 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-md"
          : "bg-white/30 backdrop-blur"
      }`}
    >
      <div className="flex items-center uppercase justify-between max-w-7xl mx-auto h-16">
        
        {/* Left */}
        <div className="flex gap-6">
          <a href="#" className="font-medium hover:opacity-70">Home</a>
          <a href="#" className="font-medium hover:opacity-70">About</a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 font-bold text-xl">
          LOGO
        </div>

        {/* Right */}
        <div className="flex gap-6">
          <a href="#" className="font-medium hover:opacity-70">Services</a>
          <a href="#" className="font-medium hover:opacity-70">Contact</a>
        </div>

      </div>
    </nav>
  );
}
