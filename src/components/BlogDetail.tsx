

import { ArrowLeft, ArrowRight } from "lucide-react"
import NotFound from "./notfound"
import { Link, useParams } from "react-router-dom"
import { Footer } from "./Footer"
import { motion } from "framer-motion"

const blogPosts: Record<
  string,
  {
    title: string
    category: string
    date: string
    heroImage: string
    featuredImage: string
    content: {
        type:string
        text:string
  }[]
}
>  = {
  "accessorizing-your-wedding-look": {
    title: "Accessorizing Your Wedding Look: From Veils To Shoes",
    category: "Wedding",
    date: "June 3, 2023",
    heroImage: "/images/image.png",
    featuredImage: "/bride-in-elegant-lace-back-dress-outdoor.jpg",
    content: [
      {
        type: "paragraph",
        text: "Choosing the perfect accessories can make or break your wedding day look. From delicate veils to stunning shoes, each element contributes to creating your dream bridal ensemble. Let me guide you through the essential accessories that will complete your wedding day style.",
      },
      {
        type: "heading",
        text: "Veils",
      },
      {
        type: "paragraph",
        text: "Veils add an air of romance and tradition. Opt for a longer, floor-length veil if you have a simpler or minimalistic wedding dress. If your dress is elaborate with lace and embellishments, a fingertip-length or shoulder-length veil will complement without overwhelming. Consider the veil's edging - raw edge for modern looks, lace edge for romantic vibes, or ribbon trim for classic elegance.",
      },
      {
        type: "heading",
        text: "Jewelry",
      },
      {
        type: "paragraph",
        text: "Less is often better when it comes to bridal jewelry. If you're wearing a dress with an elaborate neckline or back detail, skip the necklace and focus on beautiful earrings. For strapless or simpler necklines, a delicate pendant or statement necklace can add the perfect finishing touch. Remember to consider your hairstyle when choosing earrings - updos showcase chandelier earrings beautifully, while loose waves pair well with studs or small drops.",
      },
      {
        type: "heading",
        text: "Hair Accessories",
      },
      {
        type: "paragraph",
        text: "From flower crowns to jeweled combs, hair accessories add personality to your bridal look. Fresh flowers bring an organic, romantic feel perfect for outdoor or boho weddings. Vintage-inspired combs and pins add timeless elegance, while modern geometric pieces create a contemporary edge. Choose accessories that complement both your dress and your personal style.",
      },
      {
        type: "heading",
        text: "Belts and Sashes",
      },
      {
        type: "paragraph",
        text: "A belt or sash can completely transform a wedding dress silhouette. Thin, delicate belts with sparkle define the waist subtly, while wider sashes make a statement and can add a pop of color. Consider the proportion of your dress - a ball gown can handle a wider sash, while a sheath dress looks best with a narrow belt.",
      },
      {
        type: "heading",
        text: "Shoes",
      },
      {
        type: "paragraph",
        text: "Your wedding shoes need to look beautiful and feel comfortable for hours of standing, walking, and dancing. Consider the venue - stilettos sink into grass, while block heels or wedges provide stability for outdoor weddings. Think about your dress length too; if it's floor-length, you can prioritize comfort since the shoes won't be very visible. For shorter dresses or photo moments, choose shoes that reflect your personality and complement your overall aesthetic.",
      },
    ],
  },
  "choosing-perfect-venue": {
    title: "Choosing The Perfect Wedding Venue",
    category: "Wedding",
    date: "May 15, 2023",
    heroImage: "/beautiful-outdoor-wedding-venue.jpg",
    featuredImage: "/elegant-outdoor-wedding-venue-ceremony-setup.jpg",
    content: [
      {
        type: "paragraph",
        text: "Your wedding venue sets the tone for your entire celebration. It's one of the most important decisions you'll make in your wedding planning journey. Here's my guide to finding a location that perfectly captures your vision.",
      },
      {
        type: "heading",
        text: "Consider Your Guest Count",
      },
      {
        type: "paragraph",
        text: "Before falling in love with a venue, make sure it can comfortably accommodate your guest list. A space that's too large can feel empty, while one that's too small will feel cramped. Most venues have maximum capacities, but also consider the flow of the space for cocktail hours, dinner, and dancing.",
      },
    ],
  },
  "engagement-photo-tips": {
    title: "Top 10 Engagement Photo Tips",
    category: "Engagement",
    date: "April 22, 2023",
    heroImage: "/romantic-engagement-couple-sunset-portrait.jpg",
    featuredImage: "/couple-engagement-photo-intimate-moment.jpg",
    content: [
      {
        type: "paragraph",
        text: "Engagement photos are a wonderful opportunity to celebrate your love and create beautiful images you'll treasure forever. Here are my top tips for making your engagement session truly memorable.",
      },
      {
        type: "heading",
        text: "Choose A Meaningful Location",
      },
      {
        type: "paragraph",
        text: "Select a location that has significance to your relationship - where you first met, had your first date, or got engaged. Personal connection to the setting will help you feel more relaxed and create more authentic, emotional photos.",
      },
    ],
  },
  "wedding-timeline-guide": {
    title: "Creating Your Perfect Wedding Day Timeline",
    category: "Planning",
    date: "April 8, 2023",
    heroImage: "/wedding-day-getting-ready-details.jpg",
    featuredImage: "/wedding-timeline-planning-schedule.jpg",
    content: [
      {
        type: "paragraph",
        text: "A well-planned timeline is the secret to a stress-free wedding day. It ensures everything flows smoothly and you have time to enjoy every precious moment. Let me help you create the perfect schedule.",
      },
      {
        type: "heading",
        text: "Start With Your Ceremony Time",
      },
      {
        type: "paragraph",
        text: "Work backwards from your ceremony time to determine when hair and makeup should start, when to get into your dress, and when photos should begin. Allow buffer time for unexpected delays - things rarely run exactly on schedule on wedding day.",
      },
    ],
  },
}

