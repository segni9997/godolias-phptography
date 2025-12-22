"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FeedBack from "./FedBacks"

const portfolioItems = [
  {
    id: "abeti-kalkidan",
    number: "01",
    names: "Abeti & Kalkidan",
    category: "Wedding",
    date: "Jan 11 2025",
    description:
      "Abeti and Kalkidan’s wedding was a heartfelt celebration of love and unity. From the quiet preparation moments to the joyful ceremony and reception, every detail reflected elegance, tradition, and deep connection.",
    image: "/wedding1.jpg",
    thumbnail: "/wedding3.jpg",
  },
  {
    id: "Mediation-Ruth",
    number: "02",
    names: "Tesfaye & Ruth",
    category: "Mediation",
    date: "Aug 15 2024",
    description:
      "A traditional Shimglina mediation ceremony capturing the respect, wisdom, and cultural beauty of Ethiopian pre-wedding customs. The gathering symbolized unity between families and the beginning of a shared journey.",
    image: "/shemglinna3.jpg",
    thumbnail: "/shemglinna.jpg",
  },
  {
    id: "rahel-portrait",
    number: "03",
    names: "Rahel",
    category: "Portrait",
    date: "Mar 22 2024",
    description:
      "A clean and expressive portrait session highlighting Rahel’s confidence and natural beauty. Soft lighting and minimal composition were used to create timeless and elegant portraits.",
    image: "/other11.jpg",
    thumbnail: "/other14.jpg",
  },
  {
    id: "yonas-birthday",
    number: "04",
    names: "Yonas’ Birthday",
    category: "HBD",
    date: "Sep 10 2024",
    description:
      "A joyful birthday celebration filled with laughter, music, and unforgettable moments. Yonas’ special day brought friends and family together to celebrate life and happiness.",
    image: "/hbd6.jpg",
    thumbnail: "/hbd6.jpg",
  },
  {
    id: "babyshower-mekdes",
    number: "05",
    names: "Mekdes & Baby",
    category: "Baby Shower",
    date: "Nov 05 2024",
    description:
      "A warm and loving baby shower celebrating new life and motherhood. Every moment reflected joy, anticipation, and the support of family and close friends.",
    image: "/babyshower17.jpg",
    thumbnail: "/babyshower17.jpg",
  },
  {
    id: "family-event-addis",
    number: "06",
    names: "Addis Family Gathering",
    category: "Family Events",
    date: "Dec 18 2024",
    description:
      "A heartfelt family gathering captured with care and authenticity. Genuine connections, shared laughter, and meaningful moments reflected the beauty of togetherness.",
    image: "/fam3.jpg",
    thumbnail: "/fam3.jpg",
  },
];


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
    <section id="portfolio" className="py-24 bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">Featured Story</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className={`space-y-6 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <div className="text-8xl md:text-9xl font-serif text-secondary">{currentItem.number}</div>
            <div>
              <div className="text-sm tracking-wider uppercase text-primary mb-2">{currentItem.category}</div>
              <h3 className="text-3xl font-serif text-primary">{currentItem.names}</h3>
            </div>
            <p className="text-secondary leading-relaxed">{currentItem.description}</p>
            <Link to={`/portfolio/${currentItem.id}`}>
              <Button variant="outline" className="border-primary text-secondary hover:bg-primary/20 bg-transparent">
                VIEW GALLERY
              </Button>
            </Link>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 pt-6">
              <button
                onClick={handlePrev}
                className="text-secondary hover:text-primary transition-colors"
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
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-secondary"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="text-secondary hover:text-primary transition-colors"
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
            <Button className="bg-primary-600 hover:bg-primary-700 text-background px-8">VIEW ALL PORTFOLIO</Button>
          </Link>
        </div>
      </div>
          <div className="mt-24 bg-background p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-primary mb-4">What Clients Are Saying</h3>
          </div>

          <FeedBack/>
        </div>
        
    </section>
  )
}
