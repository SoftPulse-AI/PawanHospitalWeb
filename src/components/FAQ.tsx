import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  { q: "Where is Pawan Hospital located?", a: "Pawan Hospital is located in Samaypur, Ballabhgarh, Haryana." },
  { q: "What services are available?", a: "General medicine, orthopedics, gynecology, pediatrics, diagnostics, physiotherapy, and emergency care." },
  { q: "Is emergency service available?", a: "Yes, 24×7 emergency services are available with experienced staff and modern equipment." },
  { q: "How can I book an appointment?", a: "You can book an appointment by calling us, sending a WhatsApp message, or using the booking form on this site." },
  { q: "Do you accept walk-in patients?", a: "Yes, we welcome walk-in patients during OPD hours and emergency cases anytime." },
];

export const FAQ = () => {
  const ref = useReveal();
  return (
    <section id="faq" ref={ref} className="py-16">
      <div className="container max-w-3xl">
        <div className="reveal text-center mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="bg-gradient-card border border-border rounded-2xl px-5 shadow-soft">
                <AccordionTrigger className="text-left font-semibold text-[15px] hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
