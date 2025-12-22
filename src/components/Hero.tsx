
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const slides = [
  {
    image: "/wedding4.jpg",
    title: "Forever Begins Here",
    subtitle: "Elegant & Emotional",
    subtitleLine2: "Wedding Photography",
  },
  {
    image: "/babyshower16.jpg",
    title: "A New Chapter Begins",
    subtitle: "Celebrating Love, Joy",
    subtitleLine2: "And New Life",
  },
  {
    image: "/congA6.jpg",
    title: "Moments of Achievement",
    subtitle: "Honoring Success And",
    subtitleLine2: "Life’s Milestones",
  }, {
    image: "/shemglinna2.jpg",
    title: "Honoring Tradition",
    subtitle: "Capturing the Beauty of",
    subtitleLine2: "Shimglina Ceremonies",
  },
  {
    image: "/hbd6.jpg",
    title: "Celebrate Every Year",
    subtitle: "Capturing Laughter, Joy",
    subtitleLine2: "And Birthday Memories",
  },
  {
    image: "/kid7.jpg",
  title: "Where Moments Unite",
subtitle: "Beautifully Documenting",
subtitleLine2: "Every Special Event",
  },
];


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 5000)

  return () => clearInterval(interval)
}, [])
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsTransitioning(true)
  //     setTimeout(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length)
  //       setIsTransitioning(false)
  //     }, 500)
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <motion.section id="home" className="relative h-[90vh] pt-20 overflow-hidden  ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-linear-to-t from-background" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className={`text-center text-foreground px-4 transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="text-lg tracking-[0.3em] uppercase mb-4 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {slides[currentSlide].title}
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {slides[currentSlide].subtitle}
            <br />
            {slides[currentSlide].subtitleLine2}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
        
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentSlide(index)
                setIsTransitioning(false)
              }, 500)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-foreground w-8" : "bg-foreground/50 hover:bg-foreground/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
