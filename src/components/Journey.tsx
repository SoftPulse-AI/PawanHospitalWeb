import { MessageSquare, Microscope, Pill, HeartHandshake } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "Meet our experienced doctors for honest, clear advice." },
  { icon: Microscope, title: "Diagnosis", desc: "Accurate testing with modern in-house diagnostic equipment." },
  { icon: Pill, title: "Treatment", desc: "Personalized treatment plans tailored to your needs." },
  { icon: HeartHandshake, title: "Recovery", desc: "Continued support and follow-up for full recovery." },
];

export const Journey = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-16">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Patient Experience</div>
          <h2 className="text-3xl md:text-4xl font-bold">Your Care Journey</h2>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="reveal relative p-5 rounded-2xl bg-gradient-card border border-border text-center shadow-soft hover:shadow-md transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-3">
                <s.icon className="h-6 w-6 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-emergency text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
              </div>
              <div className="font-semibold text-[15px] mb-1">{s.title}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
