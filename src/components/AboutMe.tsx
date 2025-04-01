import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/hehe.png";
import Animated from "../assets/accc.gif";
// import Cute from '../assets/acute.gif';
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

  return (
    <div
      id="about"
      className="flex items-center h-[100vh] justify-center p-4 flex-col"
    >
      <div className="flex justify-between">
        <motion.h1
          className="text-3xl relative  font-bold text-white mb-8 bottom-10 "
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
      <div className="flex gap-8 relative z-10 right-[2rem] bottom-[2rem] ">
        <motion.div
          className="w-[18rem] h-[21rem] bg-[#2a1245] rounded-lg p-6 relative  bottom-[2rem] overflow-hidden"
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
          <div>
            {/* This image mbola hiova :D */}
            <img src={Image} alt="Hehe" />
          </div>
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
        </motion.div>
        <IoTriangleSharp
          className="text-purple-600 text-[5.5rem] relative right-[-5.9rem] top-[0.4rem] z-20"
          style={{ transform: "rotate(30deg)" }}
        />
        <motion.div
          className="w-[55rem]  relative left-[2rem] top-4 rounded-lg overflow-hidden border-4 border-t-purple-600 border-gray-600 shadow-2xl"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants2}
        >
          <div className=" px-4 py-2 h-[3rem] bg-purple-600 flex items-center justify-between relative">
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
          impression. <br />
          I am currently expanding my knowledge of advanced JavaScript{" "}
          <br /> frameworks and libraries, including{" "}
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
