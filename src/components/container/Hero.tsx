export const Hero = () => {
  return (
    <section className="px-4 lg:px-0 py-12 lg:py-20" id="about">
      <div className="w-full mx-auto px-4 lg:max-w-[1280px] lg:px-[140px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
          <div className="flex flex-col gap-10 lg:gap-10 lg:flex-1">
            <div className="flex flex-col gap-2 lg:gap-2">
              <h1 className="font-bold text-4xl lg:text-[56px] leading-[44px] lg:leading-[68px] tracking-[-0.72px] lg:tracking-[-1.12px] text-black dark:text-white">
                Your Tech Partner for{" "}
                <span className="text-[#ff6c37]">Smarter Growth</span>
              </h1>
              <p className="font-semibold text-base lg:text-xl leading-[30px] lg:leading-[34px] text-gray-700 dark:text-[#FDFDFD]">
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </div>
            <button className="bg-[#ff623e] text-white font-bold text-sm lg:text-base leading-7 lg:leading-[30px] rounded-full h-11 lg:h-[48px] w-full lg:w-[200px] flex items-center justify-center shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.25)] hover:bg-[#e55635] transition">
              Let's Talk
            </button>
          </div>

          <div className="relative w-full mt-2 h-[391px] lg:flex-1 lg:h-[600px] lg:mt-0 rounded-2xl overflow-hidden">
            <img
              src="/assets/images/hero-light.svg"
              className="w-full h-full object-cover block dark:hidden"
              alt="Hero Light"
            />
            <img
              src="/assets/images/hero-dark.svg"
              className="w-full h-full object-cover hidden dark:block"
              alt="Hero Dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
