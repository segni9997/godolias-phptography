
import { useState, useRef } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Lightbox } from './lightbox'

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/weddingn3.jpg',
    alt: 'Wedding Photography',
    title: 'Wedding',
  },
  {
    id: 2,
    src: '/babyshowern1.jpg',
    alt: 'Portrait Photography',
    title: 'Portrait',
  },
  {
    id: 3,
    src: '/hbd2.jpg',
    alt: 'Birthday Photography',
    title: 'Birthday',
  },
  {
    id: 4,
    src: '/fam2.jpg',
    alt: 'Family Photography',
    title: 'Family',
  },
  {
    id: 5,
    src: '/kid2.jpg',
    alt: 'Kids Photography',
    title: 'Kids',
  },
  {
    id: 6,
    src: '/weddingn2.jpg',
    alt: 'Wedding Photography',
    title: 'Wedding',
  },
  {
    id: 7,
    src: '/babyshower2.jpg',
    alt: 'Baby Shower Photography',
    title: 'Baby Shower',
  },
  {
    id: 8,
    src: '/cong2.jpg',
    alt: 'Graduation Photography',
    title: 'Graduation',
  },
  {
    id: 9,
    src: '/babyshowern4.jpg',
    alt: 'Maternity Photography',
    title: 'Maternity',
  },
  {
    id: 10,
    src: '/fam3.jpg',
    alt: 'Family Photography',
    title: 'Family',
  },
  {
    id: 11,
    src: '/other3.jpg',
    alt: 'Portrait Photography',
    title: 'Portrait',
  },
  {
    id: 12,
    src: '/kid2.jpg',
    alt: 'Kids Photography',
    title: 'Kids',
  },
]

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isImageLoading, setIsImageLoading] = useState<Record<number, boolean>>(
    Object.fromEntries(GALLERY_IMAGES.map((img) => [img.id, true]))
  )
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const selectedImage = GALLERY_IMAGES.find((img) => img.id === selectedId)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      {/* Header */}
      <div className="border-b border-border bg-card py-12 mt-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Memory Lane
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Moments pinned in time
          </p>
        </div>
      </div>

      {/* Rope Carousel */}
      <div className="relative bg-gradient-to-b from-card to-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Rope */}
          <div className="relative mb-12">
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary shadow-lg" />
            <div className="absolute -top-0.5 left-0 right-0 h-2 bg-gradient-to-b from-primary/50 to-transparent opacity-50" />
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 sm:-left-6 lg:-left-8"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 sm:-right-6 lg:-right-8"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Images Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]"
              style={{
                scrollbarWidth: 'thin',
              }}
            >
              {GALLERY_IMAGES.map((image, index) => (
                <div key={image.id} className="flex-shrink-0">
                  {/* Clothespin */}
                  <div className="relative mb-4 flex justify-center px-2">
                    <div className="flex gap-1">
                      <div className="h-6 w-3 rounded-full bg-primary shadow-md" />
                      <div className="h-6 w-3 rounded-full bg-primary shadow-md" />
                    </div>
                  </div>

                  {/* Photo Card */}
                  <div
                    className="group relative cursor-pointer overflow-hidden rounded-sm bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    onClick={() => setSelectedId(image.id)}
                    style={{
                      width: '280px',
                      height: '320px',
                      transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                    }}
                  >
                    {/* Loading Skeleton */}
                    {isImageLoading[image.id] && (
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
                    )}

                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`object-cover transition-all duration-500 ${
                        isImageLoading[image.id] ? 'opacity-0' : 'opacity-100'
                      } group-hover:scale-105`}
                      onLoad={() => {
                        setIsImageLoading((prev) => ({
                          ...prev,
                          [image.id]: false,
                        }))
                      }}
                      sizes="280px"
                    />

                    {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">
                      <div className="w-full p-4 text-background">
                        <p className="text-sm font-semibold">{image.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Shadow under photo */}
                  <div className="mt-3 h-1 w-full rounded-full bg-black/5" />
                </div>
              ))}
            </div>
          </div>

          {/* Hint */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Click any photo to view full size • Scroll to see more
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          allImages={GALLERY_IMAGES}
          currentId={selectedId}
          onClose={() => setSelectedId(null)}
          onNext={() => {
            const currentIndex = GALLERY_IMAGES.findIndex(
              (img) => img.id === selectedId
            )
            const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length
            setSelectedId(GALLERY_IMAGES[nextIndex].id)
          }}
          onPrev={() => {
            const currentIndex = GALLERY_IMAGES.findIndex(
              (img) => img.id === selectedId
            )
            const prevIndex =
              currentIndex === 0 ? GALLERY_IMAGES.length - 1 : currentIndex - 1
            setSelectedId(GALLERY_IMAGES[prevIndex].id)
          }}
        />
      )}
    </>
  )
}
