"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContinue = () => {
    localStorage.setItem("checkout-details", JSON.stringify(form));
    router.push("/payment");
  };

  if (cart.length === 0) {
    return <div className="p-10">Your cart is empty.</div>;
  }

  return (
    <div className="mx-auto max-w-5xl p-10">
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Shipping Details</h2>

          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-3"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-3"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-3"
          />
          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-3"
          />
          <input
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="mb-3 w-full rounded border p-3"
          />

          <button
            onClick={handleContinue}
            className="mt-3 w-full rounded-full bg-[#5c5f2a] px-5 py-3 font-semibold text-white"
          >
            Continue to Payment
          </button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="mb-3 flex justify-between">
              <span>
                {item.name} ({item.selectedSize}) x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="mt-4 flex justify-between border-t pt-4 text-lg font-bold">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}