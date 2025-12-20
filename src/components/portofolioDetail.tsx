import { useParams } from "react-router-dom"
import { Footer } from "./Footer"
import NotFound from "./notfound"


const portfolioData: Record<
  string,
  {
    names: string
    category: string
    date: string
    description: string
    mainImage: string
    gallery: string[]
  }
> = {
  "fiona-mikael": {
    names: "Fiona & Mikael",
    category: "Wedding",
    date: "Jan 11 2025",
    description:
      "For Stacey's wedding, we collaborated with over and elegance, we captured picturesque between the for her incredible day. It was an absolute pleasure capturing every passionate moment of her wedding day—from preparation to celebration.",
    mainImage: "/romantic-couple-wedding-portrait-by-lake-golden-ho.jpg",
    gallery: [
      "/couple-kissing-golden-field-sunset-wedding.jpg",
      "/wedding-ceremony-outdoor-nature-path.jpg",
      "/bride-and-groom-sitting-wooden-bridge-romantic.jpg",
      "/wedding-reception-outdoor-evening-lights.jpg",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  "john-miranda": {
    names: "John & Miranda",
    category: "Wedding",
    date: "Aug 15 2024",
    description:
      "An enchanting garden wedding celebration filled with joy, laughter, and confetti showers. The beautiful outdoor ceremony was surrounded by lush greenery and the warm embrace of family and friends.",
    mainImage: "/wedding-couple-with-confetti-outdoor-celebration.jpg",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "stacy-portrait": {
    names: "Stacy",
    category: "Portrait",
    date: "Mar 22 2024",
    description:
      "A sophisticated portrait session capturing confidence and professional elegance. This minimalist approach focuses on natural beauty and authentic personality through timeless photography.",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  "emma-birthday": {
    names: "Emma's 30th",
    category: "Birthday",
    date: "Sep 10 2024",
    description:
      "A vibrant milestone celebration filled with loved ones, beautiful decor, and unforgettable moments. Emma's 30th birthday party captured the joy and excitement of this special occasion.",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "tech-conference": {
    names: "Tech Summit 2024",
    category: "Events",
    date: "Nov 05 2024",
    description:
      "Professional corporate event coverage capturing keynote presentations, networking moments, and the innovative spirit of the tech industry. This conference brought together leaders and visionaries.",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
    ],
  },
  "maternity-sarah": {
    names: "Sarah & Baby",
    category: "Others",
    date: "Dec 18 2024",
    description:
      "A tender maternity session celebrating the beautiful journey into parenthood. Soft natural light and intimate moments capture the love and anticipation of expecting parents.",
    mainImage: "/placeholder.svg?height=800&width=1200",
    gallery: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
    ],
  },
}

export default function PortfolioItemPage() {
const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div className="p-10">Invalid portfolio item</div>
  }

  const item = portfolioData[id]

  if (!item) {
    return <NotFound/>
  }


  return (
    <div className="min-h-screen bg-background">

      {/* Hero Image */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="/placeholder.svg?height=600&width=1600"
          alt="Portfolio header"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Portfolio Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">PORTFOLIO</div>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">{item.names}</h1>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div>
                <span className="text-muted-foreground/90">Date: </span>
                <span className="font-serif text-muted-foreground">{item.date}</span>
              </div>
              <div>
                <span className="text-muted-foreground/90">Category: </span>
                <span className="font-serif text-muted-foreground/80">{item.category}</span>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <img src={item.mainImage || "/placeholder.svg"} alt={item.names} className="w-full h-auto" />
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-muted-foreground/80 leading-relaxed">{item.description}</p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.gallery.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${index === 0 || index === 3 ? "md:col-span-2 h-96" : "h-96"}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${item.names} - Photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
