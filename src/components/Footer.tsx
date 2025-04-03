import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark/80 text-3xl py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p className="text-sm text-center md:text-left">{"<Kanto/>"}</p>
          <p className="text-xl font-mono text-center md:text-left">
            Artniaina Copyright © 2025
          </p>
          <div className="flex justify-center md:justify-end gap-6">
            {[
              { icon: <FaGithub size={24} />, url: "https://github.com/Artniaina" },
              { icon: <FaLinkedin size={24} />, url: "https://linkedin.com" },
              { icon: <FaWhatsapp size={24} />, url: "https://wa.me/0325066496" },
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