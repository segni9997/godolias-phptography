export interface items {
heading:string;
img:string
description:string;
date:string;
category:string;
}
interface BlogCardsProps {
  items:items[]
}

export default function BlogCards({ items }: BlogCardsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 ">
      {items.map((item, index) => (
        <article
          key={index}
          className="group overflow-hidden w-[550px] bg-stone-200  shadow-lg border-8 border-white "
        >
          {/* Image */}
          <div className="relative h-96">
            <img
              src={item.img}
              alt={item.heading}
              className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Category + Date */}
            <div className="flex items-center gap-3 text-xl text-gray-500">
              <span className="uppercase tracking-wide font-semibold text-yellow-700">
                {item.category}
              </span>
              <span>•</span>
              <time dateTime={item.date}>{item.date}</time>
            </div>

            {/* Heading */}
            <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-yellow-800 transition-colors">
              {item.heading}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {item.description}
            </p>
<div className="mx-auto">
            <button
  className="
    mt-4 inline-flex items-center gap-2
    text-sm font-semibold text-yellow-700
    group-hover:text-yellow-900
    transition-all
  "
>
  Read more
  <span className="transition-transform group-hover:translate-x-1">→</span>
</button>
</div>
          </div>
          
        </article>
      ))}
      
    </div>
  );
}
