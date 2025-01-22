import { useState } from "react";
import Navigation from "@/components/Navigation";
import { FullscreenView } from "@/components/gallery/FullscreenView";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { galleryImages } from "@/data/gallery-images";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="max-w-[95vw] sm:max-w-[90vw] relative flex flex-col items-center">
          <GalleryImage
            src={galleryImages[currentImage]}
            index={currentImage}
            onClick={() => setShowFullscreen(true)}
          />
          
          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 mb-8 sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={previousImage}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
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