import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { HeroSection } from "@/components/site/sections/HeroSection";
import { TrustBarSection } from "@/components/site/sections/TrustBarSection";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { ServicesSection } from "@/components/site/sections/ServicesSection";
import { WhyChooseSection } from "@/components/site/sections/WhyChooseSection";
import { ProcessSection } from "@/components/site/sections/ProcessSection";
import { ProjectsSection } from "@/components/site/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/site/sections/TestimonialsSection";
import { CTASection } from "@/components/site/sections/CTASection";
import { BlogSection } from "@/components/site/sections/BlogSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ArcticBreeze Pro — Precision HVAC, Heating & Cooling Experts" },
      { name: "description", content: "Precision HVAC installation, repair, and maintenance for homes and businesses. 25+ years, NATE certified, 24/7 emergency service across Nevada." },
      { property: "og:title", content: "ArcticBreeze Pro — Climate Control. Perfected." },
      { property: "og:description", content: "Precision HVAC for residential and commercial spaces — installed right, running perfect." },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
    </SiteShell>
  );
}
