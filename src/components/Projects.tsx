import { FaGithub, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "../assets/pinkbutter.jpg";
import Game from '../assets/Console.gif'
const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  return (
    <motion.div
      id="projects"
      className="min-h-screen bg-[#1a0933] flex flex-col items-center justify-center px-4 md:px-8 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="mb-8 text-2xl font-bold text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        TECHNICAL PROJECTS
        {/* <img src={Game} alt="" className="w-[8rem] h-[8rem] m-auto"/> */}
      </motion.h1>
  
      <div className="relative overflow-hidden flex justify-center items-center min-h-[38rem] md:min-h-[600px] w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full  max-w-[25rem] md:max-w-md"
          >
            <motion.div
              className="rounded h-[37rem] border-2 border-purple-400 overflow-hidden flex flex-col relative bg-gray-900 shadow-lg"
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
                <div className="h-[15rem] md:h-48 border-b-2 border-purple-400 overflow-hidden">
                  <img 
                    src={Image} 
                    alt="Project thumbnail" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="space-y-3 text-center p-3 md:p-5">
                  <h2 className="text-xl text-pink-200 font-mono font-bold text-white">
                    {projects[currentIndex].title}
                  </h2>
                  <p className="text-[1.1rem] font-mono  text-white">
                    {projects[currentIndex].description}
                  </p>
                    <div className="mt-auto p-3 text-[0.8rem] text-white ">
                    <span className="text-[0.8rem] text-pink-300">Tech Stack and tools:</span>{" "}
                    {projects[currentIndex].tech}
                    </div>
                </div>
              </div>
              <a
                href={projects[currentIndex].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-[10px] text-white flex items-center space-x-1 hover:text-pink-400 transition"
              >
                <FaGithub className="text-sm text-white" />
                <span>View code</span>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      
      </div>
        <div className="w-full flex justify-between items-center top-[4.6rem] mt-4 right-0 z-40 px-2 space-x-4">
        <h2 
          className="text-sm bg-purple-600  font-bold mb-2 
                tracking-wide uppercase rounded-lg  p-1"
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
      <div className="flex justify-center mt-4 space-x-1">
        {projects.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-pink-500" : "bg-purple-400 opacity-50"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;