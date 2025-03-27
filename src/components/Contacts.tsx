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
    <div id="contacts" ref={ref} className="flex items-center justify-center p-4 flex-col h-[100vh] pt-12">
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
