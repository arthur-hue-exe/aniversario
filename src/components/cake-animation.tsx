"use client";

import { useEffect, useState } from 'react';

// Posições ajustadas para 3 velas, com a do meio deslocada 99px para a direita do centro do bolo.
// As outras duas velas ficam a 5px de distância da vela central.
// Largura da vela (w-2 ou md:w-3) é ~8px ou ~12px. Metade disso é 4px ou 6px.
// Vela central: calc(50% + 99px)
// Vela esquerda: calc(50% + 99px - (md?6:4)px - 5px - (md?6:4)px) = calc(50% + 99px - (md?12:8)px - 5px) -> calc(50% + 86px) para md, calc(50% + 86px) para sm
// Vela direita: calc(50% + 99px + (md?6:4)px + 5px + (md?6:4)px) = calc(50% + 99px + (md?12:8)px + 5px) -> calc(50% + 112px) para md, calc(50% + 112px) para sm
const candleHorizontalPositions = [
  { leftClass: 'left-[calc(50%+86px)] -translate-x-1/2' }, 
  { leftClass: 'left-[calc(50%+99px)] -translate-x-1/2' }, 
  { leftClass: 'left-[calc(50%+112px)] -translate-x-1/2' },
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
    // Placeholder for server render or before client hydration
    // Increased width to md:w-[360px] to accommodate candles shifted to the right
    // Added relative positioning and left shift to match the main component
    return <div className="relative h-72 w-full md:w-[360px] md:h-80 flex items-center justify-center left-[-100px]"><p>Carregando bolo...</p></div>;
  }

  return (
    // Ajustado w- e h- para conter os elementos.
    // Aumentada a largura (md:w-[360px]) para garantir que as velas deslocadas à direita sejam visíveis e o conjunto possa ser centralizado.
    // Adicionado left-[-100px] para mover o conjunto 100px para a esquerda.
    <div className="relative block mx-auto w-full h-72 md:w-[360px] md:h-80 animate__animated animate__zoomIn left-[-100px]">
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
          // As velas são posicionadas em relação ao fundo do contêiner da animação do bolo.
          // A cobertura do bolo (cake-frosting) também é posicionada em relação a este mesmo fundo.
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
