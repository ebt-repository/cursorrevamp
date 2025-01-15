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
        className="absolute top-8 right-8 text-[#999999] hover:text-foreground transition-colors"
        aria-label="Close fullscreen"
      >
        <X className="h-[27.52px] w-[27.52px]" />
      </button>
      <div className="relative flex items-center justify-center w-full px-24">
        <img
          src={currentImage}
          alt="Fullscreen artwork"
          className="max-h-screen w-auto object-contain"
        />
        <button
          onClick={onPrevious}
          className="absolute left-8 text-[#999999] hover:text-foreground transition-colors text-4xl font-light"
          aria-label="Previous image"
        >
          {"<"}
        </button>
        <button
          onClick={onNext}
          className="absolute right-8 text-[#999999] hover:text-foreground transition-colors text-4xl font-light"
          aria-label="Next image"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};