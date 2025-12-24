
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


export default function AboutPage() {
  const galleryImages = [
    {
      src: "/wedding3.jpg",
      alt: "Couple embracing at beach wedding",
    },
    {
      src: "/other12.jpg",
      alt: "Intimate wedding portrait",
    },
    {
      src: "/other13.jpg",
      alt: "Couple at sunset with mountain view",
    },
    {
      src: "/fam4.jpg",
      alt: "Wedding dress by window",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Image */}
        <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/babyshower17.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70  to-transparent " />
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">About</p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-secondary mb-12">My Story</h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My passion for photography began as a glimpse of what I now see and all the lovely emotions I feel.
              Getting to document the marriage and commitment of two people coming together is fuling knowing that
              the two of you really love each other and are willing to take that journey through life together.
            </p>

            <p>
              I started my journey into photography a little over 13 years ago, capturing my family, children, and just
              everyday moments of life. I am self taught. Finding people that trusted me to capture the special days of
              their life made me realize that photography was something that I was deeply passionate about.
            </p>

            <p>
              My work has been featured in numerous bridal magazines and blogs, which is so exciting for me. It really
              is an honor. But by far, my favorite thing is the gratitude and excitement of my Brides and Grooms for the
              photos I have captured for them. Nothing compares to that.
            </p>

            <p>Travelling across the country, I find so much fun. Especially for your one of a kind special day.</p>
          </div>

          <div className="mt-12">
            <p className="font-['Playfair_Display'] italic text-3xl text-primary mb-6">Godolias</p>
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-6 text-xs tracking-wider uppercase"
            >
              <Link to="/portfolio">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-white-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-black-800 leading-relaxed">
            "I Guarantee Stunning, High-Quality Wedding Photos that Will Perfectly Capture The Magic Of Your Special
            Day, Or Your Money Back."
          </p>
        </div>
      </section>

      {/* Your Story, My Lens Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-xs tracking-[0.3em] text-primary- uppercase mb-4">Crafting Memories</p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-primary/90 mb-8">
                Your Story, My Lens
              </h2>
              <p className="text-black-600 leading-relaxed mb-8">
                Your wedding day deserves to be immortalized with all the romance, love and excitement that makes it
                unique. From candid moments to the big moments, I work to ensure each photograph captures the story
                you'll want to relive for generations to come. Every frame is thoughtfully crafted with both artistry
                and authenticity in mind.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-6 text-xs tracking-wider uppercase"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4]">
                <img src="/kid7.jpg" alt="Couple embracing"  className="object-cover" />
                <div className="absolute bg-radial from-transparent via-background to-background"/>
              </div>
              <div className="relative aspect-[3/4] mt-12">
                <img src="/babyshower3.jpg" alt="Elegant staircase"  className="object-cover" />
                <div className="absolute bg-radial from-transparent via-background to-background"/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
