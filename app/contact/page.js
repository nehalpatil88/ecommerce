import { FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 flex flex-col items-center">

      {/* BIG TITLE */}
      <h1 className="text-5xl font-bold text-red-600 mb-12 tracking-wider">
        CONTACT US
      </h1>

      <div className="max-w-3xl w-full space-y-10">

        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-2 text-center">
            The Cake Shop - Periyar Nagar
          </h2>
          <p className="text-center">103, Periyar Nagar,</p>
          <p className="text-center">Erode,</p>
          <p className="flex justify-center items-center gap-2 mt-2">
            <FaPhoneAlt /> 0424 4030204
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-2 text-center">
            The Cake Shop - Kollampalayam
          </h2>
          <p className="text-center">A K Square 95/1 Gandhiji Street,</p>
          <p className="text-center">Karur Bypass Rd, Kollampalayam,</p>
          <p className="text-center">Erode.</p>
          <p className="flex justify-center items-center gap-2 mt-2">
            <FaPhoneAlt /> 0424 2902457
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-2 text-center">
            The Cake Shop - Perundurai Road
          </h2>
          <p className="text-center">G T Square, 41, Perundurai Rd</p>
          <p className="text-center">Erode.</p>
          <p className="flex justify-center items-center gap-2 mt-2">
            <FaPhoneAlt /> 0424 3555607
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-2 text-center">
            The Cake Shop - Tiruchengode
          </h2>
          <p className="text-center">5/7, Kokkarayanpettai Road,</p>
          <p className="text-center">
            Valaraigate, Opp to Kathir Eye Hospital,
          </p>
          <p className="text-center">Tiruchengode.</p>
        </div>

      </div>

    </div>
  );
}