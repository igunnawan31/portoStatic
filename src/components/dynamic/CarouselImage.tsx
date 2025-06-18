'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
    images: string[];
    interval?: number;
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 8000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-[60rem] lg:h-[50rem]  overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[60rem] lg:h-[50rem] flex-shrink-0"
                    >
                        <Image
                            src={img}
                            alt={`Slide ${index}`}
                            fill
                            priority={index === 0}
                            className="object-cover blur-xs"
                        />
                        
                        <div className="absolute inset-0 bg-black opacity-45 z-10" />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`
                            w-3 h-3 rounded-full transition-all
                            ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}
                        `}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
