"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaTruck, FaShieldAlt } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

const testimonials = [
  {
    name: "Li chin",
    image: "/testi1.jpg",
    review:
      "I ordered black currant cake on my son's 1st Birthday.. it was delicious everyone liked the taste. Service was awesome, since it took 2 hrs to my place they suggested me the right cream as well.. packing also good and the most important thing is they replicate the cake which I showed to them that was really amazing work. This is my second order to them they did my son's Half Birthday cake as well that too customised they are really really doing a amazing work.. If you looking for customised cake go for it blindly they will put smile on your face😊.",
  },
  {
    name: "Judith",
    image: "/testi2.jpg",
    review:
      "I ordered black currant cake on my son's 1st Birthday.. it was delicious everyone liked the taste. Service was awesome, since it took 2 hrs to my place they suggested me the right cream as well.. packing also good and the most important thing is they replicate the cake which I showed to them that was really amazing work. This is my second order to them they did my son's Half Birthday cake as well that too customised they are really really doing a amazing work.. If you looking for customised cake go for it blindly they will put smile on your face😊.",
  },
  {
    name: "Kaylin",
    image: "/testi3.jpg",
    review:
      "I ordered black currant cake on my son's 1st Birthday.. it was delicious everyone liked the taste. Service was awesome, since it took 2 hrs to my place they suggested me the right cream as well.. packing also good and the most important thing is they replicate the cake which I showed to them that was really amazing work. This is my second order to them they did my son's Half Birthday cake as well that too customised they are really really doing a amazing work.. If you looking for customised cake go for it blindly they will put smile on your face😊.",
  },
];

export default function Testimonials() {
  return (
    <>
     

      {/* TESTIMONIAL SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="w-full px-12">

          <h2 className="text-4xl font-bold text-center mb-16">
            Customer Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-5 mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-7 text-lg">
                  {item.review}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

       {/* FEATURE SECTION */}
      <section className="bg-gray-100 py-14">
        <div className="w-full px-12">
          <div className="grid md:grid-cols-4 text-center">

            {/* Item 1 */}
            <div className="flex flex-col items-center gap-3 md:border-r border-gray-300">
              <FaTruck className="text-3xl text-orange-500" />
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Orders above ₹200</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center gap-3 md:border-r border-gray-300">
              <BsPatchCheckFill className="text-3xl text-yellow-500" />
              <h3 className="font-semibold text-lg">Best Price</h3>
              <p className="text-gray-600 text-sm">Guaranteed deals</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center gap-3 md:border-r border-gray-300">
              <MdSupportAgent className="text-3xl text-pink-500" />
              <h3 className="font-semibold text-lg">Premium Support</h3>
              <p className="text-gray-600 text-sm">Phone and email support</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center gap-3">
              <FaShieldAlt className="text-3xl text-green-500" />
              <h3 className="font-semibold text-lg">Secure Payments</h3>
              <p className="text-gray-600 text-sm">Secured by best tech</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}