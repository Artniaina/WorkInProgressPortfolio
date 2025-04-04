import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FrameProps {
  children: React.ReactNode;
}

const SkillsFrame: React.FC<FrameProps> = ({ children }) => {
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

  const frameVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div
      id="skills"
      ref={ref}
      className="relative w-full py-10 md:py-16 lg:py-20 px-4 md:px-6 min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col items-center justify-center"
    >
      <motion.h1
        className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#e44cff] tracking-wider  font-pixel mb-2 md:mb-4"
        style={{
          textShadow: '0 0 10px rgba(228, 76, 255, 0.5)',
          fontFamily: "'Press Start 2P', cursive"
        }}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        MY TECH STACK
      </motion.h1>
      <p className="mb-12 text-center text-white text-xs md:text-sm lg:text-lg">
      Tools and technologies I've worked with <br /> throughout my projects and experiences
    </p>
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        animate={controls}
        initial="hidden"
        variants={frameVariants}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`plus-${i}`}
            className="absolute text-[#7FFFD4] text-base md:text-xl font-bold animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 2}s`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            +
          </motion.div>
        ))}

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute bg-[#7FFFD4] w-1 h-1 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 2}s`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative w-full border-4 border-[#B341F3] bg-cyber-dark max-w-xs sm:max-w-md md:max-w-[47rem] lg:max-w-[60rem] xl:max-w-6xl 
           h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] 
           bg-[#B341F3] rounded-xl md:rounded-2xl p-1"
        animate={controls}
        initial="hidden"
        variants={frameVariants}
      >
        <div className="hidden md:block absolute -top-1 left-4 w-2 h-2 bg-[#B341F3]"></div>
        <div className="hidden md:block absolute -top-1 left-8 w-2 h-2 bg-[#B341F3]"></div>
        <div className="hidden md:block absolute -top-1 left-12 w-2 h-2 bg-[#B341F3]"></div>
        <div className="hidden md:block absolute -left-3 top-8 w-3 h-8 bg-[#B341F3]"></div>
        <div className="hidden md:block absolute -left-3 top-20 w-3 h-8 bg-[#B341F3]"></div>
        <div className="hidden md:block absolute -left-3 top-32 w-3 h-8 bg-[#B341F3]"></div>

        <div className="w-full h-full bg-cyber-dark  rounded-lg md:rounded-xl p-1 flex flex-col">
          <div className="border-b-2 border-[#B341F3]  p-1 font-mono text-sm md:text-base text-white flex-shrink-0">
            SkillsFolder
          </div>
          
          <div className="flex-shrink-0  mt-1 ml-2 md:ml-6 pt-2 md:pt-4 border-t border-cyber-light/30 text-cyber-light text-xs md:text-sm font-mono"></div>
          
          <motion.div
            className="flex-grow w-full h-full rounded-lg overflow-hidden"
            animate={controls}
            initial="hidden"
            variants={variants}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsFrame;