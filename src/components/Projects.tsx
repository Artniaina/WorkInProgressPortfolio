import { FaGithub, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "../assets/pinkbutter.jpg";
import Game from '../assets/Console.gif'

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const projects = [
    {
      title1: "1/6",
      title: "Lawyer management Intranet",
      description:
        "Developed an intranet platform to manage a lawyer's bar and digitize internal processes.",
      stats: "",
      tech: "React • Redux • Webdev • Express • Node • HFSQL",
      githubLink: "https://github.com/Artniaina/AdvocatHub",
    },
    {
      title1: "2/6",
      title: "E-commerce Platform",
      description:
        "Developed an e-commerce platform with features like product browsing, cart management, sales tracking, and user authentication.",
      stats: "",
      tech: "React • Redux • Express • Node • MySQL • MongoDB",
      githubLink: "https://github.com/Artniaina/E-commerceMERN",
    },
    {
      title1: "3/6",
      title: "Classic Games Platform",
      description:
        "A platform to play some old classic games such as Tic-Tac-Toe, Snake, Brick Breaker, and Space Invader.",
      stats: "",
      tech: "JavaScript • HTML • CSS",
      githubLink: "https://github.com/Artniaina/Shaboom",
    },
    {
      title1: "4/6",
      title: "Movie Search Application (PWA)",
      description:
        "Developed a PWA for searching movies, featuring offline support, and integration with a movie database API.",
      stats: "",
      tech: "React • PWA • Service Worker ",
      githubLink: "https://github.com/Artniaina/Pwa",
    },
    {
      title1: "5/6",
      title: "2FA Authentication System",
      description:
        "Implemented a Two-Factor Authentication (2FA) system  with Google Authenticator integration.",
      stats: "",
      tech: "MySQL • Express • React • Node • JWT • OTP • Google Authenticator",
      githubLink: "https://github.com/Artniaina/2fa-authentication-system",
    },
    {
      title1: "6/6",
      title: "Weather App with Geolocation",
      description:
        "Developed a weather application with geolocation support.",
      stats: "",
      tech: "React • Geolocation API • Weather API",
      githubLink: "https://github.com/Artniaina/weatherApp",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get card indexes based on current position for coverflow effect
  const getCardIndexes = () => {
    const totalCards = projects.length;
    const numVisible = screenWidth >= 1280 ? 5 : 3;
    const visibleCards = [];
    
    // Calculate which cards should be visible in the carousel
    for (let i = -(Math.floor(numVisible / 2)); i <= Math.floor(numVisible / 2); i++) {
      let index = (currentIndex + i + totalCards) % totalCards;
      visibleCards.push({
        index,
        position: i
      });
    }
    
    return visibleCards;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      className="rounded h-[37rem] border-2 border-purple-400 overflow-hidden flex flex-col relative bg-gray-900 shadow-lg md:h-[37rem]"
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
        </div>
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
            <div className="w-2 h-2 bg-purple-300"></div>
          </div>
          <div className="w-4 h-4 bg-gray-900 border border-purple-300"></div>
          <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
            <div className="text-purple-300 text-xs">X</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="h-[15rem] md:h-64 border-b-2 border-purple-400 overflow-hidden">
          <img 
            src={Image} 
            alt="Project thumbnail" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-3 text-center p-3 md:p-5">
          <h2 className="text-xl text-pink-200 font-mono font-bold text-white md:text-2xl">
            {project.title}
          </h2>
          <p className="text-[1.1rem] font-mono text-white md:text-lg">
            {project.description}
          </p>
          <div className="mt-auto p-3 text-[0.8rem] text-white md:text-sm">
            <span className="text-[0.8rem] text-pink-300 md:text-sm">Tech Stack and tools:</span>{" "}
            {project.tech}
          </div>
        </div>
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 text-[10px] text-white flex items-center space-x-1 hover:text-pink-400 transition md:text-xs"
      >
        <FaGithub className="text-sm text-white" />
        <span>View code</span>
      </a>
    </motion.div>
  );

  return (
    <motion.div
      id="projects"
      className="min-h-screen bg-[#1a0933] flex flex-col items-center justify-center px-4 md:px-8 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="mb-8 text-2xl font-bold text-white text-center md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        TECHNICAL PROJECTS
        {/* <img src={Game} alt="" className="w-[8rem] h-[8rem] m-auto"/> */}
      </motion.h1>
 
      <div className="hidden md:block">
        <motion.button 
          onClick={handlePrevious} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous project"
        >
          <FaChevronLeft />
        </motion.button>
        
        <motion.button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next project"
        >
          <FaChevronRight />
        </motion.button>
      </div>
      <div className="relative overflow-hidden flex justify-center items-center min-h-[38rem] md:min-h-[41rem] w-full md:hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
        key={currentIndex}
        custom={direction}
        variants={{
          enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
          }),
          center: {
            x: 0,
            opacity: 1,
            rotateY: direction > 0 ? 360 : -360,
          },
          exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
          }),
        }}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
          rotateY: { duration: 0.9 },
        }}
        className="absolute w-full max-w-[25rem] md:max-w-lg"
          >
        <ProjectCard project={projects[currentIndex]} index={currentIndex} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden md:flex justify-center items-center min-h-[41rem] w-full overflow-visible relative perspective-1000">
        <div className="relative w-full flex justify-center items-center perspective-1000" style={{ perspective: "1200px" }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {getCardIndexes().map(({index, position}) => {
              const xOffset = position * (screenWidth >= 1280 ? 280 : 220);
              const zOffset = Math.abs(position) * -200;
              const rotateY = position * (position < 0 ? 45 : -45);
              const scale = Math.max(0.75, 1 - Math.abs(position) * 0.15);
              const opacity = Math.max(0.4, 1 - Math.abs(position) * 0.3);
              const zIndex = 10 - Math.abs(position);
              
              return (
                <motion.div
                  key={`card-${index}`}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? (position > 0 ? xOffset + 400 : xOffset - 400) : (position < 0 ? xOffset - 400 : xOffset + 400),
                    z: zOffset,
                    rotateY: position * (position < 0 ? 60 : -60),
                    scale: scale - 0.1,
                    opacity: 0
                  }}
                  animate={{
                    x: xOffset,
                    z: zOffset,
                    rotateY,
                    scale,
                    opacity,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1.5,
                      duration: 0.7
                    }
                  }}
                  exit={{
                    x: direction > 0 ? (position < 0 ? xOffset - 400 : xOffset + 400) : (position > 0 ? xOffset + 400 : xOffset - 400),
                    z: zOffset - 100,
                    rotateY: position * (position < 0 ? 60 : -60),
                    scale: scale - 0.1,
                    opacity: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.8, 0.25, 1]
                    }
                  }}
                  className={`absolute ${position === 0 ? 'z-20' : ''}`}
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                    filter: position === 0 ? "brightness(1)" : `brightness(${0.7 + (0.3 * (1 - Math.abs(position) / 3))})`,
                    width: screenWidth >= 1280 ? "400px" : (screenWidth >= 768 ? "350px" : "300px"),
                    cursor: position === 0 ? "default" : "pointer"
                  }}
                  onClick={() => {
                    if (position !== 0) {
                      if (position < 0) {
                        setDirection(-1);
                        setCurrentIndex((prev) => (prev - Math.abs(position) + projects.length) % projects.length);
                      } else {
                        setDirection(1);
                        setCurrentIndex((prev) => (prev + Math.abs(position)) % projects.length);
                      }
                    }
                  }}
                  whileHover={{
                    scale: position === 0 ? scale : scale + 0.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ProjectCard project={projects[index]} index={index} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="md:hidden w-full flex justify-between items-center top-[4.6rem] mt-4 right-0 z-40 px-2 space-x-4">
        <h2 
          className="text-sm bg-purple-600 font-bold mb-2 tracking-wide uppercase rounded-lg p-1 md:text-base"
          style={{
            letterSpacing: "0.15em",
          }}
        >
          {projects[currentIndex].title1}
        </h2>
        <div className="flex space-x-4">
          {currentIndex > 0 && (
            <motion.button 
              onClick={handlePrevious} 
              className="bg-purple-600 text-white p-2 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </motion.button>
          )}
         
          {currentIndex < projects.length - 1 && (
            <motion.button 
              onClick={handleNext} 
              className="bg-purple-600 text-white p-2 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
            >
              <FaChevronRight />
            </motion.button>
          )}
        </div>
      </div>

      <div className="hidden md:flex justify-center mt-4">
        <h2 
          className="text-base bg-purple-600 font-bold tracking-wide uppercase rounded-lg p-2"
          style={{
            letterSpacing: "0.15em",
          }}
        >
          {projects[currentIndex].title1}
        </h2>
      </div>

      <div className="flex justify-center mt-4 space-x-1">
        {projects.map((_, index) => (
          <motion.div 
            key={index} 
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-pink-500" : "bg-purple-400 opacity-50"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;