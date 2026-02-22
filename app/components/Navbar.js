"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const navItems = [
  { label: "Cakes", href: "/categories/Pestries" },
  { label: "Fast Foods", href: "/categories/fastfood" },
  { label: "Regular", href: "/categories/Regular" },
  { label: "Gallery", href: "/categories/Gallery" },
  { label: "About", href: "/About" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/loging.jpg"
              alt="Company Logo"
              width={115}
              height={55}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 font-medium hover:text-black hover:underline underline-offset-4 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <FaMagnifyingGlass className="text-xl cursor-pointer" />
            <FaRegHeart className="text-xl cursor-pointer" />
            <IoCartOutline className="text-xl cursor-pointer" />
            <CgProfile className="text-xl cursor-pointer" />

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
