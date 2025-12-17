
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { Link } from "react-router-dom"

const portfolioCategories = [
  {
    id: "fiona-mikael",
    names: "Fiona & Mikael",
    category: "Wedding",
    date: "Jan 11 2025",
    image: "/romantic-couple-wedding-portrait-by-lake.jpg",
  },
  {
    id: "stacy-portrait",
    names: "Stacy",
    category: "Portrait",
    date: "Mar 22 2024",
    image: "/professional-woman-portrait-white-blazer.jpg",
  },
  {
    id: "john-miranda",
    names: "John & Miranda",
    category: "Wedding",
    date: "Aug 15 2024",
    image: "/wedding-couple-with-confetti-outdoor-celebration.jpg",
  },
  {
    id: "emma-birthday",
    names: "Emma's 30th",
    category: "Birthday",
    date: "Sep 10 2024",
    image: "/elegant-birthday-party-celebration-balloons.jpg",
  },
  {
    id: "tech-conference",
    names: "Tech Summit 2024",
    category: "Events",
    date: "Nov 05 2024",
    image: "/corporate-event-conference-speakers-networking.jpg",
  },
  {
    id: "maternity-sarah",
    names: "Sarah & Baby",
    category: "Others",
    date: "Dec 18 2024",
    image: "/maternity-pregnancy-portrait-sunset-outdoors.jpg",
  },
  {
    id: "robert-lisa",
    names: "Robert & Lisa",
    category: "Wedding",
    date: "Jul 20 2024",
    image: "/elegant-wedding-ceremony-outdoor-venue.jpg",
  },
  {
    id: "corporate-gala",
    names: "Annual Gala 2024",
    category: "Events",
    date: "Oct 12 2024",
    image: "/formal-gala-event-elegant-venue.jpg",
  },
  {
    id: "family-johnson",
    names: "The Johnsons",
    category: "Others",
    date: "May 08 2024",
    image: "/family-portrait-outdoor-natural-setting.jpg",
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filteredPortfolio =
    activeFilter === "All" ? portfolioCategories : portfolioCategories.filter((item) => item.category === activeFilter)

  const categories = ["All", ...Array.from(new Set(portfolioCategories.map((item) => item.category)))]

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/bride-with-flower-crown-close-up-portrait.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/70  to-transparent " />
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">PORTFOLIO</div>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800">Highlighted Works</h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-stone-700 text-white"
                    : "bg-stone-100 text-stone-600 border border-stone-300 hover:border-stone-700 hover:text-stone-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Link key={item.id} to={`/portfolio/${item.id}`} className="group">
                <div className="bg-stone-200 border-8 border-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.names}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-sm tracking-wider uppercase text-stone-400 mb-2">{item.category}</div>
                    <h3 className="text-2xl font-serif text-stone-800 mb-2">{item.names}</h3>
                    <div className="text-sm text-stone-500">{item.date}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">No portfolio items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
