import { useEffect, useState } from "react";
import Navbar from "./components/container/Navbar";
import { Hero } from "./components/container/Hero";
import { LogoMarquee } from "./components/container/LogoMarquee";
import { Stats } from "./components/container/Stats";
import { Process } from "./components/container/Process";
import Services from "./components/container/Services";
import { IndustryAndPortfolio } from "./components/container/IndustryAndPortfolio";
import { Testimonials } from "./components/container/Testimonials";
import { Footer } from "./components/container/Footer";
import Contact from "./components/container/Contact";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`font-quicksand min-h-screen bg-white dark:bg-black transition-colors duration-300`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <Process />
        <Services />
        <IndustryAndPortfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
