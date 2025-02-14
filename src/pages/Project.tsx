import { useState } from "react";
import Navigation from "@/components/Navigation";
import { FullscreenView } from "@/components/gallery/FullscreenView";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { galleryImages } from "@/data/gallery-images";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideShow from '../components/SlideShow';

const projectImages = [
  '/images/project-1.jpg',
  '/images/project-2.jpg',
  '/images/project-3.jpg',
  '/images/project-4.jpg',
  '/images/project-5.jpg',
  '/images/project-6.jpg',
  '/images/project-7.jpg',
  '/images/project-8.jpg',
  '/images/project-9.jpg',
  '/images/project-10.jpg',
  '/images/project-11.jpg',
  '/images/project-12.jpg',
  '/images/project-13.jpg',
  '/images/project-14.jpg',
  '/images/project-15.jpg',
  '/images/project-16.jpg',
  '/images/project-17.jpg',
  '/images/project-18.jpg',
  '/images/project-19.jpg',
  '/images/project-20.jpg',
  '/images/project-21.jpg',
  '/images/project-22.jpg',
  '/images/project-23.jpg',
  '/images/project-24.jpg',
  '/images/project-25.jpg',
  '/images/project-26.jpg',
  '/images/project-27.jpg',
  '/images/project-28.jpg',
  '/images/project-29.jpg',
  '/images/project-30.jpg',
  '/images/project-31.jpg',
  '/images/project-32.jpg',
  '/images/project-33.jpg',
  '/images/project-34.jpg',
  '/images/project-35.jpg',
  '/images/project-36.jpg',
  '/images/project-37.jpg',
  '/images/project-38.jpg',
  '/images/project-39.jpg',
  '/images/project-40.jpg',
  '/images/project-41.jpg',
  '/images/project-42.jpg',
  '/images/project-43.jpg',
  '/images/project-44.jpg',
  '/images/project-45.jpg',
  '/images/project-46.jpg',
  '/images/project-47.jpg',
  '/images/project-48.jpg',
  '/images/project-49.jpg',
  '/images/project-50.jpg',
  '/images/project-51.jpg',
  '/images/project-52.jpg',
  '/images/project-53.jpg',
  '/images/project-54.jpg',
  '/images/project-55.jpg',
  '/images/project-56.jpg'
];

const Project = () => {
  const [showSlideshow, setShowSlideshow] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={projectImages[0]}
          alt="Project preview"
          className="max-h-[90vh] max-w-[90vw] object-contain cursor-pointer"
          onClick={() => setShowSlideshow(true)}
        />
      </div>

      {showSlideshow && (
        <SlideShow
          images={projectImages}
          onClose={() => setShowSlideshow(false)}
        />
      )}
    </div>
  );
};

export default Project;