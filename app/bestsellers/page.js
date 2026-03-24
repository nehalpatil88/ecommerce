"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";

const bestsellers = [
  {
    id: 1,
    name: "Special Ladoo",
    price: 299,
    image: "/specialladoo.jpg",
  },
  {
    id: 2,
    name: "Elaichi Shrikhand",
    price: 499,
    image: "/elaichishrikhand.jpg",
  },
  {
    id: 3,
    name: "Kokan Special Pickle",
    price: 249,
    image: "/lonche.jpg",
  },
  {
    id: 4,
    name: "Freshly Milled Flour",
    price: 199,
    image: "/besanflour.jpg",
  },
];

export default function BestsellersPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f5f1ea] px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <h1 className="mb-10 text-center font-bold text-[#1f1f1f] md:text-4xl">
          Bestsellers
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-4 text-center shadow-sm transition hover:shadow-md"
            >
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-xl bg-[#f3e6d3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h2 className="text-[16px] font-semibold text-[#1f1f1f] line-clamp-2">
                  {item.name}
                </h2>

                <p className="mt-2 text-lg font-bold text-[#6b7340]">
                  ₹{item.price}
                </p>

                {/* 🔥 Single Add to Cart Button */}
                <button
                  onClick={() => {
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      img: item.image,
                      quantity: 1,
                    });
                    router.push("/cart");
                  }}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#5c5f2a] py-3 text-sm font-semibold text-white transition hover:bg-[#4a4d20]"
                >
                  <IoCartOutline className="text-lg" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}