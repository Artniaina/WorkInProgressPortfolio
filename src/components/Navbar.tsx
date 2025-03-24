import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-cyber-dark/90 py-3 sticky top-0 z-10 border-b border-cyber-pink/20">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <motion.a 
            href="#home" 
            className="text-cyber-pink text-xl font-pixel"
            whileHover={{ scale: 1.05 }}
          >
            HOME
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-sm hover:text-cyber-pink transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="#techno" 
            className="text-sm hover:text-cyber-pink transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            SKILLS
          </motion.a>
          <motion.a 
            href="#work" 
            className="text-sm hover:text-cyber-pink transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            WORK
          </motion.a>
        </div>
        <motion.button
          className="px-4 py-1 bg-cyber-purple hover:bg-cyber-pink text-sm transition-colors rounded"
          whileHover={{ scale: 1.05 }}
        >
          LOGO
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;