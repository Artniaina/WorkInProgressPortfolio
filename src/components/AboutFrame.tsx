import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
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
      className="bg-transparent"
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-4 p-6 z-10 h-[37rem] w-[25rem]">
        <motion.div
          className="w-50 bg-purple-800 rounded border-2 border-purple-400 overflow-hidden flex flex-col"
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
            className="p-8 flex justify-center"
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

          <div className="px-6 py-2 flex-grow">
            <motion.div
              className="text-white text-sm font-bold mb-6 -mt-2 px-2 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ANDRIAHARINIAINA <br /> Kanto Fitiavana
            </motion.div>
            <motion.div
              className="text-white text-xl font-bold mb-4 px-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My Contacts:
            </motion.div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
                  <div className="text-white text-lg">
                    <CgMail className="text-white text-2xl" />
                  </div>
                </div>
                <div className="text-white text-xs">
                  kanto.andriahariniaina <br /> @gmail.com
                </div>
              </motion.div>

              <motion.div
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-2">
                  <div className="text-white text-xs">
                    <FaGithub className="text-2xl" />
                  </div>
                </div>
                <div className="text-white text-xs">
                  https://github.com/Artniaina
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
