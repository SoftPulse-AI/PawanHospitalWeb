import { Phone, MessageCircle } from "lucide-react";
import { PHONE_APPOINTMENT } from "@/data/doctors";

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5">
      <a
        href={`https://wa.me/91${PHONE_APPOINTMENT}`}
        target="_blank"
        rel="noopener"
        className="h-14 w-14 rounded-full bg-success text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:+91${PHONE_APPOINTMENT}`}
        className="relative h-14 w-14 rounded-full bg-gradient-emergency text-white flex items-center justify-center shadow-emergency animate-pulse-ring"
        aria-label="Call now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};
