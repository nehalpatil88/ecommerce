"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AccountModal({ isOpen, onClose }) {
  const { user, login, logout } = useAuth();
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  const handleSendOtp = () => {
    if (!phone.trim()) return;
    setStep("otp");
  };

  const handleVerify = () => {
    if (!otp.trim()) return;
    login(phone);
    setStep("phone");
    setPhone("");
    setOtp("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40">
      <div className="mx-auto mt-24 w-[92%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {user ? (
          <>
            <h2 className="text-xl font-bold">Account</h2>
            <p className="mt-3 text-gray-700">Signed in as {user.phone}</p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={logout}
                className="rounded-xl bg-black px-4 py-2 text-white"
              >
                Logout
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border px-4 py-2"
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold">Sign in</h2>

            {step === "phone" && (
              <>
                <label className="mt-4 block text-sm font-medium">
                  Mobile number
                </label>
                <div className="mt-2 flex items-center rounded-xl border px-3 py-3">
                  <span className="mr-2 text-gray-500">+91</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Enter mobile number"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="mt-5 w-full rounded-xl bg-[#6c6d2c] px-4 py-3 text-white"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <label className="mt-4 block text-sm font-medium">
                  Verify OTP
                </label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-2 w-full rounded-xl border px-3 py-3 outline-none"
                  placeholder="Enter OTP"
                />

                <button
                  type="button"
                  onClick={handleVerify}
                  className="mt-5 w-full rounded-xl bg-[#6c6d2c] px-4 py-3 text-white"
                >
                  Verify
                </button>
              </>
            )}

            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full rounded-xl border px-4 py-3"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}