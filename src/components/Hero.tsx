import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import Header from './Header';
import FrameWorkLol from './FrameWorkLol';

const Hero = () => {
  return (
    <div className="h-full lg:h-[100vh] relative">
      <Header />
      <div className=" top-[8rem] px-6 py-20 flex flex-col lg:flex-row justify-start relative overflow-hidden">
        <div className="w-full lg:w-4xl flex flex-col relative -top-20 items-center lg:items-start lg:left-12">
          <motion.h1
            className="text-3xl w-[20rem] lg:w-[40rem] lg:text-5xl font-pixel mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="glitch-effect" data-text="I AM KANTO">I AM KANTO </span>

            <br />
            <span className="text-pink-500 relative w-full lg:w-[35rem] lg:left-[1rem] lg:top-4 text-[1rem] lg:text-[1.5rem] mt-7 flex justify-center lg:justify-start">
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
            className="text-base text-sm lg:text-base mb-12 w-full lg:w-[32rem] lg:top-6 lg:left-4 relative text-center lg:text-start"
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
            className="relative top-12 flex justify-center lg:justify-start lg:left-[6rem] gap-10 lg:gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contacts"
              className="px-4 py-2 border-2 border-cyber-light rounded-md"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <div className="relative bottom-[4rem] mt-10 lg:mt-0 lg:absolute lg:bottom-5 lg:right-[-0.25rem] flex justify-center">
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