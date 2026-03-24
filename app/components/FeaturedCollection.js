"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Special Burfi",
    price: 60,
    image: "/kharvas2.jpg",
    sizes: ["250gm", "500gm", "1kg"],
  },
  {
    id: 2,
    name: "Tasty Sweet",
    price: 60,
    image: "/anarase.jpg",
    sizes: ["250gm", "500gm", "1kg"],
  },
  {
    id: 3,
    name: "Special Sweets",
    price: 60,
    image: "/ladoo.jpg",
    sizes: ["250gm", "500gm", "1kg"],
  },
];

export default function FeaturedCollection() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const [openSizeSelector, setOpenSizeSelector] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleOpenSizes = (productId) => {
    setOpenSizeSelector(productId);
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]:
        prev[productId] ||
        products.find((p) => p.id === productId)?.sizes[0],
    }));
  };

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleConfirmAddToCart = (product) => {
    const finalSize = selectedSizes[product.id] || product.sizes[0];

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image,
      quantity: 1,
      selectedSize: finalSize,
    });

    setOpenSizeSelector(null);
    router.push("/cart");
  };

  const handleFavourite = (product) => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image,
    });
    router.push("/favourites");
  };

  return (
    <section className="w-full bg-[#f5f1ea] px-4 py-4">
      <div className="overflow-hidden border-[3px] border-[#2f2f2f] bg-[#ddd1af] shadow-[0_0_0_2px_#5a5a5a]">
        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          {/* Left Image */}
          <div className="relative min-h-[360px] lg:min-h-[620px]">
            <Image
              src="/maker15.jpg"
              alt="Featured collection"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center bg-[#ddd1af] px-6 py-10 md:px-8">
            <div className="mx-auto w-full max-w-[700px]">
              {/* Heading */}
              <div className="mb-8 text-center">
                <h2 className="text-[30px] font-extrabold text-black md:text-[36px]">
                  Our Featured Collection
                </h2>
                <p className="mt-2 text-sm text-[#333] md:text-[15px]">
                  A small selection of our favourite products
                </p>
              </div>

              {/* Product Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => {
                  const isFav = isInWishlist(product.id);
                  const isOpen = openSizeSelector === product.id;
                  const activeSize =
                    selectedSizes[product.id] || product.sizes[0];

                  return (
                    <div
                      key={product.id}
                      className="flex min-h-[340px] flex-col rounded-[24px] bg-[#f7f7f5] p-5 shadow-md transition hover:shadow-lg"
                    >
                      <div className="relative mb-4">
                        <button
                          type="button"
                          onClick={() => handleFavourite(product)}
                          className={`absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition ${
                            isFav
                              ? "text-red-500"
                              : "text-gray-500 hover:text-red-500"
                          }`}
                        >
                          <FaHeart className="text-sm" />
                        </button>

                        <div className="relative h-[170px] w-full overflow-hidden rounded-[16px] bg-[#ddd1af]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col text-center">
                        <h3 className="text-[18px] font-semibold leading-snug text-black">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-[17px] font-semibold text-[#6c6d2c]">
                          ₹{product.price}
                        </p>

                        <div className="mt-4">
                          {!isOpen ? (
                            <button
                              type="button"
                              onClick={() => handleOpenSizes(product.id)}
                              className="flex h-[40px] w-full items-center justify-center rounded-full bg-[#6c6d2c] text-sm font-semibold text-white transition hover:bg-[#5c5d24]"
                            >
                              Add to Cart
                            </button>
                          ) : (
                            <div className="rounded-[16px] border border-[#ddd3c3] bg-[#faf7f2] p-3">
                              <p className="mb-3 text-sm font-semibold text-[#333]">
                                Select size
                              </p>

                              <div className="flex flex-wrap justify-center gap-2">
                                {product.sizes.map((size) => {
                                  const isSelected = activeSize === size;

                                  return (
                                    <button
                                      key={size}
                                      type="button"
                                      onClick={() =>
                                        handleSizeSelect(product.id, size)
                                      }
                                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                                        isSelected
                                          ? "bg-[#6c6d2c] text-white"
                                          : "border border-[#d8d1c4] bg-white text-[#333]"
                                      }`}
                                    >
                                      {size}
                                    </button>
                                  );
                                })}
                              </div>

                              <div className="mt-3 flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => setOpenSizeSelector(null)}
                                  className="w-1/2 rounded-full border border-[#d8d1c4] bg-white px-3 py-2 text-xs font-medium text-[#333] transition hover:bg-[#f3efe8]"
                                >
                                  Cancel
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleConfirmAddToCart(product)}
                                  className="w-1/2 rounded-full bg-[#6c6d2c] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#5c5d24]"
                                >
                                  Confirm
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explore Button */}
              <div className="mt-8">
                <Link
                  href="/categories"
                  className="block w-full rounded-full bg-[#6c6d2c] py-4 text-center text-base font-semibold text-white transition hover:bg-[#5c5d24]"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}