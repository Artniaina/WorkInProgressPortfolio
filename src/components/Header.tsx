import { motion } from "framer-motion";
import Logo from "../assets/logolol.png";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      const yOffset = isLargeScreen ? -60 : 0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      element.style.transform = "translateY(80px)";
      element.style.opacity = "0";
      element.style.transition = "none";

      window.scrollTo({ top: y, behavior: "auto" });

      setTimeout(() => {
        element.style.transform = "translateY(0)";
        element.style.opacity = "1";
        element.style.transition =
          "transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.6s ease";
      }, 50);

      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const applyEntranceAnimation = () => {
      const sections = ["home", "about", "skills", "projects"];

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          element.style.transform = "translateY(80px)";
          element.style.opacity = "0";
          element.style.transition = "none";

          setTimeout(() => {
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
            element.style.transition =
              "transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.6s ease";
          }, 100 + index * 150);
        }
      });
    };

    setTimeout(applyEntranceAnimation, 300);
  }, []);

  return (
    <motion.div
      className="flex justify-between items-center lg:fixed top-0 left-0 right-0 py-2 lg:py-[0rem] px-6 z-30 bg-cyber-dark
       mx-2 lg:mx-8 mt-4 rounded-full shadow-[8px_8px_16px_#0e0017,_-8px_-8px_16px_#2e013e] "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >

      <motion.div
        className="flex items-center text-white font-pixel"
        whileHover={{ scale: 1.1 }}
      >
        <img src={Logo} className="w-12 h-12 lg:w-16 lg:h-16"  />
        <span className="ml-3 lg:w-[14rem] text-base lg:text-base">
          {"<Kanto/>"}
        </span>
      </motion.div>

      <div className="lg:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row justify-center lg:justify-end items-center gap-4 md:gap-6 lg:gap-8
      absolute lg:static top-16 left-0 w-full bg-[#1a012a] p-12 lg:p-0 lg:bg-transparent z-20 rounded-lg py-4`}
      >
        <motion.a
          href="#home"
          className={`text-lg md:text-[1.2rem] lg:text-sm font-pixel pb-1 md:pb-2 ${
            activeSection === "home"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-white hover:text-pink-500 transition-colors duration-300"
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          {t("navbar.home")} 
        </motion.a>

        <motion.a
          href="#about"
          className={`text-sm md:text-[1.2rem] lg:text-sm pb-1 ${
            activeSection === "about"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-white hover:text-pink-500 transition-colors duration-300"
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("about");
          }}
        >
          {t("navbar.about")} 
        </motion.a>

        <motion.a
          href="#skills"
          className={`text-sm md:text-[1.2rem] lg:text-sm pb-1 ${
            activeSection === "skills"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-white hover:text-pink-500 transition-colors duration-300"
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("skills");
          }}
        >
          {t("navbar.skills")} 
        </motion.a>

        <motion.a
          href="#projects"
          className={`text-sm md:text-[1.2rem] lg:text-sm pb-1 ${
            activeSection === "projects"
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-white hover:text-pink-500 transition-colors duration-300"
          }`}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("projects");
          }}
        >
          {t("navbar.projects")} 
        </motion.a>

        <LanguageSwitcher />

      </div>
    </motion.div>
  );
};

export default Header;
