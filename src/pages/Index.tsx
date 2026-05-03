import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { LiveCare } from "@/components/LiveCare";
import { Director } from "@/components/Director";
import { Departments } from "@/components/Departments";
import { Doctors } from "@/components/Doctors";
import { Facilities } from "@/components/Facilities";
import { Journey } from "@/components/Journey";
import { HealingJourneyCTA } from "@/components/HealingJourneyCTA";
import { Testimonials } from "@/components/Testimonials";
import { Emergency } from "@/components/Emergency";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadPopup, useLeadAutoOpen } from "@/components/LeadPopup";

const Index = () => {
  const auto = useLeadAutoOpen();
  const [manualOpen, setManualOpen] = useState(false);
  const open = auto.open || manualOpen;
  const setOpen = (v: boolean) => {
    auto.setOpen(v);
    setManualOpen(v);
  };
  const triggerBook = () => setManualOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onBook={triggerBook} />
      <main>
        <Hero onBook={triggerBook} />
        <Trust />
        <LiveCare />
        <Director />
        <Departments onBook={triggerBook} />
        <Doctors onBook={triggerBook} />
        <Facilities />
        <Journey />
        <Emergency />
        <HealingJourneyCTA onBook={triggerBook} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <LeadPopup open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Index;
