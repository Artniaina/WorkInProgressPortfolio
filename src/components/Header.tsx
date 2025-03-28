import { motion } from 'framer-motion';
import Logo from '../assets/logolol.png'

const Header = () => {


  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div >
      <div className="flex justify-between top-12 mx-12 relative items-center z-10">
        <motion.div 
          className="flex items-center text-white  font-pixel"
          whileHover={{ scale: 1.1 }}
        >
          <img src={Logo} className="w-16 h-16" alt="" />
          <span className='relative top-4 text-lg'>

          {"<Kanto/>"}
          </span>
        </motion.div>
        <div className="flex items-center gap-8">
          <motion.a 
            href="#"
            className="text-pink-500 text-2xl font-pixel"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('home')}
          >
            HOME
          </motion.a>
          <motion.a 
            href="#about"
            className="text-lg hover:text-cyber-pink transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('about')}
          >
            ABOUT
          </motion.a>
    
          <motion.a 
            href="#skills"
            className="text-lg hover:text-cyber-pink transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('projects')}
          >
            SKILLS
          </motion.a>
          <motion.a 
            href="#projects"
            className="text-lg hover:text-cyber-pink transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('projects')}
          >
            PROJECTS
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;