
"use client";

import { useEffect, useState } from 'react';

const candleHorizontalPositions = [
  { leftClass: 'left-[calc(50%+75px)] -translate-x-1/2' }, // Single candle, shifted 75px right from center
];

const NUM_CAKE_LAYERS = 3; // Base, Layer1, Frosting

export default function CakeAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
    if (!clientRendered) return;

    const timers = Array.from({ length: NUM_CAKE_LAYERS }).map((_, index) =>
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * 700)
    );
    
    timers.push(setTimeout(() => {
      setCurrentStep(NUM_CAKE_LAYERS + 1); // Step for candles
    }, (NUM_CAKE_LAYERS + 1) * 700));

    timers.push(setTimeout(() => {
      setCurrentStep(NUM_CAKE_LAYERS + 2); // Step for flames
    }, (NUM_CAKE_LAYERS + 2) * 700));

    return () => timers.forEach(clearTimeout);
  }, [clientRendered]);

  if (!clientRendered) {
    return <div className="h-64 w-64 md:h-80 md:w-80 flex items-center justify-center"><p>Carregando bolo...</p></div>;
  }

  return (
    <div className="relative block mx-auto w-48 h-48 md:w-60 md:h-60 mt-8 md:mt-12 animate__animated animate__zoomIn">
      {/* Cake Base */}
      {currentStep > 0 && (
        <div
          className="cake-base animate__animated animate__fadeInUp"
          data-testid="cake-base"
        />
      )}

      {/* Cake Layer 1 */}
      {currentStep > 1 && (
        <div
          className="cake-layer1 animate__animated animate__fadeInUp"
          data-testid="cake-layer1"
        />
      )}

      {/* Cake Frosting */}
      {currentStep > 2 && (
        <div
          className="cake-frosting animate__animated animate__fadeInUp"
          data-testid="cake-frosting"
        />
      )}

      {/* Candles */}
      {currentStep > NUM_CAKE_LAYERS && candleHorizontalPositions.map((pos, index) => (
        <div 
          key={`candle-${index}`} 
          className={`absolute bottom-[152px] md:bottom-[200px] ${pos.leftClass} w-2 h-8 md:w-3 md:h-10 bg-primary rounded-t-sm animate__animated animate__fadeInUp`}
        >
          {/* Flames */}
          {currentStep > NUM_CAKE_LAYERS + 1 && (
            <div 
              className="flame absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2"
            />
          )}
        </div>
      ))}
    </div>
  );
}
