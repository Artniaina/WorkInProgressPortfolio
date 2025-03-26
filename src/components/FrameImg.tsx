import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/example.webp"
const FrameImg = () => {
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
      <div className="flex space-x-4 p-6 z-10 ">
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

    

          <div className="bg-cyber-dark px-3 py-2 flex-grow h-[25rem] w-[30rem]">
            <img src={Image} alt="" className="h-full w-full object-cover" />
          </div>

        
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FrameImg;
