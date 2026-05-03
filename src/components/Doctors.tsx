import { Calendar, Award, ChevronRight, Stethoscope, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import { doctors as allDoctors } from "@/data/doctors";
import { useState, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

const deptList = [...new Set(allDoctors.map((d) => d.department))].sort((a, b) => a.localeCompare(b));

export const Doctors = ({ onBook }: { onBook: () => void }) => {
  const ref = useReveal();
  const [filter, setFilter] = useState("All");
  const doctorStripRef = useRef<HTMLDivElement>(null);
  const visible = useMemo(() => (filter === "All" ? allDoctors : allDoctors.filter((d) => d.department === filter)), [filter]);

  const scrollDoctors = (direction: "left" | "right") => {
    const el = doctorStripRef.current;
    if (!el) return;
    const delta = Math.max(260, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: direction === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <section id="doctors" ref={ref} className="py-16">
      <div className="container">
        <div className="reveal mx-auto mb-6 max-w-2xl text-center md:mb-8">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Our Doctors</div>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Meet Our Expert Team</h2>
          <p className="text-sm text-muted-foreground">
            {allDoctors.length}+ qualified clinicians — browse by specialty, swipe sideways to explore the full roster.
          </p>
        </div>

        <div className="reveal mb-6">
          <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground md:text-left">
            Filter by department
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:hidden" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent md:hidden" aria-hidden />
            <div className="specialties-scroll flex snap-x gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] scroll-smooth md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
              <button
                type="button"
                onClick={() => setFilter("All")}
                className={cn(
                  "shrink-0 snap-start rounded-full px-4 py-2 text-xs font-semibold transition-all",
                  filter === "All"
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-accent-foreground shadow-soft hover:border-primary/30",
                )}
              >
                All ({allDoctors.length})
              </button>
              {deptList.map((dept) => {
                const n = allDoctors.filter((d) => d.department === dept).length;
                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setFilter(dept)}
                    className={cn(
                      "max-w-[200px] shrink-0 snap-start truncate rounded-full px-3 py-2 text-xs font-semibold transition-all",
                      filter === dept
                        ? "bg-gradient-primary text-primary-foreground shadow-glow"
                        : "border border-border bg-card text-accent-foreground shadow-soft hover:border-primary/30",
                    )}
                    title={dept}
                  >
                    {dept}{" "}
                    <span className="tabular-nums opacity-80">({n})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="reveal mb-3 text-center text-xs text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{visible.length}</span>{" "}
          {visible.length === 1 ? "doctor" : "doctors"}
          {filter !== "All" ? ` · ${filter}` : ""}
        </p>

        <div className="reveal relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-12"
            aria-hidden
          />

          <div className="pointer-events-none absolute -top-11 right-0 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollDoctors("left")}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:border-primary/40"
              aria-label="Scroll doctors left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollDoctors("right")}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:border-primary/40"
              aria-label="Scroll doctors right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={doctorStripRef}
            className="specialties-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 pt-1 [-webkit-overflow-scrolling:touch] scroll-smooth px-1"
            role="region"
            aria-label="Doctors — scroll horizontally"
          >
            {visible.map((d) => (
              <article
                key={d.name}
                className="card-3d w-[min(88vw,300px)] shrink-0 snap-center scroll-ml-4 first:scroll-ml-1 sm:w-[278px] sm:first:scroll-ml-0 md:w-[296px]"
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-card p-5 shadow-soft transition-all duration-300 hover:border-primary/35 hover:shadow-md">
                  <div className="mb-4 flex gap-3">
                    <div className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-primary font-bold tracking-tight text-primary-foreground shadow-glow">
                      {d.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-semibold leading-snug text-foreground">{d.name}</h3>
                      <div className="mt-1 inline-flex items-center gap-1 rounded-lg bg-accent px-2 py-0.5 text-[11px] font-semibold text-primary">
                        <Stethoscope className="h-3 w-3 shrink-0 opacity-90" aria-hidden />
                        <span className="truncate">{d.department}</span>
                      </div>
                    </div>
                  </div>

                  <dl className="mb-4 space-y-2.5 border-t border-border pt-4 text-xs">
                    <div>
                      <dt className="mb-0.5 font-semibold text-muted-foreground">Qualifications</dt>
                      <dd className="flex items-start gap-1.5 leading-relaxed text-foreground">
                        <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                        <span>
                          {d.graduation}
                          {d.postGraduation ? ` · ${d.postGraduation}` : ""}
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-0.5 font-semibold text-muted-foreground">Specialization</dt>
                      <dd className="flex items-start gap-1.5 leading-relaxed text-foreground">
                        <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                        {d.specialization}
                      </dd>
                    </div>
                  </dl>

                  <Button size="sm" onClick={onBook} className="mt-auto w-full bg-gradient-primary font-semibold hover:opacity-95">
                    Book appointment
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {visible.length > 1 ? (
            <p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] font-medium text-muted-foreground md:hidden">
              <span className="inline-block h-px w-6 bg-primary/40" aria-hidden />
              Swipe for more doctors
              <ChevronRight className="h-3.5 w-3.5 text-primary" aria-hidden />
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};
