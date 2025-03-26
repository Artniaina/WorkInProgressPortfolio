import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark/80 text-3xl py-8 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">{"<Kanto/>"}</p>
          <p className="text-xl font-mono">Artniaina Copyright © 2025 </p>
          <div className="flex gap-6">
            {[
              { icon: <FaGithub size={24} />, url: "https://github.com/Artniaina" },
              { icon: <FaLinkedin size={24} />, url: "https://linkedin.com" },
              { icon: <FaWhatsapp size={24} />, url: "https://wa.me/0325066496" }
            ].map((social) => (
              <motion.a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-light hover:text-cyber-pink transition-colors"
              whileHover={{ scale: 1.2 }}
              >
              {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;