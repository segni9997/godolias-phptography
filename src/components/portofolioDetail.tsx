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
  "1": {
    names: "Abebe & Mekdes Wedding",
    category: "Wedding",
    date: "Jan 11 2025",
    description:
      "A beautiful wedding celebration capturing love, joy, and unforgettable moments. Elegant decor and intimate moments were highlighted throughout the day.",
    mainImage: "/weddingn2.jpg",
    gallery: [
      "/weddingn2.jpg",
   
   
      "/weddingn3.jpg",
      "/weddingn3.jpg",

   
      // "/couple1.jpg",
    ],
  },
  "2": {
    names: "Selam Portrait Session",
    category: "Portrait",
    date: "Mar 22 2024",
    description:
      "A sophisticated portrait session capturing confidence and authentic personality. The minimalist style highlights natural beauty and timeless elegance.",
    mainImage: "/shemglinna1.jpg",
    gallery: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  "3": {
    names: "Kebede & Tsegaye Wedding",
    category: "Wedding",
    date: "Aug 15 2024",
    description:
      "An enchanting outdoor wedding full of joy, laughter, and unforgettable memories. Surrounded by family and friends, every moment was magical.",
    mainImage: "/wedding2.jpg",
    gallery: [
      "/wedding4.jpg",
      "/wedding3.jpg",
      "/wedding1.jpg",
     
    ],
  },
  "4": {
    names: "Mekdes's 30th Birthday",
    category: "Birthday",
    date: "Sep 10 2024",
    description:
      "A vibrant milestone celebration filled with joy, friends, and family. Every detail was captured to remember this special birthday forever.",
    mainImage: "/hbd13.jpg",
    gallery: [
      "/hbd12.jpg",
      "/hbd13.jpg",
      "/hbd14.jpg",
      "/hbd6.jpg",
  
    ],
  },
  "5": {
    names: "Biniam's KG3 Graduation Ceremony",
    category: "Graduations",
    date: "Nov 05 2024",
    description:
      "Celebrating Biniam's milestone in KG3 graduation with proud family and joyful moments captured in a memorable ceremony.",
    mainImage: "/cong1.jpg",
    gallery: [
      "/cong1.jpg",
      "/cong2.jpg",
      "/cong3.jpg",
      // "/placeholder.svg?height=600&width=900",
      // "/placeholder.svg?height=600&width=600",
      // "/placeholder.svg?height=600&width=900",
    ],
  },
  "6": {
    names: "Alem Baby Shower",
    category: "Others",
    date: "Dec 18 2024",
    description:
      "A cozy and joyful baby shower celebration filled with love, laughter, and the anticipation of welcoming a new life into the family.",
    mainImage: "/other2.jpg",
    gallery: [
      "/other3.jpg",
      "/other5.jpg",
      "/other7.jpg",
      "/other8.jpg",
      "/other9.jpg",
      "/other10.jpg",
    ],
  },
  // "dawit-helen": {
  //   names: "Dawit & Helen Wedding",
  //   category: "Wedding",
  //   date: "Jul 20 2024",
  //   description:
  //     "Capturing the love and excitement of Dawit & Helen's wedding day with elegance, heartfelt moments, and family celebrations.",
  //   mainImage: "/wedding3.jpg",
  //   gallery: [
  //     "/placeholder.svg?height=600&width=900",
  //     "/placeholder.svg?height=600&width=600",
  //     "/placeholder.svg?height=600&width=600",
  //     "/placeholder.svg?height=600&width=900",
  //     "/placeholder.svg?height=600&width=600",
  //     "/placeholder.svg?height=600&width=900",
  //   ],
  // },
  "7": {
    names: "Helen's Graduation Ceremony 2024",
    category: "Graduations",
    date: "Oct 12 2024",
    description:
      "A proud moment celebrating Helen's graduation, capturing her achievements and the joy shared with family and friends during the ceremony.",
    mainImage: "/congA4.jpg",
    gallery: [
      "/congA5.jpg",
      "/congA6.jpg",
      "/congQ6.jpg",
      // "/placeholder.svg?height=600&width=900",
      // "/placeholder.svg?height=600&width=600",
      // "/placeholder.svg?height=600&width=900",
    ],
  },
  "8": {
    names: "Tesfayes Family Session",
    category: "Others",
    date: "May 08 2024",
    description:
      "A warm family session capturing love, connection, and joyful moments shared among the Tesfayes family in a natural and intimate setting.",
    mainImage: "/kid1.jpg",
    gallery: [
      "/kid2.jpg",
      "/kid3.jpg",
      "/kid4.jpg",
      "/kid5.jpg",
      "/kid6.jpg",
      "/kid7.jpg",
    ],
  },
   "9": {
    names: "Tesfayes Family Session",
    category: "couples",
    date: "May 08 2024",
    description:
      "A warm family session capturing love, connection, and joyful moments shared among the Tesfayes family in a natural and intimate setting.",
    mainImage: "/couple1.jpg",
    gallery: [
      
    ],
  },
};


export default function PortfolioItemPage() {
const { id } = useParams<{ id: string }>()
console.log(id)
  if (!id) {
    return <div className="p-10">Invalid portfolio item</div>
  }

  const item = portfolioData[id]
  console.log("item", item)

  if (!item) {
    return <NotFound/>
  }


  return (
    <div className="min-h-screen bg-background">

      {/* Hero Image */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={item.gallery[1]}
          alt="Portfolio header"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Portfolio Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">PORTFOLIO</div>
            {/* <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">{item.names}</h1> */}
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
                className={`relative overflow-hidden hover:overflow-visible ${index === 0 || index === 3 ? "md:col-span-2 h-96" : "h-96"}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${item.names} - Photo ${index + 1}`}
                  className="w-full h-full object-contain  hover:scale-200  transition-transform duration-500"
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
