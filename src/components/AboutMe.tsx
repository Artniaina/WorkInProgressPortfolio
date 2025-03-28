import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../assets/profileee.jpg"

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

  return (
    <div id="about" className="flex items-center h-[100vh] justify-center p-4 flex-col">
      <div className="flex justify-between">
        <motion.h1
          className="text-3xl relative font-bold text-white bottom-10 left-[8rem] "
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          WHO AM I?
        </motion.h1>
        <motion.a
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        style={{
          textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
          fontFamily: "'Press Start 2P', cursive",
          left: "25rem",
          position: "relative",
        }}
        href="#aboutMe"
        className="p-1.5 w-[10rem] relative bottom-12 text-white text-sm h-8 bg-purple-800 border-2 border-white rounded-sm flex items-center justify-center shadow-md hover:shadow-lg transition-transform transform"
            >
        See more:D
           
            </motion.a>
      </div>
    <div className="flex ">
    <div className="w-1/3 h-[20rem] relative bottom-[2rem] right-12 bg-cyber-dark flex items-center justify-center relative">
        <img
          // src={Profile}
          alt="Profile" 
          className="w-[12rem] h-[20rem] object-cover"
        />
        <div className="absolute inset-0 border-4 border-purple-500 opacity-50 pointer-events-none"></div>
     
       </div>
     <motion.div
       className="w-[60rem] relative left-[2rem] top-4 rounded-lg overflow-hidden border-4 border-gray-600 shadow-2xl"
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={variants2}
     >
       <div className=" px-4 py-2 bg-purple-600 flex items-center justify-between relative">
      <div className="absolute left-0 top-0 flex">
        {[...Array(3)].map((_, i) => (
          <div
         key={i}
         className="w-4 h-4 bg-purple-300 m-1 rounded-sm"
          ></div>
        ))}
      </div>
      <div className="flex justify-between items-center w-full px-4">
        <div
          className=" ml-20 text-white font-mono font-bold text-xl tracking-wide"
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

       <div className="h-2 bg-gray-700 flex">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="w-8 h-1 bg-gray-500 mx-4 rounded-full"
        ></div>
      ))}
       </div>

       <div className="p-6 bg-black relative">
      <div className="absolute right-1/3 top-2 w-8 h-8 bg-pink-500 rounded-full opacity-60"></div>
      <div className="text-white h-[25rem] text-xl relative left-2 font-mono space-y-6 pr-10 h-[14rem]">
        <p className="leading-relaxed mb-8">
          I am{" "}
          <span className="font-bold text-pink-300">
          ANDRIAHARINIAINA Kanto Fitiavana
          </span>{" "}
          <br />
          I am a{" "}
          <span className="text-purple-300">
          fourth-year Software Engineering student
          </span>{" "}
          passionate about technology and interactivity to create innovative
          and engaging experiences. <br /> <br /> As a{" "}
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
          impression.
        </p>
      </div>
       </div>
     </motion.div>
 
  
    </div>

    </div>
  );
};

export default AboutMe;
