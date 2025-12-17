import { Quote } from "lucide-react"
import { Button } from "./ui/button"

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-100">
     <div className="mb-5">
                <div className="text-xs tracking-[0.3em] uppercase text-stone-500 text-center">Award Winning</div>

            <h2 className="text-4xl md:text-5xl font-serif text-center text-stone-800 leading-tight text-balance">
              Experience The Perfect Blend
              <br />
              Of Creativity And Elegance In
              <br />
              Every Frame
            </h2>
     </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center items-center  gap-6">
          {/* Image */}
          <div className="relative h-[600px] vorder w-1/2">
            <img src="/photographer1.jpg" alt="Godolias - Photographer" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6   w-1/2">
            <div className="flex justify-center ">
              <Quote className="w-24 h-24 text-stone-300" />
            </div>

       

            <div className="pt-2">
              <h3 className="text-4xl font-serif text-stone-800 mb-4">Hello, My Name Is Godolias</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                I am a professional  photographer based in beautiful Ethiopia . With over a decade of
                experience, I've had the privilege of capturing love stories through my lens. I believe in creating
                timeless images that speak volumes about the joy, passion, and romance of your special day. I strive to
                capture each couple's unique journey, transforming each moment into everlasting memories for you.
              </p>
              <Button className="bg-stone-500 hover:bg-stone-600 text-white px-8">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
