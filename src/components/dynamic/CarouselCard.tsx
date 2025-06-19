'use client';

import Image from "next/image";

interface CarouselCardProps {
  title: string;
  description: string;
  images: string[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ title, description, images }) => {
  return (
    <div className="bg-white rounded-xl border p-4 transition card-shadow-3d">
      <div className="w-full h-48 overflow-hidden rounded-md mb-3 relative">
        {images.length > 0 ? (
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
            No image available
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-blue-900 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default CarouselCard;
