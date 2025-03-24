import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark/80 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">© 2025 </p>
          <div className="flex gap-6">
            {[
              { icon: <FaGithub size={24} />, url: "https://github.com" },
              { icon: <FaLinkedin size={24} />, url: "https://linkedin.com" },
              { icon: <FaTwitter size={24} />, url: "https://twitter.com" }
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