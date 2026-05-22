import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { BlogSection } from "@/components/site/sections/BlogSection";
import { CTASection } from "@/components/site/sections/CTASection";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({ meta: [{ title: "Blog — HVAC Tips & Insights | ArcticBreeze Pro" }, { name: "description", content: "Practical HVAC advice, maintenance tips, and industry insights from our certified technicians." }] }),
});

function BlogPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Insights" title="LATEST HVAC INSIGHTS" subtitle="Field-tested tips, deep dives, and seasonal guides from our certified team." crumbs={[{ to: "/", label: "Home" }, { label: "Blog" }]} />
      <BlogSection />
      <CTASection />
    </SiteShell>
  );
}
