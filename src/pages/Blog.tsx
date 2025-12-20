import BlogCards, { type items } from "@/components/blogCards";
import { motion } from "framer-motion"

const blogData: items[] = [
  {
    heading: "engagement-photo-tips",
    img: "/elegant-birthday-party-celebration-balloons.jpg",
    description: "How we craft unforgettable wedding experiences.",
    date: "2025-03-12",
    category: "Weddings",
  },
  {
    heading: "Luxury Event Styling Trends",
    img: "/professional-woman-portrait-background-blazer.jpg",
    description: "Modern styling ideas that elevate any event.",
    date: "2025-02-28",
    category: "Styling",
  },
  {
    heading: "Capturing Golden Moments",
    img: "/woman-in-hat-outdoor-field-portrait.jpg",
    description: "Photography tips for timeless memories.",
    date: "2025-02-10",
    category: "Photography",
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
          src="/bride-with-flower-crown-close-up-portrait.jpg"
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
            <h1 className="uppercase leading-tight">BLOG</h1>
            <span className="text-xl">Latest Stories</span>
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
