import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa6";

interface FrameDescProps {
  title: string;
  description: string;
  tech: string;
  githubLink: string;
}

const FrameDesc: React.FC<FrameDescProps> = ({ title, description, tech, githubLink }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        className="w-[25rem] bg-purple-800 rounded h-[32rem] ml-4 border-2 border-purple-400 overflow-hidden flex flex-col"
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
          <div className="text-white text-sm">Description.txt</div>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
              <div className="w-2 h-2 bg-purple-300"></div>
            </div>
            <div className="w-4 h-4 bg-gray-900 border border-purple-300"></div>
            <div className="w-4 h-4 bg-gray-900 border border-purple-300 flex items-center justify-center">
              <div className="text-purple-300 text-xs">×</div>
            </div>
          </div>
        </div>

        <motion.div className="flex-grow bg-cyber-dark text-white p-4">
          <h2 className="text-xl text-center mt-4">{title}</h2>
          <p className="text-lg mt-12 font-mono">{description}</p>
          <div className="text-lg font-mono  mt-20">
            <span className="text-cyber-pink">Tech Stack and tools:</span> {tech}
          </div>
        </motion.div>
        <motion.div
          className="h-8 bg-purple-700 border-t border-purple-500 flex justify-between items-center px-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white flex items-center space-x-1"
          >
            <FaGithub className="text-sm text-white" />
            <span>View code</span>
          </a>
          <div className="ml-2 w-6 h-6 flex items-center justify-center text-purple-300">♥</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FrameDesc;
