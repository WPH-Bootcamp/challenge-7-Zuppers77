import React, { useState } from "react";
import Button from "../ui/Button";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["About", "Services", "Projects", "Testimonials", "FAQ"];

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-black/60 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30 transition-all duration-300">
      <div className="w-full mx-auto px-4 lg:max-w-[1280px] flex items-center justify-between py-4 lg:py-6">
        <div className="flex gap-2 items-center">
          <img
            src="/assets/images/logo-symbol.svg"
            alt="Logo"
            className="w-[26px] h-[29px]"
          />
          <span className="font-semibold lg:text-[24px] font-outfit text-black dark:text-white">
            Batch Rendang
          </span>
        </div>

        <nav className="hidden lg:flex gap-6 items-center text-black dark:text-gray-300">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-semibold px-2 py-2 hover:text-[#FF623E] transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <div className="hidden lg:block">
            <Button className="h-[44px] px-8">Let's Talk</Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <img
              src="/assets/images/menu-01.svg"
              className="invert dark:invert-0 block w-6 h-6"
              alt="Menu"
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white/90 dark:bg-[#0D1116]/90 backdrop-blur-lg border-t border-gray-200/30 dark:border-gray-700/30 absolute w-full px-4 py-6 shadow-lg text-black dark:text-white">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold text-lg hover:text-[#FF623E]"
              >
                {item}
              </a>
            ))}
            <Button className="w-full h-11 mt-4">Let's Talk</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
