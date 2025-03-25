import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: "Lawyer Management Intranet",
      description:
        "Built a full-stack intranet for a lawyer association to manage internal activities.",
      stats: "",
      tech: "React • Redux • WebDev • Hfsql",
    },
    {
      title: "Ecommerce Web App",
      description:
        "Developed an e-commerce platform with product, cart, sales, and user management.",
      stats: "",
      tech: "React • Redux • Express • Node • MySQL • MongoDB",
    },
    {
      title: "Classic Games in Javascript",
      description:
        "Developed mini games in JavaScript such as Tic-Tac-Toe, Snake, and Brick Breaker, Space invader.",
      stats: "",
      tech: "JavaScript • HTML • CSS",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      id="projects"
      className="min-h-screen bg-[#1a0933]  items-center justify-center p-8 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="p-6 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button
          onClick={prevSlide}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded mr-4"
        >
          Some of my Achievement
        </button>
      </motion.div>
      {/* <motion.div
        className="p-6 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button
          onClick={prevSlide}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded mr-4"
        >
          Previous
        </button>
      </motion.div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
        key={index}
        className="rounded border-2 border-purple-400 overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
          >
        <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-300"></div>
            <div className="w-2 h-2 bg-purple-300"></div>
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
          <div className="h-[15rem] border-b-2 flex items-center justify-center text-white font-mono text-2xl">
            Hello
          </div>
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-mono font-bold text-white">
          {project.title}
            </h2>
            <p className="text-lg font-mono opacity-80 text-white">
          {project.description}
            </p>
            <div className="text-xs font-mono opacity-80 text-white">
          <span className="text-[#ffd700]">Tech Stack:</span> {project.tech}
            </div>
          </div>
        </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        className="p-6 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button
          onClick={nextSlide}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
        >
          Next
        </button>
      </motion.div> */}
    </motion.div>
  );
};

export default Projects;
