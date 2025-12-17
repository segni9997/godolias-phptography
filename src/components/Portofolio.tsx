"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FeedBack from "./FedBacks"

const portfolioItems = [
  {
    id: "fiona-mikael",
    number: "01",
    names: "Fiona & Mikael",
    category: "Wedding",
    date: "Jan 11 2025",
    description:
      "For Stacey's wedding, we collaborated with over and elegance, we captured picturesque between the for her incredible day. It was an absolute pleasure capturing every passionate moment of her wedding day—from preparation to celebration.",
    image: "/romantic-couple-wedding-portrait-by-lake.jpg",
    thumbnail: "/romantic-couple-wedding-portrait-by-lake.jpg",
  },
  {
    id: "john-miranda",
    number: "02",
    names: "John & Miranda",
    category: "Wedding",
    date: "Aug 15 2024",
    description:
      "An enchanting garden wedding celebration filled with joy, laughter, and confetti showers. John and Miranda's special day was a beautiful blend of traditional elegance and modern romance, set against a backdrop of lush greenery.",
    image: "/wedding-couple-with-confetti-outdoor-celebration.jpg",
    thumbnail: "/wedding-couple-with-confetti-outdoor-celebration.jpg",
  },
  {
    id: "stacy-portrait",
    number: "03",
    names: "Stacy",
    category: "Portrait",
    date: "Mar 22 2024",
    description:
      "A sophisticated portrait session capturing Stacy's confident and professional persona. The clean, minimalist approach highlights her natural beauty and charismatic personality through timeless black and white photography.",
    image: "/professional-woman-portrait-white-blazer.jpg",
    thumbnail: "/professional-woman-portrait-white-blazer.jpg",
  },
  {
    id: "emma-birthday",
    number: "04",
    names: "Emma's 30th",
    category: "Birthday",
    date: "Sep 10 2024",
    description:
      "A vibrant birthday celebration capturing precious moments of joy and laughter. Emma's milestone birthday was filled with loved ones, beautiful decor, and unforgettable memories that will be cherished for years to come.",
    image: "/elegant-birthday-party-celebration-balloons.jpg",
    thumbnail: "/elegant-birthday-party-celebration-balloons.jpg",
  },
  {
    id: "tech-conference",
    number: "05",
    names: "Tech Summit 2024",
    category: "Events",
    date: "Nov 05 2024",
    description:
      "Corporate event coverage capturing keynote speakers, networking moments, and the energy of innovation. This tech conference brought together industry leaders and captured the essence of collaboration and forward thinking.",
    image: "/corporate-event-conference-speakers-networking.jpg",
    thumbnail: "/corporate-event-conference-speakers-networking.jpg",
  },
  {
    id: "maternity-sarah",
    number: "06",
    names: "Sarah & Baby",
    category: "Others",
    date: "Dec 18 2024",
    description:
      "A tender maternity session celebrating the anticipation and love of expecting parents. Soft natural light and intimate poses capture this precious time of growth and the beautiful journey into parenthood.",
    image: "/maternity-pregnancy-portrait-sunset-outdoors.jpg",
    thumbnail: "/maternity-pregnancy-portrait-sunset-outdoors.jpg",
  },
]

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentItem = portfolioItems[currentIndex]
  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
        setIsAnimating(false)
      }, 500)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])



  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
        setIsAnimating(false)
      }, 500)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 500)
    }
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800">Featured Story</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className={`space-y-6 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <div className="text-8xl md:text-9xl font-serif text-stone-200">{currentItem.number}</div>
            <div>
              <div className="text-sm tracking-wider uppercase text-stone-400 mb-2">{currentItem.category}</div>
              <h3 className="text-3xl font-serif text-stone-800">{currentItem.names}</h3>
            </div>
            <p className="text-stone-600 leading-relaxed">{currentItem.description}</p>
            <Link to={`/portfolio/${currentItem.id}`}>
              <Button variant="outline" className="border-stone-400 text-stone-700 hover:bg-stone-100 bg-transparent">
                VIEW GALLERY
              </Button>
            </Link>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 pt-6">
              <button
                onClick={handlePrev}
                className="text-stone-500 hover:text-stone-800 transition-colors"
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="flex gap-2">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-stone-600" : "w-2 bg-stone-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="text-stone-500 hover:text-stone-800 transition-colors"
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className={`relative transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <div className="relative h-[600px] overflow-hidden">
              <img
                src={currentItem.image || "/placeholder.svg"}
                alt={currentItem.names}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* View All Portfolio Link */}
        <div className="mt-16 text-center">
          <Link to="/portfolio">
            <Button className="bg-stone-600 hover:bg-stone-700 text-white px-8">VIEW ALL PORTFOLIO</Button>
          </Link>
        </div>
      </div>
          <div className="mt-24 bg-stone-50 p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-stone-800 mb-4">What Clients Are Saying</h3>
          </div>

          <FeedBack/>
        </div>
        
    </section>
  )
}
