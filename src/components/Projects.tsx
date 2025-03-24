import { useState } from 'react';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Lawyer Management Intranet",
      description: "Built a full-stack intranet for a lawyer association to manage internal activities.",
      stats: "",
      tech: "React • Redux • WebDev • Hfsql"
    },
    {
      title: "Ecommerce Web App",
      description: "Developed an e-commerce platform with product, cart, sales, and user management.",
      stats: "",
      tech: "React • Redux • Express • Node • MySQL • MongoDB"
    },
    {
      title: "Mini JavaScript Games",
      description: "Developed mini games in JavaScript such as Tic-Tac-Toe, Snake, and Brick Breaker.",
      stats: "",
      tech: "JavaScript • HTML • CSS"
    },

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div id="projects" className="min-h-screen bg-[#1a0933] flex flex-col items-center justify-center p-8 relative">
      <div className="absolute top-8 left-8">
        <div className="bg-[#2a0f4d] border-2 border-[#ffd700] rounded-lg px-6 py-2">
          <h1 className="text-[#ffd700] font-pixel text-2xl">SOME OF MY ACHIEVEMENTS</h1>
        </div>
      </div>

      <div className="flex gap-6 w-full max-w-6xl mt-16">
  
        <div className="w-1/3 h-[500px] bg-[#2a0f4d] rounded-lg relative p-6">
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#ff00ff] bg-opacity-30 
                        clip-bottom-left transform -skew-x-12">
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#ff00ff]"></div>
          </div>
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff00ff]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff00ff]"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-[#ff00ff]"></div>

          <div className="space-y-4">
            <h2 className="text-xl font-mono font-bold">{projects[currentSlide].title}</h2>
            <p className="text-lg font-mono opacity-80">{projects[currentSlide].stats}</p>
          </div>
        </div>

  
        <div className="w-2/3 h-[500px] bg-[#2a0f4d] rounded-lg relative p-6">
          <div className="absolute top-12 left-8 right-8 h-0.5 bg-[#ff00ff] opacity-50"></div>

          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff00ff]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff00ff]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ff00ff]"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-[#ff00ff]"></div>

          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#ff00ff]"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#ff00ff]"></div>

          <div className="space-y-6">
            <p className="text-sm font-mono leading-relaxed">{projects[currentSlide].description}</p>
            <div className="text-xs font-mono opacity-80">
              <span className="text-[#ffd700]">Tech Stack:</span> {projects[currentSlide].tech}
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#2a0f4d] border-2 border-[#ff00ff] text-[#ffd700] 
                         hover:bg-[#3a1f5d] transition-colors duration-300"
            >
              View Code Source on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button 
          onClick={prevSlide}
          className="px-4 py-2 bg-[#2a0f4d] border-2 border-[#ff00ff] 
                   hover:bg-[#3a1f5d] transition-colors duration-300"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer
                        ${currentSlide === index ? 'bg-[#ff00ff]' : 'bg-[#2a0f4d] border border-[#ff00ff]'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="px-4 py-2 bg-[#2a0f4d] border-2 border-[#ff00ff] 
                   hover:bg-[#3a1f5d] transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
