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

      <div className="flex justify-between items-center top-12 mx-4 lg:mx-12 relative py-4 z-10">
        <motion.div
          className="flex items-center text-white font-pixel"
          whileHover={{ scale: 1.1 }}
        >
          <img src={Logo} className="w-12 h-12 lg:w-16 lg:h-16" alt="" />
          <span className="relative lg:w-[12rem] top-2 lg:top-4 text-base lg:text-lg">
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
          } flex-col lg:flex lg:flex-row justify-center lg:justify-end items-center gap-4 lg:gap-8 absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent z-20`}
        >
          <motion.a
            href="#"
            className="text-pink-500 text-lg lg:text-2xl font-pixel border-b-2 border-pink-500 pb-1 lg:pb-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('home')}
          >
            HOME
          </motion.a>
          <motion.a
            href="#about"
            className="text-sm lg:text-lg  hover:text-pink-500  transition-colors duration-300 pb-1"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('about')}
          >
            ABOUT
          </motion.a>
          <motion.a
            href="#skills"
            className="text-sm lg:text-lg hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScroll('skills')}
          >
            SKILLS
          </motion.a>
          <motion.a
            href="#projects"
            className="text-sm lg:text-lg hover:text-pink-500 transition-colors"
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
