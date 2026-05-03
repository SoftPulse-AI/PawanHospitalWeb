import { Phone, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_APPOINTMENT } from "@/data/doctors";

export const Emergency = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-emergency p-6 md:p-10 shadow-emergency">
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 text-primary-foreground">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center animate-pulse-ring">
                  <Siren className="h-7 w-7" />
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider opacity-90">24×7 Available</div>
                <h2 className="text-2xl md:text-3xl font-bold">Emergency? Get Immediate Medical Help</h2>
                <p className="text-sm opacity-90 mt-1">Our emergency team is ready around the clock.</p>
              </div>
            </div>
            <a href={`tel:+91${PHONE_APPOINTMENT}`}>
              <Button size="lg" className="gap-2 bg-white text-emergency hover:bg-white/95 font-bold shadow-lg">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
