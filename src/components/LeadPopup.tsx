import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { HeartPulse, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/api";

export const LeadPopup = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [form, setForm] = useState({ name: "", phone: "", concern: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Please fill name and phone", variant: "destructive" });
      return;
    }
    setLoading(true);
    const res = await submitLead({
      name: form.name,
      email: null,
      phone: form.phone,
      message: form.concern || null,
      campaign: "pawan-appointment-popup",
    });
    setLoading(false);
    if (res.success) {
      toast({ title: "Request received ✓", description: "Our team will call you back shortly." });
      setForm({ name: "", phone: "", concern: "" });
      onOpenChange(false);
    } else {
      toast({ title: "Something went wrong", description: res.error, variant: "destructive" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0">
        <div className="bg-gradient-primary p-5 text-primary-foreground">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-9 w-9 rounded-xl bg-white/20 flex items-center justify-center">
              <HeartPulse className="h-5 w-5" />
            </div>
            <DialogTitle className="text-lg font-bold">Need medical assistance?</DialogTitle>
          </div>
          <DialogDescription className="text-primary-foreground/90 text-sm">
            Share your details and our team will reach out within minutes.
          </DialogDescription>
        </div>
        <form onSubmit={submit} className="p-5 space-y-3 bg-card">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Full Name *</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Phone Number *</label>
            <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" type="tel" className="mt-1" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Concern</label>
            <Textarea value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} placeholder="Briefly describe your concern" rows={3} className="mt-1" />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-primary hover:opacity-95 font-semibold">
            {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</> : "Request Call Back"}
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">Your details are private & secure.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const useLeadAutoOpen = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(t);
  }, []);
  return { open, setOpen };
};
