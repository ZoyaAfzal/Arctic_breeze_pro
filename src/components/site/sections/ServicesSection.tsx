import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Thermometer, Snowflake, Flame, Wind, Home, Building2, ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";

const services = [
  { icon: Thermometer, t: "AC Installation & Replacement", d: "High-efficiency units sized perfectly for your space.", sub: ["Load calculations", "Smart thermostats", "10-year warranty", "Same-week install"] },
  { icon: Snowflake, t: "AC Repair & Maintenance", d: "24/7 emergency repairs and seasonal tune-ups.", sub: ["Diagnostic visit", "Refrigerant top-ups", "Coil cleaning", "Filter program"] },
  { icon: Flame, t: "Heating Systems", d: "Furnaces, heat pumps, and hybrid systems.", sub: ["Furnace installs", "Heat pump conversions", "Boiler service", "Carbon-monoxide testing"] },
  { icon: Wind, t: "Duct Cleaning & Sealing", d: "Restore airflow and slash energy bills.", sub: ["Full duct sweep", "Aeroseal sealing", "Mold remediation", "Pre/post imaging"] },
  { icon: Home, t: "Indoor Air Quality", d: "UV, HEPA, humidity, and filtration done right.", sub: ["Whole-home filtration", "UV sanitization", "Humidifiers", "Air testing"] },
  { icon: Building2, t: "Commercial HVAC", d: "Rooftop units, VRF, and chillers serviced.", sub: ["Preventive contracts", "Emergency response", "Energy audits", "Building automation"] },
];

export function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading eyebrow="What We Do" title="FULL-SPECTRUM HVAC SOLUTIONS" />
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group self-start">
            View All Services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = expanded === i;
            return (
              <motion.div
                key={s.t}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                whileHover={{ y: -6 }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className="relative cursor-pointer group rounded-2xl glass-card p-6 transition-all hover:border-primary/60 hover:shadow-ember"
              >
                <div className="size-12 rounded-xl bg-gradient-ember grid place-items-center shadow-ember mb-5 transition-transform group-hover:rotate-6">
                  <Icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-wider uppercase">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2 text-sm">
                        {s.sub.map((x) => (
                          <li key={x} className="flex items-center gap-2 text-foreground/90">
                            <Check className="size-4 text-primary" /> {x}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {isOpen ? "Hide details" : "Learn More"} <ArrowRight className="size-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
