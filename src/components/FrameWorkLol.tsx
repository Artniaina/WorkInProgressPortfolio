import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const FrameWorkLol = ({ resetAnimation }: { resetAnimation: boolean }) => {
    const skills: string[] = ['Adaptability', 'Fast Selflearning', 'Versatility','Continuous Improvement Enthusiast'];
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    useEffect(() => {
        if (resetAnimation) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [resetAnimation, controls]);

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
    };

    return (
        <div>
            <motion.div
                className="w-[58rem] bg-purple-800 rounded h-[32rem] border-2 border-purple-400 overflow-hidden flex flex-col"
                animate={controls}
                initial="hidden"
                variants={containerVariants}
            >
                <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center"></div>
                <div className="h-8 bg-purple-600 border-b border-purple-400 px-2 flex justify-between items-center">
                    <div className="text-white">APresentationOfMeXD.txt</div>
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
                    variants={contentVariants}
                >
                    <div className="mb-6">
                        <div className="text-xl mb-2 text-cyber-pink">Education and Background:</div>
                        <div className="pl-4 text-sm text-left">
                            <div className="mb-2 pb-2">
                                • Bachelor's Degree in Computer Science: Integration and Development at ESTI (2022-2025)
                            </div>
                            <div className="mb-2 pb-2">• English Courses at Madagascar Professional Training Centre (2021)</div>
                            <div className="mb-2 pb-2">• Scientific Baccalaureate at Les Bambinos II (2021)</div>
                        </div>   
                    </div>

                    <div>
                        <div className="text-xl mb-2 text-cyber-pink"> Soft skills:</div>
                        <div className="pl-4 text-sm">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-1"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                >
                                    • {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
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