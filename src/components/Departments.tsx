import {
  Stethoscope,
  Bone,
  Baby,
  HeartPulse,
  ScanLine,
  Activity,
  Heart,
  Eye,
  Ear,
  Brain,
  Pill,
  Scissors,
  Microscope,
  Wind,
  Droplets,
  Smile,
  Zap,
  ShieldPlus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { departments as deptList } from "@/data/doctors";
import { useRef } from "react";

const departmentIcons: Record<string, typeof Stethoscope> = {
  "General Medicine": Stethoscope,
  "General Surgery": Scissors,
  Orthopedics: Bone,
  Pediatrics: Baby,
  "Obstetrics & Gynecology": Heart,
  Gastroenterology: Pill,
  Radiology: ScanLine,
  Dental: Smile,
  Pathology: Microscope,
  ENT: Ear,
  Ophthalmology: Eye,
  Urology: Droplets,
  Anaesthesia: ShieldPlus,
  "Respiratory Medicine": Wind,
  Cardiology: HeartPulse,
  "Plastic Surgery": Zap,
  Nephrology: Activity,
  Neurology: Brain,
  Neurosurgery: Brain,
};

const departmentDescs: Record<string, string> = {
  "General Medicine": "Comprehensive primary care for all common health concerns.",
  "General Surgery": "Expert surgical interventions for a wide range of conditions.",
  Orthopedics: "Bone, joint, and muscle care from fractures to joint replacements.",
  Pediatrics: "Compassionate care for infants, children, and adolescents.",
  "Obstetrics & Gynecology": "Complete women's health — maternity, gynecology & wellness.",
  Gastroenterology: "Diagnosis and treatment of digestive system disorders.",
  Radiology: "Advanced imaging — X-ray, ultrasound, CT for accurate diagnosis.",
  Dental: "Complete oral healthcare — cleaning, fillings, and more.",
  Pathology: "Accurate lab diagnostics for timely and reliable results.",
  ENT: "Ear, nose, and throat care by experienced specialists.",
  Ophthalmology: "Complete eye care — checkups, surgery, and vision correction.",
  Urology: "Specialized care for urinary tract and kidney conditions.",
  Anaesthesia: "Safe anaesthesia support for all surgical procedures.",
  "Respiratory Medicine": "Expert care for asthma, COPD, and lung conditions.",
  Cardiology: "Heart health — diagnostics, treatment, and prevention.",
  "Plastic Surgery": "Reconstructive and cosmetic surgery by trained surgeons.",
  Nephrology: "Kidney care — dialysis support and chronic disease management.",
  Neurology: "Brain, spine, and nervous system disorder management.",
  Neurosurgery: "Advanced surgical care for brain and spinal conditions.",
};

export const Departments = ({ onBook }: { onBook: () => void }) => {
  const ref = useReveal();
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const el = stripRef.current;
    if (!el) return;
    const delta = Math.max(260, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: direction === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <section id="departments" ref={ref} className="py-16 bg-gradient-soft">
      <div className="container">
        <div className="reveal mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Our Departments</div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">19 Specialties Under One Roof</h2>
          <p className="text-sm text-muted-foreground">Swipe sideways to explore every department — optimized for touch and trackpads.</p>
        </div>

        <div className="reveal relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[hsl(210_40%_99%)] to-transparent sm:w-14"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[hsl(210_40%_99%)] to-transparent sm:w-14"
            aria-hidden
          />

          <div className="pointer-events-none absolute -top-11 right-0 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:border-primary/40"
              aria-label="Scroll departments left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:border-primary/40"
              aria-label="Scroll departments right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={stripRef}
            className="specialties-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 pt-1 [-webkit-overflow-scrolling:touch] scroll-smooth px-1 md:px-0"
            style={{ scrollbarGutter: "stable" }}
            tabIndex={0}
            role="region"
            aria-label="Specialties — scroll horizontally"
          >
            {deptList.map((name, i) => {
              const Icon = departmentIcons[name] || Stethoscope;
              const desc = departmentDescs[name] || "";
              return (
                <button
                  key={name}
                  type="button"
                  onClick={onBook}
                  className="card-3d group relative w-[min(85vw,300px)] flex-shrink-0 snap-center scroll-ml-4 text-left first:scroll-ml-1 sm:w-[280px] sm:first:scroll-ml-0 md:w-[292px]"
                  style={{ transitionDelay: `${Math.min(i, 8) * 35}ms` }}
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                    <div className="mb-3 inline-flex items-center gap-2">
                      <div className="inline-flex rounded-xl bg-accent p-2.5 text-accent-foreground transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground/60 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                    </div>
                    <div className="mb-1 text-[15px] font-semibold leading-snug">{name}</div>
                    <div className="text-xs leading-relaxed text-muted-foreground">{desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-muted-foreground md:hidden">
            <span className="inline-block h-px w-6 bg-primary/40" aria-hidden />
            Scroll for more specialties
            <ChevronRight className="h-3.5 w-3.5 text-primary" aria-hidden />
          </p>
        </div>
      </div>
    </section>
  );
};
