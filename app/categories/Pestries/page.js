import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";

const products = [
  { id: 1, name: "marble Cake", price: 199, image: "/marble.jpg" },
  { id: 2, name: "caramel Cake", price: 299, image: "/Caramelcake.jpg" },
  { id: 3, name: "Chocolate Nuts Cake", price: 499, image: "/cakeproduct.jpg" },
];

const DispensersPage = () => {
  return (
    <div className="p-10">
     <h2 className="text-3xl text-left font-bold mb-6">
  Waste Bag ({products.length})
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            {/* Box with image */}
            <div className="bg-[#e8d6b8] rounded-2xl overflow-hidden relative shadow-lg h-48">
              {/* Heart icon */}
              <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500 z-10">
                <FaHeart />
              </button>

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product info outside the box */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="mt-2 font-bold">₹{product.price}</p>
              <button className="mt-4 border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
  Add to cart
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DispensersPage;