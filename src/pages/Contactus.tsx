import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";

export function ContactPage() {
  return (
    <section id="contact" className="py-24 bg-background">
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/other15.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent " />
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-16 ">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">
            Enquire Now
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 ">
            <div className="flex items-start space-x-4">
              <div className="border-2 hover:border-0 border-primary rounded-full p-2 w-8 h-8 flex items-center align-middle justify-center ">

              <MapPin className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  Location
                </h3>
                <p className="text-foreground text-xl">Haile Garment</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="border-2 hover:border-0 border-primary rounded-full p-2 w-8 h-8 flex items-center align-middle justify-center ">
                 <Phone className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Phone Numbers
                </h3>
                <p className="text-foreground">+251 983 604 770</p>
                <p className="text-foreground">+251 965 567 323</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="border-2 hover:border-0 border-primary rounded-full p-2 w-8 h-8 flex items-center align-middle justify-center ">

              <Facebook className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Godolias photography
                </h3>
               
              </div>
            </div>
               <div className="flex items-start space-x-4">
              <div className="border-2 hover:border-0 border-primary rounded-full p-2 w-8 h-8 flex items-center align-middle justify-center ">

              <Twitter className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Godolias photography
                </h3>
               
              </div>
            </div>
                    <div className="flex items-start space-x-4">
              <div className="border-2 hover:border-0 border-primary rounded-full p-2 w-8 h-8 flex items-center align-middle justify-center ">

              <Instagram className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Godolias photography
                </h3>
               
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] ">
            {/* <img src="/shemglinna1.jpg" alt="Wedding ceremony" className="w-full h-full object-cover" /> */}
            <iframe
           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d493.3122306201046!2d36.35624725218623!3d8.450869920393197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjcnMDMuNSJOIDM2wrAyMScyNC4yIkU!5e0!3m2!1sen!2set!4v1766602223517!5m2!1sen!2set"

              className="w-full h-[450px] rounded-xl border-0"
              loading="lazy"

            />
           
          </div>
        </div>
      </div>
    </section>
  );
}
