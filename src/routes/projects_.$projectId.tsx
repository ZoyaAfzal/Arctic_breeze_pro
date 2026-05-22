import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/sections/CTASection";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin, Tag, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

import commercial from "@/assets/project-commercial.jpg";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";

const projectsData: Record<string, any> = {
  "highland-park-estate": {
    title: "Highland Park Estate",
    category: "Residential",
    location: "Las Vegas, NV",
    image: residential,
    date: "March 2026",
    description: "A comprehensive HVAC installation for a 12,000 sq. ft. luxury estate. We implemented a multi-zone VRV system with smart controls integration, ensuring silent operation and maximum efficiency across 14 distinct climate zones.",
    highlights: [
      "Multi-zone VRV System",
      "Smart Home Integration",
      "Silent Operation Technology",
      "High-Efficiency Filtration",
    ],
  },
  "summit-plaza-towers": {
    title: "Summit Plaza Towers",
    category: "Commercial",
    location: "Henderson, NV",
    image: commercial,
    date: "January 2026",
    description: "Complete rooftop unit replacement and ductwork optimization for a premier commercial office complex. The project involved a phased rollout to minimize disruption to tenants while improving overall air quality and reducing energy costs by 22%.",
    highlights: [
      "Rooftop Unit Replacement",
      "Ductwork Optimization",
      "BMS Integration",
      "Energy Efficiency Audit",
    ],
  },
  "northgate-distribution": {
    title: "Northgate Distribution",
    category: "Industrial",
    location: "Reno, NV",
    image: industrial,
    date: "November 2025",
    description: "Specialized climate control for a large-scale pharmaceutical distribution center. We installed high-capacity industrial units with precise temperature and humidity monitoring to meet strict storage regulations.",
    highlights: [
      "Precision Temperature Control",
      "Humidity Monitoring Systems",
      "Redundant Backup Units",
      "24/7 Monitoring Dashboard",
    ],
  },
  "desert-oaks-villa": {
    title: "Desert Oaks Villa",
    category: "Residential",
    location: "Boulder City, NV",
    image: residential,
    date: "October 2025",
    description: "Retrofitting an older Mediterranean-style villa with modern, efficient HVAC solutions. The challenge was maintaining the aesthetic integrity of the home while upgrading to current efficiency standards.",
    highlights: [
      "Architectural Integration",
      "Custom Grille Work",
      "Modern Retrofit",
      "Zoned Cooling",
    ],
  },
  "cascade-medical-center": {
    title: "Cascade Medical Center",
    category: "Commercial",
    location: "Las Vegas, NV",
    image: commercial,
    date: "September 2025",
    description: "Specialized HVAC implementation for a medical facility requiring strict pressure differentials and advanced HEPA filtration. We designed a system that ensures sterile environments in surgical suites while providing comfort in patient areas.",
    highlights: [
      "HEPA Filtration Systems",
      "Pressure Differential Control",
      "Sterile Environment Design",
      "Medical-Grade Reliability",
    ],
  },
  "vega-manufacturing": {
    title: "Vega Manufacturing",
    category: "Industrial",
    location: "Sparks, NV",
    image: industrial,
    date: "August 2025",
    description: "Cooling solutions for a high-heat manufacturing floor. We implemented massive air handlers and custom ventilation paths to ensure technician safety and equipment longevity in a demanding environment.",
    highlights: [
      "High-Heat Load Cooling",
      "Industrial Air Handlers",
      "Custom Ventilation Pathing",
      "Worker Safety Compliance",
    ],
  },
};

export const Route = createFileRoute("/projects_/$projectId")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = projectsData[params.projectId];
    if (!project) throw notFound();
    return { project };
  },
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <SiteShell>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        subtitle={project.location}
        crumbs={[
          { to: "/", label: "Home" },
          { to: "/projects", label: "Projects" },
          { label: project.title },
        ]}
      />

      <section className="relative py-24 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="size-4" /> Back to All Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-6 mb-8 border-b border-border pb-8">
                <div className="flex items-center gap-3">
                  <div className="size-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
                    <Calendar className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Completion</div>
                    <div className="font-display text-lg">{project.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="font-display text-lg">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 grid place-items-center rounded-lg bg-primary/10 text-primary">
                    <Tag className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Category</div>
                    <div className="font-display text-lg">{project.category}</div>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-3xl uppercase tracking-wider mb-6">PROJECT OVERVIEW</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                {project.description}
              </p>

              <h3 className="font-display text-2xl uppercase tracking-wider mb-6">KEY HIGHLIGHTS</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((h: string) => (
                  <li key={h} className="flex items-center gap-3 text-foreground/90">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
