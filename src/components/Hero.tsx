import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import FrameWorkLol from "./FrameWorkLol";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 

const Hero = () => {
  const [activeSection, setActiveSection] = useState("");
  const { t } = useTranslation(); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contacts"];
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

  const typedStrings = [
    t('hero.typed.juniorDev'),
    t('hero.typed.fullStack'),
    t('hero.typed.webDesigner'),
    t('hero.typed.softwareEngineer')
  ];

  return (
    <div id="home" className="min-h-[60vh] lg:h-[100vh]">
      <div className="hidden lg:block absolute left-[3rem] top-[7rem] h-[50%] w-[4px] bg-gradient-to-b from-pink-500 to-purple-800 rounded-full opacity-60 ">
        <div className="absolute top-[-12px] left-[-12px] w-[25px] h-[25px] bg-pink-500 rounded-full shadow-lg"></div>
      </div>
      <div className="hidden lg:block absolute left-[6rem] top-[10rem] h-[60%] w-[4px] bg-gradient-to-b from-pink-500 to-purple-800 rounded-full opacity-60">
        <div className="absolute top-[-12px] left-[-11px] w-[25px] h-[25px] bg-pink-500 rounded-full shadow-lg"></div>
      </div>
      
      <div className="top-[5rem] md:top-[8rem] lg:top-[12rem] lg:h-[33rem] px-6 py-20 flex flex-col lg:flex-row justify-start relative overflow-hidden">
        <div className="w-full lg:w-4xl flex flex-col relative -top-20 items-center lg:items-start lg:left-24">
          <motion.h1
            className="text-2xl w-[20rem] md:w-full lg:w-[40rem] md:text-4xl lg:text-5xl font-pixel mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="glitch-effect" data-text={t('hero.title')}>
              {t('hero.title')}{" "}
            </span>
            <br />
            <span className="text-pink-500 relative w-full left-2 md:left-[9rem] md:w-[35rem] lg:w-[35rem] lg:left-[1rem] lg:top-0 md:text-2xl text-[1.2rem] h-12 lg:text-[1.3rem] mt-8 md:mt-7  flex justify-center lg:justify-start">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-base text-sm md:text-xl lg:text-base mb-12 md:mt-[-1rem] w-full lg:w-[32rem] lg:top-0 lg:left-4 relative text-center lg:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('hero.description.line1')} <br />
            {t('hero.description.line2')} <br />
            {t('hero.description.line3')} <br />
            {t('hero.description.line4')}
          </motion.p>

          <motion.div
            className="relative top-[-0.5rem] md:top-[1rem] lg:top-0 flex justify-center lg:justify-start lg:left-[21rem] gap-10 lg:gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contacts"
              onClick={(e) => {
              e.preventDefault();
              handleScroll("contacts");
              }}
              className="px-4 py-2 border border-cyber-light rounded text-xs md:text-lg hover:bg-cyber-light hover:text-black transition-colors duration-300"
            >
              {t('hero.contactButton')}
            </a>
          </motion.div>
        </div>

        <div className="relative bottom-[4rem] mt-8 lg:mt-0 lg:absolute lg:bottom-[1rem] lg:right-[5rem] flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <FrameWorkLol />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;