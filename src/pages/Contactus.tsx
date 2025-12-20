
import { MapPin, Phone } from "lucide-react"

export function ContactPage() {

  return (
    <section id="contact" className="py-24 bg-background">
          <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/bride-with-flower-crown-close-up-portrait.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent " />
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-16 ">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">Enquire Now</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Location</h3>
                <p className="text-foreground">Haile Garment</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Phone Numbers</h3>
                <p className="text-foreground">+251 983 604 770</p>
                <p className="text-foreground">+251 965 567 323</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px]">
            <img src="/wedding-ceremony-outdoor-nature-path.jpg" alt="Wedding ceremony" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
