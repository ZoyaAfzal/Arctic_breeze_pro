import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const reviews = [
  { n: "Maria González", l: "Las Vegas, NV", q: "Crew arrived 30 minutes early, swapped out our entire AC in a single afternoon, and the new system is silent. Best contractor experience we've ever had." },
  { n: "James Whitaker", l: "Henderson, NV", q: "They diagnosed a furnace issue three other companies missed. Honest, fast, and no upsell pressure. ArcticBreeze has my business for life." },
  { n: "Priya Shah", l: "Reno, NV", q: "Commercial install across two floors completed on schedule and under budget. The follow-up maintenance plan is worth every penny." },
  { n: "Daniel Okafor", l: "Boulder City, NV", q: "Indoor air quality test, HEPA install, and duct sealing done in one day. My allergies are gone. Cannot recommend strongly enough." },
  { n: "Hannah Vega", l: "Sparks, NV", q: "Showed up at midnight for an emergency. Calm, friendly, and fixed our heat in 45 minutes. Five stars isn't enough." },
  { n: "Marcus Chen", l: "Las Vegas, NV", q: "Quotes from competitors were all over the map. ArcticBreeze gave a clean flat rate and stuck to it. Total professionals." },
];

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const r = reviews[idx];

  return (
    <section className="relative py-24 lg:py-32 grain" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Testimonials" title="WHAT OUR CUSTOMERS SAY" align="center" />

        <div className="relative mt-14 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl glass-card p-8 md:p-12 text-center relative shadow-glass"
            >
              <Quote className="absolute left-6 top-6 size-10 text-primary/30" />
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">"{r.q}"</p>
              <div className="mt-8">
                <div className="font-display text-xl tracking-wider">{r.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.l}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
