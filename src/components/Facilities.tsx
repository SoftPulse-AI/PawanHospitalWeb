import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import icu from "@/assets/icu.jpg";
import ot from "@/assets/ot.jpg";
import room from "@/assets/room.jpg";
import diag from "@/assets/diagnostics.jpg";
import { useReveal } from "@/hooks/useReveal";

const facilities = [
  { img: icu, title: "Intensive Care Unit", desc: "Advanced monitoring with 24×7 critical care specialists." },
  { img: ot, title: "Operation Theatre", desc: "Modular OT with sterile environment and modern equipment." },
  { img: room, title: "Patient Rooms", desc: "Comfortable, hygienic rooms designed for peaceful recovery." },
  { img: diag, title: "Diagnostics", desc: "In-house lab and imaging with rapid, accurate reporting." },
];

export const Facilities = () => {
  const [i, setI] = useState(0);
  const ref = useReveal();
  const next = () => setI((p) => (p + 1) % facilities.length);
  const prev = () => setI((p) => (p - 1 + facilities.length) % facilities.length);
  const f = facilities[i];

  return (
    <section id="facilities" ref={ref} className="py-16 bg-gradient-soft">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Facilities</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Modern Infrastructure for Better Care</h2>
        </div>

        <div className="reveal grid lg:grid-cols-5 gap-5 items-center">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-lg group" style={{ perspective: "1200px" }}>
            <img src={f.img} alt={f.title} className="w-full h-[340px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1200} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
              <div className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">{`0${i + 1} / 0${facilities.length}`}</div>
              <h3 className="text-2xl md:text-3xl font-bold">{f.title}</h3>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={prev} className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white transition-colors" aria-label="prev">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white transition-colors" aria-label="next">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-2">
            {facilities.map((x, idx) => (
              <button
                key={x.title}
                onClick={() => setI(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  idx === i ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow" : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <div className="font-semibold text-[15px] mb-0.5">{x.title}</div>
                <div className={`text-xs ${idx === i ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{x.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
