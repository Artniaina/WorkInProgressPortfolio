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

  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef} className="mt-[8rem] mx-[5rem]">
      <nav className="flex justify-between items-center z-10">
        <motion.div
          className="text-cyber-pink text-2xl font-pixel"
          whileHover={{ scale: 1.1 }}
        >
          KANTO
        </motion.div>
        <div className="flex items-center gap-8">
          <motion.a
            href="#home"
            onClick={scrollToSection('home')}
            className="text-cyber-pink text-2xl font-pixel active:text-cyber-pink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOME
          </motion.a>
          <motion.a
            href="#about"
            onClick={scrollToSection('about')}
            className="text-lg hover:text-cyber-pink transition-colors active:text-cyber-pink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ABOUT
          </motion.a>
          <motion.a
            href="#skills"
            onClick={scrollToSection('skills')}
            className="text-lg hover:text-cyber-pink transition-colors active:text-cyber-pink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SKILLS
          </motion.a>
          <motion.a
            href="#project"
            onClick={scrollToSection('project')}
            className="text-lg hover:text-cyber-pink transition-colors active:text-cyber-pink"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PROJECT
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Header;