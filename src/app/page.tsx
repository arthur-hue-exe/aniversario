import InvitationCard from "@/components/invitation-card";
import CakeAnimation from "@/components/cake-animation";
import RsvpButton from "@/components/rsvp-button";
import AnimatedBalloons from "@/components/animated-balloons";

export default function BirthdayPage() {
  return (
    <main className="animated-gradient-bg min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden relative">
      <AnimatedBalloons />
      <div className="z-10 flex flex-col items-center space-y-8 md:space-y-12 text-center max-w-2xl w-full">
        <InvitationCard />
        <CakeAnimation />
        <RsvpButton />
      </div>
    </main>
  );
}
