import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { WhyChooseSection } from "@/components/site/sections/WhyChooseSection";
import { CTASection } from "@/components/site/sections/CTASection";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About ArcticBreeze Pro — Climate Experts Since 1999" }, { name: "description", content: "Meet the people, mission, and milestones behind ArcticBreeze Pro — 25+ years of precision HVAC craftsmanship." }] }),
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About" title="ABOUT ARCTICBREEZE PRO" subtitle="Built by technicians, run by craftspeople. We've kept Nevada comfortable since 1999." crumbs={[{ to: "/", label: "Home" }, { label: "About" }]} />
      <AboutSection />
      <WhyChooseSection />
      <CTASection />
    </SiteShell>
  );
}
