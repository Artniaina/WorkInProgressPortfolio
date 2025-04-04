import { useState, useEffect } from 'react';

interface CustomCursorProps {
  size?: number;
  imageSrc?: string;
  trailEffect?: boolean;
}

const CustomCursor = ({ 
  size = 40, 
  imageSrc, 
  trailEffect = true 
}: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cacher le curseur par défaut
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      // Restaurer le curseur par défaut
      document.body.style.cursor = 'auto';
    };
  }, []);

  const scale = isClicking ? 0.8 : 1;
  
  const cursorStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate(${position.x - size/2}px, ${position.y - size/2}px) scale(${scale})`,
    backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    pointerEvents: 'none',
    zIndex: 9999,
    transition: trailEffect ? 'transform 0.07s ease' : 'transform 0.01s linear',
    opacity: visible ? 1 : 0
  };

  const defaultCursorStyle = !imageSrc ? {
    background: 'rgba(163, 66, 252, 0.4)',
    backdropFilter: 'blur(2px)',
    border: '2px solid rgba(236, 72, 153, 0.7)',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(163, 66, 252, 0.7), 0 0 20px rgba(236, 72, 153, 0.5) inset'
  } : {};

  return <div style={{ ...cursorStyle, ...defaultCursorStyle } as React.CSSProperties} />;
};

export default CustomCursor;