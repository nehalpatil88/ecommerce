"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const products = [
  { id: 1, name: "Chocolate Roses", price: "₹60", image: "/foodfeatures1.jpg" },
  { id: 2, name: "Caramel Cake", price: "₹60", image: "/Caramelcake.jpg" },
  { id: 3, name: "Marable Cake", price: "₹60", image: "/marble.jpg" },
];

export default function FeaturedCollection() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* LEFT IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[900px]">
        <Image
          src="/foodmakes.jpg"
          alt="cake maker lady"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 bg-black text-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center">
          Our Featured Collection
        </h2>
        <p className="text-center text-gray-400 mt-2 mb-10">
          A small selection of our favourite products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#e8d6b8] rounded-2xl p-5 text-black text-center relative"
            >
              <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
                <FaHeart />
              </button>

              <div className="flex justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </div>

              <h3 className="mt-4 font-semibold">{product.name}</h3>
              <p className="mt-2">{product.price}</p>

              <button className="mt-4 bg-white px-6 py-2 rounded-full hover:bg-gray-200 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore!
          </button>
        </div>
      </div>
    </section>
  );
}