"use client";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-100 py-12">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Spread the love!!
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Love for your Foodies
        </p>
      </div>

      {/* Video */}
      <div className="flex flex-col items-center gap-6 px-6">

 

  <div className="w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/Lx_wId3RWEM"
      title="Cake Video 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

</div>

    </section>
  );
}