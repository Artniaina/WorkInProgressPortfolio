import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Stickers from "./assets/test1.png";
import AboutMe from "./components/AboutMe";
import SkillsFrame from "./components/SkillsFrame";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";
import CursorImage from "./assets/smt.png";
import { NavigationProvider } from "./context/NavigationContext";
// import Planet from "./assets/planet.gif";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setShowContent(true), 300);
          }, 500);
        }
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);

    return () => {
      clearInterval(progressTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex flex-col items-center justify-center px-4">
        <div className="mb-2 flex">
          <span className="animate-[bounce_1.1s_infinite]">
            <img src={Stickers} width="70" height="70"  />
          </span>
          <span className="animate-[bounce_1.3s_infinite]">
            <img src={Stickers} width="70" height="70"  />
          </span>
          <span className="animate-[bounce_0.9s_infinite]">
            <img src={Stickers} width="70" height="70"  />
          </span>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-purple-300 mb-2">Loading...</h2>
        </div>

        <div className="hidden md:block w-full max-w-md h-3 bg-purple-900/50 rounded-full overflow-hidden border-2 border-purple-500">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-300 rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.3s ease-out" }}
          />
        </div>

        <div className="md:hidden w-full max-w-xs h-4 bg-purple-900/50 rounded-full overflow-hidden border border-purple-500">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.2s ease-out" }}
          />
        </div>

        <div className="mt-4 text-purple-300/80 text-sm md:text-lg font-mono">
          <p className="text-purple-400 text-center">{Math.round(progress)}%</p>
          {progress < 20 && "Establishing connection..."}
          {progress >= 20 && progress < 40 && "Loading resources..."}
          {progress >= 40 && progress < 60 && "Calibrating interface..."}
          {progress >= 60 && progress < 80 && "Synchronizing data..."}
          {progress >= 80 && "Finalizing setup..."}
        </div>
      </div>
    );
  }

  const generatePlanets = (count: number) => {
    const planets = [];
    for (let i = 0; i < count; i++) {
      let sizeCategory = Math.floor(Math.random() * 3);
      let size;
      let opacity;

      if (sizeCategory === 0) {
        size = Math.random() * 2 + 1;
        opacity = Math.random() * 0.15 + 0.05;
      } else if (sizeCategory === 1) {
        size = Math.random() * 3 + 3;
        opacity = Math.random() * 0.15 + 0.1;
      } else {
        size = Math.random() * 5 + 6;
        opacity = Math.random() * 0.2 + 0.05;
      }

      const xMovement = [-30, 0, 30, 0];
      const yMovement = [0, 30, 0, -30];

      if (Math.random() > 0.5) {
        xMovement.reverse();
      }
      if (Math.random() > 0.5) {
        yMovement.reverse();
      }

      const amplitudeMultiplier = Math.random() * 2 + 0.5;
      const xAmplified = xMovement.map((val) => val * amplitudeMultiplier);
      const yAmplified = yMovement.map((val) => val * amplitudeMultiplier);

      planets.push({
        id: i,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        size: `${size}rem`,
        opacity: opacity,
        zIndex: 10,
        animate: {
          x: xAmplified,
          y: yAmplified,
        },
        transition: {
          duration: Math.random() * 15 + 25,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear",
        },
      });
    }
    return planets;
  };

  const planets = generatePlanets(10);
  return (
    <NavigationProvider>
    <div
      className={`min-h-screen bg-cyber-purple/10 ${
        showContent ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <CustomCursor size={20} imageSrc={CursorImage} trailEffect={true} />
      <Header />
      <main id="home">
        <Hero />
      </main>
      <section id="about" >
        <div>
          <AboutMe />
        </div>
      </section>
      <section id="education">
        <div>
          <Education />
        </div>
      </section>
      <section id="skills" className="bg-cyber-purple/10">
        <div>
          <SkillsFrame>
            <Skills />
          </SkillsFrame>
        </div>
      </section>
      <section id="projects" >
        <div>
          <Projects />
        </div>
      </section>
      <section id="contacts" className="bg-cyber-purple/10 ">
        <div>
          <Contacts />
        </div>
      </section>
      <Footer />
    </div>
    </NavigationProvider>

  );
}

export default App;