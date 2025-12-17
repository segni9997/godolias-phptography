
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-white">
          <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/bride-with-flower-crown-close-up-portrait.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/70  to-transparent " />
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800">Enquire Now</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-stone-300 bg-stone-50"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-stone-300 bg-stone-50"
              />
            </div>
            <div>
              <Textarea
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-stone-300 bg-stone-50"
              />
            </div>
            <Button type="submit" className="w-full bg-stone-500 hover:bg-stone-600 text-white">
              SEND
            </Button>
          </form>

          {/* Image */}
          <div className="relative h-[500px]">
            <img src="/wedding-ceremony-outdoor-nature-path.jpg" alt="Wedding ceremony" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
