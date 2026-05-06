import { Clock, Stethoscope, Baby, Scissors, Heart, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { icon: Scissors, value: "More than 25,000", label: "Successful Surgeries", color: "from-primary to-primary-glow" },
  { icon: Baby, value: "More than 10,000", label: "Normal Deliveries", color: "from-secondary to-primary" },
  { icon: Clock, value: "24×7", label: "Emergency Support", color: "from-emergency to-emergency-deep" },
  { icon: Stethoscope, value: "Expert", label: "Senior Doctors", color: "from-success to-secondary" },
];

const ribbon = [
  "ICU & Emergency Care",
  "General Surgery",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "Diagnostics & Lab",
  "Pharmacy 24×7",
  "Ambulance Service",
];

export const Trust = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative py-14 bg-gradient-soft border-y border-border overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(217 90% 44% / 0.08), transparent 40%), radial-gradient(circle at 80% 80%, hsl(188 85% 42% / 0.08), transparent 40%)" }} />

      <div className="container relative">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
            <ShieldCheck className="h-3.5 w-3.5" /> Trusted By Our Community
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Care That Speaks In Numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal group relative overflow-hidden text-center p-5 rounded-2xl bg-gradient-card shadow-soft hover:shadow-lg transition-all hover:-translate-y-1 border border-border/60" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${s.color} mb-3 shadow-glow`}>
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee ribbon */}
        <div className="relative overflow-hidden mask-fade rounded-2xl bg-white/60 backdrop-blur border border-border py-3">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...ribbon, ...ribbon].map((r, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <Heart className="h-3.5 w-3.5 text-emergency fill-current" /> {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
