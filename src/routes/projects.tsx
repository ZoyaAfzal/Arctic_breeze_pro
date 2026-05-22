import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { ProjectsSection } from "@/components/site/sections/ProjectsSection";
import { CTASection } from "@/components/site/sections/CTASection";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({ meta: [{ title: "Projects — 500+ HVAC Installs | ArcticBreeze Pro" }, { name: "description", content: "Browse 500+ residential, commercial, and industrial HVAC projects across Nevada." }] }),
});

function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Portfolio" title="OUR WORK SPEAKS FOR ITSELF" subtitle="500+ projects, 20+ years, three states served." crumbs={[{ to: "/", label: "Home" }, { label: "Projects" }]} />
      <ProjectsSection />
      <CTASection />
    </SiteShell>
  );
}
