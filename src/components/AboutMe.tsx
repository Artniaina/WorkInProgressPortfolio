import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/hehe.png";
import Animated from "../assets/accc.gif";
import Planet from "../assets/planet.gif"
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
      let sizeCategory = Math.floor(Math.random() * 3); // 0, 1, or 2
      let size;
      let opacity;
      
      if (sizeCategory === 0) { 
        size = Math.random() * 2 + 1;
        opacity = Math.random() * 0.15 + 0.05; 
      } else if (sizeCategory === 1) { // Medium planets
        size = Math.random() * 3 + 3; // 3-6rem
        opacity = Math.random() * 0.15 + 0.1; // 0.1-0.25
      } else { // Large planets
        size = Math.random() * 5 + 6; // 6-11rem
        opacity = Math.random() * 0.2 + 0.05; // 0.05-0.25
      }
      
      // Generate random movement patterns with very slow speed
      const xMovement = [-30, 0, 30, 0];
      const yMovement = [0, 30, 0, -30];
      
      // Randomize the movement direction
      if (Math.random() > 0.5) {
        xMovement.reverse();
      }
      if (Math.random() > 0.5) {
        yMovement.reverse();
      }
      
      // Add variety to movement amplitude
      const amplitudeMultiplier = Math.random() * 2 + 0.5; // 0.5-2.5
      const xAmplified = xMovement.map(val => val * amplitudeMultiplier);
      const yAmplified = yMovement.map(val => val * amplitudeMultiplier);
      
      planets.push({
        id: i,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        size: `${size}rem`,
        opacity: opacity,
        zIndex: 10, // Ensure all planets are in background
        animate: {
          x: xAmplified,
          y: yAmplified,
        },
        transition: {
          duration: Math.random() * 15 + 25, // Very slow: 25-40 seconds
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear"
        }
      });
    }
    return planets;
  };

  const planets = generatePlanets(30); // Generate 30 planets for a rich background

  return (
    <div
      id="about"
      className="flex relative items-center h-[100vh] justify-center p-4 flex-col overflow-hidden"
    >
      {/* Planet Background Layer */}
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
      
     

      <div className="flex justify-between">
        <motion.h1
          className="text-3xl relative font-bold text-white mb-8 bottom-10 z-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          ABOUT ME :D
        </motion.h1>
      </div>

      <div className="flex gap-8 relative z-10 right-[5rem] bottom-[2rem]">
        <motion.div
          className="w-[16rem] h-[20rem] bg-[#2a1245] rounded-full p-1 z-40 relative left-[5rem] bottom-[2rem] overflow-hidden border-4 border-[#e44cff] shadow-[0_0_20px_#e44cff] pixelated-frame z-20"
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          <div className="relative ">
            <img
              src={Image}
              alt="Hehe"
              className="rounded-full  pixelated-image"
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
          className="z-20"
        >
          <IoTriangleSharp
            className="text-purple-600 text-[5.5rem] relative right-[-5.8rem]  z-40 top-[0.4rem]"
            style={{ transform: "rotate(30deg)" }}
          />
        </motion.div>
        <motion.div
          className="w-[55rem] relative left-[2rem] top-4 rounded-lg overflow-hidden border-4 border-t-purple-600 border-gray-600 shadow-2xl z-20"
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
                className="ml-20 text-white font-mono font-bold text-xl tracking-wide"
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

          <div className="p-6 bg-black relative">
            <div className="absolute right-1/3 top-2 w-8 h-8 bg-pink-500 rounded-full opacity-60"></div>
            <div className="text-white h-[30rem] text-xl relative left-2 font-mono space-y-6 pr-10 h-[14rem]">
              <p className="leading-relaxed mb-8">
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
                through well-designed, intuitive interfaces that leave a lasting
                impression. <br />I am currently expanding my knowledge of
                advanced JavaScript <br /> frameworks and libraries, including{" "}
                <span className="text-pink-500">
                  Next.js, <br />
                  NestJS and beyond
                </span>{" "}
                <img
                  src={Animated}
                  alt="Cute animation"
                  className="w-[10rem] relative bottom-[5.6rem] left-[42rem]"
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;