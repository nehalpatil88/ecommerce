"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    cartTotal,
  } = useCart();

  return (
    <section className="min-h-screen bg-[#f8f8f8] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black md:text-4xl">
            Your Cart
          </h1>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-2 rounded-md border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <FaTrash size={14} />
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id, item.selectedSize)}
                      className="rounded-md border px-3 py-1 text-lg"
                    >
                      -
                    </button>

                    <span className="min-w-[24px] text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id, item.selectedSize)}
                      className="rounded-md border px-3 py-1 text-lg"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="font-bold text-black">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-4 text-2xl font-bold text-black">
                Order Summary
              </h2>

              <div className="mb-3 flex justify-between text-gray-700">
                <span>Total</span>
                <span className="font-bold text-black">₹{cartTotal}</span>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="mt-4 w-full rounded-full bg-[#5c5f2a] py-3 text-sm font-semibold text-white transition hover:bg-[#4a4d20]"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}