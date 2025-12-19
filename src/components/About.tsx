import { Quote } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function About() {
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
    <motion.section
      id="about"
      className="py-24 bg-white-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="mb-5" variants={itemVariants}>
        <div className="text-xs tracking-[0.3em] uppercase text-stone-500 text-center">Award Winning</div>

        <h2 className="text-4xl md:text-5xl font-serif text-center text-stone-800 leading-tight text-balance">
          Experience The Perfect Blend
          <br />
          Of Creativity And Elegance In
          <br />
          Every Frame
        </h2>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-row justify-center items-center gap-6"
          variants={containerVariants}
        >
          {/* Image */}
          <motion.div
            className="relative h-[600px] vorder w-1/2"
            variants={itemVariants}
          >
            <img src="/photographer1.jpg" alt="Godolias - Photographer" className="w-full h-full object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 w-1/2"
            variants={containerVariants}
          >
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Quote className="w-24 h-24 text-black-300" />
            </motion.div>

            <motion.div className="pt-2" variants={itemVariants}>
              <h3 className="text-4xl font-serif text-black-800 mb-4">Hello, My Name Is Godolias</h3>
              <p className="text-black-600 leading-relaxed mb-6">
                I am a professional photographer based in beautiful Ethiopia. With over a decade of
                experience, I've had the privilege of capturing love stories through my lens. I believe in creating
                timeless images that speak volumes about the joy, passion, and romance of your special day. I strive to
                capture each couple's unique journey, transforming each moment into everlasting memories for you.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">LEARN MORE</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
