
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/Footer"
import { Link } from "react-router-dom"

const packages = [
  {
    title: "Wedding",
    image: "/outdoor-wedding-ceremony-with-guests.jpg",
    features: ["Full Day Coverage", "Professionally Edited Photos", "Online Gallery", "Videographer Option"],
    description:
      "Enjoy full day coverage, professionally edited photos, and a beautiful online gallery to share with family.",
    price: "$2999",
  },
  {
    title: "Engagement",
    image: "/couple-engagement-photo-intimate-moment.jpg",
    features: ["Professionally Edited Photos", "Online Gallery", "Choice of Location", "Videographer Option"],
    description: "Celebrate your love with a romantic engagement session complete with professional editing.",
    price: "$1999",
  },
  {
    title: "Birthday",
    image: "/elegant-birthday-party-celebration-balloons.jpg",
    features: ["Event Coverage", "Professionally Edited Photos", "Online Gallery", "Print Delivery Option"],
    description:
      "Capture every precious moment of your birthday celebration with stunning, professionally edited photographs.",
    price: "$799",
  },
  {
    title: "Portrait",
    image: "/woman-in-hat-outdoor-portrait-photography.jpg",
    features: ["In Studio / On Location", "Guidance on Posing & Dress", "Digital & Print Delivery", "Wardrobe Changes"],
    description: "Enjoy a personalized portrait session with expert guidance that is based on living your true self.",
    price: "$399",
  },
  {
    title: "Events",
    image: "/corporate-event-conference-speakers-networking.jpg",
    features: ["Corporate & Social Events", "Full Event Coverage", "Online Gallery", "Fast Turnaround"],
    description:
      "Professional event photography for corporate functions, galas, conferences, and special celebrations.",
    price: "$1299",
  },
  {
    title: "Family",
    image: "/happy-family-portrait-outdoor-natural-light.jpg",
    features: [
      "Outdoor / Studio Session",
      "Multiple Family Members",
      "Professionally Edited Photos",
      "Print Packages Available",
    ],
    description:
      "Preserve your family memories with timeless portraits that capture the love and connection you share.",
    price: "$599",
  },
]

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
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/bride-with-flower-crown-close-up-portrait.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/70  to-transparent " />
      </section>

      {/* Photography Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">SERVICES</div>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800">Photography Packages</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden border border-stone-200 shadow-sm">
                <CardContent className="p-0">
                  <div className="relative h-72 overflow-hidden">
                    <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-serif text-stone-800 mb-6 text-center italic">{pkg.title}</h3>

                    <ul className="space-y-3 mb-6 text-sm text-stone-600">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-center">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="w-16 h-px bg-stone-300 mx-auto mb-6" />

                    <p className="text-sm text-stone-600 text-center mb-6 leading-relaxed">{pkg.description}</p>

                    <div className="text-center">
                      <span className="text-xs text-stone-400 uppercase tracking-wider">starting </span>
                      <span className="text-2xl font-serif text-stone-800">{pkg.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
          <Link to="/contact">
            <Button className="bg-stone-500 hover:bg-stone-600 text-white px-8 py-6 text-xs tracking-wider uppercase">
              BOOK NOW
            </Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-stone-100">
          <img
            src="/white-peony-flowers-soft-romantic-background.jpg"
            alt="Elegant flowers"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-serif text-stone-800 leading-relaxed italic">
            "Turning Your Love Story Into Beautiful, Lasting Memories One Click At A Time."
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800">Any Queries?</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-t border-stone-200">
                <AccordionTrigger className="text-xs tracking-wider uppercase text-stone-600 hover:text-stone-900 py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-stone-600 leading-relaxed pb-6">
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
              <h3 className="text-3xl md:text-4xl font-serif italic text-stone-800 mb-6">Quality Guaranteed</h3>
              <p className="text-stone-600 leading-relaxed mb-8">
                On your big day, you can count on me to turn fleeting moments into timeless treasures you will cherish
                for generations.
              </p>
              <Button className="bg-stone-500 hover:bg-stone-600 text-white px-8 py-6 text-xs tracking-wider uppercase">
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
