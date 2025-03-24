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
  return (
    <div
      id="skills"
      ref={ref}
      className="relative t-[3rem] w-full py-20 px-6 h-screen flex items-center justify-center bg-cyber-dark"
    >
    <motion.h1
      className="absolute top-12 transform -translate-x-1/2 text-white text-3xl font-bold"
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      MY TECH STACK
    </motion.h1>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`plus-${i}`}
            className="absolute text-[#7FFFD4] text-xl font-bold animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            +
          </div>
        ))}

        {[...Array(8)].map((_, i) => (
          <div
            key={`square-${i}`}
            className="absolute bg-[#7FFFD4] w-1 h-1 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative w-[90%] mt-2 w-8 h-[35rem] top-8 aspect-[16/9] bg-[#B341F3] rounded-2xl p-1">
        <div className="absolute -top-1 left-4 w-2 h-2 bg-[#B341F3]"></div>
        <div className="absolute -top-1 left-8 w-2 h-2 bg-[#B341F3]"></div>
        <div className="absolute -top-1 left-12 w-2 h-2 bg-[#B341F3]"></div>

        <div className="absolute -left-3 top-8 w-3 h-8 bg-[#B341F3]"></div>
        <div className="absolute -left-3 top-20 w-3 h-8 bg-[#B341F3]"></div>
        <div className="absolute -left-3 top-32 w-3 h-8 bg-[#B341F3]"></div>

        <div className="w-full h-full bg-cyber-dark rounded-xl p-1">
          <div className="w-full h-fullrounded-lg p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsFrame;
