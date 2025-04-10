import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiGraduateCap } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { LiaSchoolSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: JSX.Element;
}




const Education = () => {
  const { t } = useTranslation();
  const education: EducationItem[] = [
    {
      title: t('education.items.master.title'),
      institution: t('education.items.master.institution'),
      period: t('education.items.master.period'),
      description: t('education.items.master.description'),
      icon: <GiGraduateCap />,
    },
    {
      title: t('education.items.bachelor.title'),
      institution: t('education.items.bachelor.institution'),
      period: t('education.items.bachelor.period'),
      description: t('education.items.bachelor.description'),
      icon: <GiDiploma />,
    },
    {
      title: t('education.items.english.title'),
      institution: t('education.items.english.institution'),
      period: t('education.items.english.period'),
      description: t('education.items.english.description'),
      icon: <LiaFlagUsaSolid />,
    },
    {
      title: t('education.items.baccalaureate.title'),
      institution: t('education.items.baccalaureate.institution'),
      period: t('education.items.baccalaureate.period'),
      description: t('education.items.baccalaureate.description'),
      icon: <LiaSchoolSolid />,
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  };

  const contentVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  });

  return (
    <section
      id="aboutMe"
      className="py-8 md:py-12 lg:py-20 bg-cyber-dark relative overflow-hidden "
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-8 md:mb-12 lg:mb-20"
        >
            <motion.h2 className="text-lg md:text-2xl lg:text-3xl font-bold pixelated">
            {t("education.title")}
            </motion.h2>
          <motion.p className="text-gray-400 mt-2 md:mt-3 lg:mt-4 max-w-2xl mx-auto text-xs md:text-sm lg:text-base pixelated">
            {t("education.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto hidden lg:block"
        >
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-full before:blur-md before:bg-white/60 before:opacity-75 before:animate-pulse"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transformOrigin: "top",
              boxShadow:
                "0 0 10px rgba(228, 76, 255, 0.43), 0 0 20px rgba(228, 76, 255, 0.43)",
            }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-8 h-[15rem] ${
                index % 2 === 0
                  ? "pr-[55%] w-[64rem] right-[5.2rem]"
                  : "w-[50.5rem] left-[1.6rem] pl-[55%]"
              }`}
            >
              <motion.div
                className="absolute left-1/2 w-[4rem] h-[4rem] -ml-3 rounded-full bg-cyber-dark shadow-lg shadow-pink-400/50 border-4 border-white z-10 pixelated flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={
                  inView
                    ? {
                        scale: 1,
                        transition: { delay: 0.2 + index * 0.2, duration: 0.5 },
                      }
                    : { scale: 0 }
                }
                whileHover={{
                  scale: 1.3,
                  boxShadow:
                    "0 0 20px rgba(255, 105, 180, 0.8), 0 0 40px rgba(255, 105, 180, 0.6)",
                }}
                style={{
                  boxShadow:
                    "0 0 10px rgba(255, 105, 180, 0.5), 0 0 20px rgba(255, 105, 180, 0.3)",
                }}
              >
                <div
                  className="text-white text-4xl"
                  style={{
                    textShadow:
                      "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 105, 180, 0.6)",
                  }}
                >
                  {edu.icon}
                </div>
              </motion.div>

              <motion.div
                variants={contentVariants(index)}
                className="p-6 w-[30rem] text-center p-8 bg-cyber-purple/30 backdrop-blur-md rounded-xl relative overflow-hidden group pixelated shadow-lg shadow-pink-500/10"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
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
                <h3 className="text-[18px] text-white-200 mb-2 relative z-10 pixelated">
                  {edu.title}
                </h3>
                <div className="flex m-auto w-[12rem] pt-2 flex-col justify-between items-center border-b-2 border-pink-400 mb-4 relative z-10">
                  <p className="text-xs text-pink-400 mb-2">{edu.period}</p>
                </div>
                <p className="text-gray-300 font-mono text-xl relative z-10">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-2xl mx-auto hidden md:block lg:hidden"
        >
          <motion.div
            className="absolute left-6  top-0 bottom-0 w-0.5 bg-white before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-full before:blur-md before:bg-white/60 before:opacity-75 before:animate-pulse"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transformOrigin: "top",
              boxShadow:
                "0 0 10px rgba(228, 76, 255, 0.43), 0 0 20px rgba(228, 76, 255, 0.43)",
            }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-10 pl-16"
            >
                <motion.div
                className="absolute left-2 w-16 h-16 -ml-4 rounded-full bg-cyber-dark shadow-lg shadow-pink-400/50 border-4 border-white z-10 pixelated flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={
                  inView
                  ? {
                    scale: 1,
                    transition: { delay: 0.2 + index * 0.2, duration: 0.5 },
                    }
                  : { scale: 0 }
                }
                whileHover={{
                  scale: 1.3,
                  boxShadow:
                  "0 0 25px rgba(255, 105, 180, 0.8), 0 0 50px rgba(255, 105, 180, 0.6)",
                }}
                style={{
                  boxShadow:
                  "0 0 15px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)",
                }}
                >
                <div
                  className="text-white text-4xl"
                  style={{
                  textShadow:
                    "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 105, 180, 0.6)",
                  }}
                >
                  {edu.icon}
                </div>
                </motion.div>

              <motion.div
                variants={contentVariants(index)}
                className="p-5 w-full mb-20 bg-cyber-purple/30 backdrop-blur-md rounded-xl relative overflow-hidden group pixelated shadow-lg shadow-pink-500/10"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
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
                <h3 className="text-lg text-start text-white-200 mb-2 relative z-10 pixelated">
                  {edu.title}
                </h3>
                <div className="flex w-[13rem] pt-1 flex-col justify-between items-center border-b-2 border-pink-400 mb-3 relative z-10">
                  <p className="text-sm text-pink-400 mb-1">{edu.period}</p>
                </div>
                <p className="text-gray-300 font-mono text-start text-[1.3rem] relative z-10">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-md mx-auto md:hidden"
        >
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-white before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-full before:blur-md before:bg-white/60 before:opacity-75 before:animate-pulse"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transformOrigin: "top",
              boxShadow:
                "0 0 10px rgba(228, 76, 255, 0.43), 0 0 20px rgba(228, 76, 255, 0.43)",
            }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 pl-12"
            >
                <motion.div
                className="absolute left-0 w-12 h-12 -ml-2 rounded-full bg-cyber-dark shadow-lg shadow-pink-400/50 border-4 border-white z-10 pixelated flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={
                  inView
                  ? {
                    scale: 1,
                    transition: { delay: 0.2 + index * 0.2, duration: 0.5 },
                    }
                  : { scale: 0 }
                }
                whileHover={{
                  scale: 1.4,
                  boxShadow:
                  "0 0 25px rgba(255, 105, 180, 0.8), 0 0 50px rgba(255, 105, 180, 0.6)",
                }}
                style={{
                  boxShadow:
                  "0 0 15px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)",
                }}
                >
                <div
                  className="text-white text-3xl"
                  style={{
                  textShadow:
                    "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 105, 180, 0.6)",
                  }}
                >
                  {edu.icon}
                </div>
                </motion.div>

              <motion.div
                variants={contentVariants(index)}
                className="p-4 w-full bg-cyber-purple/30 backdrop-blur-md rounded-xl relative overflow-hidden group pixelated shadow-lg shadow-pink-500/10"
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 },
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
                <h3 className="text-[1.2rem] text-start font-mono mb-2 relative z-10">
                  {" "}
                  {edu.title}
                </h3>
                <div className="flex w-[10rem] pt-1 flex-col justify-between items-center border-b-2 border-pink-400 mb-2 relative z-10">
                  <p className="text-[0.7rem]  text-pink-400 mb-1">
                    {edu.period}
                  </p>
                </div>
                <p className="text-gray-300 text-start font-mono text-[1rem] relative z-10">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
