import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

const LOGOS = [
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60", 
    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60", 
    "https://images.unsplash.com/photo-1648941167589-1538c0bdb9df?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60", 
    "https://images.unsplash.com/photo-1640132219022-e7a98b4c92e9?w=800&auto=format&fit=crop&q=60", 
];

function Game() {
    const [isJumping, setIsJumping] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(0);
    const [obstaclePosition, setObstaclePosition] = useState(100);

    useEffect(() => {
        const moveObstacle = () => {
            setObstaclePosition((prev) => {
                if (prev <= -100) {
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
        <div className="h-[44rem] bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 flex items-center justify-center overflow-hidden">
            <div className="relative w-[800px] ">

                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-20 pointer-events-none">
                    {Array.from({ length: 72 }).map((_, i) => (
                        <div key={i} className="border border-pink-500"></div>
                    ))}
                </div>

                <div className="absolute bottom-[70px] w-full h-1 bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>

                <div
                    className="absolute bottom-[70px] w-10 h-10 bg-pink-500 rounded-full"
                    style={{ left: `${obstaclePosition}%` }}
                ></div>

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