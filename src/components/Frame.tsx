import React from 'react';
import Game from './Game';
interface CyberpunkWebcamFrameProps {
    imageUrl: string;
}

const CyberpunkWebcamFrame: React.FC<CyberpunkWebcamFrameProps> = ({ imageUrl }) => {
    return (
        <div className="relative w-[40rem]" style={{ imageRendering: 'pixelated' }}>
            <div
                className="border-4 border-fuchsia-600 rounded-md overflow-hidden shadow-lg"
                style={{ boxShadow: '0 0 20px #d946ef, 0 0 40px #d946ef' }}
            >
                <div className="bg-purple-900 p-2 flex justify-between items-center border-b-4 border-fuchsia-600">
                    <div className="flex gap-2">
                        <div className="w-4 h-4 bg-fuchsia-400"></div>
                        <div className="w-4 h-4 bg-pink-400"></div>
                        <div className="w-4 h-4 bg-purple-400"></div>
                    </div>
                </div>

                <div className="bg-purple-800relative h-[18rem]">
                   <Game/>
                </div>
            </div>
        </div>
    );
};

export default CyberpunkWebcamFrame;
