import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

const FrameWorkLol = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div ref={ref}>
            <motion.div
                className="w-[35rem] bg-purple-800 rounded h-[20rem] border-2 border-purple-400 overflow-hidden flex flex-col"
                animate={controls}
                initial="hidden"
                variants={containerVariants}
            >
                <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center"></div>
                <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
                    <div className="text-white">APresentationOfMe.txt</div>
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

                <motion.div
                    className="flex-grow bg-gray-900 p-4 text-white"
                    animate={controls}
                    initial="hidden"
                >
                </motion.div>

                <motion.div
                    className="h-8 bg-purple-700 border-t border-purple-500 flex justify-between items-center px-2"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <button className="w-12 h-6 bg-gray-900 border border-purple-400 text-purple-300 flex items-center justify-center">
                        1/1
                    </button>
                    <div className="flex-grow mx-2">
                        <div className="w-full h-4 bg-purple-600 rounded"></div>
                    </div>
                    <button className="w-6 h-6 bg-gray-900 border border-purple-400 text-purple-300 flex items-center justify-center">
                        ➤
                    </button>
                    <div className="ml-2 w-6 h-6 flex items-center justify-center text-purple-300">♥</div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FrameWorkLol;
