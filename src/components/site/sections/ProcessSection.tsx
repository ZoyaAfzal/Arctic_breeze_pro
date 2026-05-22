import { SectionHeading } from "../SectionHeading";
import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Book Online or Call", d: "Reach us 24/7 - instant scheduling." },
  { n: "02", t: "Free In-Home Assessment", d: "Load calc, ductwork, and goals." },
  { n: "03", t: "Custom Quote & Approval", d: "Transparent flat-rate pricing." },
  { n: "04", t: "Expert Installation", d: "Clean, careful, on-schedule." },
  { n: "05", t: "Quality Inspection", d: "Performance & safety verification." },
  { n: "06", t: "Ongoing Support", d: "Maintenance plans & warranty." },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Process" title="HOW IT WORKS" subtitle="Six exacting steps from your first call to year-after-year comfort." align="center" />
      </div>

      <div className="relative mt-16 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-6 w-max"
        >
          {[...steps, ...steps].map((s, i) => (
            <div key={i} className="w-[300px] shrink-0 rounded-2xl glass-card p-6 relative">
              <div className="font-mono-stat text-xs text-primary tracking-widest">STEP / {s.n}</div>
              <h3 className="mt-3 font-display text-2xl tracking-wider uppercase">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <div className="mt-5 h-px w-full" style={{ backgroundImage: "linear-gradient(to right, oklch(0.66 0.21 38) 50%, transparent 0%)", backgroundSize: "10px 1px" }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
