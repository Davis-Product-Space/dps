"use client";
import { Marquee } from "./marquee";
import { useEffect, useState } from "react";

interface ImageItem {
  id: number;
  width: number;
  height: number;
  alt: string;
  src: string;
}

// First row with updated sizes (1.25x)
const firstRowImages: ImageItem[] = [
  {
    id: 1,
    width: 175, // 288 * 1.25
    height: 175, // 160 * 1.25
    alt: "Image 1",
    src: "images/Marquee/Row1/Picutre6.png",
  },
  {
    id: 2,
    width: 130, // 168 * 1.25
    height: 175,
    alt: "Image 2",
    src: "images/Marquee/Row1/Picture4.png",
  },
  {
    id: 3,
    width: 322, // 228 * 1.25
    height: 175,
    alt: "Image 3",
    src: "images/Marquee/Row1/Picture5.png",
  },
  {
    id: 4,
    width: 130,
    height: 175,
    alt: "Image 4",
    src: "images/Marquee/Row1/Picture2.png",
  },
  {
    id: 5,
    width: 322,
    height: 175,
    alt: "Image 5",
    src: "images/Marquee/Row1/Picture3.png",
  },
  {
    id: 6,
    width: 322,
    height: 175,
    alt: "Image 6",
    src: "images/Marquee/Row1/Picture1.png",
  },
];

// Second row with updated sizes (1.25x)
const secondRowImages: ImageItem[] = [
  {
    id: 7,
    width: 175, // 288 * 1.25
    height: 175, // 160 * 1.25
    alt: "Image 1",
    src: "images/Marquee/Row1/Picutre6.png",
  },
  {
    id: 8,
    width: 130, // 168 * 1.25
    height: 175,
    alt: "Image 2",
    src: "images/Marquee/Row1/Picture4.png",
  },
  {
    id: 9,
    width: 322, // 228 * 1.25
    height: 175,
    alt: "Image 3",
    src: "images/Marquee/Row1/Picture5.png",
  },
  {
    id: 10,
    width: 130,
    height: 175,
    alt: "Image 4",
    src: "images/Marquee/Row1/Picture2.png",
  },
  {
    id: 11,
    width: 322,
    height: 175,
    alt: "Image 5",
    src: "images/Marquee/Row1/Picture3.png",
  },
  {
    id: 12,
    width: 322,
    height: 175,
    alt: "Image 6",
    src: "images/Marquee/Row1/Picture1.png",
  },
];

function MarqueeImage({ image }: { image: ImageItem }) {
  return (
    <div
      style={{ width: `${image.width}px`, height: `${image.height}px` }}
      className="relative overflow-hidden rounded-lg mx-3"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ImageMarqueeDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const reorderImages = (images: ImageItem[]) => {
    const middleIndex = Math.floor(images.length / 2);
    return [...images.slice(middleIndex), ...images.slice(0, middleIndex)];
  };

  return (
    <div className="relative flex w-full flex-col justify-center overflow-hidden px-0">
      <Marquee pauseOnHover speed={15}>
        {reorderImages(firstRowImages).map((image) => (
          <MarqueeImage key={image.id} image={image} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover speed={15}>
        {reorderImages(secondRowImages).map((image) => (
          <MarqueeImage key={image.id} image={image} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 md:w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 md:w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
