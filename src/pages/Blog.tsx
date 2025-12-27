import BlogCards, { type items } from "@/components/blogCards";
import { motion } from "framer-motion"

const blogData: items[] = [
  {
    heading: "abebe-mekdes-wedding",
    img: "/wedding4.jpg",
    description: "How we craft unforgettable wedding experiences.",
    date: "2025-03-12",
    category: "Wedding",
  },
  {
    heading: "selam-portrait-session",
    img: "/other15.jpg",
    description: "Modern styling ideas that elevate any event.",
    date: "2025-02-28",
    category: "Portrait",
  },
  {
    heading: "kebede-tsegaye-wedding",
    img: "/wedding2.jpg",
    description: "Photography tips for timeless memories.",
    date: "2025-02-10",
    category: "Wedding",
  },
];
export default function Blog() {
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
    <>
      <motion.section
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/babyshower11.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />
      </motion.section>
      <div className="max-w-7xl mx-auto mt-10">
        <motion.div
          className="body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="headers flex justify-center flex-col items-center gap-1 mt-10"
            variants={itemVariants}
          >
          
              <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">BLOG</div>
            <h1 className="text-4xl md:text-5xl font-serif text-secondary ">Latest Stories</h1>
          </div>
          </motion.div>
          <motion.div
            className="mt-10 mb-10"
            variants={itemVariants}
          >
            <BlogCards items={blogData} />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
