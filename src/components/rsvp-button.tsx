"use client";

import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { useEffect, useState } from "react";

export default function RsvpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRsvp = () => {
    const phoneNumber = "5562991910621"; // Número do WhatsApp atualizado
    const message = encodeURIComponent("Adoraria ir ao aniversário do Weverson!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleRsvp}
      size="lg"
      className={`font-body text-lg md:text-xl py-6 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}
      variant="default"
    >
      <Gift className="mr-2 h-6 w-6" />
      Confirmar Presença
    </Button>
  );
}
