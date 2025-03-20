import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import Image1 from '../assets/TS.webp';
import Image2 from '../assets/JS.jpg';
import Image3 from '../assets/PY.png';
import Image4 from '../assets/REACT.png';

const LOGOS = [Image1, Image2, Image3, Image4];

function Game() {
    const [isJumping, setIsJumping] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(0);
    const [obstaclePosition, setObstaclePosition] = useState(100);

    useEffect(() => {
        const moveObstacle = () => {
            setObstaclePosition((prev) => {
                if (prev <= -10) {
                    setCurrentLogo((prevLogo) => (prevLogo + 1) % LOGOS.length);
                    return 100;
                }
                return prev - 1;
            });
        };

        const obstacleInterval = setInterval(moveObstacle, 16);
        return () => clearInterval(obstacleInterval);
    }, []);

    useEffect(() => {
        if (obstaclePosition <= 30 && obstaclePosition >= 0 && !isJumping) {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 500); 
        }
    }, [obstaclePosition, isJumping]);

    return (
        <div className="h-[44rem] bg-gradient-to-br  flex items-center justify-center overflow-hidden">
            <div className="relative w-[800px] ">

                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-20 pointer-events-none">
                    {Array.from({ length: 72 }).map((_, i) => (
                        <div key={i} className="border border-pink-500"></div>
                    ))}
                </div>

                <div className="absolute bottom-[70px] w-full h-1 bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>

                <div
                    className="absolute bottom-[70px] w-10 h-10"
                    style={{ left: `${obstaclePosition}%` }}
                >
                    <img src={LOGOS[currentLogo]} className="w-full h-full object-contain" />
                </div>

                <div
                    className={`absolute left-20 bottom-20 transition-transform duration-500 ${
                        isJumping ? 'translate-y-[-150px]' : 'translate-y-0'
                    }`}
                >
                    <div className="cube-game">
                        <div className="cube-face-game front bg-purple-800/80 backdrop-blur-sm border-2 border-pink-500">
                            <Code2 className="w-8 h-8 text-pink-500 animate-pulse" />
                        </div>
                        <div className="cube-face-game back bg-purple-800/80 backdrop-blur-sm border-2 border-pink-500"></div>
                        <div className="cube-face-game right bg-purple-900/80 backdrop-blur-sm border-2 border-pink-500"></div>
                        <div className="cube-face-game left bg-purple-900/80 backdrop-blur-sm border-2 border-pink-500"></div>
                        <div className="cube-face-game top bg-purple-700/80 backdrop-blur-sm border-2 border-pink-500"></div>
                        <div className="cube-face-game bottom bg-purple-700/80 backdrop-blur-sm border-2 border-pink-500"></div>
                    </div>
                </div>

  
                <div className="absolute inset-0">
                    <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-pink-500/20 to-transparent blur-xl"></div>
                </div>
            </div>
        </div>
    );
}

export default Game;