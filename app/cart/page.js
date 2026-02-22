"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    fetch(`/api/cart?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div className="p-10">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="border p-3 mb-3">
          <p>{item.product}</p>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
}