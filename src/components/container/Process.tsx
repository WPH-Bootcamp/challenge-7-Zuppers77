import React from "react";

export const Process = () => {
  const steps = [
    {
      title: "Discovery & Consultation",
      desc: "Understand Your Needs & Goals",
    },
    { title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
    { title: "Design & Prototyping", desc: "Craft UX That Converts" },
    {
      title: "Development & Implementation",
      desc: "Deliver With Speed & Precision",
    },
    { title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
    { title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
  ];

  return (
    <section
      className="px-4 py-16 lg:py-24 bg-white dark:bg-black transition-colors"
      id="process"
    >
      <div className="w-full mx-auto px-4 lg:max-w-[1280px] lg:px-[140px]">
        <div className="text-center mb-16">
          <h2 className="font-bold text-[28px] lg:text-[40px] text-black dark:text-white">
            Our Process
          </h2>
          <p className="text-gray-600 dark:text-[#A4A7AE] text-sm lg:text-lg mt-2">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[40px] bottom-[40px] left-1/2 w-[2px] bg-gray-300 dark:bg-[#2E2E2E] z-0"></div>
          <div className="block lg:hidden absolute left-[23px] top-0 bottom-20 w-[2px] bg-gray-300 dark:bg-[#2E2E2E]"></div>

          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-y-16">
            {steps.map((step, i) => {
              const num = i + 1;
              const isEven = num % 2 === 0;

              return (
                <React.Fragment key={i}>
                  {!isEven && (
                    <div className="hidden lg:block bg-gray-50 border border-gray-200 dark:bg-[#111418] dark:border-[#1E1E1E] rounded-xl p-8 transition-colors">
                      <h3 className="font-semibold text-xl text-black dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        {step.desc}
                      </p>
                    </div>
                  )}
                  {isEven && <div className="hidden lg:block"></div>}

                  <div className="hidden lg:flex justify-center items-center relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#FF623E] flex items-center justify-center font-bold text-xl text-white">
                      {num}
                    </div>
                  </div>

                  {isEven && (
                    <div className="hidden lg:block bg-gray-50 border border-gray-200 dark:bg-[#111418] dark:border-[#1E1E1E] rounded-xl p-8 transition-colors">
                      <h3 className="font-semibold text-xl text-black dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        {step.desc}
                      </p>
                    </div>
                  )}
                  {!isEven && <div className="hidden lg:block"></div>}

                  <div className="flex lg:hidden items-start gap-4 relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF623E] flex items-center justify-center font-bold text-white">
                        {num}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 border border-gray-200 dark:bg-[#111418] dark:border-[#1E1E1E] rounded-xl p-6 transition-colors">
                      <h3 className="font-semibold text-lg text-black dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
