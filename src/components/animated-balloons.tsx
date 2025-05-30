"use client";

import { useEffect, useState } from 'react';

interface BalloonProps {
  id: number;
  style: React.CSSProperties;
  colorClass: string;
}

const Balloon: React.FC<BalloonProps> = ({ style, colorClass }) => {
  return (
    <div
      className={`absolute rounded-full balloon-animation ${colorClass} shadow-lg`}
      style={style}
    >
      <div 
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[2px] bg-foreground/30" 
        style={{ height: `${(style.width as number) * 1.5}px`}} // String length relative to balloon size
      />
    </div>
  );
};


const balloonColors = [
  'bg-primary/70', 
  'bg-accent/70',   
  'bg-secondary/70', 
  'bg-muted/70', 
  'bg-slate-500/70', // Neutral gray
];

const generateBalloon = (id: number): BalloonProps => {
  const size = Math.random() * (80 - 40) + 40; // Size between 40px and 80px
  const duration = Math.random() * (20 - 10) + 10; // Duration between 10s and 20s
  const delay = Math.random() * 5; // Delay up to 5s
  const left = Math.random() * 90; // Left position between 0% and 90%
  
  return {
    id,
    style: {
      width: `${size}px`,
      height: `${size * 1.2}px`, // Slightly oval shape
      left: `${left}%`,
      bottom: `-${size * 1.5}px`, // Start off-screen
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    },
    colorClass: balloonColors[Math.floor(Math.random() * balloonColors.length)],
  };
};

export default function AnimatedBalloons() {
  const [balloons, setBalloons] = useState<BalloonProps[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const numBalloons = 15; // Adjust for density
      const newBalloons = Array.from({ length: numBalloons }, (_, i) => generateBalloon(i));
      setBalloons(newBalloons);
    }
  }, [isClient]);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {balloons.map((balloon) => (
        <Balloon key={balloon.id} style={balloon.style} colorClass={balloon.colorClass} />
      ))}
    </div>
  );
}
