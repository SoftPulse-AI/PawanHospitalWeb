import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { PHONE_APPOINTMENT, PHONE_MEDICAL, PHONE_RECEPTION } from "@/data/doctors";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/api";

const fmt = (n: string) => `+91 ${n.slice(0,5)} ${n.slice(5)}`;

export const Contact = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Name and phone are required", variant: "destructive" });
      return;
    }
    setLoading(true);
    const res = await submitLead({
      name: form.name,
      email: null,
      phone: form.phone,
      message: form.message || null,
      campaign: "pawan-contact-form",
    });
    setLoading(false);
    if (res.success) {
      toast({ title: "Message Sent ✓", description: "We will get back to you shortly." });
      setForm({ name: "", phone: "", message: "" });
    } else {
      toast({ title: "Failed to send", description: res.error, variant: "destructive" });
    }
  };

  return (
    <section id="contact" ref={ref} className="py-16 bg-gradient-soft">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold">Visit Pawan Hospital</h2>
        </div>
        <div className="reveal grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: MapPin, title: "Address", val: "Rajeev Colony ,Near CIA Office,Sec-56 FBD, Faridabad, India, 121004" },
              { icon: Phone, title: "Appointment", val: fmt(PHONE_APPOINTMENT), href: `tel:+91${PHONE_APPOINTMENT}` },
              { icon: Phone, title: "Medical Assistance", val: fmt(PHONE_MEDICAL), href: `tel:+91${PHONE_MEDICAL}` },
              { icon: Phone, title: "Reception & Query", val: fmt(PHONE_RECEPTION), href: `tel:+91${PHONE_RECEPTION}` },
              { icon: Mail, title: "Email", val: "pawanhospital.social@gmail.com", href: "mailto:pawanhospital.social@gmail.com" },
              { icon: Clock, title: "OPD Hours", val: "Mon – Sat • 9 AM – 9 PM" },
            ].map((c) => (
              <a key={c.title} href={c.href || "#"} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border shadow-soft hover:border-primary/40 transition-all">
                <div className="p-2.5 rounded-xl bg-gradient-primary shadow-glow shrink-0">
                  <c.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{c.title}</div>
                  <div className="text-sm font-medium mt-0.5">{c.val}</div>
                </div>
              </a>
            ))}

            {/* Quick contact form */}
            <form onSubmit={submit} className="p-4 rounded-2xl bg-card border border-border shadow-soft space-y-3">
              <div className="text-sm font-semibold text-foreground">Quick Enquiry</div>
              <Input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your name *" />
              <Input value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="Phone number *" type="tel" />
              <Textarea value={form.message} onChange={e => set("message", e.target.value)} placeholder="Message" rows={2} />
              <Button type="submit" disabled={loading} className="w-full bg-gradient-primary hover:opacity-95 font-semibold">
                {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</> : "Send Enquiry"}
              </Button>
            </form>
          </div>
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-elegant min-h-[360px]">
            <iframe
              title="Pawan Hospital Location"
              src="https://www.google.com/maps?q=Pawan+Hospital+Faridabad&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
