import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Stickers from "./assets/test1.png"
import About from './components/About';
import AboutMe from './components/AboutMe';
import SkillsFrame from './components/SkillsFrame';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
          setTimeout(() => setIsLoading(false), 500); 
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
        <div className="mb-10 flex ">
          <span className='animate-[bounce_1.1s_infinite]'>
          <img src={Stickers}  width="70" height="70" />
          </span>
          <span className='animate-[bounce_1.3s_infinite]'>
          <img src={Stickers}  width="70" height="70" />
          </span>
          <span className='animate-[bounce_0.9s_infinite]'>
          <img src={Stickers}  width="70" height="70" />
          </span>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-purple-300 mb-2">
        Loading...
          </h2>
          <p className="text-purple-400 font-mono">{Math.round(progress)}%</p>
        </div>

        <div className="w-full max-w-md h-3 bg-purple-900/50 rounded-full overflow-hidden backdrop-blur border-2 border-purple-500">
          <div 
        className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-300 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.7)]"
        style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
          />
        </div>
        
        <div className="mt-5 text-purple-300/80 text-sm font-mono">
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
    <div className="min-h-screen bg-cyber-dark ">
      <div className='h-[83vh] relative b-[2rem]'>
      <Header />
      <main >
        <Hero />  
      </main>
      </div>
   
      <section className="bg-cyber-purple/10 ">
      <div>
        <AboutMe />
      </div>
      </section>

      <section className="bg-cyber-purple/10 ">
      <div>
        <About/>
      </div>
      </section>
      
      <section className="bg-cyber-purple/10 ">
      <div >
        <SkillsFrame>
          <Skills />
        </SkillsFrame>
      </div>
      </section>
      
    
      
      <Footer />
    </div>
  );
}

export default App;
