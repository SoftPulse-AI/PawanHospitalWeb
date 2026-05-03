import { useEffect, useState } from "react";
import { Heart, Stethoscope, Baby, Sparkles, ArrowRight } from "lucide-react";
import nurseImg from "@/assets/care-nurse.jpg";
import surgeryImg from "@/assets/care-surgery.jpg";
import pediatricImg from "@/assets/care-pediatric.jpg";
import { useReveal } from "@/hooks/useReveal";

const moments = [
  {
    img: nurseImg,
    icon: Heart,
    tag: "Compassion",
    title: "Bedside Care That Feels Like Family",
    desc: "Our nurses don't just monitor — they listen, comfort, and walk every step with you.",
    stat: "98%",
    statLabel: "Patient Comfort",
  },
  {
    img: surgeryImg,
    icon: Stethoscope,
    tag: "Precision",
    title: "Modern OT, Steady Hands",
    desc: "Sterile, fully-equipped operation theater with experienced surgical teams ready around the clock.",
    stat: "1000+",
    statLabel: "Successful Surgeries",
  },
  {
    img: pediatricImg,
    icon: Baby,
    tag: "Warmth",
    title: "Smiles That Heal Faster",
    desc: "Friendly pediatric care so children feel safe — and parents feel reassured.",
    stat: "24×7",
    statLabel: "Child Care Ready",
  },
  {
    img: nurseImg,
    icon: Heart,
    tag: "Assurance",
    title: "Clear Guidance, Calm Recovery",
    desc: "From admission to discharge, every update is explained so families feel informed and confident.",
    stat: "1:1",
    statLabel: "Care Attention",
  },
];

export const LiveCare = () => {
  const ref = useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % moments.length), 4500);
    return () => clearInterval(id);
  }, []);

  const m = moments[active];

  return (
    <section ref={ref} className="relative py-20 bg-background overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5" /> Real Moments. Real Care.
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            A Day in the Life at <span className="text-gradient">Pawan Hospital</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Beyond beds and machines — it's the people, the warmth, and the moments that make us different.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Image showcase */}
          <div className="lg:col-span-7 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] group">
              {moments.map((mo, i) => (
                <img
                  key={i}
                  src={mo.img}
                  alt={mo.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent" />

              {/* Floating live badge */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-foreground text-xs font-semibold shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency" />
                </span>
                Live · Ward Activity
              </div>

              {/* Stat overlay */}
              <div className="absolute bottom-5 right-5 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur shadow-lg">
                <div className="text-3xl font-extrabold text-gradient leading-none">{m.stat}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-1">{m.statLabel}</div>
              </div>

              {/* Bottom progress */}
              <div className="absolute bottom-0 left-0 right-0 flex gap-1.5 p-4">
                {moments.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show moment ${i + 1}`}
                    className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white rounded-full ${i === active ? "animate-progress" : i < active ? "w-full" : "w-0"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Story panel */}
          <div className="lg:col-span-5 reveal">
            <div className="space-y-5">
              {moments.map((mo, i) => {
                const Icon = mo.icon;
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-gradient-card border-primary/40 shadow-md"
                        : "bg-card border-border hover:border-primary/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl shrink-0 transition ${isActive ? "bg-gradient-primary text-white shadow-glow" : "bg-muted text-muted-foreground"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className={`text-[10px] uppercase tracking-[0.18em] font-bold mb-1 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                          {mo.tag}
                        </div>
                        <div className="font-bold text-base md:text-lg text-foreground mb-1 flex items-center gap-2">
                          {mo.title}
                          {isActive && <ArrowRight className="h-4 w-4 text-primary" />}
                        </div>
                        {isActive && (
                          <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in">{mo.desc}</p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
