import Image from "next/image";

const products = [
  {  price: 199, img: "/cakeproduct.jpg" },
  { price: 299, img: "/cakeproduct2.jpg" },
  { price: 499, img: "/cakeproduct3.jpg" },
  {  price: 499, img: "/cakeproduct.jpg" },
  {price:455,img:"/cakeproduct2.jpg"},
 {price:455,img:"/cakeproduct3.jpg"},
];

export default function Products() {
  return (
    <div className="p-10">
      <h2 className="text-3xl text-center font-bold mb-6">
 Our Delicius Collections
</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name}  className="border rounded-xl p-4 shadow-lg">
            
            <div className="relative w-full h-48 mb-4">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="font-semibold text-center font-bold">{p.name}</h3>
            <p className="mb-3 text-center font-bold">₹{p.price}</p>

            <button className="bg-orange-500 text-white w-full py-2 rounded-lg">
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}