import { motion } from "framer-motion";
import { Zap, BadgeCheck, DollarSign, Clock } from "lucide-react";
import { Counter } from "../Counter";

const features = [
  { icon: Zap, t: "Fast Response Time", d: "Under 2-hour average arrival across the metro area." },
  { icon: BadgeCheck, t: "Licensed & Certified", d: "NATE & EPA certified, two-year labor warranties." },
  { icon: DollarSign, t: "Upfront Pricing", d: "Flat-rate quotes - no surprise fees, ever." },
  { icon: Clock, t: "24/7 Emergency Service", d: "Day, night, weekends, holidays. We answer." },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.11_0.005_240)] py-24 lg:py-32 grain">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "linear-gradient(135deg, transparent 50%, oklch(0.7 0.15 210 / 0.12) 50%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Why Us
          </span>
          <h2 className="mt-4 font-display uppercase text-4xl md:text-6xl leading-[0.95]">
            Numbers that <span className="text-gradient-ember">speak louder</span> than ads
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {[
              { v: 15000, s: "+", l: "Service Calls" },
              { v: 99, s: "%", l: "On-Time Arrivals" },
              { v: 4.9, s: "/5", l: "Avg. Customer Rating" },
              { v: 24, s: "/7", l: "Emergency Coverage" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl text-foreground">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <motion.svg
            viewBox="0 0 400 4"
            className="mt-10 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.line
              x1="0" y1="2" x2="400" y2="2"
              stroke="oklch(0.7 0.15 210)" strokeWidth="2" strokeDasharray="6 6"
              variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.6 } } }}
            />
          </motion.svg>
        </div>

        <div className="space-y-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex gap-5 rounded-xl glass-card p-5 hover:border-primary/50 transition-colors"
              >
                <div className="size-12 shrink-0 rounded-lg bg-gradient-ember grid place-items-center shadow-ember">
                  <Icon className="size-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wider uppercase">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
