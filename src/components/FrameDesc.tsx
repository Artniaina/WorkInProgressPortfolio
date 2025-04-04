import React, { useEffect, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { LucideIcon } from 'lucide-react';

interface FrameDescProps {
  title: string;
  description: ReactNode;
  Icon: LucideIcon;
  color: string;
}

const colorVariants = {
  purple: {
    bg: "bg-purple-800",
    border: "border-purple-400",
    header: "bg-purple-600",
    accent: "bg-purple-700",
    text: "text-purple-300"
  },
  blue: {
    bg: "bg-blue-800",
    border: "border-blue-400",
    header: "bg-blue-600",
    accent: "bg-blue-700",
    text: "text-blue-300"
  },
  green: {
    bg: "bg-emerald-800",
    border: "border-emerald-400",
    header: "bg-emerald-600",
    accent: "bg-emerald-700",
    text: "text-emerald-300"
  }
};

const FrameDesc: React.FC<FrameDescProps> = ({ title, description, Icon, color }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const controls = useAnimation();
  const colors = colorVariants[color as keyof typeof colorVariants];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.3,
        duration: 0.5 
      } 
    }
  };

  return (
    <div ref={ref}>
      <motion.div
        className={`w-[50rem] rounded-lg h-[400px] border-2 ${colors.border} overflow-hidden flex flex-col`}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <div className={`h-10 ${colors.header} border-b ${colors.border} px-3 flex justify-between items-center`}>
          <div className="text-white font-medium">{title}</div>
          <div className="flex space-x-2">
            <div className={`w-3 h-3 rounded-full bg-red-500`}></div>
            <div className={`w-3 h-3 rounded-full bg-yellow-500`}></div>
            <div className={`w-3 h-3 rounded-full bg-green-500`}></div>
          </div>
        </div>

        <motion.div
          className="flex-1 p-6 flex flex-col items-center justify-center"
          variants={contentVariants}
        >
          <Icon className={`w-16 h-16 ${colors.text} mb-6`} />
          <p className="text-white text-center leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          className={`h-12 ${colors.accent} border-t ${colors.border} flex items-center justify-center`}
          variants={contentVariants}
        >
          <span className={`${colors.text} text-sm font-medium`}>
            {title.toUpperCase()}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FrameDesc;