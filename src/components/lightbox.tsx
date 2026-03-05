import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  image: {
    id: number
    src: string
    alt: string
    title: string
  }
  allImages: Array<{
    id: number
    src: string
    alt: string
    title: string
  }>
  currentId: number | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({
  image,
  allImages,
  currentId,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(true)

  const currentIndex = allImages.findIndex((img) => img.id === currentId) + 1
  const total = allImages.length

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      onClose()
    }, 200)
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowRight') {
        onNext()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [handleClose, onNext, onPrev])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 transition-opacity duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-all duration-200 hover:bg-black/75 active:scale-90 md:right-8 md:top-8"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Main image container */}
      <div
        className="relative flex w-full flex-1 items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
          </div>
        )}

        {/* Image */}
        <div className="relative h-full w-full max-h-[80vh] max-w-4xl">
          <img
            src={image.src}
            alt={image.alt}
            className={`h-full w-full object-contain transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>

      {/* Navigation and info */}
      <div className="flex w-full items-center justify-between border-t border-white/10 bg-black/50 px-4 py-6 md:px-8">
        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="rounded-full bg-white/10 p-2 transition-all duration-200 hover:bg-white/20 active:scale-90"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* Image info */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">{image.title}</h2>
          <p className="mt-1 text-sm text-white/60">
            {currentIndex} of {total}
          </p>
        </div>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="rounded-full bg-white/10 p-2 transition-all duration-200 hover:bg-white/20 active:scale-90"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="text-xs text-white/40">
        Press <kbd className="rounded bg-white/10 px-2 py-1">ESC</kbd> to close •{' '}
        <kbd className="rounded bg-white/10 px-2 py-1">←→</kbd> to navigate
      </div>
    </div>
  )
}
