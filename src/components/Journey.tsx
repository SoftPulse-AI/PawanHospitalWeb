import { HeartPulse, UserRound, HandHeart, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    step: "01",
    title: "You arrive worried",
    desc: "Pain, uncertainty, or a sudden emergency — we understand how heavy that feels.",
    icon: UserRound,
    mood: "from-slate-500/15 to-slate-600/5 border-slate-200/80",
    iconWrap: "bg-slate-500/10 text-slate-700",
    transformClass:
      "md:[transform:perspective(1200px)_rotateY(-10deg)_translate3d(0,0,-16px)] md:hover:[transform:perspective(1200px)_rotateY(-6deg)_translate3d(0,-4px,-8px)]",
  },
  {
    step: "02",
    title: "Nurses & doctors care",
    desc: "Skilled teams listen, diagnose, and treat you with modern medicine and genuine compassion.",
    icon: HandHeart,
    mood: "from-primary/20 to-secondary/10 border-primary/25",
    iconWrap: "bg-gradient-primary text-primary-foreground shadow-glow",
    transformClass:
      "md:[transform:perspective(1200px)_rotateY(0deg)_translate3d(0,0,28px)_scale(1.03)] md:z-[1] md:hover:[transform:perspective(1200px)_rotateY(0deg)_translate3d(0,-6px,32px)_scale(1.04)]",
  },
  {
    step: "03",
    title: "You leave relieved",
    desc: "Clear answers, effective treatment, and the confidence to get back to life — smiling again.",
    icon: HeartPulse,
    mood: "from-success/18 to-emerald-500/8 border-success/30",
    iconWrap: "bg-success text-white shadow-md",
    transformClass:
      "md:[transform:perspective(1200px)_rotateY(10deg)_translate3d(0,0,-16px)] md:hover:[transform:perspective(1200px)_rotateY(6deg)_translate3d(0,-4px,-8px)]",
  },
];

export const Journey = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-primary/[0.03] to-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 right-[-10%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
      </div>
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Patient Experience</div>
          <h2 className="text-3xl md:text-4xl font-bold">Care that brings peace of mind</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            We stay with you from the first step to full recovery.
          </p>
        </div>

        <div className="reveal mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 [perspective:1400px]" style={{ perspectiveOrigin: "50% 30%" }}>
            <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
              {steps.map((s, i) => (
                <div key={s.step} className="group relative" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div
                    className={`relative h-full rounded-3xl border bg-gradient-to-br p-6 shadow-soft transition-all duration-500 [transform-style:preserve-3d] will-change-transform group-hover:shadow-lg md:min-h-[230px] ${s.mood} ${s.transformClass}`}
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
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 z-20 hidden h-px w-6 -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-primary/40 to-transparent md:block lg:w-10" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3D nurse + patient visual */}
          <div className="lg:col-span-5">
            <div className="mx-auto w-full max-w-md [perspective:1400px]">
              <div className="relative h-[360px] w-full [transform-style:preserve-3d]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-secondary/10 to-background border border-primary/15 shadow-lg [transform:translate3d(0,0,-34px)_rotateY(-14deg)]" />
                <div className="absolute inset-4 rounded-[2rem] bg-card/90 backdrop-blur border border-border shadow-soft [transform:translate3d(0,0,-8px)_rotateY(-8deg)]" />

                <div className="absolute inset-7 rounded-[2rem] border border-primary/25 bg-gradient-card shadow-glow p-6 [transform:translate3d(0,0,26px)_rotateY(-2deg)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">3D Care Journey</div>
                      <div className="mt-1 text-xl font-bold">Concern in, confidence out</div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Walk-in <ArrowRight className="h-3.5 w-3.5" /> Walk-out
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {/* Nurse */}
                    <div className="relative rounded-2xl border border-primary/15 bg-white/60 backdrop-blur p-4 shadow-soft">
                      <div className="absolute -top-2 -left-2 h-16 w-16 rounded-2xl bg-primary/10 blur-xl" aria-hidden />
                      <div className="relative">
                        <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center">
                          <HandHeart className="h-8 w-8 text-white" />
                        </div>
                        <div className="mt-3 text-center">
                          <div className="text-sm font-semibold">Nursing care</div>
                          <div className="text-xs text-muted-foreground">Support • comfort</div>
                        </div>
                      </div>
                    </div>

                    {/* Patient */}
                    <div className="relative rounded-2xl border border-secondary/20 bg-white/60 backdrop-blur p-4 shadow-soft">
                      <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-2xl bg-secondary/10 blur-xl" aria-hidden />
                      <div className="relative">
                        <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-primary shadow-glow flex items-center justify-center">
                          <UserRound className="h-8 w-8 text-white" />
                        </div>
                        <div className="mt-3 text-center">
                          <div className="text-sm font-semibold">Patient care</div>
                          <div className="text-xs text-muted-foreground">Listen • treat</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-border bg-background/70 p-4">
                    <div className="grid gap-2 text-sm">
                      <div className="rounded-xl bg-muted/60 px-3 py-2">Arrival & emergency triage</div>
                      <div className="rounded-xl bg-muted/60 px-3 py-2">Doctor + nurse care plan</div>
                      <div className="rounded-xl bg-muted/60 px-3 py-2">Recovery and discharge support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
