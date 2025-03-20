import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

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

  const handleScroll = (target: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 50 },
      ease: "power2.out"
    });
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
            onClick={() => handleScroll("#home")} 
            className="text-cyber-pink text-2xl font-pixel cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            HOME
          </motion.a>
          <motion.a 
            onClick={() => handleScroll("#about")} 
            className="text-lg hover:text-cyber-pink transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            ABOUT
          </motion.a>
          <motion.a 
            onClick={() => handleScroll("#skills")} 
            className="text-lg hover:text-cyber-pink transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            SKILLS
          </motion.a>
          <motion.a 
            onClick={() => handleScroll("#project")} 
            className="text-lg hover:text-cyber-pink transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            PROJECT
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Header;