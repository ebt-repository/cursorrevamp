import Navigation from "@/components/Navigation";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <button
        onClick={() => navigate("/")}
        className="fixed top-8 right-8 z-50 p-2 text-white hover:opacity-70 transition-opacity"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="h-screen flex items-center justify-center px-16">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[3/2] w-full">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-transparent border-none hover:bg-transparent text-white" />
          <CarouselNext className="right-4 bg-transparent border-none hover:bg-transparent text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default Project;