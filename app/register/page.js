"use client";

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="p-10">
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 block mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 block mb-3"
      />
      <button onClick={handleRegister} className="bg-black text-white p-2">
        Register
      </button>
    </div>
  );
}