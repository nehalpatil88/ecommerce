"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Waste Bag Dispensers & Holders",
    slug: "dispensers",
    image: "/wastebag1.jpg",
  },
  {
    name: "Pet Waste Bags",
    slug: "bags",
    image: "/wastebag2.jpg",
  },
  {
    name: "Pet Leashes",
    slug: "leashes",
    image: "/wastebag3.jpg",
  },
  {
    name: "Pet Harness",
    slug: "collars-harnesses",
    image: "/wastebag4.jpg",
  },
];

export default function ShopPage() {
  return (
    <div className="px-10 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Shop Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/categories/${cat.slug}`}>
            <div className="cursor-pointer group">

              {/* Image Box */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Name Below */}
              <h2 className="text-center mt-4 text-lg font-semibold group-hover:text-gray-600 transition">
                {cat.name}
              </h2>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}