import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/hehe.png";
import Animated from "../assets/accc.gif";
import Planet from "../assets/planet.gif";
import { IoTriangleSharp } from "react-icons/io5";

const AboutMe: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    controls.start("hidden");
  }, [controls]);

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
  const variants2 = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const generatePlanets = (count: number) => {
    const planets = [];
    for (let i = 0; i < count; i++) {
      let sizeCategory = Math.floor(Math.random() * 3);
      let size;
      let opacity;

      if (sizeCategory === 0) {
        size = Math.random() * 2 + 1;
        opacity = Math.random() * 0.15 + 0.05;
      } else if (sizeCategory === 1) {
        size = Math.random() * 3 + 3;
        opacity = Math.random() * 0.15 + 0.1;
      } else {
        size = Math.random() * 5 + 6;
        opacity = Math.random() * 0.2 + 0.05;
      }

      const xMovement = [-30, 0, 30, 0];
      const yMovement = [0, 30, 0, -30];

      if (Math.random() > 0.5) {
        xMovement.reverse();
      }
      if (Math.random() > 0.5) {
        yMovement.reverse();
      }

      const amplitudeMultiplier = Math.random() * 2 + 0.5;
      const xAmplified = xMovement.map((val) => val * amplitudeMultiplier);
      const yAmplified = yMovement.map((val) => val * amplitudeMultiplier);

      planets.push({
        id: i,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        size: `${size}rem`,
        opacity: opacity,
        zIndex: 10,
        animate: {
          x: xAmplified,
          y: yAmplified,
        },
        transition: {
          duration: Math.random() * 15 + 25,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear",
        },
      });
    }
    return planets;
  };

  const planets = generatePlanets(30);

  return (
    <div
      id="about"
      className="flex relative items-center min-h-screen pt-12 justify-center pb-12 flex-col overflow-hidden"
    >
      {planets.map((planet) => (
        <motion.img
          key={planet.id}
          src={Planet}
          alt="Planet"
          className="absolute"
          style={{
            top: planet.top,
            left: planet.left,
            width: planet.size,
            height: planet.size,
            opacity: planet.opacity,
            zIndex: planet.zIndex,
          }}
          animate={planet.animate}
          transition={planet.transition}
        />
      ))}

      <div className="flex justify-between w-full md:w-auto lg:w-auto">
        <motion.h1
          className="text-2xl md:text-3xl lg:text-3xl relative mb-8 md:mb-0  text-center left-[3rem] md:left-0 font-bold text-white md:mt-12 md:bottom-10 z-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          ABOUT ME :D
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row gap-8 relative z-10 md:right-0 lg:right-[5rem] md:bottom-0 lg:bottom-[2rem] items-center">
        <motion.div
          className="w-[10rem] h-[11rem]  lg:w-[14rem] md:w-[15rem]  md:h-[17rem] lg:h-[20rem] bg-[#2a1245] rounded-full p-1 z-40 relative md:left-0 lg:left-[6.5rem] md:bottom-0 lg:bottom-[8rem] overflow-hidden border-4 border-[#e44cff] shadow-[0_0_20px_#e44cff] pixelated-frame"
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          <div className="relative">
            <img
              src={Image}
              alt="Hehe"
              className="rounded-full pixelated-image"
            />
          </div>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
          }}
          className="z-20 relative  bottom-[14.8rem]  hidden md:hidden lg:block"
        >
          <IoTriangleSharp
            className="text-purple-600 text-[5.5rem] relative right-[-5.8rem]  z-40 top-[0.4rem]"
            style={{ transform: "rotate(30deg)" }}
          />
        </motion.div>

        <motion.div
          className="w-[23rem] md:w-[90%] md:h-[47rem] lg:w-[55rem] lg:h-[35rem] mb-4 relative md:left-0 lg:left-[2rem] md:top-0 lg:top-4 rounded-lg overflow-hidden border-4 border-t-purple-600 border-gray-600 shadow-2xl z-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants2}
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
                className="ml-20 text-white text-lg font-mono font-bold  md:text-xl lg:text-xl tracking-wide"
                style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}
              >
                AboutMe.txt
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

          <div className="p-4  md:p-6 lg:p-6 bg-black relative">
            <div
              className="relative max-h-[40vh] sm:max-h-none overflow-y-auto pr-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#e44cff #2a1245",
              }}
            >
              <style>
                {`
              ::-webkit-scrollbar {
                width: 20px;
              }
              ::-webkit-scrollbar-track {
                background: #2a1245;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #e44cff;
                border-radius: 4px;
              }
              `}
              </style>
              <div className="absolute right-1/3 top-2 w-8 h-8 bg-pink-500 rounded-full opacity-60"></div>
              <div className="text-white text-[1.2rem] md:text-2xl lg:text-xl relative left-2 font-mono space-y-4 md:space-y-6 lg:space-y-6 pr-4 md:pr-10 lg:pr-10">
                <p className="leading-relaxed mb-4 md:mb-8 lg:mb-8">
                  I am{" "}
                  <span className="font-bold text-pink-300">
                  ANDRIAHARINIAINA Kanto Fitiavana
                  </span>{" "}
                  <br />I am a{" "}
                  <span className="text-purple-300">
                  fourth-year Software Engineering student
                  </span>{" "}
                  passionate about technology and interactivity to create
                  innovative and engaging experiences. <br /> <br /> As a{" "}
                  <span className="text-pink-400">Full-Stack Developer</span>, I
                  specialize in building{" "}
                  <span className="text-salmon-400">
                  scalable, high-performance applications
                  </span>{" "}
                  across both the frontend and backend. <br /> <br />
                  Beyond functionality, I focus on delivering{" "}
                  <span className="text-purple-400">
                  seamless user experiences
                  </span>{" "}
                  through well-designed, intuitive interfaces that leave a
                  lasting impression. <br />I am currently expanding my
                  knowledge of advanced JavaScript <br /> frameworks and
                  libraries, including{" "}
                  <span className="text-pink-500">
                  Next.js, <br />
                  NestJS and beyond
                  </span>{" "}
                  <img
                  src={Animated}
                  alt="Cute animation"
                  className="w-[8rem] md:w-[10rem] lg:w-[10rem] relative bottom-[5.6rem] left-[50%] md:left-[50%] lg:left-[42rem] transform -translate-x-1/2 md:-translate-x-1/2 lg:transform-none hidden md:block"
                  />
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;