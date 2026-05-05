import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, Award, Stethoscope, HeartPulse, Activity, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPoster from "@/assets/hero-doctor.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { PHONE_APPOINTMENT } from "@/data/doctors";

export const Hero = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/85 via-primary/70 to-secondary/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(200_95%_55%/0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(220_85%_25%/0.7),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      </div>

      {/* Floating blobs */}
      <div className="absolute top-24 -left-24 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-emergency/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />

      {/* Floating 3D icons */}
      <div className="hidden md:block absolute top-32 right-[42%] animate-float">
        <div className="p-3 rounded-2xl glass border border-white/30 shadow-glow"><Stethoscope className="h-5 w-5 text-white" /></div>
      </div>
      <div className="hidden md:block absolute bottom-40 left-[38%] animate-float" style={{ animationDelay: "2s" }}>
        <div className="p-3 rounded-2xl glass border border-white/30 shadow-glow"><HeartPulse className="h-5 w-5 text-emergency animate-heartbeat" /></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-primary-foreground">
          {/* Live ECG badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency" />
            </span>
            <svg viewBox="0 0 80 16" className="h-4 w-20 text-emergency">
              <path d="M0 8 L15 8 L20 2 L25 14 L30 8 L45 8 L50 4 L55 12 L60 8 L80 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ecg-line" />
            </svg>
            24×7 Emergency • Multi-Specialty • Live Care
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-5">
            Where Every Heartbeat <br />
            Gets the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">Care It Deserves</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent rounded-full" />
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Pawan Hospital — Ballabhgarh's trusted multi-specialty care home. Expert doctors, modern diagnostics & compassionate 24×7 emergency response.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Button size="lg" onClick={onBook} className="gap-2 bg-white text-primary hover:bg-white/95 shadow-glow font-semibold text-base h-12">
              <Calendar className="h-4 w-4" /> Book Appointment
            </Button>
            <a href={`tel:+91${PHONE_APPOINTMENT}`}>
              <Button size="lg" className="gap-2 bg-gradient-emergency hover:opacity-95 text-white font-semibold shadow-emergency h-12 animate-pulse-soft">
                <Phone className="h-4 w-4" /> Emergency Call
              </Button>
            </a>
            <a href={`https://wa.me/91${PHONE_APPOINTMENT}`} target="_blank" rel="noopener">
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/40 text-white hover:bg-white/20 h-12">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: ShieldCheck, label: "Trusted Care", sub: "50K+ Patients" },
              { icon: Clock, label: "24×7 Open", sub: "Always Available" },
              { icon: Award, label: "Expert Team", sub: "Senior Doctors" },
              { icon: Activity, label: "Modern Tech", sub: "Advanced Equip." },
            ].map((i) => (
              <div key={i.label} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition">
                <div className="p-1.5 rounded-lg bg-white/15"><i.icon className="h-4 w-4 text-primary-glow" /></div>
                <div>
                  <div className="text-xs font-semibold leading-tight">{i.label}</div>
                  <div className="text-[10px] text-white/70 leading-tight">{i.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live monitor card */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary blur-3xl opacity-50 rounded-[2rem]" />
            <div className="relative card-3d glass rounded-3xl p-6 border border-white/40 shadow-lg animate-float">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Live Hospital Status
                  </div>
                  <div className="text-2xl font-bold text-foreground">Care in Minutes</div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-[10px] font-semibold">
                  <Star className="h-3 w-3 fill-current" /> 4.8
                </div>
              </div>

              {/* Mini ECG monitor */}
              <div className="mb-3 p-3 rounded-xl bg-gradient-to-br from-primary-deep to-primary overflow-hidden relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Heart Rate Monitor</span>
                  <span className="text-xs font-mono text-emergency font-bold flex items-center gap-1">
                    <HeartPulse className="h-3 w-3 animate-heartbeat" /> 72 BPM
                  </span>
                </div>
                <svg viewBox="0 0 200 40" className="w-full h-10 text-emergency">
                  <path d="M0 20 L40 20 L48 8 L56 32 L64 20 L100 20 L108 12 L116 28 L124 20 L160 20 L168 6 L176 34 L184 20 L200 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="ecg-line-2" />
                </svg>
              </div>

              <div className="space-y-2.5">
                {[
                  { t: "General OPD", s: "9 AM – 9 PM", c: "bg-primary" },
                  { t: "Emergency", s: "24×7 Available", c: "bg-emergency" },
                  { t: "Diagnostics", s: "Same Day Reports", c: "bg-secondary" },
                ].map((r) => (
                  <div key={r.t} className="flex items-center justify-between p-3 rounded-xl bg-gradient-soft border border-border hover:border-primary/40 transition">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-1 rounded-full ${r.c}`} />
                      <div>
                        <div className="font-semibold text-sm text-foreground">{r.t}</div>
                        <div className="text-xs text-muted-foreground">{r.s}</div>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  </div>
                ))}
              </div>
              <Button onClick={onBook} className="w-full mt-5 bg-gradient-primary hover:opacity-95 shadow-glow h-11 font-semibold">
                <Calendar className="h-4 w-4 mr-2" /> Book Now — Free
              </Button>
              <div className="mt-3 text-center text-[11px] text-muted-foreground">
                ✓ No waiting · ✓ Instant confirmation · ✓ Trusted by 50000+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
