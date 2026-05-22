import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/sections/CTASection";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({ meta: [{ title: "Pricing — HVAC Maintenance Plans | ArcticBreeze Pro" }, { name: "description", content: "Transparent monthly and annual HVAC maintenance plans for every budget." }] }),
});

const tiers = [
  { n: "Basic", m: 19, y: 190, d: "Essential seasonal tune-ups.", f: ["1 annual tune-up", "Filter delivery", "10% repair discount", "Priority booking"] },
  { n: "Pro", m: 39, y: 390, d: "Year-round protection & priority.", f: ["2 seasonal tune-ups", "Free filters quarterly", "20% repair discount", "24/7 emergency priority", "Free diagnostics"], popular: true },
  { n: "Enterprise", m: 99, y: 990, d: "Multi-unit commercial coverage.", f: ["Quarterly inspections", "Full filter program", "30% parts discount", "Same-day emergency", "Dedicated account manager", "Building automation tuning"] },
];

function PricingPage() {
  const [annual, setAnnual] = useState(false);
  return (
    <SiteShell>
      <PageHero eyebrow="Pricing" title="AFFORDABLE PLANS, EVERY BUDGET" subtitle="No surprises. Cancel anytime. Plans pay for themselves on the first repair." crumbs={[{ to: "/", label: "Home" }, { label: "Pricing" }]} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex p-1 rounded-full border border-border bg-card">
              {(["Monthly", "Annual"] as const).map((l, i) => {
                const active = (annual ? 1 : 0) === i;
                return (
                  <button key={l} onClick={() => setAnnual(i === 1)} className="relative px-6 py-2 text-sm font-medium">
                    {active && <motion.span layoutId="price-toggle" className="absolute inset-0 rounded-full bg-gradient-ember" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                    <span className={`relative ${active ? "text-primary-foreground" : "text-muted-foreground"}`}>{l}{i === 1 && <span className="ml-1 text-[10px] opacity-80">SAVE 15%</span>}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <motion.div
                key={t.n}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-2xl p-8 border ${t.popular ? "border-primary shadow-ember bg-card" : "border-border glass-card"}`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-ember px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground shadow-ember">
                    <Star className="size-3 fill-current" /> Most Popular
                  </div>
                )}
                <h3 className="font-display text-3xl uppercase tracking-wider">{t.n}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-6xl text-foreground">${annual ? t.y : t.m}</span>
                  <span className="text-muted-foreground">/{annual ? "yr" : "mo"}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {t.f.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="size-4 mt-0.5 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 rounded-md text-sm font-semibold ${t.popular ? "bg-gradient-ember text-primary-foreground shadow-ember" : "border border-border hover:border-primary hover:text-primary"} transition-all`}>
                  Choose {t.n}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  );
}
