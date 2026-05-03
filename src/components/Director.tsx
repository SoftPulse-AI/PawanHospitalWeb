import director from "@/assets/director.jpg";
import { Quote } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const Director = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-16">
      <div className="container">
        <div className="reveal grid md:grid-cols-5 gap-6 items-stretch bg-gradient-card rounded-3xl p-5 md:p-8 shadow-elegant border border-border overflow-hidden">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[380px] bg-muted">
            <img src={director} alt="Dr. Pawan, Director of Pawan Hospital" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" width={800} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary/10 to-transparent" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-primary shadow-soft">
              ★ Founder & Director
            </div>
            <div className="absolute bottom-3 left-3 right-3 glass rounded-xl px-3 py-2 border border-white/40">
              <div className="font-bold text-sm text-foreground">Dr. Pawan</div>
              <div className="text-[11px] text-muted-foreground">Director, Pawan Hospital</div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Leadership</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Message from the Director</h2>
            <Quote className="h-6 w-6 text-primary/40 mb-2" />
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              At Pawan Hospital, our focus is to deliver quality healthcare with compassion, precision, and responsibility.
              Every patient is treated with attention, care, and a commitment to the best possible outcome. We aim to create
              a safe, reliable, and patient-friendly environment for every individual.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <div className="text-sm font-semibold text-primary">— Dr. Pawan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
