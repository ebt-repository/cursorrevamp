interface GalleryImageProps {
  src: string;
  index: number;
  onClick: () => void;
}

export const GalleryImage = ({ src, index, onClick }: GalleryImageProps) => {
  return (
    <img
      src={src}
      alt={`Artwork ${index + 1}`}
      className="max-h-[75vh] sm:max-h-[80vh] w-auto mx-auto object-contain cursor-pointer mt-[20px]"
      onClick={onClick}
    />
  );
};