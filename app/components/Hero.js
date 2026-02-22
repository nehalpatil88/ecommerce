"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/foodhome.jpg", "/foodhome2.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {/* Sliding Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={img}
              alt="Hero Slide"
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

    </div>
  );
}