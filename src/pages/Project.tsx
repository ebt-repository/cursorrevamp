import { useState } from "react";
import Navigation from "@/components/Navigation";
import { X } from "lucide-react";

const images = [
  "/lovable-uploads/01_B_IS_THE_B.jpg",
  "/lovable-uploads/02_B_IS_THE_B.jpg",
  "/lovable-uploads/03_B_IS_THE_B.jpg",
  "/lovable-uploads/04_B_IS_THE_B.jpg",
  "/lovable-uploads/05_B_IS_THE_B.jpg",
  "/lovable-uploads/06_B_IS_THE_B.jpg",
  "/lovable-uploads/07_B_IS_THE_B.jpg",
  "/lovable-uploads/08_B_IS_THE_B.jpg",
  "/lovable-uploads/09_B_IS_THE_B.jpg",
  "/lovable-uploads/10_B_IS_THE_B.jpg",
  "/lovable-uploads/11_B_IS_THE_B.jpg",
  "/lovable-uploads/12_B_IS_THE_B.jpg",
  "/lovable-uploads/13_B_IS_THE_B.jpg",
  "/lovable-uploads/14_B_IS_THE_B.jpg",
  "/lovable-uploads/15_B_IS_THE_B.jpg",
  "/lovable-uploads/16_B_IS_THE_B.jpg",
  "/lovable-uploads/17_B_IS_THE_B.jpg",
  "/lovable-uploads/18_B_IS_THE_B.jpg",
  "/lovable-uploads/19_B_IS_THE_B.jpg",
  "/lovable-uploads/20_B_IS_THE_B.jpg",
  "/lovable-uploads/21_B_IS_THE_B.jpg",
  "/lovable-uploads/22_B_IS_THE_B.jpg",
  "/lovable-uploads/23_B_IS_THE_B.jpg",
  "/lovable-uploads/24_B_IS_THE_B.jpg",
  "/lovable-uploads/25_B_IS_THE_B.jpg",
  "/lovable-uploads/26_B_IS_THE_B.jpg",
  "/lovable-uploads/27_B_IS_THE_B.jpg",
  "/lovable-uploads/28_B_IS_THE_B.jpg",
  "/lovable-uploads/29_B_IS_THE_B.jpg",
  "/lovable-uploads/30_B_IS_THE_B.jpg",
  "/lovable-uploads/31_B_IS_THE_B.jpg",
  "/lovable-uploads/32_B_IS_THE_B.jpg",
  "/lovable-uploads/33_B_IS_THE_B.jpg",
  "/lovable-uploads/34_B_IS_THE_B.jpg",
  "/lovable-uploads/35_B_IS_THE_B.jpg",
  "/lovable-uploads/36_B_IS_THE_B.jpg",
  "/lovable-uploads/37_B_IS_THE_B.jpg",
  "/lovable-uploads/38_B_IS_THE_B.jpg",
  "/lovable-uploads/39_B_IS_THE_B.jpg",
  "/lovable-uploads/40_B_IS_THE_B.jpg",
  "/lovable-uploads/41_B_IS_THE_B.jpg",
  "/lovable-uploads/42_B_IS_THE_B.jpg",
  "/lovable-uploads/43_B_IS_THE_B.jpg",
  "/lovable-uploads/44_B_IS_THE_B.jpg",
  "/lovable-uploads/45_B_IS_THE_B.jpg",
  "/lovable-uploads/46_B_IS_THE_B.jpg",
  "/lovable-uploads/47_B_IS_THE_B.jpg",
  "/lovable-uploads/48_B_IS_THE_B.jpg",
  "/lovable-uploads/49_B_IS_THE_B.jpg",
  "/lovable-uploads/50_B_IS_THE_B.jpg",
  "/lovable-uploads/51_B_IS_THE_B.jpg",
  "/lovable-uploads/52_B_IS_THE_B.jpg",
  "/lovable-uploads/53_B_IS_THE_B.jpg",
  "/lovable-uploads/54_B_IS_THE_B.jpg",
  "/lovable-uploads/55_B_IS_THE_B.jpg",
  "/lovable-uploads/56_B_IS_THE_B.jpg",
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

  const handleCloseFullscreen = () => {
    setShowFullscreen(false);
    setCurrentImage(0); // Reset to first image when closing fullscreen
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="h-[calc(100vh-96px)] flex items-center justify-center px-4">
        <div className="max-w-[90vw] mt-[47px]">
          <img
            src={images[currentImage]}
            alt={`Artwork ${currentImage + 1}`}
            className="max-h-[80vh] w-auto mx-auto object-contain cursor-pointer"
            onClick={() => setShowFullscreen(true)}
          />
        </div>
      </main>

      {showFullscreen && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-8 right-8 text-[#999999] hover:text-foreground transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="h-[27.52px] w-[27.52px]" />
          </button>
          <div className="relative flex items-center justify-center w-full px-24">
            <img
              src={images[currentImage]}
              alt={`Artwork ${currentImage + 1}`}
              className="max-h-screen w-auto object-contain"
            />
            <button
              onClick={previousImage}
              className="absolute left-8 text-[#999999] hover:text-foreground transition-colors text-4xl font-light"
              aria-label="Previous image"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-8 text-[#999999] hover:text-foreground transition-colors text-4xl font-light"
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;