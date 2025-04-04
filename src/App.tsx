import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Stickers from "./assets/test1.png";
import AboutMe from './components/AboutMe';
import SkillsFrame from './components/SkillsFrame';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Education from './components/Education';
import SeeMore from './components/SeeMore';
import Header from './components/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;
    
    const progressTimer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            setIsLoading(false);
            // Add a small delay before showing content with animation
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
        {/* Stickers animation */}
        <div className="mb-2 flex">
          <span className='animate-[bounce_1.1s_infinite]'>
            <img src={Stickers} width="70" height="70" alt="Sticker" />
          </span>
          <span className='animate-[bounce_1.3s_infinite]'>
            <img src={Stickers} width="70" height="70" alt="Sticker" />
          </span>
          <span className='animate-[bounce_0.9s_infinite]'>
            <img src={Stickers} width="70" height="70" alt="Sticker" />
          </span>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-purple-300 mb-2">
            Loading...
          </h2>
        </div>

        {/* Progress bar for larger screens */}
        <div className="hidden md:block w-full max-w-md h-3 bg-purple-900/50 rounded-full overflow-hidden backdrop-blur border-2 border-purple-500">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-300 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.7)]"
            style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
          />
        </div>
        
        {/* Compact progress bar for mobile */}
        <div className="md:hidden w-full max-w-xs h-4 bg-purple-900/50 rounded-full overflow-hidden backdrop-blur border border-purple-500">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.7)]"
            style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}
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

  return (
    <div className={`min-h-screen bg-cyber-purple/10 ${showContent ? 'animate-fadeIn' : 'opacity-0'}`}>
        <Header />
      <main>
        <Hero />
      </main>
      <section>
        <div>
          <AboutMe />
        </div>
      </section>
      <section>
        <div>
          <SeeMore />
        </div>
      </section>
      <section >
        <div>
          <Education />
        </div>
      </section>
      <section >
      <div >
          <SkillsFrame>
            <Skills />
          </SkillsFrame>
        </div>
      </section>
      <section>
        <div>
          <Projects />
        </div>
      </section>
      <section>

        <div>
          <Contacts />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;