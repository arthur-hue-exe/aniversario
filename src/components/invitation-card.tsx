
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function InvitationCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card className={`bg-background/80 backdrop-blur-sm shadow-xl w-full max-w-lg ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-4xl md:text-5xl text-primary">Você está Convidado!</CardTitle>
        <CardDescription className="font-body text-muted-foreground pt-2 text-md md:text-lg">
          Junte-se a nós para uma celebração especial!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="font-headline text-3xl md:text-4xl text-foreground">
          Festa de Aniversário do Weverson
        </h2>
        <div className="font-body text-lg md:text-xl text-foreground/90 space-y-2">
          <p>
            <strong>Data:</strong> Sábado, 31 de Maio de 2025
          </p>
          <p>
            <strong>Horário:</strong> 19:00 em diante
          </p>
          <p>
            <strong>Local:</strong> Rua 1, Jardim Imperial
          </p>
        </div>
        <p className="font-body text-md md:text-lg text-accent-foreground italic pt-2">
          Churrasco do kilo
        </p>
      </CardContent>
    </Card>
  );
}

