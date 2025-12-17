export function Testimonial() {
  return (
    <section className="py-0 bg-white">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[700px] md:h-screen max-h-[800px]">
          <img
            src="/images/image.png"
            alt="Couple at beach sunset"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="bg-[#f5f1ed] flex items-center justify-center px-8 md:px-16 py-20">
          <div className="max-w-md space-y-6">
            <div className="flex justify-center mb-6">
              <svg
                width="50"
                height="70"
                viewBox="0 0 50 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-stone-400/60"
              >
                {/* Main leaf stem */}
                <path d="M25 5 Q25 35 25 65" stroke="currentColor" strokeWidth="1" fill="none" />
                {/* Leaf curve */}
                <path d="M25 10 Q35 25 30 45 Q28 55 25 65" stroke="currentColor" strokeWidth="1" fill="none" />
                {/* Inner detail lines */}
                <path d="M25 15 Q30 20 28 28" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <path d="M25 25 Q29 30 27 38" stroke="currentColor" strokeWidth="0.8" fill="none" />
              </svg>
            </div>

            <h2 className="text-[2.75rem] md:text-5xl font-serif italic text-stone-800 leading-tight text-center tracking-wide">
              Creative, Passionate, Artistic.
            </h2>

            <p className="text-stone-700 leading-relaxed text-center text-base md:text-lg pt-4">
              I will ensure your wedding day memories are preserved in stunning, timeless photographs that you will
              cherish for a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
