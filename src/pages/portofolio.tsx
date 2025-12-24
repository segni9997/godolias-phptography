
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { Link } from "react-router-dom"

const portfolioCategories = [
  {
    id: "abebe-mekdes",
    names: "Abebe & Mekdes Wedding",
    category: "Wedding",
    date: "Jan 11 2025",
    image: "/wedding1.jpg",
  },
  {
    id: "selam-portrait",
    names: "Selam Portrait Session",
    category: "Portrait",
    date: "Mar 22 2024",
    image: "/other1.jpg",
  },
  {
    id: "kebede-tsegaye",
    names: "Kebede & Tsegaye Wedding",
    category: "Wedding",
    date: "Aug 15 2024",
    image: "/wedding2.jpg",
  },
  {
    id: "mekdes-birthday",
    names: "Mekdes's 30th Birthday",
    category: "Birthday",
    date: "Sep 10 2024",
    image: "/hbd1.jpg",
  },
  {
    id: "Biniam-cermony",
    names: "Biniam's  KG3 Graduation cerm.",
   category: "Graduations",
    date: "Nov 05 2024",
    image: "/cong1.jpg",
  },
  {
    id: "alem-baby",
    names: "Alem Baby Shower",
    category: "Others",
    date: "Dec 18 2024",
    image: "/babyshower1.jpg",
  },
  {
    id: "dawit-helen",
    names: "Dawit & Helen Wedding",
    category: "Wedding",
    date: "Jul 20 2024",
    image: "/wedding3.jpg",
  },
  {
    id: "Helen-Cermony",
    names: "Helen's Graduate cerm. 2024",
    category: "Graduations",
    date: "Oct 12 2024",
    image: "/congA4.jpg",
  },
  {
    id: "tesfayes-family",
    names: "Tesfayes Family Session",
    category: "Others",
    date: "May 08 2024",
    image: "/fam1.jpg",
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filteredPortfolio =
    activeFilter === "All" ? portfolioCategories : portfolioCategories.filter((item) => item.category === activeFilter)

  const categories = ["All", ...Array.from(new Set(portfolioCategories.map((item) => item.category)))]

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/other15.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70  to-transparent " />
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">PORTFOLIO</div>
            <h1 className="text-4xl md:text-5xl font-serif text-secondary ">Highlighted Works</h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/50 text-primary-foreground border  hover:border-primary hover:text-stone-900"
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
                <div className="bg-muted border-8 border-background overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.names}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-sm tracking-wider uppercase text-primary/80 mb-2">{item.category}</div>
                    <h3 className="text-2xl font-serif text-secondary mb-2">{item.names}</h3>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <p className="text-primary text-lg">No portfolio items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
