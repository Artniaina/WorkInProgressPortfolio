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
    <div
      className="flex justify-between items-center top-8 mx-2 lg:mx-4 relative py-2 lg:py-[0.3rem] px-6 z-10 
      bg-cyber-dark rounded-full shadow-[8px_8px_16px_#0e0017,_-8px_-8px_16px_#2e013e]"
    >
      <motion.div
        className="flex items-center text-white font-pixel"
        whileHover={{ scale: 1.1 }}
      >
        <img src={Logo} className="w-12 h-12 lg:w-16 lg:h-16" alt="Logo" />
        <span className="ml-3 lg:w-[14rem] text-base lg:text-xl">
          {"<Kanto/>"}
        </span>
      </motion.div>

      <div className="lg:hidden">
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
        } flex-col lg:flex lg:flex-row justify-center lg:justify-end items-center gap-4 md:gap-6 lg:gap-8 
        absolute lg:static top-16 left-0 w-full bg-[#1a012a] p-12 lg:p-0 lg:bg-transparent z-20 rounded-lg py-4`}
      >
        <motion.a
          href="#"
          className="text-pink-500 text-lg md:text-[1.2rem] lg:text-xl font-pixel border-b-2 border-pink-500 pb-1 md:pb-2"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScroll('home')}
        >
          HOME
        </motion.a>
        <motion.a
          href="#about"
          className="text-sm md:text-[1.2rem] lg:text-xl hover:text-pink-500 transition-colors duration-300 pb-1"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScroll('about')}
        >
          ABOUT
        </motion.a>
        <motion.a
          href="#skills"
          className="text-sm md:text-[1.2rem] lg:text-xl hover:text-pink-500 transition-colors duration-300 pb-1"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScroll('skills')}
        >
          SKILLS
        </motion.a>
        <motion.a
          href="#projects"
          className="text-sm md:text-[1.2rem] lg:text-xl hover:text-pink-500 transition-colors duration-300 pb-1"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScroll('projects')}
        >
          PROJECTS
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
