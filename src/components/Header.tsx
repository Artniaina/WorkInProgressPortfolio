import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -100,
        duration: 1,
        ease: "power4.out"
      });
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef} className="mt-[8rem] mx-[5rem]">
      <nav className="flex justify-between  relative  items-center z-10">
        <motion.div 
          className="text-cyber-pink text-2xl font-pixel"
          whileHover={{ scale: 1.1 }}
        >
          LOGO
        </motion.div>
        <div className="flex items-center gap-8">
          <motion.a 
            href="#"
            className="text-cyber-pink text-2xl font-pixel"
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
      </nav>
    </header>
  );
};

export default Header;