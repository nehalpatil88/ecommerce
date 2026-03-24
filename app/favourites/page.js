"use client";

import Image from "next/image";
import { useWishlist } from "../context/WishlistContext";

export default function FavouritesPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Your Favourites
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">
          No favourite items yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-4 shadow"
            >
              <Image
                src={item.img || item.image}
                alt={item.name}
                width={150}
                height={150}
                className="mx-auto"
              />

              <h3 className="mt-4 text-center font-semibold">
                {item.name}
              </h3>

              <p className="text-center text-gray-600">
                ₹{item.price}
              </p>

              <button
                onClick={() => toggleWishlist(item)}
                className="mt-3 w-full rounded-full bg-red-500 py-2 text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}