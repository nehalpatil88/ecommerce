"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-10 text-center">
      <h1 className="mb-4 text-4xl font-bold text-green-600">
        Order Placed Successfully
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Thank you for your order.
      </p>

      <Link
        href="/"
        className="rounded-full bg-black px-6 py-3 font-semibold text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}