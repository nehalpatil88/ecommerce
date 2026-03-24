import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 text-black">
          About Us
        </h1>

        {/* English Content */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">

          <p>
            Gruham is a community-driven initiative by a group of passionate
            women from rural Maharashtra, who are committed to preserving the
            traditional food practices that have been passed down for
            generations.
            <strong>
              {" "}
              Our range of natural and unadulterated products includes spices,
              pickles, chutneys, and ready-to-eat snacks that offer an authentic
              taste of Maharashtra.
            </strong>{" "}
            We take great care in maintaining the authenticity and purity of
            our products, without using any synthetic or artificial additives.
          </p>

          <p className="font-semibold">
            By supporting Gruham, you not only get high-quality products but
            also contribute to the empowerment of rural women and the
            preservation of traditional food practices.
          </p>

        </div>

        {/* Marathi Content */}
        <div className="mt-10 space-y-6 text-gray-800 text-lg leading-relaxed">

          <p>
            गृहाम हा ग्रामीण महाराष्ट्रातील खाद्यसंस्कृतीची आवड असलेल्या
            महिलांच्या गटाचा एक समुदाय-चालित उपक्रम आहे, ज्या पिढ्यानपिढ्या
            चालत आलेल्या पारंपरिक खाद्य पद्धतींचे जतन करण्यासाठी वचनबद्ध
            आहेत. आमच्या नैसर्गिक आणि भेसळविरहित उत्पादनांच्या श्रेणीमध्ये
            मसाले, लोणची, चटण्या आणि महाराष्ट्राची अस्सल चव देणारे तयार
            स्नॅक्स यांचा समावेश आहे. आम्ही कोणत्याही कृत्रिम किंवा कृत्रिम
            पदार्थांचा वापर न करता आमच्या उत्पादनांची सात्विकता आणि शुद्धता
            राखण्यासाठी खूप काळजी घेतो.
          </p>

          <p className="font-semibold">
            गृहामला पाठिंबा देऊन, तुम्हाला केवळ उच्च दर्जाची उत्पादने मिळत
            नाहीत तर ग्रामीण महिलांच्या सक्षमीकरणात आणि पारंपरिक खाद्य
            पद्धतींचे जतन करण्यातही हातभार लागतो.
          </p>

        </div>

      </div>
    </div>
  );
}