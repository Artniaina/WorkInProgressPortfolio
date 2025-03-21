import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';

const AboutMe: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
      if (inView) {
          controls.start("visible");
      } else {
          controls.start("hidden");
      }
  }, [controls, inView]);

  const variants = {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const leftVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div id='about' className="flex items-center justify-center p-4 flex-col">
      <motion.h1
      className="text-3xl font-bold text-white mb-6"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      >
      ABOUT ME
      </motion.h1>

      <div className="w-[75rem]  rounded-lg overflow-hidden border-4 border-gray-600 shadow-2xl" style={{ backgroundColor: 'rgba(58, 50, 100, 0.9)' }}>
      <div className="px-4 py-2 bg-purple-600 flex items-center justify-between relative">
        <div className="absolute left-0 top-0 flex">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-purple-300 m-1 rounded-sm"></div>
        ))}
        </div>

        <div className="text-white font-mono font-bold mx-auto text-xl tracking-wide"
           style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>
        About_Me.exe
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
        <div key={i} className="w-8 h-1 bg-gray-500 mx-4 rounded-full"></div>
        ))}
      </div>
      
      {/* Content area */}
      <div className="p-6 bg-black relative">
        {/* Purple planet decoration */}
        <div className="absolute right-1/3 top-2 w-8 h-8 bg-pink-500 rounded-full opacity-60"></div>
        
        {/* Side toolbar */}
        <div className="absolute right-0 top-0 h-full w-6 bg-purple-900 flex flex-col items-center py-2 gap-4">
        <div className="w-4 h-4 bg-purple-400 rounded-sm"></div>
        <div className="w-4 h-4 bg-purple-400 rounded-sm mt-auto"></div>
        </div>
        
        {/* Text content */}
        <div className="text-white h-[25rem] text-xl  font-mono space-y-6 pr-10">
        <p className="leading-relaxed mb-8 ">
        I'm  <span className='text-bold text-purple-500'>ANDRIAHARINIAINA Kanto Fitiavana</span>  <br />
          Currently in my 4th year of Software engineering studies, <br /> I'm passionate about blending technology and interactivity
          to craft unique, memorable experiences. <br />
          Additionally, I specialize as a fullstack developer, building robust and scalable applications both on the server-side and client-side.
        </p>

        <div className="space-y-4 mb-8">
          <p className="text-pink-500 font-bold ">What drives me?</p>
          <p className="pl-4">
            Creating applications that aren't just functional but leave a lasting impression.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-pink-500 font-bold">What am I currently learning?</p>
          <p className="pl-4">
            I'm currently diving deep into the world of Javascript, enhancing my skills in modern frameworks such as React and Next.js
          </p>
        </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="px-4 py-2 bg-purple-600 flex items-center justify-between">
        {/* Navigation buttons */}
        <button className="w-8 h-8 bg-purple-800 border-2 border-white rounded-sm flex items-center justify-center">
        <span className="text-white">◄</span>
        </button>
        
        {/* Page indicators */}
        <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-1 bg-purple-300 rounded-full"></div>
        ))}
        </div>
        
        {/* More navigation buttons */}
        <div className="flex space-x-2">
        <button className="w-8 h-8 bg-purple-800 border-2 border-white rounded-sm flex items-center justify-center">
          <span className="text-white">►</span>
        </button>
        <button className="w-8 h-8 bg-purple-800 border-2 border-white rounded-sm flex items-center justify-center">
          <span className="text-white">♥</span>
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutMe;