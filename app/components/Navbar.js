"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useCart } from "../context/CartContext";
import SearchModal from "./SearchModal";
import AccountModal from "./AccountModal";

const navItems = [
  { label: "Sweets & Savouries", href: "/categories/Sweets" },
  { label: "Kokan Special ", href: "/categories/Kokan" },
  { label: "Spices / Masales", href: "/categories/Spices" },
    { label: "Freshly Milled Flours", href: "/categories/Flours" },
  { label: "Rice, Pulses, Cereals", href: "/categories/Rice" },
  { label: "Lonche / Pickles", href: "/categories/pickles" },
  { label: "Sandge & Chutneys", href: "/categories/Chutneys" },
  { label: "Papad, Sevai", href: "/categories/Papad" },
 
  { label: "Gallery", href: "/categories/Gallery" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#e7e0d6] bg-[#f5f1ea]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-[86px] items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/gruhamlogo.jpg"
                alt="Gruham Logo"
                width={250}
                height={90}
                quality={100}
                priority
                className="h-[70px] w-auto object-contain"
              />
            </Link>

            {/* Center Nav */}
            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-8 lg:gap-10">
                <Link
                  href="/"
                  className="whitespace-nowrap text-[18px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                >
                  Home
                </Link>

                <div className="group relative">
                  <Link
                    href="/categories"
                    className="flex items-center gap-2 whitespace-nowrap text-[18px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                  >
                    <span>Shop by Category</span>
                    <span className="text-[12px] mt-[2px]">⌄</span>
                  </Link>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[250px] bg-[#f5f1ea] p-2">
                      <div className="flex flex-col gap-3">
                        {navItems.slice(0, 8).map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="whitespace-nowrap text-[15px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/bestsellers"
                  className="whitespace-nowrap text-[18px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                >
                  Bestsellers
                </Link>

                <Link
                  href="/About"
                  className="whitespace-nowrap text-[18px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                >
                  About Us
                </Link>

                <div className="group relative">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 whitespace-nowrap text-[18px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                  >
                    <span>Customers</span>
                    <span className="text-[12px] mt-[2px]">⌄</span>
                  </Link>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[280px] bg-[#f5f1ea] p-2">
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/contact"
                          className="whitespace-nowrap text-[15px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                        >
                          Contact Us
                        </Link>
                        <Link
                          href="/refund-policy"
                          className="whitespace-nowrap text-[15px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                        >
                          Refund & Cancellation Policy
                        </Link>
                        <Link
                          href="/privacy-policy"
                          className="whitespace-nowrap text-[15px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                        >
                          Privacy Policy
                        </Link>
                        <Link
                          href="/terms-conditions"
                          className="whitespace-nowrap text-[15px] font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
                        >
                          Terms & Conditions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Icons */}
            <div className="ml-auto flex shrink-0 items-center gap-4 text-[#1f1f1f]">
              <button
                type="button"
                aria-label="Profile"
                onClick={() => setIsAccountOpen(true)}
                className="transition-colors duration-200 hover:text-[#6b6b3d]"
              >
                <CgProfile className="text-[29px]" />
              </button>

              <button
                type="button"
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
                className="transition-colors duration-200 hover:text-[#6b6b3d]"
              >
                <FaMagnifyingGlass className="text-[22px]" />
              </button>

              <Link
                href="/cart"
                aria-label="Cart"
                className="relative transition-colors duration-200 hover:text-[#6b6b3d]"
              >
                <IoCartOutline className="text-[30px]" />
                <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#6b7340] text-[10px] font-bold text-white">
                  {cartCount > 0 ? cartCount : 0}
                </span>
              </Link>

              <button
                type="button"
                className="text-2xl text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d] md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-screen border-t border-[#e7e0d6] py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-4 text-base bg-[#f5f1ea]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
            >
              Home
            </Link>

            <Link
              href="/categories"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
            >
              <HiOutlineSquares2X2 className="text-xl" />
              <span>Shop by Category</span>
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="pl-2 font-medium text-[#4b4b4b] transition-colors duration-200 hover:text-[#6b6b3d]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/bestsellers"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
            >
              Bestsellers
            </Link>

            <Link
              href="/About"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-[#1f1f1f] transition-colors duration-200 hover:text-[#6b6b3d]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </>
  );
}