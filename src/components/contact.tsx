
import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react"

export function Contact() {

  return (
    <section id="contact" className="py-24 bg-background">
   
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-primary-foreground mb-2">
                  Contact Information
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground/90 mb-8">
                  Enquire Now
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/50 border-2 border-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary-foreground group-hover:border-primary-foreground">
                    <MapPin className="w-5 h-5 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground/90 mb-1">
                      Location
                    </h3>
                    <p className="text-primary-foreground">Haile Garment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/50 border-2 border-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary-foreground group-hover:border-primary-foreground">
                    <Phone className="w-5 h-5 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground/90 mb-1">
                      Phone Numbers
                    </h3>
                    <p className="text-primary-foreground">+251 983 604 770</p>
                    <p className="text-primary-foreground">+251 965 567 323</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-lg font-semibold text-primary-foreground/90 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/50 border-2 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 group"
                    >
                      <Facebook className="w-5 h-5 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/50 border-2 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-sky-500 hover:border-sky-500 group"
                    >
                      <Twitter className="w-5 h-5 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/50 border-2 border-secondary flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:border-pink-600 group"
                    >
                      <Instagram className="w-5 h-5 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
                    </a>
                  </div>
                  <p className="text-sm text-primary-foreground mt-3">
                    @GodoliasPhotography
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] md:h-auto">
            <img src="/shemglinna5.jpg" alt="Wedding ceremony" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
