import BlogCards, { type items } from "@/components/blogCards";
const blogData: items[] = [
  {
    heading: "Apex Wedding Excellence",
    img: "/elegant-birthday-party-celebration-balloons.jpg",
    description: "How we craft unforgettable wedding experiences.",
    date: "2025-03-12",
    category: "Weddings",
  },
  {
    heading: "Luxury Event Styling Trends",
    img: "/professional-woman-portrait-white-blazer.jpg",
    description: "Modern styling ideas that elevate any event.",
    date: "2025-02-28",
    category: "Styling",
  },
  {
    heading: "Capturing Golden Moments",
    img: "/woman-in-hat-outdoor-field-portrait.jpg",
    description: "Photography tips for timeless memories.",
    date: "2025-02-10",
    category: "Photography",
  },
];
export default function Blog() {
  return (
    <>
        <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/bride-with-flower-crown-close-up-portrait.jpg"
          alt="Portfolio hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/70  to-transparent " />
      </section> <div className="max-w-7xl mx-auto mt-10">
   
      <div className="body">
        <div className="headers flex justify-center flex-col items-center gap-1 mt-10">
            <h1 className="uppercase leading-tight">
                BLOG
            </h1>
            <span className="text-xl">Latest Stories</span>
        </div>
        <div className="mt-10  mb-10">
            <BlogCards items={blogData}/>
            {/* <BlogCards items={blogData}/> */}
        </div>
      </div>
    </div>
    </>
   
  )
}
