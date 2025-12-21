import { useState } from "react";

const industryData = [
  {
    name: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/assets/images/Industry Image Container.svg",
  },
  {
    name: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/assets/images/Industry Image Container2.svg",
  },
  {
    name: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/assets/images/Industry Image Container3.svg",
  },
];

export const IndustryAndPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeContent = industryData[activeIndex];

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-4 transition-colors">
        <div className="max-w-[1280px] mx-auto text-start mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Built for Your Industry
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-3">
            We've helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          <div className="space-y-4 text-base flex flex-col">
            {industryData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  text-left pl-4 border-l-2 transition-all duration-300 py-1
                  ${
                    activeIndex === index
                      ? "border-orange-500 font-semibold text-black dark:text-white"
                      : "border-gray-300 dark:border-[#1E1E1E] text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:border-orange-300"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed max-w-2xl min-h-[80px]">
              {activeContent.description}
            </p>

            <div className="overflow-hidden rounded-xl">
              <img
                key={activeIndex}
                src={activeContent.image}
                className="rounded-xl w-full object-cover transition-opacity duration-500 animate-fade-in"
                alt={activeContent.name}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white dark:bg-black text-black dark:text-white py-24 px-4 transition-colors"
        id="projects"
      >
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-3">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((num) => (
            <div key={num}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={
                    num === 1
                      ? "/assets/images/portofolio-1.svg"
                      : num === 2
                      ? "/assets/images/portofolio2.svg"
                      : "/assets/images/Portofolio3.svg"
                  }
                  className="w-full rounded-xl transition-transform duration-300 hover:-translate-y-1"
                  alt="Portfolio"
                />
              </div>
              <p className="text-orange-500 text-sm mt-4 text-left">
                Landing Page
              </p>
              <h3 className="text-xl font-semibold mt-1 text-left text-black dark:text-white">
                Portofolio {num}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
