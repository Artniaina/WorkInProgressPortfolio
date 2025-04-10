import { useInView } from "react-intersection-observer";
import Totoro from "../assets/ghibli.gif";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Thanks = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="flex items-center w-full lg:w-[40rem] justify-center p-2 md:p-4"
    >
      <div className=" max-w-sm md:max-w-3xl flex flex-col items-center">
        <motion.h1
          className="text-[#e44cff] mt-2 md:mt-4 text-xl md:text-3xl mb-6 md:mb-12 font-bold tracking-wider"
          style={{
            textShadow: "0 0 10px rgba(228, 76, 255, 0.5)",
            fontFamily: "'Press Start 2P', cursive",
          }}
          animate={controls}
          initial="hidden"
          variants={variants}
        >
          {t("thanks.title")}
        </motion.h1>
        <motion.div
          className="w-full mt-2 md:mt-4 lg:ml-12 bg-[#2a1245] rounded-lg p-3 md:p-6 relative overflow-hidden"
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          <div
            className="absolute top-0 right-0 h-1 w-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              boxShadow: "0 0 10px #e44cff, 0 0 20px #e44cff",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 h-1 w-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              boxShadow: "0 0 10px #e44cff, 0 0 20px #e44cff",
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-1 h-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
              boxShadow: "0 0 10px #e44cff, 0 0 20px #e44cff",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-1 h-1/2 bg-[#e44cff] animate-pulse"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              boxShadow: "0 0 10px #e44cff, 0 0 20px #e44cff",
            }}
          ></div>
          <div className="text-white mt-1 md:mt-2 mb-3 md:mb-6 text-base md:text-lg">
           <div dangerouslySetInnerHTML={{ __html:  t("thanks.subtitle")}} />

          </div>
          <div className="space-y-1 md:space-y-2 text-white">
            {[`${t("thanks.yes")}`, `${t("thanks.maybe")}`].map((option, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 cursor-pointer hover:text-[#e44cff] transition-colors`}
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationIterationCount: "infinite",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span
                  className={index === 0 ? "text-[#e44cff]" : "opacity-0"}
                ></span>{" "}
                {option}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] mt-4 md:mt-8 md:mr-16"
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <img src={Totoro} alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>
    </div>
  );
};

export default Thanks;
