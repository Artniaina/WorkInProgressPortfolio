import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-pixel retro-shadow mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="glitch-effect" data-text="I AM KANTO">I AM KANTO </span>
        <br />
        <span className="text-cyber-pink">A FULLSTACK DEVELOPER</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-12 text-cyber-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I am a fullstack developer from Madagascar, still learning and improving my skills everyday.
      </motion.p>

      <motion.div 
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a href="#contact" className="px-8 py-4 border-2 border-cyber-pink hover:bg-cyber-pink transition-colors rounded">
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;