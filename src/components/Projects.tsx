import { FaGithub, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Intranet from "../assets/Image1.png";
import { useTranslation } from "react-i18next";
import Ecom from "../assets/ecom.png";
import FA from "../assets/scann.png";
import PWA from "../assets/pwa.png"; 
import Game from "../assets/StayHydrated.gif";

interface Project {
  titleKey: string;
  descriptionKey: string;
  stats: string;
  tech: string;
  githubLink: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CardIndex {
  index: number;
  position: number;
}

const Projects = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const projects: Project[] = [
    {
      titleKey: "projects.items.lawyerManagement.title",
      descriptionKey: "projects.items.lawyerManagement.description",
      stats: "",
      tech: "React • Redux • Webdev • Express • Node • HFSQL",
      githubLink: "https://github.com/Artniaina/AdvocatHub",
      image: Intranet
    },
    {
      titleKey: "projects.items.ecommerce.title",
      descriptionKey: "projects.items.ecommerce.description",
      stats: "",
      tech: "React • Redux • Express • Node • MySQL • MongoDB",
      githubLink: "https://github.com/Artniaina/E-commerceMERN",
      image: Ecom
    },
    {
      titleKey: "projects.items.classicGames.title",
      descriptionKey: "projects.items.classicGames.description",
      stats: "",
      tech: "JavaScript • HTML • CSS",
      githubLink: "https://github.com/Artniaina/Shaboom",
      image: Game
    },
    {
      titleKey: "projects.items.movieSearch.title",
      descriptionKey: "projects.items.movieSearch.description",
      stats: "",
      tech: "React • PWA • Service Worker ",
      githubLink: "https://github.com/Artniaina/Pwa",
      image: PWA
    },
    {
      titleKey: "projects.items.twoFactor.title",
      descriptionKey: "projects.items.twoFactor.description",
      stats: "",
      tech: "MySQL • Express • React • Node • JWT• Google Authenticator",
      githubLink: "https://github.com/Artniaina/2faSystem",
      image: FA
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = (): void => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = (): void => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardIndexes = (): CardIndex[] => {
    const totalCards = projects.length;
    const numVisible = screenWidth >= 1280 ? 5 : 3;
    const visibleCards: CardIndex[] = [];

    for (
      let i = -Math.floor(numVisible / 2);
      i <= Math.floor(numVisible / 2);
      i++
    ) {
      let index = (currentIndex + i + totalCards) % totalCards;
      visibleCards.push({
        index,
        position: i,
      });
    }

    return visibleCards;
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const ProjectCard = ({ project }: ProjectCardProps) => (
    <motion.div
      className  ="rounded h-[41rem] border-2 border-purple-400 overflow-hidden flex flex-col relative bg-gray-900 shadow-lg md:h-[39rem]"
      whileHover={{
        scale: screenWidth >= 768 ? 1.03 : 1,
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
        <div className="h-[15rem] md:h-64 border-b-2 p-2 border-purple-400 overflow-hidden">
          <img
            src={project.image}
            alt="Project thumbnail"
            className="w-full h-full"
          />
        </div>
        <div className="space-y-3 text-center p-3 md:p-5">
          <h2 className="text-xl text-pink-400 font-mono font-bold md:text-2xl">
            {t(project.titleKey)}
          </h2>
          <p className="text-[1.1rem] font-mono text-white md:text-lg">
            {t(project.descriptionKey)}
          </p>
          <div className="mt-auto p-3 text-[1.2rem] text-white md:text-sm pb-[9rem]">
            <span className="text-[0.8rem] text-pink-300 md:text-sm">
              {t('projects.techStack')}
            </span>{" "}
            <span className={`text-purple-200 ${screenWidth < 768 ? "font-mono" : ""}`}>
              {project.tech}
            </span>
          </div>
        </div>
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 h-[2rem] mt-4 right-0 p-2 text-[0.7rem] text-white flex items-center space-x-1 hover:text-pink-400 transition md:text-xs bg-purple-800 rounded-tl-lg"
      >
        <FaGithub className="text-2xl text-white" />
        <span>{t('projects.viewCode')}</span>
      </a>
    </motion.div>
  );


  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-8 md:py-12 lg:py-20 bg-cyber-dark relative overflow-hidden bg-cyber-purple/10 "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[#e44cff] mt-2 md:mt-4 text-center text-xl md:text-4xl mb-2 md:mb-2 font-bold tracking-wider" 
          style={{
            textShadow: '0 0 10px rgba(228, 76, 255, 0.5)',
            fontFamily: "'Press Start 2P', cursive"
          }}
        >
          {t('projects.title')}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mb-12 text-center text-white text-xs md:text-sm lg:text-lg"
          dangerouslySetInnerHTML={{ __html: t('projects.subtitle') }}
        />

        <div className="hidden md:block">
          <motion.button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('projects.navigation.previous')}
            variants={itemVariants}
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('projects.navigation.next')}
            variants={itemVariants}
          >
            <FaChevronRight />
          </motion.button>
        </div>
        
        {/* Mobile view */}
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden flex justify-center items-center min-h-[41rem] md:min-h-[41rem] w-full md:hidden"
        >
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
              }}
              className="absolute w-full max-w-[25rem] md:max-w-lg"
            >
              <ProjectCard
                project={projects[currentIndex]}
                index={currentIndex}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Desktop view */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:flex justify-center items-center min-h-[41rem] w-full overflow-visible relative"
        >
          <div
            className="relative w-full flex justify-center items-center"
            style={{ perspective: "1200px" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {getCardIndexes().map(({ index, position }) => {
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
                      x: direction > 0 ? xOffset + 400 : xOffset - 400,
                      z: zOffset,
                      rotateY: position * (position < 0 ? 60 : -60),
                      scale: scale - 0.1,
                      opacity: 0,
                    }}
                    animate={{
                      x: xOffset,
                      z: zOffset,
                      rotateY,
                      scale,
                      opacity,
                    }}
                    exit={{
                      x: direction > 0 ? xOffset - 400 : xOffset + 400,
                      z: zOffset - 100,
                      rotateY: position * (position < 0 ? 60 : -60),
                      scale: scale - 0.1,
                      opacity: 0,
                    }}
                    className={`absolute ${position === 0 ? "z-20" : ""}`}
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                      filter: position === 0 ? "brightness(1)" : `brightness(${0.7 + 0.3 * (1 - Math.abs(position) / 3)})`,
                      width: screenWidth >= 1280 ? "28rem" : screenWidth >= 768 ? "26rem" : "2rem",
                      cursor: position === 0 ? "default" : "pointer",
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
                    }}
                  >
                    <ProjectCard project={projects[index]} index={index} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile navigation */}
        <motion.div 
          variants={itemVariants}
          className="md:hidden w-full flex justify-between items-center mt-4 right-0 z-40 px-2 space-x-4"
        >
          <h2 className="text-sm bg-purple-600 font-bold mb-2 tracking-wide uppercase rounded-lg p-1 md:text-base">
            {`${currentIndex + 1}/${projects.length}`}
          </h2>
          <div className="flex space-x-4">
            {currentIndex > 0 && (
              <motion.button
                onClick={handlePrevious}
                className="bg-purple-600 text-white p-2 border-2 border-white hover:bg-purple-700 transition shadow-md z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={t('projects.navigation.previous')}
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
                aria-label={t('projects.navigation.next')}
              >
                <FaChevronRight />
              </motion.button>
            )}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="hidden md:flex justify-center mt-4"
        >
          <h2 className="text-base bg-purple-600 font-bold tracking-wide uppercase rounded-lg p-2">
            {`${currentIndex + 1}/${projects.length}`}
          </h2>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-4 space-x-1"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;