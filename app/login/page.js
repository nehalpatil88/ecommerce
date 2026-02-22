"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.userId) {
      localStorage.setItem("userId", data.userId);
      alert("Login successful");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="p-10">
      <h1>Login</h1>
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
      <button onClick={handleLogin} className="bg-black text-white p-2">
        Login
      </button>
    </div>
  );
}