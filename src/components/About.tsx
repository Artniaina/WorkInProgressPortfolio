import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AboutFrame from "./AboutFrame";
import FrameWorkLol from "./FrameWorkLol";


const About = () => {
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
    <div ref={ref} className="flex flex-col items-center pt-12">
      <motion.h1
      className="text-3xl font-bold mb-8"
      animate={controls}
      initial="hidden"
      variants={variants}
      >
       ABOUT ME
      </motion.h1>
      <div className="flex flex-row justify-center items-center w-full space-x-8">
      <div className="h-[40rem]">
      <AboutFrame />
      </div>
      <div className="h-[37rem]">
      <FrameWorkLol />
      </div>
      </div>
    </div>
  );
};

export default About;
