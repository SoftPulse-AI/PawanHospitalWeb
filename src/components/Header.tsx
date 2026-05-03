import { Phone, MessageCircle, Menu, X, MapPin, Clock, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { PHONE_APPOINTMENT, PHONE_RECEPTION } from "@/data/doctors";
const fmt = (n: string) => `+91 ${n.slice(0,5)} ${n.slice(5)}`;
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#departments", label: "Departments" },
  { href: "#doctors", label: "Doctors" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" },
];

export const Header = ({ onBook }: { onBook: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className={`hidden md:block transition-all duration-300 bg-gradient-to-r from-primary-deep via-primary to-secondary text-primary-foreground ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}>
        <div className="container h-full flex items-center justify-between text-[11px] font-medium">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Samaypur, Ballabhgarh, Haryana</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> OPD: 9 AM – 9 PM</span>
            <span className="hidden lg:flex items-center gap-1.5"><Mail className="h-3 w-3" /> care@pawanhospital.in</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emergency" />
              </span>
              24×7 Emergency
            </span>
            <a href={`tel:+91${PHONE_RECEPTION}`} className="hover:underline">{fmt(PHONE_RECEPTION)}</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all duration-300 ${scrolled ? "glass shadow-md py-2 border-b border-border/40" : "bg-background/95 py-3"}`}>
        <div className="container flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-md opacity-50 group-hover:opacity-80 transition" />
              <img src={logo} alt="Pawan Hospital logo" className="relative h-11 w-11 object-contain" width={44} height={44} />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-base text-primary">Pawan Hospital</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase">Next Step In Care</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href={`https://wa.me/91${PHONE_APPOINTMENT}`} target="_blank" rel="noopener">
              <Button variant="outline" size="sm" className="gap-1.5 border-success/40 text-success hover:bg-success hover:text-white">
                <MessageCircle className="h-4 w-4" /> Chat
              </Button>
            </a>
            <a href={`tel:+91${PHONE_APPOINTMENT}`}>
              <Button variant="outline" size="sm" className="gap-1.5 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="h-4 w-4" /> Call
              </Button>
            </a>
            <Button size="sm" onClick={onBook} className="bg-gradient-primary hover:opacity-95 shadow-glow font-semibold">
              Book Appointment
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden glass border-t border-border mt-2 py-4">
            <div className="container flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium py-1">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href={`tel:+91${PHONE_APPOINTMENT}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-1.5"><Phone className="h-4 w-4" /> Call</Button>
                </a>
                <Button size="sm" className="flex-1 bg-gradient-primary" onClick={() => { setOpen(false); onBook(); }}>Book</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
