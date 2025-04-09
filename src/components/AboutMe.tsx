import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/hehe.png";
import Animated from "../assets/accc.gif";
import { IoTriangleSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideIn = {
    hidden: { 
      opacity: 0, 
      x: -70,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      id="about"
      className="flex relative items-center min-h-[100dvh] pt-12 justify-center pb-12 flex-col overflow-hidden"
    >
      <div className="w-full max-w-[90rem] px-4">
        <motion.h1
          className="text-[#e44cff] mt-2 md:mt-4 text-center text-xl md:text-4xl mb-2 font-bold tracking-wider" 
          style={{
            textShadow: '0 0 10px rgba(228, 76, 255, 0.5)',
            fontFamily: "'Press Start 2P', cursive"
          }}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          {t("about.title")}
          <motion.p
            className="mb-12 text-center text-white text-xs md:text-sm opacity-80 mt-2"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
          >
            {t("about.subtitle")}
          </motion.p>
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row gap-8 relative z-10 lg:right-[5rem] lg:bottom-[2rem] items-center w-full max-w-[90rem] px-4">
        <motion.div
          className="w-[10rem] h-[11rem] p-1 md:w-[15rem] md:h-[17rem] lg:w-[14rem] lg:h-[17rem] bg-[#2a1245] rounded-full z-40 relative lg:left-[6rem] lg:bottom-[10rem] overflow-hidden border-4 border-[#e44cff] shadow-[0_0_20px_#e44cff] pixelated-frame"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <div className="relative w-full h-full">
            <img
              src={Image}
              alt="Profile"
              className="rounded-full pixelated-image w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideIn}
          className="z-20 relative bottom-[14.8rem] hidden lg:block"
        >
          <IoTriangleSharp
            className="text-purple-600 text-[5.5rem] relative right-[-5.7rem] z-10 top-[-0.1rem]"
            style={{ transform: "rotate(28deg)" }}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-[90%] md:h-[47rem] lg:w-[55rem] lg:h-[35rem] mb-4 relative lg:left-[2rem] lg:top-4 overflow-hidden border-2 md:border-4 border-purple-600 shadow-2xl z-20 rounded-lg lg:rounded-tl-none"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideIn}
        >
          <div className="px-4 py-2 h-[3rem] bg-purple-600 flex items-center justify-between relative">
            <div className="absolute left-0 top-0 flex">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-purple-300 m-1 rounded-sm"
                ></div>
              ))}
            </div>

            <div className="flex justify-between items-center px-4">
              <div
                className="ml-16 lg:ml-20 text-white text-lg font-mono font-bold md:text-xl tracking-wide"
                style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}
              >
                {t("about.text")}
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="w-6 h-6 flex items-center justify-center bg-purple-800 border-2 border-white rounded-sm">
                <span className="text-white font-bold">-</span>
              </button>
              <button className="w-6 h-6 flex items-center justify-center bg-purple-800 border-2 border-white rounded-sm">
                <span className="text-white font-bold">□</span>
              </button>
              <button className="w-6 h-6 flex items-center justify-center bg-purple-800 border-2 border-white rounded-sm">
                <span className="text-white font-bold">×</span>
              </button>
            </div>
          </div>

          <div className="pl-4 py-0 md:p-6 bg-black relative">
            <div
              className="relative max-h-[60dvh] sm:max-h-none overflow-y-auto pr-2"
              style={{
                scrollbarWidth: "auto",
                scrollbarColor: "#e44cff #2a1245",
                WebkitOverflowScrolling: "touch"
              }}
            >
              <div className="absolute right-1/3 top-2 w-8 h-8 bg-pink-500 rounded-full opacity-60"></div>
              <div className="text-white text-[1.2rem] md:text-2xl lg:text-xl relative left-2 font-mono space-y-4 md:space-y-6 pr-4 md:pr-10">
                <div className="leading-relaxed mb-4 md:mb-8">
                  <div dangerouslySetInnerHTML={{ __html: t("about.content") }} />
                  <img
                    src={Animated}
                    alt="Cute animation"
                    className="w-[8rem] md:w-[10rem] lg:w-[11rem] relative bottom-[5.6rem] left-[50%] md:left-[70%] lg:left-[80%] lg:top-[-5rem] transform -translate-x-1/2 lg:transform-none hidden md:block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;