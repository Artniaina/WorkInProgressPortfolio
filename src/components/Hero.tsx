import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import Header from './Header';
import FrameWorkLol from './FrameWorkLol';

const Hero = () => {
  return (
  <div className='h-[93vh] relative bottom-4'>
    
    <Header/>
    <div className="max-w-8xl top-[3.5rem]  px-6 py-20 flex justify-start relative overflow-hidden">
      <div className="w-4xl flex flex-col relative -top-12 items-center left-12">
        <motion.h1
          className="text-2xl md:text-5xl font-pixel  mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="glitch-effect" data-text="I AM KANTO">I AM KANTO </span>

          <br />
            <span className="text-pink-500 relative w-[35rem] left-[3rem] text-[1.5rem] mt-7 flex justify-start ">
            <ReactTyped
         strings={[
          "A JUNIOR DEVELOPER",
          "A FULL-STACK DEVELOPER",
          "A WEB DESIGNER",
          "A SOFTWARE ENGINEER",
        ]}
        
              typeSpeed={50}
              backSpeed={30}
              loop
            />
            </span>
        </motion.h1>

        <motion.p
          className="text-base mb-12 w-[32rem] left-4 relative  text-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I am a web and mobile  developer <br />from Madagascar. <br />
          Passionate about technology, <br />design,and innovation.
        </motion.p>

        <motion.div
          className="relative top-12 left-[6rem] flex gap-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contacts"
            className="px-4 py-2  border-2 border-cyber-light rounded-md"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-5 right-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}>
        <FrameWorkLol/>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default Hero;