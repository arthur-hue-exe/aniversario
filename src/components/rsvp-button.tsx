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
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("I'd love to come to Weverson's birthday!");
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
      Confirm Attendance
    </Button>
  );
}
