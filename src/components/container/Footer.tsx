export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 font-quicksand transition-colors">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-gray-50 border border-gray-200 dark:bg-[#0D1116] dark:border-[#1E1E1E] rounded-2xl p-8 lg:p-12 transition-colors">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl lg:text-4xl font-bold leading-tight">
              LET'S DISCUSS <br /> YOUR IDEAS
            </h3>
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/logo-symbol.svg"
                className="w-6 h-6"
                alt="logo"
              />
              <span className="font-outfit font-semibold text-sm lg:text-base">
                Batch Rendang
              </span>
            </div>
          </div>
          <hr className="border-gray-300 dark:border-[#1E1E1E] my-10" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-700 dark:text-gray-300">
              {["About", "Services", "Projects", "Testimonials", "FAQ"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center gap-4">
              {["Facebook", "Instagram", "Linkedin", "Tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-[#1E1E1E] rounded-full hover:border-orange-500 transition"
                >
                  <img
                    src={`/assets/images/${social}-light.svg`}
                    className="block dark:hidden"
                    alt={social}
                  />
                  <img
                    src={`/assets/images/${social}.svg`}
                    className="hidden dark:block"
                    alt={social}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
