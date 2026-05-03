import { Frown, HeartPulse, Smile, Sparkles, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const stages = [
  {
    step: "01",
    title: "You arrive worried",
    desc: "Pain, uncertainty, or a sudden emergency — we understand how heavy that feels.",
    icon: Frown,
    mood: "from-slate-500/20 to-slate-600/10 border-slate-200/80",
    iconWrap: "bg-slate-500/15 text-slate-600",
    transformClass:
      "md:[transform:perspective(1200px)_rotateY(-10deg)_translate3d(0,0,-16px)] md:hover:[transform:perspective(1200px)_rotateY(-6deg)_translate3d(0,-4px,-8px)]",
  },
  {
    step: "02",
    title: "Nurses & doctors care",
    desc: "Skilled teams listen, diagnose, and treat you with modern medicine and genuine compassion.",
    icon: HeartPulse,
    mood: "from-primary/20 to-secondary/15 border-primary/25",
    iconWrap: "bg-gradient-primary text-primary-foreground shadow-glow",
    transformClass:
      "md:[transform:perspective(1200px)_rotateY(0deg)_translate3d(0,0,28px)_scale(1.03)] md:z-[1] md:hover:[transform:perspective(1200px)_rotateY(0deg)_translate3d(0,-6px,32px)_scale(1.04)]",
  },
  {
    step: "03",
    title: "You leave relieved",
    desc: "Clear answers, effective treatment, and the confidence to get back to life — smiling again.",
    icon: Smile,
    mood: "from-success/20 to-emerald-500/10 border-success/30",
    iconWrap: "bg-success text-white shadow-md",
    transformClass:
      "md:[transform:perspective(1200px)_rotateY(10deg)_translate3d(0,0,-16px)] md:hover:[transform:perspective(1200px)_rotateY(6deg)_translate3d(0,-4px,-8px)]",
  },
];

export const HealingJourneyCTA = ({ onBook }: { onBook: () => void }) => {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-primary/[0.04] to-background"
      aria-labelledby="healing-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Your story here
          </div>
          <h2 id="healing-cta-heading" className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            From concern to <span className="text-gradient">confidence</span>
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Every patient walks a path — we are with you at each step, until you walk out feeling like yourself again.
          </p>
        </div>

        <div className="reveal mx-auto mb-12 grid max-w-5xl items-center gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-soft backdrop-blur">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              3D Care Model
            </div>
            <h3 className="mb-2 text-xl font-bold">Concern in, confidence out</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This model shows your complete experience: emotional support, precise diagnosis, and guided recovery.
              The goal is not only treatment, but peace of mind.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md [perspective:1400px]">
            <div className="relative h-72 w-full [transform-style:preserve-3d] animate-float">
              <div className="absolute inset-0 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 to-secondary/10 shadow-lg [transform:translate3d(0,0,-30px)_rotateY(-14deg)]" />
              <div className="absolute inset-4 rounded-3xl border border-primary/30 bg-card shadow-glow [transform:translate3d(0,0,10px)_rotateY(-8deg)]" />
              <div className="absolute inset-8 rounded-3xl border border-primary/40 bg-gradient-card p-5 shadow-lg [transform:translate3d(0,0,40px)_rotateY(-2deg)]">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
                  <Building2 className="h-3.5 w-3.5" />
                  Pawan Hospital
                </div>
                <div className="space-y-2 text-sm">
                  <div className="rounded-xl bg-muted/60 px-3 py-2">Arrival & emergency triage</div>
                  <div className="rounded-xl bg-muted/60 px-3 py-2">Doctor + nurse care plan</div>
                  <div className="rounded-xl bg-muted/60 px-3 py-2">Recovery and discharge support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="reveal mx-auto mb-12 max-w-6xl [perspective:1400px]"
          style={{ perspectiveOrigin: "50% 30%" }}
        >
          <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
            {stages.map((s, i) => (
              <div
                key={s.step}
                className="group relative"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div
                  className={`relative h-full rounded-3xl border bg-gradient-to-br p-6 shadow-soft transition-all duration-500 [transform-style:preserve-3d] will-change-transform group-hover:shadow-lg md:min-h-[220px] ${s.mood} ${s.transformClass}`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold tabular-nums text-muted-foreground">{s.step}</span>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${s.iconWrap} transition-transform duration-500 group-hover:scale-110`}>
                      <s.icon className="h-6 w-6" strokeWidth={s.step === "02" ? 2.2 : 2} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-snug">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                {i < stages.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 z-20 hidden h-px w-6 -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-primary/40 to-transparent md:block lg:w-10"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-gradient-primary px-8 font-semibold shadow-glow hover:opacity-95" onClick={onBook}>
            Book your visit
          </Button>
          <p className="max-w-md text-center text-xs text-muted-foreground sm:text-left">
            Same-day appointments when possible · 24×7 emergency · All major specialties under one roof
          </p>
        </div>
      </div>
    </section>
  );
};
