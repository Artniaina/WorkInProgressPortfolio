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

const Skills = () => {
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

  const skills = [
    Javascript,
    Typescript,
    Php,
    Python,
    ReactIcon,
    ReactNative,
    Redux,
    Webdev,
    Express, 
    Node, 
    Tailwind,
    Hfsql,
    mySql,
    Git,
    Github,
  ];

  const rows = [
    [skills[0], skills[1], skills[2], skills[3], skills[4]],
    [ skills[5], skills[6], skills[7], skills[8], skills[9]],
    [...skills.slice(10, 15)], 
  ];

  return (
    <div className="py-20 px-6">
      <div ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid gap-8">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center gap-[3rem] flex-wrap"
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="w-24 h-24 bg-white border-4 border-black flex items-center justify-center rounded-lg shadow-lg"
                    style={{
                      imageRendering: "pixelated",
                    }}
                    variants={itemVariants}
                    custom={index}
                  >
                    <img
                      src={skill}
                      alt={`Skill ${index}`}
                      className="w-16 h-16 object-contain"
                      style={{
                        imageRendering: "pixelated",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
            <div className="mt-2 -ml-12 pt-4 text-[1rem] border-t border-cyber-light text-cyber-light  font-mono">
              <div className="typing-animation">
                $ Skills updated successfully. Version 2.4.5
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
