import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Javascript from "../assets/JS.jpg";
import ReactIcon from "../assets/REACT.png";
import Typescript from "../assets/TS.webp";
import Php from "../assets/php.png";
import Tailwind from "../assets/Tailwind_CSS_Logo.svg.png";
import mySql from "../assets/mysql.png";
import Redux from "../assets/redux.svg";
import Webdev from "../assets/wedev.webp";
import Git from "../assets/git.png";
import Github from "../assets/github.png";
import Express from "../assets/express-js.png";
import Hfsql from "../assets/cloud_stockage-hfsql.svg";
import Python from "../assets/PY.png";
import ReactNative from "../assets/reactnative-inner.svg";
import Node from "../assets/node.webp";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const  { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const skillsData = [
    { image: Javascript, name: "JavaScript" },
    { image: Typescript, name: "TypeScript" },
    { image: Php, name: "PHP" },
    { image: Python, name: "Python" },
    { image: ReactIcon, name: "React" },
    { image: ReactNative, name: "React Native" },
    { image: Redux, name: "Redux" },
    { image: Webdev, name: "WebDev" },
    { image: Express, name: "Express" },
    { image: Node, name: "Node.js" },
    { image: Tailwind, name: "Tailwind" },
    { image: Hfsql, name: "HFSQL" },
    { image: mySql, name: "MySQL" },
    { image: Git, name: "Git" },
    { image: Github, name: "GitHub" },
  ];

  const mobileSkills = [
    [skillsData[0], skillsData[1]],
    [skillsData[2], skillsData[3]],
    [skillsData[4], skillsData[5]],
    [skillsData[6], skillsData[7]],
    [skillsData[8], skillsData[9]],
    [skillsData[10], skillsData[11]],
    [skillsData[12], skillsData[13]],
    [skillsData[14]],
  ];

  const tabletSkills = [
    [skillsData[0], skillsData[1], skillsData[2]],
    [skillsData[3], skillsData[4], skillsData[5]],
    [skillsData[6], skillsData[7], skillsData[8]],
    [skillsData[9], skillsData[10], skillsData[11]],
    [skillsData[12], skillsData[13], skillsData[14]],
  ];

  const desktopSkills = [
    [skillsData[0], skillsData[1], skillsData[2], skillsData[3], skillsData[4]],
    [skillsData[5], skillsData[6], skillsData[7], skillsData[8], skillsData[9]],
    [skillsData[10], skillsData[11], skillsData[12], skillsData[13], skillsData[14]],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div ref={ref} className="w-full overflow-hidden py-4">
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid gap-6 md:hidden">
            {mobileSkills.map((row, rowIndex) => (
              <div
                key={`mobile-${rowIndex}`}
                className="flex justify-center gap-4 flex-wrap"
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={`mobile-${rowIndex}-${index}`}
                    className="flex flex-col items-center"
                    variants={itemVariants}
                    custom={index + rowIndex * 3}
                  >
                    <div className=" bg-white  flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-[6rem] h-[6rem] object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs w-[7rem] font-medium text-center text-white opacity-80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden md:grid lg:hidden gap-8">
            {tabletSkills.map((row, rowIndex) => (
              <div
                key={`tablet-${rowIndex}`}
                className="flex justify-center gap-8 flex-wrap"
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={`tablet-${rowIndex}-${index}`}
                    className="flex flex-col items-center"
                    variants={itemVariants}
                    custom={index + rowIndex * 4}
                  >
                    <div className=" bg-white border-2 border-black flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-[7rem] h-[7rem] object-contain"
                      />
                    </div>
                    <span className="mt-3 w-[12rem] text-sm font-medium text-center text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden lg:grid gap-10">
            {desktopSkills.map((row, rowIndex) => (
              <div
                key={`desktop-${rowIndex}`}
                className="flex justify-center gap-10 flex-wrap"
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={`desktop-${rowIndex}-${index}`}
                    className="flex flex-col items-center"
                    variants={itemVariants}
                    custom={index + rowIndex * 5}
                  >
                    <div className=" w-[6.3rem] bg-white border-2 border-black flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-[6rem] h-[6rem] object-contain"
                      />
                    </div>
                    <span className="mt-4 text-base text-center  w-[9rem] font-medium text-center text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 text-xs sm:text-sm md:text-base border-t border-cyber-light text-cyber-light font-mono w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-center">
            <div className="typing-animation">
              {t('skills.subtitle3')}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;