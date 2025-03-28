import { motion } from 'framer-motion';
import Logo from '../assets/logolol.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <div>
      <div className="flex justify-between items-center top-12 mx-4 md:mx-12 relative py-4 z-10">
        <motion.div
          className="flex items-center text-white font-pixel"
          whileHover={{ scale: 1.1 }}
        >
          <img src={Logo} className="w-12 h-12 md:w-16 md:h-16" alt="" />
          <span className="relative md:w-[12rem] top-2 md:top-4 text-base md:text-lg">
            {"<Kanto/>"}
          </span>
        </motion.div>
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row justify-center md:justify-end items-center gap-4 md:gap-8 absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent z-20`}
        >
          <motion.a
            href="#"
            className="text-pink-500 text-lg md:text-2xl font-pixel border-b-2 border-pink-500 pb-1 md:pb-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('home')}
          >
            HOME
          </motion.a>
          <motion.a
            href="#about"
            className="text-sm md:text-lg border-b-2 border-transparent hover:text-pink-500 hover:border-pink-500 transition-colors duration-300 pb-1"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('about')}
          >
            ABOUT
          </motion.a>
          <motion.a
            href="#skills"
            className="text-sm md:text-lg hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('skills')}
          >
            SKILLS
          </motion.a>
          <motion.a
            href="#projects"
            className="text-sm md:text-lg hover:text-pink-500 transition-colors"
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
