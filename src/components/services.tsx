// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// const packages = [
//   {
//     title: "Wedding",
//     image: "/wedding4.jpg",
//   },
//   {
//     title: "Portrait",
//     image: "/other15.jpg",
//   },
//   {
//     title: "Engagement",
//     image: "/shemglinna1.jpg",
//   },
// ];
const packages = [
  {
    title: "Wedding",
    image: "/wedding4.jpg",
  },
  {
    title: "Portrait",
    image: "/kid3.jpg",
  },
  {
    title: "Mediation",
    image: "/shemglinna2.jpg",
  },


  {
    title: "Birthday",
    image: "/hbd14.jpg",
  },
  {
    title: "Baby Shower",
    image: "/babyshower3.jpg",
  },
  {
    title: "Graduation",
    image: "/congA6.jpg",
  },
  {
    title: "Family Session",
    image: "/fam1.jpg",
  },
  {
    title: "Event Coverage",
    image: "/fam3.jpg",
  },
];

export function Services() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //       delayChildren: 0.1,
  //     },
  //   },
  // }
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }}
      // variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">
            Photography Packages
          </h2>
        </motion.div>

<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12"
  variants={gridVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg group pt-0 bg-background/30  ">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 text-center ">
                    <h3 className="text-2xl font-serif text-foreground mb-6">
                      {pkg.title}
                    </h3>
                    <div className="w-12 h-px bg-background-300 mx-auto mb-6" />
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

        {/* <motion.div className="text-center" variants={itemVariants}>
          <Button
            size="lg"
            className="bg-primary hover:bg-secondary px-8"
          >
            VIEW DETAILS
          </Button>
        </motion.div> */}
      </div>
      <motion.div
        className="relative mt-4 bg-background overflow-hidden"
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
            md:bg-primary bg-primary/70 backdrop-blur-md
            p-6
            rounded-xl
            shadow-xl
          "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Creative, Passionate, Artisan.
          </h1>

          <p className="mt-4 text-sm md:text-base text-primary-foreground leading-relaxed">
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
            <div className="absolute inset-0 bg-radial from-transparent via-background to-background"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
