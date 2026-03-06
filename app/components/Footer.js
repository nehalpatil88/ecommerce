"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaPaypal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-14 pb-6">
      <div className="w-full px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Column 1: Logo & About */}
          <div>
            <Link
  href="/"
  className="flex-shrink-0 text-3xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:scale-105 transition-transform"
>
  Gruham Foods
</Link>

            <p className="text-sm leading-7 text-gray-700">
             "Indulge in Sweet Moments at Our Cake Haven! Discover freshly baked delights crafted with love and the finest ingredients. From creamy classics to irresistible new flavors, every bite is pure happiness. Celebrate life’s special moments with us and make every occasion sweeter, one slice at a time."
            </p>

            <p className="mt-6 text-sm">
              <span className="font-semibold">Contact Us:</span> 
              <a href="mailto:civihi5653@peogi.com" className="underline text-gray-800">
                civihi5653@peogi.com
              </a>
            </p>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categories/Pestries" className="text-gray-800">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/categories/fastfood" className="text-gray-800">
                Fast Foods
                </Link>
              </li>
              <li>
                <Link href="/categories/Regular" className="text-gray-800">
                 Regular
                </Link>
              </li>
              <li>
                <Link href="/categories/Gallery" className="text-gray-800">
                Gallery
                </Link>
              </li>
               <li>
                <Link href="/About" className="text-gray-800">
                About
                </Link>
              </li>
               <li>
                <Link href="/contact" className="text-gray-800">
              Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
           <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categories/Pestries" className="text-gray-800">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/categories/fastfood" className="text-gray-800">
                Fast Foods
                </Link>
              </li>
              <li>
                <Link href="/categories/Regular" className="text-gray-800">
                 Regular
                </Link>
              </li>
              <li>
                <Link href="/categories/Gallery" className="text-gray-800">
                Gallery
                </Link>
              </li>
               <li>
                <Link href="/About" className="text-gray-800">
                About
                </Link>
              </li>
               <li>
                <Link href="/contact" className="text-gray-800">
              Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div>
            <h3 className="font-semibold mb-4">Connect with us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaFacebookF />
                <a href="https://www.facebook.com" target="_blank" className="text-gray-800">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedinIn />
                <a href="https://www.linkedin.com" target="_blank" className="text-gray-800">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram />
                <a href="https://www.instagram.com" target="_blank" className="text-gray-800">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaTwitter />
                <a href="https://www.twitter.com" target="_blank" className="text-gray-800">
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaYoutube />
                <a href="https://www.youtube.com" target="_blank" className="text-gray-800">
                  YouTube
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPinterestP />
                <a href="https://www.pinterest.com" target="_blank" className="text-gray-800">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dukaan
          </p>

          <div className="flex items-center gap-6 text-3xl">
            <FaCcVisa className="text-[#1A1F71]" />        {/* Visa Blue */}
            <FaCcMastercard className="text-[#EB001B]" />  {/* Mastercard Red */}
            <FaCcAmex className="text-[#2E77BC]" />        {/* Amex Blue */}
            <FaPaypal className="text-[#003087]" />        {/* PayPal Blue */}
            <FaCcDiscover className="text-[#FF6000]" />    {/* Discover Orange */}
          </div>
        </div>

      </div>
    </footer>
  );
}