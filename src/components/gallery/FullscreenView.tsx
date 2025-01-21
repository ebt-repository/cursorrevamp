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
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 sm:top-8 right-4 sm:right-8 text-[#999999] hover:text-foreground transition-colors z-50"
        aria-label="Close fullscreen"
      >
        <X className="h-[20px] w-[20px] sm:h-[27.52px] sm:w-[27.52px]" />
      </button>
      <div className="relative flex flex-col sm:block items-center justify-center w-full px-8 sm:px-24">
        <img
          src={currentImage}
          alt="Fullscreen artwork"
          className="max-h-[85vh] sm:max-h-screen w-auto object-contain"
        />
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
  );
};