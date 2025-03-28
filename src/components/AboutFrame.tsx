import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Pixel from "../assets/pixell.png";

const AboutFrame = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });

  return (
    <motion.div
      ref={ref}
      className="bg-transparent "
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-4  ml-[8rem] p-6 z-10 h-[38rem] w-[30rem]">
        <motion.div
          className="w-50 rounded relative left-[-4rem] border-2 border-purple-400 overflow-hidden flex flex-col"
          initial={{ scale: 0.8 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5 }}
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
          <motion.div
            className="p-8  flex justify-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-32 h-32 rounded-full bg-purple-700 border-2 border-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-purple-600 overflow-hidden flex items-center justify-center">
                <img src={Pixel} alt="Just a pixel character" />
              </div>
            </div>
          </motion.div>
          <div className="px-6 py-2 flex-grow  text-center">
            <motion.div
              className="text-white text-sm font-bold mb-6 -mt-2 px-2 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ANDRIAHARINIAINA  Kanto Fitiavana
            </motion.div>
            <motion.div
              className="text-white text-lg font-bold mb-4 px-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
             My contacts
            </motion.div>

            <div className="space-y-4">
              <motion.div
                className="flex"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-8 h-8 bg-cyber-pink rounded-full flex items-center justify-center mr-2">
                  <div className="text-white text-lg">
                    <CgMail className="text-white text-2xl" />
                  </div>
                </div>
                <div className="text-white text-xs ">
                  <a href="mailto:kanto.andriahariniaina@gmail.com" className="hover:underline">
                    kanto.andriahariniaina@gmail.<br />com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="w-8 h-8 bg-cyber-pink rounded-full flex items-center justify-center mr-2">
                  <div className="text-white text-xs">
                    <FaGithub className="text-2xl" />
                  </div>
                </div>
                <div className="text-white text-xs">
                  <a href="https://github.com/Artniaina" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    https://github.com/Artniaina
                  </a>
                </div>
              </motion.div>
                <motion.div
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                >
                <div className="w-8 h-8 bg-cyber-pink rounded-full flex items-center justify-center mr-2">
                  <div className="text-white text-xs">
                  <IoHome className="text-2xl" />
                  </div>
                </div>
                <div className="text-white text-xs">
                  <a 
                  href="https://www.google.com/maps/place/Ambohibao,+Tananarive/@-18.849497,47.4680614,15z/data=!3m1!4b1!4m6!3m5!1s0x21f081b29c61542d:0x9bc0bac052a04d7a!8m2!3d-18.848831!4d47.4760116!16s%2Fg%2F11crxrxymw?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                  >
                  Ambohibao Antehiroka
                  </a>
                </div>
                </motion.div>
              
            </div>
          </div>

          <motion.div
            className="p-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded">
              got it!
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutFrame;
