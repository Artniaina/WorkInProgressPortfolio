import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import Header from './Header';
import FrameWorkLol from './FrameWorkLol';

const Hero = () => {
  return (
    <div id='home' className="h-full lg:h-[100vh] relative">
 
      <div className=" top-[5rem] md:top-[8rem] lg:top-[12rem] px-6 py-20 flex flex-col  lg:flex-row justify-start relative overflow-hidden">
        <div className="w-full lg:w-4xl flex flex-col relative -top-20 items-center lg:items-start lg:left-12">
          <motion.h1
            className="text-2xl w-[20rem] md:w-full lg:w-[40rem] md:text-4xl lg:text-5xl font-pixel mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="glitch-effect" data-text="I AM KANTO">I AM KANTO </span>

            <br />
            <span className="text-pink-500  relative w-full left-2 md:left-[9rem] md:w-[35rem] lg:w-[35rem] lg:left-[1rem] lg:top-4 md:text-2xl text-[1.2rem] h-12 lg:text-[1.5rem] mt-8 md:mt-7  flex justify-center lg:justify-start">
              <ReactTyped
                strings={[
                  'A JUNIOR DEVELOPER',
                  'A FULL-STACK DEV',
                  'A WEB DESIGNER',
                  'A SOFTWARE ENGINEER',
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-base text-sm md:text-xl lg:text-base mb-12  md:mt-[-1rem] w-full lg:w-[32rem] lg:top-6 lg:left-4 relative text-center  lg:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I am a web and mobile developer <br />
            from Madagascar. <br />
            Passionate about technology, <br />
            design, and innovation.
          </motion.p>

            <motion.div
            className="relative top-[-0.5rem] md:top-[1rem] lg:top-12 flex justify-center lg:justify-start lg:left-[6rem] gap-10 lg:gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            >
            <a
              href="#contacts"
              className="px-4 py-2 border-2 border-cyber-light rounded-md text-sm md:text-xl md:p-[1rem] lg:text-xl hover:bg-cyber-light hover:text-black transition-colors duration-300"
            >
              Contact me
            </a>
            </motion.div>
        </div>

        <div className="relative bottom-[4rem] mb-12 mt-10 lg:mt-0 lg:absolute lg:bottom-[-1rem] lg:right-[-0.25rem] flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <FrameWorkLol />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;