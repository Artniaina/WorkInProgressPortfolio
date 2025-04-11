import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Pixel from "../assets/pixell.png";
import { useTranslation } from "react-i18next";
const AboutFrame = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="bg-transparent flex flex-col items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center p-3 md:p-5 lg:p-6 z-10 h-auto w-full">
        <motion.div
          className="w-full max-w-xs md:max-w-lg rounded border-2 border-purple-400 overflow-hidden flex flex-col"
          initial={{ scale: 0.8 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 bg-purple-600 border-b border-purple-400 p-[1rem] flex justify-between items-center">
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
            className="p-4 md:p-8 lg:p-8 flex justify-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 rounded-full bg-purple-700 border-2 border-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-purple-600 overflow-hidden flex items-center justify-center">
                <img src={Pixel} alt="Just a pixel character" />
              </div>
            </div>
          </motion.div>
          <div className="px-3 md:px-6 lg:px-6 py-2 flex-grow text-center">
            <motion.div
              className="text-white text-[0.9rem] md:text-base lg:text-sm font-bold mb-3 md:mb-5 lg:mb-6 -mt-2 px-2 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ANDRIAHARINIAINA Kanto Fitiavana
            </motion.div>
            <motion.div
              className="text-white text-base mb-2 md:text-xl lg:text-lg font-bold mb-8 mt-4 md:mb-4 lg:mb-4 px-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("thanks.subtitle2")}
            </motion.div>

            <div className="space-y-2 text-start md:space-y-4 lg:space-y-4">
              <motion.div
                className="flex"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-cyber-pink rounded-full flex items-center justify-center mr-4">
                  <div className="text-white text-sm md:text-lg lg:text-lg">
                    <CgMail className="text-white text-lg md:text-2xl lg:text-2xl" />
                  </div>
                </div>
                <div className="text-white text-[0.7rem] md:text-base">
                  <a
                    href="mailto:kanto.andriahariniaina@gmail.com"
                    className="hover:underline break-all"
                  >
                    kanto.andriahariniaina@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-cyber-pink rounded-full flex items-center justify-center mr-4">
                  <div className="text-white text-sm md:text-sm">
                    <FaGithub className="text-lg md:text-2xl lg:text-2xl" />
                  </div>
                </div>
                <div className="text-white text-[0.7rem] md:text-base">
                  <a
                    href="https://github.com/Artniaina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Artniaina
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-cyber-pink rounded-full flex items-center justify-center mr-4">
                  <div className="text-white text-sm md:text-sm">
                    <IoHome className="text-lg md:text-2xl lg:text-2xl" />
                  </div>
                </div>
                <div className="text-white  text-[0.7rem] md:text-base">
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
            className="p-4 md:p-6 lg:p-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 lg:px-6 py-1 md:py-2 lg:py-2 rounded text-sm md:text-lg lg:text-base">
              {t("thanks.gotIt")}
            </button>
          </motion.div>
        </motion.div>
      </div>
     
    </motion.div>
  );
};

export default AboutFrame;
