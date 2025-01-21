import { useState } from "react";
import Navigation from "@/components/Navigation";
import { FullscreenView } from "@/components/gallery/FullscreenView";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { galleryImages } from "@/data/gallery-images";

const Project = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleCloseFullscreen = () => {
    setShowFullscreen(false);
    setCurrentImage(0);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="h-[calc(100vh-96px)] flex items-center justify-center px-2 sm:px-4">
        <div className="max-w-[95vw] sm:max-w-[90vw] mt-[47px] relative">
          <GalleryImage
            src={galleryImages[currentImage]}
            index={currentImage}
            onClick={() => setShowFullscreen(true)}
          />
          <button
            onClick={previousImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 sm:top-[20px] sm:-translate-y-0 p-2 sm:p-4 bg-black/50 text-white hover:bg-black/70 transition-colors text-sm sm:text-base"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 sm:top-[20px] sm:-translate-y-0 p-2 sm:p-4 bg-black/50 text-white hover:bg-black/70 transition-colors text-sm sm:text-base"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </main>

      {showFullscreen && (
        <FullscreenView
          currentImage={galleryImages[currentImage]}
          onClose={handleCloseFullscreen}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  );
};

export default Project;