import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";
// import { GalleryWall } from "./GalleryWall";

export function ContactPage() {
  return (
    <section id="contact" className="bg-background   pb-24">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/other15.jpg"
          alt="Contact header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-foreground">
            <div className="text-sm tracking-[0.3em] uppercase mb-4 font-light">
              Let's Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-serif">Get In Touch</h1>
          </div>
        </div>
      </div>

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d493.3122306201046!2d36.35624725218623!3d8.450869920393197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjcnMDMuNSJOIDM2wrAyMScyNC4yIkU!5e0!3m2!1sen!2set!4v1766602223517!5m2!1sen!2set"
                className="w-full h-full border-0"
                loading="lazy"
                title="Godolias Photography Location"
              />
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
