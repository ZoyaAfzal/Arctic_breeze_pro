import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import about from "@/assets/about-interior.jpg";

const values = [
  { t: "Our Mission", d: "Deliver pristine comfort and uncompromising indoor air quality to every customer through honest, exacting craftsmanship." },
  { t: "Our Vision", d: "To be the most trusted climate-control partner across the Southwest, known for precision, integrity, and care." },
  { t: "Why Choose Us", d: "Upfront pricing, NATE-certified technicians, two-year labor warranties, and 24/7 emergency response." },
];

export function AboutSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-24 lg:py-32 grain">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <img src={about} alt="Modern interior with HVAC" loading="lazy" className="w-full h-[560px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card rounded-xl px-5 py-4 shadow-glass">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted</div>
            <div className="font-display text-3xl">SINCE 1999</div>
          </div>
          <div className="absolute -top-6 -right-6 glass-card rounded-xl px-5 py-4 shadow-glass flex items-center gap-3">
            <Award className="size-6 text-primary" />
            <div>
              <div className="font-display text-lg leading-none">LICENSED</div>
              <div className="text-xs text-muted-foreground">& Insured</div>
            </div>
          </div>
        </motion.div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Who We Are
          </span>
          <h2 className="mt-4 font-display uppercase text-4xl md:text-6xl leading-[0.95]">
            Your trusted <span className="text-gradient-ember">climate experts</span> since 1999
          </h2>
          <p className="mt-5 text-muted-foreground">
            From cozy bungalows to massive commercial floors, ArcticBreeze Pro designs, installs, and maintains HVAC systems
            engineered for decades of quiet, efficient performance. Every project starts with a free assessment and ends with
            air you can feel clean, cool, and exactly the temperature you want.
          </p>

          <div className="mt-8 space-y-3">
            {values.map((v, i) => (
              <div key={v.t} className="rounded-lg border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/60 transition-colors"
                >
                  <span className="font-display text-lg tracking-wider">{v.t.toUpperCase()}</span>
                  <ChevronDown className={`size-5 transition-transform ${open === i ? "rotate-180 text-primary" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground">{v.d}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
