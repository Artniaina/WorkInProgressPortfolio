import { useEffect, useState } from "react";
import Image1 from "../assets/TS.webp";
import Image2 from "../assets/JS.jpg";
import Image3 from "../assets/PY.png";
import Image4 from "../assets/REACT.png";
import { ReactTyped } from "react-typed";

const LOGOS = [Image1, Image2, Image3, Image4];

function Game() {
  const [isJumping, setIsJumping] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [wa, setWa] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleStorageChange = () => {
      const newStoredWa = localStorage.getItem('language') || 'en';
      setWa(newStoredWa);
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    const interval = setInterval(() => {
      const current = localStorage.getItem('language') || 'en';
      if (current !== wa) {
        setWa(current);
      }
    }, 500);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [wa]);
  

  const stringToTyped = wa == 'en' 
    ? `<pre><code><span class="text-green-500 w-[25rem]">/*The future depends on what 
    we do in the present."*/</span><br/> const <span class="text-cyan-400">pursueGoal</span> = <span class="text-yellow-400">goal</span> =&gt; {
    <span class="text-cyan-400">    if</span> (<span class="text-green-400">isAchievable</span>(<span class="text-yellow-400">goal</span>)) {
    <span class="text-purple-400">         workHard</span>(<span class="text-yellow-400">goal</span>);
    <span class="text-cyan-400">    if</span> (<span class="text-green-400">faceChallenges</span>(<span class="text-yellow-400">goal</span>)) {
    <span class="text-pink-500">         stayPositive</span>();
    <span class="text-purple-400">         seekSupport</span>();
    <span class="text-purple-400">         workHard</span>(<span class="text-yellow-400">goal</span>);
          }
        } <span class="text-cyan-400">else</span> {
    <span class="text-pink-500">       setRealisticExpectations</span>(<span class="text-yellow-400">goal</span>);
        }
    };</code></pre>`
    : `<pre><code><span class="text-green-500 w-[25rem]">/*L'avenir dépend de ce que 
    nous faisons dans le présent."*/</span><br/> const <span class="text-cyan-400">poursuivreObjectif</span> = <span class="text-yellow-400">objectif</span> =&gt; {
    <span class="text-cyan-400">    if</span> (<span class="text-green-400">estRealisable</span>(<span class="text-yellow-400">objectif</span>)) {
    <span class="text-purple-400">         travaillerDur</span>(<span class="text-yellow-400">objectif</span>);
    <span class="text-cyan-400">    if</span> (<span class="text-green-400">affronterDefis</span>(<span class="text-yellow-400">objectif</span>)) {
    <span class="text-pink-500">         resterPositif</span>();
    <span class="text-purple-400">         chercherSoutien</span>();
    <span class="text-purple-400">         travaillerDur</span>(<span class="text-yellow-400">objectif</span>);
          }
        } <span class="text-cyan-400">else</span> {
    <span class="text-pink-500">       fixerAttentesRealistes</span>(<span class="text-yellow-400">objectif</span>);
        }
    };</code></pre>`;

  useEffect(() => {
    const moveObstacle = () => {
      setObstaclePosition((prev) => {
        if (prev <= -10) {
          setCurrentLogo((prevLogo) => (prevLogo + 1) % LOGOS.length);
          return 100;
        }
        return prev - 0.2; 
      });
    };

    const obstacleInterval = setInterval(moveObstacle, 70); 
    return () => clearInterval(obstacleInterval);
  }, []);

  useEffect(() => {
    if (obstaclePosition <= 30 && obstaclePosition >= 0 && !isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  }, [obstaclePosition, isJumping]);

  return (
    <div className="h-[44rem] bg-gradient-to-br flex items-center justify-center overflow-hidden">
      <div className="relative w-[800px] ">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6  opacity-20 pointer-events-none">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border border-pink-500"></div>
          ))}
        </div>
     
        <div className="absolute bottom-[5rem] text-sm md:ml-[4rem] transform text-center">
  
            <div className="text-sm md:text-lg text-left p-2 rounded-md overflow-x-auto text-gray-300 shadow-lg border-pink-500">
              <ReactTyped
                strings={[stringToTyped]}
                typeSpeed={40}
                backSpeed={5}
                loop={true}
              />
            </div>
        </div>
        
        {/* Comments and other UI elements preserved from original code */}
        {/* <div className="absolute bottom-[80px] w-full h-1 bg-purple-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>
        <div
          className="absolute bottom-[80px] w-10 h-10"
          style={{ left: `${obstaclePosition}%` }}
        >
          <img
             src={Walking}
            className="w-full h-full object-contain"
          />
        </div> */}

        {/* <div
          className={`absolute left-10 bottom-20 transition-transform duration-500 ${
            isJumping ? "translate-y-[-150px]" : "translate-y-0"
          }`}
        >
          <div className="cube-game">
            <div className="square-game bg-purple-800/80 border-2 border-pink-500 flex items-center justify-center w-10 h-10">
              <Code2 className="w-8 h-8 text-pink-500 animate-pulse" />
            </div>
          </div>
        </div> */}

        <div className="absolute inset-0">
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-pink-500/20 to-transparent blur-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Game;