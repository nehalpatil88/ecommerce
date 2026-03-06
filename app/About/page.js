import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto pt-6 px-4 text-sm text-gray-600">
    
        <Link href="/" className="hover:underline text-gray-800">
        
        </Link>
         <span className="text-red-600 font-semibold"></span>
      </div>

      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-red-600 mt-6 tracking-widest">
        ABOUT  Gruham Foods SHOP
      </h1>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12 px-4 pb-20">

        {/* Left Content */}
       <div className="space-y-6 text-gray-700 leading-7 text-lg">
  <p>
    <strong>Jhama Sweets</strong>, Mumbai’s fondest Indian sweets brand, was
    established in the 1950s by the late <strong>Mr. Jhamamal Lulla</strong>.
    Our pillars stand strong on the hard work and eagerness of delivering
    <strong> “never ending sweetness” </strong> put in by the various
    generations of the Lulla family who have been taking the brand from
    strength to strength.
  </p>

  <p>
    Apart from our flagship store in <strong>Chembur Camp</strong> – the exact
    location where Mr. Jhamamal Lulla first set up almost 60 years ago, we have
    now expanded our services to <strong>9 distinct locations</strong> to help
    serve more smiles and joy to our beloved customers.
  </p>

  <p>
    Our journey began with Mr. Jhamamal Lulla, a post-partition refugee living
    in Chembur Camp who set up a small shop to earn a living and support his
    family. He was well versed in the making of mithai and began by selling
    only two items – his much famed <strong>Gulab Jamuns</strong> and the Sindhi
    delight – <strong>Sev Barfi</strong>.
  </p>

  <p>
    It has been more than 50 years, and his legendary Gulab Jamuns and Sev
    Barfi still continue to bring joy to customers who visit us from far and
    wide.
  </p>

  <p>
    Mr. Jhamamal Lulla firmly believed in providing customers with nothing but
    the <strong>best in quality and taste</strong>, and ever since, Jhama Sweets
    has proudly continued to live by that promise.
  </p>
</div>

        {/* Right Single Banner Image */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/maker.jpg"
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