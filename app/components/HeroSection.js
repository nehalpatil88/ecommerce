"use client";

import { useState } from "react";

const videos = [
  "https://www.youtube.com/embed/5qap5aO4i9A",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
  "https://www.youtube.com/embed/jfKfPfyJRdk",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="w-full bg-gray-100 py-12">
      
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Spread the love!!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Love for your Foodies
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full px-4 md:px-10 lg:px-16">

        {/* FULL WIDTH VIDEO */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src={videos[current]}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black px-4 py-2 text-white shadow-md hover:bg-gray-800"
        >
          ←
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black px-4 py-2 text-white shadow-md hover:bg-gray-800"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

    </section>
  );
}