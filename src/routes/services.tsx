import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection } from "@/components/site/sections/ServicesSection";
import { ProcessSection } from "@/components/site/sections/ProcessSection";
import { CTASection } from "@/components/site/sections/CTASection";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({ meta: [{ title: "HVAC Services — AC, Heating, Air Quality | ArcticBreeze Pro" }, { name: "description", content: "Full-spectrum HVAC services: installation, repair, maintenance, duct cleaning, IAQ, and commercial systems." }] }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Services" title="EXPERT HVAC SERVICES" subtitle="Cooling, heating, air quality, and commercial systems — all under one roof." crumbs={[{ to: "/", label: "Home" }, { label: "Services" }]} />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </SiteShell>
  );
}
