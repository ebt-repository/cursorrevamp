import { X } from "lucide-react";

interface FullscreenViewProps {
  currentImage: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const FullscreenView = ({
  currentImage,
  onClose,
  onNext,
  onPrevious,
}: FullscreenViewProps) => {
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-foreground"
        aria-label="Close fullscreen view"
      >
        <X className="h-[20px] w-[20px] sm:h-[27.52px] sm:w-[27.52px]" />
      </button>
      <div className="h-full flex items-center justify-center">
        <div className="relative flex flex-col sm:flex-row items-center justify-center w-full px-8 sm:px-24">
          <img
            src={currentImage}
            alt="Fullscreen artwork"
            className="max-h-[85vh] sm:max-h-screen w-auto object-contain"
          />
          
          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button
              onClick={onPrevious}
              className="text-[#999999] hover:text-foreground transition-colors text-3xl font-light"
              aria-label="Previous image"
            >
              {"<"}
            </button>
            <button
              onClick={onNext}
              className="text-[#999999] hover:text-foreground transition-colors text-3xl font-light"
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <button
            onClick={onPrevious}
            className="hidden sm:block absolute left-8 text-[#999999] hover:text-foreground transition-colors text-4xl font-light"
            aria-label="Previous image"
          >
            {"<"}
          </button>
          <button
            onClick={onNext}
            className="hidden sm:block absolute right-8 text-[#999999] hover:text-foreground transition-colors text-4xl font-light"
            aria-label="Next image"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};