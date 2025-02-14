import { useState, useEffect, TouchEvent } from 'react';

interface SlideShowProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const SlideShow = ({ images, initialIndex = 0, onClose }: SlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Touch handling
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // minimum swipe distance
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    setTouchStart(null);
  };

  return (
    <div 
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl z-50"
        aria-label="Close slideshow"
      >
        ×
      </button>

      <div className="relative w-full h-full flex items-center justify-center px-12">
        <button 
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md z-50"
          aria-label="Previous image"
        >
          ‹
        </button>

        <img
          src={images[currentIndex]}
          alt={`Spread ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />

        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md z-50"
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SlideShow; 