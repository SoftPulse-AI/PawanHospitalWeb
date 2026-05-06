import { useCallback, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "Rajesh K.",
    text: "Very supportive staff and experienced doctors. The entire treatment process felt smooth and well explained.",
    role: "Patient",
    location: "Faridabad",
  },
  {
    name: "Priya S.",
    text: "Quick diagnosis and clear guidance at every step. I appreciated the professional yet warm approach.",
    role: "Patient",
    location: "Faridabad",
  },
  {
    name: "Amit V.",
    text: "Clean facility, attentive nursing, and doctors who actually listen. Overall an excellent experience.",
    role: "Patient",
    location: "Palwal",
  },
  {
    name: "Sunita D.",
    text: "Caring nurses and a fast emergency response when we needed it most. Truly grateful to the whole team.",
    role: "Patient",
    location: "Faridabad",
  },
];

export const Testimonials = () => {
  const ref = useReveal();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, 5500);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section ref={ref} className="py-16 bg-gradient-soft" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Testimonials</div>
          <h2 id="testimonials-heading" className="text-3xl font-bold md:text-4xl">
            Stories from people we&apos;ve cared for
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Real feedback from patients — swipe or use dots to explore.</p>
        </div>

        <div className="reveal relative mx-auto max-w-5xl px-1 md:px-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((t) => (
                <CarouselItem key={t.name} className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/2">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow duration-300 hover:border-primary/25 hover:shadow-md">
                    <Quote className="absolute right-4 top-4 h-10 w-10 text-primary/10" aria-hidden />
                    <div className="mb-4 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-emergency text-emergency" aria-hidden />
                      ))}
                    </div>
                    <p className="relative z-[1] flex-1 text-sm font-medium leading-relaxed text-foreground">&ldquo;{t.text}&rdquo;</p>
                    <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                        {t.name[0]}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} · {t.location}
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Choose testimonial">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={current === idx}
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => api?.scrollTo(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === idx ? "w-8 bg-primary shadow-glow" : "w-2 bg-primary/25 hover:bg-primary/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
