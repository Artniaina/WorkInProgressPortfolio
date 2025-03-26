import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AboutFrame from "./AboutFrame";
import Thanks from "./Thanks";

const Contacts = () => {
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
    <div id="contacts" ref={ref} className="flex flex-col pt-12">
 
      <div className=" flex  relative -top-4 ml-[5rem] justify-start space-x-8">
        <div >
          <Thanks />
        </div>
        <div >
          <AboutFrame />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
