import { useState } from "react";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToNextImage = () => {
    setDirection('right');
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setDirection('left');
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="relative w-full max-w-4xl aspect-square">
          <img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
          
          <button
            onClick={goToPreviousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <p className="text-sm opacity-50">
              {currentImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;