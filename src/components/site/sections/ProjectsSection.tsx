import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";
import commercial from "@/assets/project-commercial.jpg";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";

const projects = [
  { slug: "highland-park-estate", img: residential, t: "Highland Park Estate", c: "Residential", l: "Las Vegas, NV" },
  { slug: "summit-plaza-towers", img: commercial, t: "Summit Plaza Towers", c: "Commercial", l: "Henderson, NV" },
  { slug: "northgate-distribution", img: industrial, t: "Northgate Distribution", c: "Industrial", l: "Reno, NV" },
  { slug: "desert-oaks-villa", img: residential, t: "Desert Oaks Villa", c: "Residential", l: "Boulder City, NV" },
  { slug: "cascade-medical-center", img: commercial, t: "Cascade Medical Center", c: "Commercial", l: "Las Vegas, NV" },
  { slug: "vega-manufacturing", img: industrial, t: "Vega Manufacturing", c: "Industrial", l: "Sparks, NV" },
];

const tabs = ["All", "Residential", "Commercial", "Industrial"] as const;

export function ProjectsSection() {
  const [tab, setTab] = useState<typeof tabs[number]>("All");
  const filtered = tab === "All" ? projects : projects.filter((p) => p.c === tab);

  return (
    <section className="relative py-24 lg:py-32 bg-[oklch(0.11_0.005_240)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <SectionHeading eyebrow="Our Work" title="RECENT PROJECTS ON DISPLAY" />
          <div className="flex flex-wrap gap-1 p-1 rounded-full border border-border bg-card/60">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full"
              >
                {tab === t && (
                  <motion.span
                    layoutId="proj-pill"
                    className="absolute inset-0 bg-gradient-ember rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${tab === t ? "text-primary-foreground" : "text-muted-foreground"}`}>{t}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug + i}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card"
              >
                <Link to="/projects/$projectId" params={{ projectId: p.slug }} className="block">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-primary/90 text-primary-foreground text-xs uppercase tracking-widest px-3 py-1">{p.c}</span>
                  </div>
                  <div className="absolute left-5 right-5 bottom-5 translate-y-3 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-display text-2xl tracking-wider uppercase">{p.t}</h3>
                    <div className="text-sm text-muted-foreground">{p.l}</div>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View Project <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
            View All Projects <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
