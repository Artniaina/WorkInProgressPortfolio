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
    <motion.div
      id="skills"
      className=" flex items-center h-[105vh] justify-center p-4 flex-col"
      animate={controls}
      initial="hidden"
      variants={frameVariants}
    >
      <motion.h1
        className="relative mb-6 top-10 transform -translate-x-1/2 text-white text-3xl font-bold"
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        MY TECH STACK
      </motion.h1>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={controls}
        initial="hidden"
        variants={frameVariants}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`plus-${i}`}
            className="absolute text-[#7FFFD4] text-xl font-bold animate-twinkle"
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
        className="relative w-[70%] mt-2 w-8 h-[32rem] top-8 aspect-[16/9] bg-[#B341F3] rounded-2xl p-1"
        animate={controls}
        initial="hidden"
        variants={frameVariants}
      >
        <div className="absolute -top-1 left-4 w-2 h-2 bg-[#B341F3]"></div>
        <div className="absolute -top-1 left-8 w-2 h-2 bg-[#B341F3]"></div>
        <div className="absolute -top-1 left-12 w-2 h-2 bg-[#B341F3]"></div>

        <div className="absolute -left-3 top-8 w-3 h-8 bg-[#B341F3]"></div>
        <div className="absolute -left-3 top-20 w-3 h-8 bg-[#B341F3]"></div>
        <div className="absolute -left-3 top-32 w-3 h-8 bg-[#B341F3]"></div>

        <div className="w-full h-full bg-cyber-dark rounded-xl p-1">
          <div className="border-b-2 border-[#B341F3]  p-1">SkillsFolder</div>
          <div className="mt-1 ml-6 pt-4 border-t border-cyber-light/30 text-cyber-light text-sm font-mono">
            
          </div>
          <motion.div
            className="w-full h-full rounded-lg relative bottom-[4.5rem]"
            animate={controls}
            initial="hidden"
            variants={variants}
          >
            {children}
            
          </motion.div>
      
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default SkillsFrame;
