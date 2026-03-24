"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Spices",
    href: "/categories/Spices",
    image: "/vegbiryanimasala.jpg",
    description: "Spicy Things",
  },
  {
    name: "Special Sweets",
    href: "/categories/Sweets",
    image: "/ladoo.jpg",
    description: "Special Sweets Foods",
  },
  {
    name: "Gallery",
    href: "/categories/Rice",
    image: "/basmati.jpg",
    description: "Explore our special Rices and its Varieties",
  },
  {
    name: "Flours",
    href: "/categories/Flours",
    image: "/Flour.jpg",
    description: "Daily essentials and regular food items",
  },
  {
    name: "Kokan Special",
    href: "/categories/Kokan",
    image: "/awalacandy.jpg",
    description: "Special foods of Kokan Zone",
  },
  {
    name: "Chutneys Special",
    href: "/categories/Chutneys",
    image: "/lasun.jpg",
    description: "Special Taste Addon",
  },
  {
    name: "Pickles/Lonche Special",
    href: "/categories/pickles",
    image: "/lonche.jpg",
    description: "Lonches Categories for Food",
  },
  {
    name: "Papad Special",
    href: "/categories/Papad",
    image: "/wafers.jpg",
    description: "Crispy Variety for Food",
  },
];

export default function CategoriesPage() {
  return (
    <section className="min-h-screen bg-[#f5f1ea] px-6 py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h1 className="mb-4 text-center text-4xl font-extrabold text-[#1f1f1f] md:text-5xl">
          Our Categories
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Explore all our delicious categories and choose your favorite items.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden rounded-xl bg-[#f3e6d3]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-[#1f1f1f]">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  {category.description}
                </p>

                {/* Button */}
                <span className="mt-4 inline-block w-full rounded-full bg-[#5c5f2a] py-2 text-sm font-semibold text-white transition group-hover:bg-[#4a4d20]">
                  View Category
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}