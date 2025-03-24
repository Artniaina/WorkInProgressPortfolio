import { motion, useAnimation } from 'framer-motion';
import { Code2, Cpu, Gamepad2 } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const categories = [
    { icon: <Code2 size={32} />, title: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"] },
    { icon: <Cpu size={32} />, title: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"] },
    { icon: <Gamepad2 size={32} />, title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] }
  ];

  return (
    <div  className="py-20 px-6">
 

      <motion.div
        className="flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div >
          {/* Terminal header */}
         

  

          {/* Terminal footer */}
          <div className="mt-6 pt-4 border-t border-cyber-light/30 text-cyber-light/70 text-sm font-mono">
            <div className="typing-animation">
              $ Skills updated successfully. Version 1.2.5
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;