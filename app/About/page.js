import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto pt-6 px-4 text-sm text-gray-600">
        You are here:{" "}
        <Link href="/" className="hover:underline text-gray-800">
          Home
        </Link>{" "}
        / <span className="text-red-600 font-semibold">About Cake Shop</span>
      </div>

      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-red-600 mt-6 tracking-widest">
        ABOUT CAKE SHOP
      </h1>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12 px-4 pb-20">

        {/* Left Content */}
        <div className="space-y-6 text-gray-700 leading-7 text-lg">
          <p>
            We at <strong>The Cake Shop</strong> specialize in Desserts & Cakes.
            We believe in <strong>"Quality in our Edge"</strong>, from selecting
            the finest ingredients across India to the final exquisite creation
            that <strong>"Brings you smiles for sure"</strong>.
          </p>

          <p>
            Our cakes & desserts receive countless compliments and are supported
            by a wide range of exclusive sweet creations crafted with passion.
          </p>

          <p>
            Our theme-based creative cakes, cake pops, cupcakes and desserts for
            parties make your celebration unique and unforgettable. We spend time
            understanding our customers’ expectations.
          </p>

          <p>
            That’s why we perfectly personalize every order to meet your needs.
          </p>
        </div>

        {/* Right Single Banner Image */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/foodfeature3.jpg"
            alt=""
            fill
            className="object-cover shadow-lg"
          />

          {/* Optional Red Label */}
          <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-2 text-xl font-semibold shadow-md">
            INSIDE KITCHEN
          </div>
        </div>

      </div>
    </div>
  );
}