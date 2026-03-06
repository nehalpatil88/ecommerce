"use client";

import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/burfi.jpg", alt: "Awesome Burfi" },
  { id: 2, src: "/kajukatli.jpg", alt: "Special Food" },
  { id: 3, src: "/ghevar.jpg", alt: "Special Ghevar" },
  { id: 4, src: "/jalebi.jpg", alt: "Special Jalebi" },
  { id: 5, src: "/specialpeda.jpg", alt: " SpecialPeda" },
  { id: 6, src: "/jalebi.jpg", alt: "Special Jalebi" },
];

export default function GalleryPage() {
  return (
    <div className="px-6 md:px-16 py-12">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Food Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={400}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <p className="text-white text-lg font-semibold">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}