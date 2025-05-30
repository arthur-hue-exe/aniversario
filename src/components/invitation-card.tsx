"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function InvitationCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    setIsVisible(true);
  }, []);

  return (
    <Card className={`bg-background/80 backdrop-blur-sm shadow-xl w-full max-w-lg ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-4xl md:text-5xl text-primary">You're Invited!</CardTitle>
        <CardDescription className="font-body text-muted-foreground pt-2 text-md md:text-lg">
          Join us for a special celebration!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="font-headline text-3xl md:text-4xl text-foreground">
          Weverson's Birthday Bash
        </h2>
        <div className="font-body text-lg md:text-xl text-foreground/90 space-y-2">
          <p>
            <strong>Date:</strong> Saturday, August 24th, 2024
          </p>
          <p>
            <strong>Time:</strong> 7:00 PM onwards
          </p>
          <p>
            <strong>Venue:</strong> The Grand Celebration Hall, 123 Party Lane
          </p>
        </div>
        <p className="font-body text-md md:text-lg text-accent-foreground italic pt-2">
          Get ready for an evening of fun, laughter, and good times!
        </p>
      </CardContent>
    </Card>
  );
}
