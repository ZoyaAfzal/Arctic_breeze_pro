import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../SectionHeading";
import commercial from "@/assets/project-commercial.jpg";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";

const posts = [
  { slug: "ac-cost-savings", img: residential, c: "Maintenance", d: "May 12, 2026", t: "5 Signs Your AC Is Quietly Costing You Money", e: "Hidden inefficiencies cost the average homeowner $480 a year. Here's how to spot them early." },
  { slug: "vrf-vs-rooftop", img: commercial, c: "Commercial", d: "Apr 28, 2026", t: "VRF vs. Rooftop Units: Which Wins in 2026?", e: "We break down lifecycle cost, comfort, and serviceability for mid-rise buildings." },
  { slug: "hepa-filtration-impact", img: industrial, c: "Air Quality", d: "Apr 03, 2026", t: "The Real Difference HEPA Filtration Makes", e: "Real homes, real test data. We measured PM2.5 before and after, the results surprised us." },
];

export function BlogSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Insights" title="LATEST FROM OUR BLOG" />
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group self-start">
            View All Articles <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((p) => (
            <motion.article
              key={p.t}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all"
            >
              <Link to="/blog/$blogId" params={{ blogId: p.slug }} className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full bg-primary/15 text-primary px-2.5 py-1">{p.c}</span>
                    <span>{p.d}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-wider leading-tight group-hover:text-primary transition-colors">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.e}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
