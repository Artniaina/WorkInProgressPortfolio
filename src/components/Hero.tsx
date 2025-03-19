import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
const Hero = () => {
  return (
    <div className="max-w-8xl px-6 py-20 flex justify-start">
    <div className="flex flex-col items-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-pixel retro-shadow mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="glitch-effect" data-text="I AM KANTO">I AM KANTO </span>
        <br />
        <span className="text-cyber-pink text-[1.7rem] mt-7 flex justify-start align-center ml-10">
          <ReactTyped
            strings={[
              "A FULLSTACK DEVELOPER",
              "A TECH ENTHUSIAST",
              "A LIFELONG LEARNER",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-12 text-cyber-light  text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I am a web and mobile developer from Madagascar. <br /> 
        Continuously learning, evolving, <br />and refining my craft every single day.
      </motion.p>

      <motion.div 
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
            <a href="#contact" className="px-8 py-4 border-2 border-cyber-pink bg-cyber-purple hover:bg-cyber-pink transition-colors rounded">
             Download CV
            </a>
             <a href="#projects" className="px-8 py-4 bg-cyber-purple hover:bg-cyber-pink transition-colors rounded pixel-border">
              Contact me
            </a>
      </motion.div>
    </div>
    </div>
  );
};

export default Hero;