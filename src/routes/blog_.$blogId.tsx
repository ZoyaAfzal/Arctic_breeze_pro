import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/sections/CTASection";
import { motion } from "framer-motion";
import { Calendar, Tag, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

import commercial from "@/assets/project-commercial.jpg";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";

const blogPostsData: Record<string, any> = {
  "ac-cost-savings": {
    title: "5 Signs Your AC Is Quietly Costing You Money",
    category: "Maintenance",
    author: "James Miller",
    date: "May 12, 2026",
    image: residential,
    content: `
      <p>Modern air conditioning systems are designed for efficiency, but even the best units can lose their edge over time. Often, the signs of a failing or inefficient system aren't loud bangs or complete breakdowns because they're quiet drains on your bank account.</p>
      
      <h3>1. The "Short Cycle" Shuffle</h3>
      <p>If your AC turns on and off every few minutes, it's "short cycling." This puts immense strain on the compressor and uses significantly more energy than a standard cooling cycle. This is often caused by an oversized unit or a failing thermostat.</p>

      <h3>2. Mysterious Humidity Peaks</h3>
      <p>An AC's secondary job is dehumidification. If your home feels "sticky" even when it's cool, your system isn't running long enough or efficiently enough to pull moisture from the air, forcing you to lower the temperature even further to feel comfortable.</p>

      <h3>3. The Dust Bunny Invasion</h3>
      <p>Excessive dust near your vents usually means there's a breach in your ductwork. You're not just cooling your home; you're cooling the crawlspace or attic, and the system is working 30% harder to compensate for the lost air.</p>

      <h3>4. Gradual Bill Creep</h3>
      <p>Compare your current energy bill to the same month last year. If your usage has spiked but your habits haven't changed, your system's SEER rating is effectively dropping due to internal wear and tear.</p>

      <h3>5. Unusual Smells</h3>
      <p>A "musty" smell indicates mold or mildew in the evaporator coils, which restricts airflow and forces the blower motor to work overtime.</p>
    `,
  },
  "vrf-vs-rooftop": {
    title: "VRF vs. Rooftop Units: Which Wins in 2026?",
    category: "Commercial",
    author: "Sarah Chen",
    date: "Apr 28, 2026",
    image: commercial,
    content: `
      <p>Choosing the right commercial HVAC system is a multi-decade decision. In 2026, the debate between Variable Refrigerant Flow (VRF) and traditional Rooftop Units (RTU) has reached a new level of nuance.</p>
      
      <h3>The Efficiency King: VRF</h3>
      <p>VRF systems excel in multi-tenant or multi-use buildings where simultaneous heating and cooling might be required in different zones. By moving heat from one part of the building to another, they achieve unprecedented efficiency ratings.</p>

      <h3>The Durability Champion: RTU</h3>
      <p>For large, open-concept spaces like warehouses or big-box retail, traditional RTUs remain the gold standard. They are easier to service, have lower upfront costs, and the technology is universally understood by technicians.</p>

      <h3>The Lifecycle Cost Analysis</h3>
      <p>While VRF has a higher initial capital expenditure, the operational savings usually provide a ROI within 5-7 years. However, if your building's footprint is simple, the complexity of a VRF might not be worth the maintenance premium.</p>
    `,
  },
  "hepa-filtration-impact": {
    title: "The Real Difference HEPA Filtration Makes",
    category: "Air Quality",
    author: "Dr. Robert Aris",
    date: "Apr 03, 2026",
    image: industrial,
    content: `
      <p>We spent three months measuring air quality in homes across the desert Southwest. Our goal was simple: determine if upgrading to HEPA-grade filtration actually changes the health profile of a home.</p>
      
      <h3>The PM2.5 Test</h3>
      <p>Fine particulate matter (PM2.5) is the primary driver of indoor allergies and respiratory stress. In our tests, standard MERV 8 filters reduced PM2.5 by roughly 40%. True HEPA filtration, however, maintained a 99.7% reduction even during dust storm season.</p>

      <h3>Beyond Just Dust</h3>
      <p>HEPA filters aren't just for dust; they are essential for capturing volatile organic compounds (VOCs) and airborne pathogens. In homes with HEPA systems, we recorded a 60% decrease in reported allergy symptoms among residents.</p>

      <h3>System Requirements</h3>
      <p>You can't just slap a HEPA filter into any furnace. The high static pressure requires a variable-speed blower motor to prevent system burnout. We discuss the necessary hardware upgrades in this deep dive.</p>
    `,
  },
};

export const Route = createFileRoute("/blog_/$blogId")({
  component: BlogPostDetailPage,
  loader: ({ params }) => {
    const post = blogPostsData[params.blogId];
    if (!post) throw notFound();
    return { post };
  },
});

function BlogPostDetailPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title={post.title}
        subtitle={`Written by ${post.author}`}
        crumbs={[
          { to: "/", label: "Home" },
          { to: "/blog", label: "Blog" },
          { label: "Article" },
        ]}
      />

      <article className="relative py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="size-4" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="size-4 text-primary" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="size-4 text-primary" />
                {post.category}
              </div>
            </div>

            <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-border">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div 
              className="prose prose-invert prose-primary max-w-none 
              prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wider
              prose-h3:text-2xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
              <div className="flex gap-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Share:</span>
                <div className="flex gap-3">
                  <Share2 className="size-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              <Link to="/contact" className="text-primary font-semibold hover:underline">
                Have questions? Contact us &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <CTASection />
    </SiteShell>
  );
}
