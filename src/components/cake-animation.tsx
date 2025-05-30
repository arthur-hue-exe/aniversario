"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const cakeParts = [
  { src: "https://placehold.co/300x100/FFC0CB/A0522D?text=Cake+Base", alt: "Cake Base", dataAiHint: "cake base", className: "w-48 h-16 md:w-60 md:h-20", id: "base" },
  { src: "https://placehold.co/280x80/FFB6C1/8B4513?text=Layer+1", alt: "Cake Layer 1", dataAiHint: "cake layer", className: "w-44 h-12 md:w-56 md:h-16 absolute bottom-[calc(4rem-2px)] md:bottom-[calc(5rem-2px)] left-1/2 -translate-x-1/2", id: "layer1" },
  { src: "https://placehold.co/260x70/F0E68C/FFFFFF?text=Frosting", alt: "Cake Frosting", dataAiHint: "cake frosting", className: "w-40 h-10 md:w-52 md:h-14 absolute bottom-[calc(7rem-4px)] md:bottom-[calc(9rem-4px)] left-1/2 -translate-x-1/2", id: "frosting" },
];

const candlePositions = [
  { top: '-top-8 md:-top-10', left: 'left-[35%]' },
  { top: '-top-10 md:-top-12', left: 'left-1/2 -translate-x-1/2' },
  { top: '-top-8 md:-top-10', left: 'right-[35%]' },
];

export default function CakeAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
    if (!clientRendered) return;

    const timers = cakeParts.map((_, index) => 
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * 1000)
    );
    
    // Timer for candles
    timers.push(setTimeout(() => {
      setCurrentStep(cakeParts.length + 1); // Step for candles
    }, (cakeParts.length + 1) * 1000));

    // Timer for flames
    timers.push(setTimeout(() => {
      setCurrentStep(cakeParts.length + 2); // Step for flames
    }, (cakeParts.length + 2) * 1000));

    return () => timers.forEach(clearTimeout);
  }, [clientRendered]);

  if (!clientRendered) {
    return <div className="h-64 w-64 md:h-80 md:w-80 flex items-center justify-center"><p>Loading cake...</p></div>;
  }

  return (
    <div className="relative w-48 h-48 md:w-60 md:h-60 mt-8 md:mt-12 animate__animated animate__zoomIn">
      {cakeParts.map((part, index) =>
        currentStep > index && (
          <Image
            key={part.id}
            src={part.src}
            alt={part.alt}
            data-ai-hint={part.dataAiHint}
            width={parseInt(part.className.match(/w-(\d+)/)?.[1] || '150', 10) * 4} // Approximation for quality
            height={parseInt(part.className.match(/h-(\d+)/)?.[1] || '50', 10) * 4}
            className={`${part.className} object-contain animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        )
      )}

      {/* Candles */}
      {currentStep > cakeParts.length && candlePositions.map((pos, index) => (
        <div 
          key={`candle-${index}`} 
          className={`absolute ${pos.top} ${pos.left} w-2 h-8 md:w-3 md:h-10 bg-primary rounded-t-sm animate__animated animate__fadeInUp`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Flames */}
          {currentStep > cakeParts.length + 1 && (
            <div 
              className="flame absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
