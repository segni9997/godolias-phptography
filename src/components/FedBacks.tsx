import { useEffect, useState } from "react";

const testimonials = [
  {
    src: "/wedding1.jpg",
    caption:
      '"Absolutely amazing! They captured every moment of our wedding perfectly. The photos are timeless and full of emotion." – Selam & Dawit',
  },
  {
    src: "/hbd7.jpg",
    caption:
      '"Our family birthday celebration was captured beautifully. Every smile and laugh was perfectly documented." – Yonas\' Family',
  },
  {
    src: "/other12.jpg",
    caption:
      '"A truly professional portrait session. Rahel felt confident and natural, and the final images exceeded our expectations." – Rahel',
  },
  {
    src: "/babyshower16.jpg",
    caption:
      '"The maternity session was heartwarming. The photographer made us feel at ease, and the photos are simply stunning." – Mekdes & Baby',
  },
  {
    src: "/fam3.jpg",
    caption:
      '"Our family gathering was captured with so much care and creativity. Every candid moment shines through the photos!" – Addis Family',
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/wedding1.jpg",
    alt: "Wedding ceremony",
    category: "Wedding",
    span: "row-span-2",
    caption: testimonials[0].caption,
  },
  {
    id: 2,
    src: "/hbd7.jpg",
    alt: "Birthday celebration",
    category: "Birthday",
    span: "row-span-1",
    caption: testimonials[1].caption,
  },
  {
    id: 3,
    src: "/other12.jpg",
    alt: "Portrait session",
    category: "Portrait",
    span: "row-span-2",
    caption: testimonials[2].caption,
  },
  {
    id: 4,
    src: "/babyshower16.jpg",
    alt: "Baby shower",
    category: "Baby Shower",
    span: "row-span-1",
    caption: testimonials[3].caption,
  },
  {
    id: 5,
    src: "/fam3.jpg",
    alt: "Family gathering",
    category: "Family",
    span: "row-span-2",
    caption: testimonials[4].caption,
  },
  {
    id: 6,
    src: "/hbd6.jpg",
    alt: "Birthday party",
    category: "Birthday",
    span: "row-span-1",
  },
  {
    id: 7,
    src: "/babyshower17.jpg",
    alt: "Maternity photoshoot",
    category: "Maternity",
    span: "row-span-2",
  },
  {
    id: 8,
    src: "/other15.jpg",
    alt: "Professional shoot",
    category: "Professional",
    span: "row-span-1",
  },
    {
    id: 9,
    src: "/shemglinna1.jpg",
    alt: "Mesiation cermony",
    category: "Mediation",
    span: "row-span-1",
  },
  {
    id: 10,
    src: "/congQ6.jpg",
    alt: "Graduation shoot",
    category: "Graduation",
    span: "row-span-1",
  },
    {
    id: 11,
    src: "/babyshower17.jpg",
   alt: "Maternity photoshoot",
    category: "Maternity",
    span: "col-span-2",
  },
];

export function FeedBack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % galleryImages.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
      {galleryImages.map((image, index) => (
        <div
          key={image.id}
          className={`
            ${image.span}
            relative overflow-hidden rounded-lg shadow-lg
            cursor-pointer group
            transition-all duration-500 ease-out
            ${
              activeIndex === index
                ? "ring-4 ring-amber-500 scale-[1.02]"
                : "hover:scale-[1.02]"
            }
          `}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`
              w-full h-full object-cover
              transition-all duration-700 ease-out
              ${
                hoveredIndex === index || activeIndex === index
                  ? "scale-110 brightness-75"
                  : "scale-100 brightness-100"
              }
            `}
          />

          <div
            className={`
              absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent
              transition-opacity duration-500
              flex flex-col justify-end
              ${
                hoveredIndex === index || activeIndex === index
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            <div className="p-4 space-y-3">
              <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-amber-500 text-white rounded-full w-fit">
                {image.category}
              </div>
              {image.caption && (
                <p className="text-white text-xs leading-relaxed font-light">
                  {image.caption}
                </p>
              )}
            </div>
          </div>

          <div
            className={`
              absolute top-4 right-4
              w-2 h-2 rounded-full bg-amber-500
              transition-all duration-300
              ${
                activeIndex === index
                  ? "scale-150 shadow-lg shadow-amber-500/50"
                  : "scale-0"
              }
            `}
          />
        </div>
      ))}
    </div>
  );
}
