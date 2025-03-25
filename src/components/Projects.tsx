import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Lawyer management Intranet",
      description:
        "Developed an intranet platform to manage a lawyer's bar and digitize internal processes.",
      stats: "",
      tech: "React • Redux • Webdev • Express • Node • HFSQL",
      githubLink: "https://github.com/example/lawyer-management-intranet"
    },
    {
      title: "E-commerce Platform",
      description:
        "Developed an e-commerce platform with features like product browsing, cart management, sales tracking, and user authentication.",
      stats: "",
      tech: "React • Redux • Express • Node • MySQL • MongoDB",
      githubLink: "https://github.com/example/ecommerce-platform"
    },
    {
      title: "Classic Games Platform",
      description:
        "A platform to play some old classic games such as Tic-Tac-Toe, Snake, Brick Breaker, and Space Invader.",
      stats: "",
      tech: "JavaScript • HTML • CSS",
      githubLink: "https://github.com/example/classic-games-platform"
    },
    {
      title: "Movie Search Application (PWA)",
      description:
        "Developed a Progressive Web App (PWA) for searching movies, featuring offline support, responsive design, and integration with a movie database API.",
      stats: "",
      tech: "React • PWA • Service Worker • IndexedDB • API",
      githubLink: "https://github.com/example/movie-search-app"
    },
    {
      title: "2FA Authentication System",
      description:
        "Implemented a Two-Factor Authentication (2FA) system  with Google Authenticator integration.",
      stats: "",
      tech: "MySQL • Express • React • Node • JWT • OTP • Google Authenticator",
      githubLink: "https://github.com/example/2fa-authentication-system"
    },
    {
      title: "Weather App with Geolocation",
      description:
        "Developed a weather application with geolocation support, displaying the current weather and forecast.",
      stats: "",
      tech: "React • Geolocation API • Weather API",
      githubLink: "https://github.com/example/weather-app"
    },
  ];

  return (
    <motion.div
      id="projects"
      className="min-h-screen bg-[#1a0933] items-center justify-center p-8 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="p-6 flex justify-center text-3xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        TECHNICAL PROJECTS
      </motion.h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 m-4 gap-12">
      {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded border-2 border-purple-400 overflow-hidden flex flex-col relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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

            <div className="flex flex-col justify-center">
              <div className="h-[15rem] border-b-2 flex items-center justify-center text-white font-mono text-2xl">
              {"<img/>"}
              </div>
              <div className="space-y-4 text-center pb-12">
              <h2 className="text-xl font-mono font-bold text-white">
                {project.title}
              </h2>
              <p className="text-[16px] font-mono opacity-80 text-white">
                {project.description}
              </p>
              <div className="text-[15px] text-bold font-mono opacity-80 text-white">
                <span className="text-cyber-pink">Tech Stack and tools:</span>{" "}
                {project.tech}
              </div>
              </div>
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-[10px] text-white flex items-center space-x-1"
            >
              <FaGithub className="text-sm text-white" />
              <span>View code</span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
