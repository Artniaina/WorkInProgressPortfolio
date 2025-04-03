import { useAnimation } from "framer-motion";
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

  return (
    <div 
      id="contacts" 
      ref={ref} 
      className="flex items-center justify-center  p-2 md:p-4 flex-col min-h-screen py-8 md:pt-12"
    >
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center lg:items-start w-full">
        <div className="w-full lg:w-auto mb-8 lg:mb-0">
          <Thanks />
        </div>
        <div className="w-full lg:w-auto flex md:justify-center relative md:bottom-[7rem] lg:top-0 ">
          <AboutFrame />
        </div>
      </div>
    </div>
  );
};

export default Contacts;