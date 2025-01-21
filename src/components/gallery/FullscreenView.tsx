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
        className="absolute top-4 sm:top-8 right-4 sm:right-8 text-[#999999] hover:text-foreground transition-colors"
        aria-label="Close fullscreen"
      >
        <X className="h-[20px] w-[20px] sm:h-[27.52px] sm:w-[27.52px]" />
      </button>
      <div className="relative flex items-center justify-center w-full px-8 sm:px-24">
        <img
          src={currentImage}
          alt="Fullscreen artwork"
          className="max-h-[85vh] sm:max-h-screen w-auto object-contain"
        />
        <button
          onClick={onPrevious}
          className="absolute left-2 sm:left-8 text-[#999999] hover:text-foreground transition-colors text-3xl sm:text-4xl font-light p-4 sm:p-0"
          aria-label="Previous image"
        >
          {"<"}
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-8 text-[#999999] hover:text-foreground transition-colors text-3xl sm:text-4xl font-light p-4 sm:p-0"
          aria-label="Next image"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};