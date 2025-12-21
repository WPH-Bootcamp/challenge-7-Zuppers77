import { useState } from "react";
interface FAQItemProps {
  question: string;
  answer: string | null;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-300 dark:border-gray-800">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-base font-medium text-black dark:text-white transition-colors group-hover:text-[#FF623E]">
          {question}
        </span>
        <span className="text-xl font-light text-black dark:text-white ml-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {answer || "Jawaban untuk pertanyaan ini belum tersedia saat ini."}
        </p>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
    },
    {
      q: "How do I know if this is right for my business?",
      a: "Book a free consult — we’ll assess your goals and recommend the right approach.",
    },
    {
      q: "How much does a project cost?",
      a: "Every project is different. Let’s talk about your needs to get a tailored estimate.",
    },
    {
      q: "How long does it take?",
      a: "Depends on scope — but we always prioritize quality and deadlines.",
    },
    {
      q: "Can I start with a small project first?",
      a: "Absolutely. We often begin with MVPs or pilot projects.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-white dark:bg-black text-black dark:text-white py-24 px-4 transition-colors"
      id="faq"
    >
      <div className="max-w-[1280px] mx-auto space-y-12">
        <div className="lg:flex lg:items-start lg:justify-between">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight lg:w-1/2">
            Need Help? <br className="hidden lg:block" />
            Start Here.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-4 lg:mt-1 lg:w-1/2 lg:text-end">
            Everything you need to know — all in one place.
          </p>
        </div>

        <hr className="border-gray-300 dark:border-gray-800" />

        <div className="lg:flex lg:items-start lg:gap-20">
          <div className="lg:w-2/3 flex flex-col">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-[#CC4E32] rounded-2xl p-6 space-y-4 text-white sticky top-24">
              <h3 className="text-2xl font-bold leading-tight">
                Let's talk it through
              </h3>
              <p className="text-sm">Book a free consultation with our team.</p>

              <div className="rounded-xl overflow-hidden w-full h-48 bg-gray-200">
                <img
                  src="/assets/images/Consultation-Image.svg"
                  className="w-full h-full object-cover"
                  alt="Consultation"
                />
              </div>

              <button className="bg-white text-black py-3 rounded-full w-full font-bold hover:bg-gray-200 transition">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
