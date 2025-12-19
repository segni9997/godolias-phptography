
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const slides = [
  {
    image: "/images/image.png",
    title: "Timeless Moments",
    subtitle: "Captured Through Artistic",
    subtitleLine2: "Wedding Photography",
  },
  {
    image: "/romantic-couple-at-sunset-beach-wedding-photograph.jpg",
    title: "Love Stories Unfold",
    subtitle: "Preserving Your Most",
    subtitleLine2: "Precious Memories",
  },
  {
    image: "/elegant-wedding-ceremony-outdoor-natural-light-pho.jpg",
    title: "Every Detail Matters",
    subtitle: "Creating Timeless Images",
    subtitleLine2: "Of Your Special Day",
  },
  {
    image: "/intimate-wedding-portrait-couple-embrace-golden-ho.jpg",
    title: "Authentic Emotions",
    subtitle: "Capturing The Beauty",
    subtitleLine2: "Of Your Connection",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
          <div className="absolute inset-0  bg-linear-to-t from-black" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className={`text-center text-white px-4 transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="text-sm tracking-[0.3em] uppercase mb-4 text-amber-200/90"
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
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
