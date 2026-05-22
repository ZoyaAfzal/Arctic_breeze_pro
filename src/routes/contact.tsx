import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, Send } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact ArcticBreeze Pro — Free HVAC Quote" }, { name: "description", content: "Get a free in-home HVAC assessment. Available 24/7 across Nevada." }] }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="LET'S TALK ABOUT YOUR PROJECT" subtitle="Free assessments, transparent pricing, fast scheduling. We answer 24/7." crumbs={[{ to: "/", label: "Home" }, { label: "Contact" }]} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div className="rounded-2xl glass-card p-8">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                <CheckCircle2 className="mx-auto size-16 text-primary" />
                <h3 className="mt-5 font-display text-3xl uppercase">MESSAGE SENT</h3>
                <p className="mt-3 text-muted-foreground">A technician will contact you within an hour.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <h3 className="font-display text-3xl uppercase tracking-wider">Request a Quote</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" />
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Service Type</label>
                    <select className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary">
                      <option>AC Installation</option><option>AC Repair</option><option>Heating</option>
                      <option>Duct Cleaning</option><option>Air Quality</option><option>Commercial</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Message</label>
                  <textarea rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
                <button className="inline-flex items-center gap-2 rounded-md bg-gradient-ember px-6 py-3 text-sm font-semibold text-primary-foreground shadow-ember">
                  Send Message <Send className="size-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {[
              { I: Mail, l: "Email", v: "hello@arcticbreezepro.com", h: "mailto:hello@arcticbreezepro.com" },
            ].map((c) => {
              const Icon = c.I;
              const Tag = c.h ? "a" : "div";
              return (
                <Tag key={c.l} href={c.h} className="block rounded-xl glass-card p-5 hover:border-primary/60 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-11 grid place-items-center rounded-lg bg-gradient-ember shadow-ember">
                      <Icon className="size-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                      <div className="font-display text-xl tracking-wider">{c.v}</div>
                    </div>
                  </div>
                </Tag>
              );
            })}
            <div className="rounded-xl glass-card p-5">
              <div className="aspect-video rounded-md bg-[oklch(0.2_0.005_240)] grid place-items-center text-muted-foreground text-sm">Map placeholder</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      <input name={name} type={type} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
