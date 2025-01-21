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
        <div className="max-w-[95vw] sm:max-w-[90vw] mt-[47px]">
          <GalleryImage
            src={galleryImages[currentImage]}
            index={currentImage}
            onClick={() => setShowFullscreen(true)}
          />
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