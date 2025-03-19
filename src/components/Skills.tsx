import { motion } from 'framer-motion';
import { Code2, Cpu, Gamepad2 } from 'lucide-react';

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-pixel mb-12 text-center">TECH STACK</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Code2 size={32} />, title: "Frontend", skills: ["React", "TypeScript", "Tailwind"] },
          { icon: <Cpu size={32} />, title: "Backend", skills: ["Node.js", "Express", "MongoDB"] },
          { icon: <Gamepad2 size={32} />, title: "Tools", skills: ["Git", "Github", "Webdev 28", "Figma"] }
        ].map((category) => (
          <motion.div
            key={category.title}
            className="p-6 bg-cyber-dark/50 rounded pixel-border"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-cyber-pink mb-4">{category.icon}</div>
            <h3 className="text-xl mb-4 font-pixel">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-cyber-light">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;