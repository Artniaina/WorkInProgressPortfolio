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

  return (
    <header ref={headerRef} className="mt-[106px]">

      <nav className="flex justify-between items-center max-w-6xl mx-auto z-10">
        <motion.div 
          className="text-cyber-pink text-2xl font-pixel"
          whileHover={{ scale: 1.1 }}
        >
          DEV.8BIT
        </motion.div>
         <div className="flex items-center gap-6">
                 <motion.a 
                   href="#" 
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
                   href="#blog" 
                   className="text-sm hover:text-cyber-pink transition-colors"
                   whileHover={{ scale: 1.05 }}
                 >
                   SKILLS
                 </motion.a>
                 <motion.a 
                   href="#blog" 
                   className="text-sm hover:text-cyber-pink transition-colors"
                   whileHover={{ scale: 1.05 }}
                 >
                   WORK
                 </motion.a>
               </div>
      </nav>
    </header>
  );
};

export default Header;