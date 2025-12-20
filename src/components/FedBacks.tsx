import { useEffect, useState } from "react";

const slides = [
  {
    src: "/woman-in-hat-outdoor-field-portrait.jpg",
    caption: "Elegant Outdoor Celebration",
  },
  {
    src: "/elegant-birthday-party-celebration-balloons.jpg",
    caption: "Luxury Birthday Moments",
  },
  {
    src: "/professional-woman-portrait-white-blazer.jpg",
    caption: "Sophisticated Event Styling",
  },
];

export default function FeedBack() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // slideshow speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8 bg-background">

      {/* LEFT IMAGE */}
      <div className="hidden md:block relative h-[500px]">
        <div className="absolute bottom-44 -left-7 h-32 border-8 border-muted-foreground/80 w-1/3 z-10">
          <img
            src="/elegant-birthday-party-celebration-balloons.jpg"
            alt="Client photo 1"
            className="h-full w-full object-cover"
          />
        </div>  
         <div className="absolute bottom-1 h-64 border-8 border-muted-foreground/80 w-full">
          <img
            src="/elegant-birthday-party-celebration-balloons.jpg"
            alt="Client photo 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-12 -right-7 h-32 border-8 border-muted-foreground/80 w-1/3 z-10">
          <img
            src="/elegant-birthday-party-celebration-balloons.jpg"
            alt="Client photo 1"
            className="h-full w-full object-cover"
          />
        </div>  
      </div>

      {/* CENTER SLIDESHOW */}
      <div className="relative h-[500px] overflow-hidden border-8  ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0
              transition-all duration-1000 ease-in-out
              ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}
            `}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />

            {/* CAPTION */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full
                            bg-background/60 backdrop-blur-md
                            text-white
                            px-5 py-3
                            
                            text-sm md:text-base
                            font-semibold
                            shadow-lg">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT IMAGE */}
      {/* <div className="relative h-64">
        <div className="absolute bottom-1 h-52 border-8 border-muted-foreground/80 w-full">
          <img
            src="/professional-woman-portrait-white-blazer.jpg"
            alt="Client photo 3"
            className="w-full h-full object-cover"
          />

        </div>
      </div> */}
  <div className="hidden md:block relative h-[500px]">
        <div className="absolute bottom-44 -right-7 h-32 border-8 border-muted-foreground/80 w-1/3 z-10">
          <img
             src="/professional-woman-portrait-white-blazer.jpg"
            alt="Client photo 1"
            className="h-full w-full object-cover"
          />
        </div>  
         <div className="absolute bottom-1 h-64 border-8 border-muted-foreground/80 w-full">
          <img
             src="/professional-woman-portrait-white-blazer.jpg"
            alt="Client photo 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-12 -left-7 h-32 border-8 border-muted-foreground/80 w-1/3 z-10">
          <img
             src="/professional-woman-portrait-white-blazer.jpg"
            alt="Client photo 1"
            className="h-full w-full object-cover"
          />
        </div>  
      </div>

    </div>
  );
}
