import { useState } from "react";
import Navigation from "@/components/Navigation";
import { X } from "lucide-react";

const images = [
  "/lovable-uploads/8c1d2eed-b73d-48de-98be-57f99dde491c.png",
  "/lovable-uploads/ccff6f2d-ef98-4c7f-8728-35bc6c49c384.png",
];

const Project = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="relative group">
            <img
              src={images[currentImage]}
              alt={`Artwork ${currentImage + 1}`}
              className="w-full h-[calc(100vh-8rem)] object-contain cursor-pointer"
              onClick={() => setShowFullscreen(true)}
            />
            <button
              onClick={previousImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 px-8 opacity-0 group-hover:opacity-100 transition-opacity text-2xl text-foreground/50 hover:text-foreground"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 px-8 opacity-0 group-hover:opacity-100 transition-opacity text-2xl text-foreground/50 hover:text-foreground"
            >
              ›
            </button>
          </div>
        </div>
      </main>

      {showFullscreen && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <button
            onClick={() => setShowFullscreen(false)}
            className="absolute top-4 right-4 text-foreground hover:opacity-70 transition-opacity"
          >
            <X size={24} />
          </button>
          <img
            src={images[currentImage]}
            alt={`Artwork ${currentImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Project;