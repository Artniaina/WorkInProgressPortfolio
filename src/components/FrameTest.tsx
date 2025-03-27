import React from 'react';

interface PixelFrame1Props {
  children?: React.ReactNode;
  className?: string;
}

export function PixelFrame1({ children, className = '' }: PixelFrame1Props) {
  return (
    <div className={`relative w-64 h-80 ${className}`}>
      {/* Main background */}
      <div className="absolute inset-0 bg-[#FFEFD5]"></div>
      
      {/* Top border with dots */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-black">
        <div className="flex justify-between px-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-[#FF69B4]"></div>
          ))}
        </div>
      </div>
      
      {/* Content area */}
      <div className="absolute top-4 left-2 right-2 bottom-2">
        {children}
      </div>
    </div>
  );
}