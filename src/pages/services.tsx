
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/Footer"
import { Link } from "react-router-dom"

const packages = [
  {
    title: "Wedding",
    image: "/wedding4.jpg",
    features: [
      "Full Day Coverage",
      "Professionally Edited Photos",
      "Online Gallery",
      "Videographer Option",
    ],
    description:
      "Enjoy full-day wedding coverage with professionally edited photos and a private online gallery to relive your special day.",
    price: "Birr 2999",
  },
  {
    title: "Portrait",
    image: "/kid3.jpg",
    features: [
      "Studio or Outdoor Session",
      "Guidance on Posing & Styling",
      "Professionally Edited Photos",
      "Digital Delivery",
    ],
    description:
      "A personalized portrait session designed to capture natural expressions and timeless beauty.",
    price: "Birr 399",
  },
  {
    title: "Mediation",
    image: "/shemglinna2.jpg",
    features: [
      "Traditional Ceremony Coverage",
      "Candid & Formal Shots",
      "Professionally Edited Photos",
      "Online Gallery",
    ],
    description:
      "Respectful documentation of Shimglina mediation ceremonies, preserving cultural values and meaningful moments.",
    price: "Birr 999",
  },
  {
    title: "Birthday",
    image: "/hbd14.jpg",
    features: [
      "Event Coverage",
      "Professionally Edited Photos",
      "Online Gallery",
      "Print Delivery Option",
    ],
    description:
      "Capture every joyful moment of your birthday celebration with vibrant and professionally edited photographs.",
    price: "Birr 799",
  },
  {
    title: "Baby Shower",
    image: "/babyshower3.jpg",
    features: [
      "Event Coverage",
      "Candid & Group Photos",
      "Professionally Edited Photos",
      "Online Gallery",
    ],
    description:
      "Celebrate new beginnings with beautiful baby shower photography full of warmth and emotion.",
    price: "Birr 699",
  },
  {
    title: "Graduation",
    image: "/congA6.jpg",
    features: [
      "Ceremony & Portrait Coverage",
      "Professionally Edited Photos",
      "Family & Friends Shots",
      "Online Gallery",
    ],
    description:
      "Mark your academic milestone with professional graduation photography that captures pride and achievement.",
    price: "Birr 599",
  },
  {
    title: "Family Session",
    image: "/fam1.jpg",
    features: [
      "Outdoor or Studio Session",
      "Multiple Family Members",
      "Professionally Edited Photos",
      "Print Packages Available",
    ],
    description:
      "Timeless family portraits that celebrate connection, love, and shared memories.",
    price: "Birr 599",
  },
  {
    title: "Event Coverage",
    image: "/fam3.jpg",
    features: [
      "Corporate & Social Events",
      "Full Event Coverage",
      "Professionally Edited Photos",
      "Fast Turnaround",
    ],
    description:
      "Professional photography for corporate, cultural, and private events captured with precision and creativity.",
    price: "Birr 1299",
  },
];

const faqs = [
  {
    question: "DO YOU TRAVEL FOR EVENTS?",
    answer:
      "Yes! I love to travel and capture beautiful moments wherever they happen. Travel fees may apply depending on the location, but I'm always excited to explore new places for your special event.",
  },
  {
    question: "HOW DO I SECURE A BOOKING?",
    answer:
      "To secure your booking, simply reach out through the contact form or email. Once we discuss your needs and you choose a package, a signed contract and deposit will reserve your date.",
  },
  {
    question: "HOW FAR IN ADVANCE SHOULD I BOOK YOU?",
    answer:
      "I recommend booking as early as possible, especially for weddings and major events. Popular dates fill up 6-12 months in advance, but I'm always happy to check my availability for your specific date.",
  },
  {
    question: "WHAT HAPPENS IF YOU ARE UNABLE TO ATTEND ON THE DAY OF THE EVENT?",
    answer:
      "Your peace of mind is important to me. I have backup photographers on standby and comprehensive insurance to ensure your event is covered no matter what. In the unlikely event of an emergency, you'll be fully taken care of.",
  },
  {
    question: "HOW LONG WILL IT TAKE TO RECEIVE THE PHOTOS?",
    answer:
      "You'll receive a sneak peek within 48 hours! Full galleries are typically delivered within 4-6 weeks for weddings and 2-3 weeks for other sessions, with every image professionally edited to perfection.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/babyshower17.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70  to-transparent " />
      </section>

      {/* Photography Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">SERVICES</div>
            <h1 className="text-4xl md:text-5xl font-serif text-secondary">Photography Packages</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden border border-background shadow-sm pt-0">
                <CardContent className="p-0">
                  <div className="relative h-72 overflow-hidden">
                    <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 ">
                    <h3 className="text-2xl font-serif text-primary mb-6 text-center italic">{pkg.title}</h3>

                    <ul className="space-y-3 mb-6 text-sm text-muted-foreground/70">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-center">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="w-16 h-px bg-muted mx-auto mb-6" />

                    <p className="text-sm text-foreground/60 text-center mb-6 leading-relaxed">{pkg.description}</p>

                    <div className="text-center">
                      <span className="text-xs text-stone-400 uppercase tracking-wider">starting </span>
                      <span className="text-2xl font-serif text-secondary">{pkg.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
          <Link to="/contact">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-6 text-xs tracking-wider uppercase">
              CONTACT US NOW
            </Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent">
          <img
            src="/shemglinna1.jpg"
            alt="Elegant flowers"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-serif text-primary leading-relaxed italic">
            "Turning Your Love Story Into Beautiful, Lasting Memories One Click At A Time."
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary/80">Any Queries?</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-Birr{index}`} className="border-t border-primary">
                <AccordionTrigger className="text-xs tracking-wider uppercase text-muted-foreground hover:text-secondary py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Quality Guaranteed Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <img
                src="/elegant-wedding-table-setting-with-candles-and-flo.jpg"
                alt="Wedding table setting"
                className="w-full h-[400px] object-cover"
              />
              <img
                src="/golden-wedding-rings-on-white-fabric-close-up.jpg"
                alt="Wedding rings"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="text-center md:text-left px-8">
              <h3 className="text-3xl md:text-4xl font-serif italic text-primary mb-6">Quality Guaranteed</h3>
              <p className="text-secondary/80 leading-relaxed mb-8">
                On your big day, you can count on me to turn fleeting moments into timeless treasures you will cherish
                for generations.
              </p>
              <Button className="bg-primary hover:bg-secondary/80 text-background px-8 py-6 text-xs tracking-wider uppercase">
                Visit My Blog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
