

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
  "abebe-mekdes-wedding": {
    title: "Abebe & Mekdes Wedding",
    category: "Wedding",
    date: "2025-03-12",
    heroImage: "/wedding4.jpg",
    featuredImage: "/wedding1.jpg",
    content: [
      {
        type: "paragraph",
        text: "How we craft unforgettable wedding experiences.How we craft unforgettable wedding experiences.",
      },
    ],
  },
  "selam-portrait-session": {
    title: "Selam Portrait Session",
    category: "Portrait",
    date: "2025-02-28",
    heroImage: "/other15.jpg",
    featuredImage: "/kid1.jpg",
    content: [
      {
        type: "paragraph",
        text: "Modern styling ideas that elevate any event.",
      },
    ],
  },
  "kebede-tsegaye-wedding": {
    title: "Kebede & Tsegaye Wedding",
    category: "Wedding",
    date: "2025-02-10",
    heroImage: "/wedding2.jpg",
    featuredImage: "/wedding3.jpg",
    content: [
      {
        type: "paragraph",
        text: "Photography tips for timeless memories.",
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
