import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Wedding",
    image: "/outdoor-wedding-ceremony-with-guests.jpg",
  },
  {
    title: "Portrait",
    image: "/woman-in-hat-outdoor-portrait-photography.jpg",
  },
  {
    title: "Engagement",
    image: "/couple-engagement-photo-intimate-moment.jpg",
  },
];

export function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      id="services"
      className="py-24 bg-black/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="text-xs tracking-[0.3em] uppercase text-orange-400 mb-4">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-orange-200">
            Photography Packages
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg group pt-0 bg-black/30  ">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 text-center ">
                    <h3 className="text-2xl font-serif text-orange-400 mb-6">
                      {pkg.title}
                    </h3>
                    <div className="w-12 h-px bg-black-300 mx-auto mb-6" />
                    {/* <Button
                      variant="link"
                      className="text-orange-400 hover:text-orange-900 text-sm tracking-wider"
                    >
                      Learn More
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
          >
            VIEW DETAILS
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="relative mt-4 bg-black/50 overflow-hidden"
        variants={itemVariants}
      >
        {/* CAPTION BOX */}
        <motion.div
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            md:left-auto md:top-34 md:right-24 md:translate-x-0 md:translate-y-0
            z-20
            w-[90%] md:w-96
            md:h-96
            md:bg-white/60 bg-white/55 backdrop-blur-md
            p-6
            rounded-xl
            shadow-xl
          "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Creative, Passionate, Artisan.
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-800 leading-relaxed">
            I will ensure your wedding day unfolds seamlessly, creating a stress-free
            atmosphere that allows you to be fully present and enjoy your day. I take
            great care in understanding your vision and capturing every beautiful
            moment exactly as you envisioned it. Your memories are safe with me, and I
            can't wait to create art that captures your love for a lifetime.
          </p>
        </motion.div>

        {/* IMAGE */}
        <div className="flex justify-start items-center">
          <div className="relative w-full md:w-2/3 md:h-[600px]">
            <img
              src="/photographer.jpg"
              alt="Godolias - Photographer"
              className="w-full h-full object-cover"
            />

            {/* Optional dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-radial from-transparent to-black"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