export default function BlogPostPage() {
    const { id } = useParams<{ id: string }>()

      if (!id) {
        return <div className="p-10">Invalid portfolio item</div>
      }


  const post = blogPosts[id]

  if (!post) {
    return <NotFound/>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      {/* Hero Section */}
      <motion.div
        className="relative h-64 bg-background"
        variants={itemVariants}
      >
        <img
          src={post.heroImage || "/placeholder.svg"}
          alt="Blog post header"

          className="object-cover object-center h-full w-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
      </motion.div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <div className="text-xs tracking-[0.3em] text-secondary uppercase mb-4">Blog</div>
          <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <span className="text-stone-500">Date: {post.date}</span>
            <span className="text-foreground">
              Category:
              <span className="font-['Playfair_Display'] italic text-muted-foreground ml-2">{post.category}</span>
            </span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="relative h-[500px] mb-12"
          variants={itemVariants}
        >
          <img src={post.featuredImage || "/placeholder.svg"} alt={post.title}  className="object-cover w-full h-full" />
        </motion.div>

        {/* Article Content */}
        <motion.article
          className="prose prose-stone max-w-none"
          variants={containerVariants}
        >
          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <motion.p
                  key={index}
                  className="text-muted-foreground leading-relaxed mb-6"
                  variants={itemVariants}
                >
                  {block.text}
                </motion.p>
              )
            }
            if (block.type === "heading") {
              return (
                <motion.h2
                  key={index}
                  className="font-['Playfair_Display'] text-2xl text-primary mt-10 mb-4"
                  variants={itemVariants}
                >
                  {block.text}
                </motion.h2>
              )
            }
            return null
          })}
        </motion.article>

        {/* Navigation */}
        <motion.div
          className="flex items-center justify-between mt-16 pt-8 border-t border-primary"
          variants={itemVariants}
        >
          <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
            <Link
              to="/blogs"
              className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-xs tracking-wider uppercase">Back</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Link
              to="/portfolio"
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
            >
              <span className="text-xs tracking-wider uppercase">Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  )
}
