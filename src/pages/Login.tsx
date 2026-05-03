import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader2, Lock, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const LoginPage = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.identifier || !form.password) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // API integration ready — replace with actual login endpoint
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Login functionality will be connected to API", description: "Provide API endpoint to complete integration." });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Pawan Hospital" className="h-16 w-16 mx-auto mb-3 object-contain" />
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to Pawan Hospital Portal</p>
        </div>
        <form onSubmit={submit} className="bg-card rounded-2xl border border-border shadow-elegant p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5"><Mail className="h-3 w-3" /> Email or Mobile *</label>
            <Input value={form.identifier} onChange={e => set("identifier", e.target.value)} placeholder="Email or mobile number" className="mt-1" />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5"><Lock className="h-3 w-3" /> Password *</label>
            <Input value={form.password} onChange={e => set("password", e.target.value)} placeholder="Enter password" type="password" className="mt-1" />
          </div>
          <div className="flex justify-end">
            <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-primary hover:opacity-95 font-semibold h-11">
            {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Signing in...</> : "Sign In"}
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">Secure login · Your data is protected</p>
        </form>
      </div>
    </div>
  );
};
