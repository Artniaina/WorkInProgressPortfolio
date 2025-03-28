import {  FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FrameDesc from "./FrameDesc";
import FrameImg from "./FrameImg";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
    const { ref, inView } = useInView({
      threshold: 0.2, 
    });


  const projects = [
    {
      title: "Lawyer management Intranet",
      description:
        "Developed an intranet platform to manage a lawyer's bar and digitize internal processes.",
      stats: "",
      tech: "React • Redux • Webdev • Express • Node • HFSQL",
      githubLink: "https://github.com/Artniaina/AdvocatHub",
    },
    {
      title: "E-commerce Platform",
      description:
        "Developed an e-commerce platform with features like product browsing, cart management, sales tracking, and user authentication.",
      stats: "",
      tech: "React • Redux • Express • Node • MySQL • MongoDB",
      githubLink: "https://github.com/Artniaina/E-commerceMERN",
    },
    {
      title: "Classic Games Platform",
      description:
        "A platform to play some old classic games such as Tic-Tac-Toe, Snake, Brick Breaker, and Space Invader.",
      stats: "",
      tech: "JavaScript • HTML • CSS",
      githubLink: "https://github.com/Artniaina/Shaboom",
    },
    {
      title: "Movie Search Application (PWA)",
      description:
        "Developed a Progressive Web App (PWA) for searching movies, featuring offline support, responsive design, and integration with a movie database API.",
      stats: "",
      tech: "React • PWA • Service Worker • IndexedDB • API",
      githubLink: "https://github.com/Artniaina/Pwa",
    },
    {
      title: "2FA Authentication System",
      description:
        "Implemented a Two-Factor Authentication (2FA) system  with Google Authenticator integration.",
      stats: "",
      tech: "MySQL • Express • React • Node • JWT • OTP • Google Authenticator",
      githubLink: "https://github.com/Artniaina/2fa-authentication-system",
    },
    {
      title: "Weather App with Geolocation",
      description:
        "Developed a weather application with geolocation support, displaying the current weather and forecast.",
      stats: "",
      tech: "React • Geolocation API • Weather API",
      githubLink: "https://github.com/Artniaina/weatherApp",
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    }
  };

  return (
    <motion.div
     ref={ref}
      id="projects"
      className="min-h-screen bg-[#1a0933] items-center justify-center p-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="p-6 flex justify-center text-3xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        TECHNICAL PROJECTS
      </motion.h1>

      <div className="relative overflow-hidden flex justify-center items-center min-h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: "tween", 
                duration: 0.3 
              },
              opacity: { 
                duration: 0.3 
              },
              scale: { 
                type: "tween", 
                duration: 0.3 
              }
            }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <FrameDesc {...projects[currentIndex]} />
            <FrameImg />
          </motion.div>
        </AnimatePresence>
    
        <div className="absolute w-full flex justify-between px-4">
            {currentIndex > 0 && (
            <motion.a
              animate={{
              scale: [1, 1.1, 1],
              }}
              transition={{
              duration: 1.5,
              repeat: Infinity,
              }}
              style={{
              textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
              fontFamily: "'Press Start 2P', cursive",
              position: "relative",
              }}
              onClick={handlePrevious}
              className="p-2 w-[3rem] h-[3rem] left-[3rem] text-white text-sm h-8 bg-purple-800 border-2 border-white rounded-sm flex items-center justify-center shadow-md hover:shadow-lg transition-transform transform"
            >
              
              <FaChevronLeft className="text-2xl" />
            </motion.a>
            )}
            {currentIndex < projects.length - 1 && (
            <motion.a
              animate={{
              scale: [1, 1.1, 1],
              }}
              transition={{
              duration: 1.5,
              repeat: Infinity,
              }}
              style={{
              textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
              fontFamily: "'Press Start 2P', cursive",
              position: "relative",
              }}
              onClick={handleNext}
              className="p-2 w-[3rem] h-[3rem] right-[4rem] text-white text-xs h-8 bg-purple-800 border-2 border-white rounded-sm flex items-center justify-center shadow-md hover:shadow-lg transition-transform transform ml-auto"
            >
              <FaChevronRight className="text-3xl" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;