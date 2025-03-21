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
    <div id="skills" ref={ref} className="py-20 px-6">
      <motion.h2 
        className="text-3xl font-pixel mb-12 text-center text-cyber-pink"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        TECH STACK
      </motion.h2>

      <motion.div
        className="flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="relative w-full max-w-5xl p-8 border-4 border-cyber-light rounded-xl bg-cyber-dark shadow-[0_0_15px_rgba(123,94,139,0.5)]">
          {/* Terminal header */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-purple-700 rounded-t-lg flex items-center px-4">
            <div className="text-white font-pixel text-sm">tech_skills.exe</div>
            <div className="absolute top-3 right-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <div className="w-3 h-3 rounded-full bg-purple-300"></div>
              <div className="w-3 h-3 rounded-full bg-purple-200"></div>
            </div>
          </div>

          {/* Terminal content */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.title}
                custom={i}
                variants={itemVariants}
                className="p-6 bg-cyber-dark/80 border-2 border-cyber-light rounded-lg"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 0 10px rgba(255, 0, 255, 0.3)'
                }}
              >
                <div className="text-cyber-pink mb-4 flex items-center">
                  {category.icon}
                  <h3 className="text-xl ml-2 font-pixel">{category.title}</h3>
                </div>
                <div className="border-t border-cyber-light opacity-50 mb-4"></div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-cyber-light flex items-center">
                      <span className="text-cyber-pink mr-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

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