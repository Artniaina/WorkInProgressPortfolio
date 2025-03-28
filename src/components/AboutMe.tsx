import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Profile from "../assets/profileee.jpg";

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
    <div
      id="about"
      className="flex items-center h-[100vh] justify-center p-4 flex-col"
    >
      <div className="flex justify-between">
        <motion.h1
          className="text-3xl relative  font-bold text-white mb-8 bottom-10 left-28"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
         ABOUT ME
        </motion.h1>
      </div>
      {/* <motion.span
        className="  text-xs top-[3.9rem] relative z-20 bottom-12 h-8 "
      >
      <img src={Cat2} alt="" className="w-[4rem] h-[4rem]"/>
      </motion.span> */}
      <div className="flex ">
      <motion.div
          ref={ref}
          className="bg-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex p-6 z-10 h-[25rem] w-[15rem]">
            <motion.div
              className="w-50 rounded relative left-[-4rem] border-2 border-purple-400 overflow-hidden flex flex-col"
              initial={{ scale: 0.8 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-300"></div>
            <div className="w-2 h-2 bg-purple-300"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
              <div className="w-2 h-2 bg-purple-300"></div>
            </div>
            <div className="w-4 h-4 bg-gray-900 border border-purple-300"></div>
            <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
              <div className="text-purple-300 text-xs">X</div>
            </div>
          </div>
              </div>
              <div className="relative flex items-center justify-center h-[20rem]">
          <img
            src={Profile}
            alt="Profile"
            className="w-[20rem] h-[19.6rem] object-cover"
          />
          <div className="absolute inset-0 border-200 border-purple-500 opacity-50 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
