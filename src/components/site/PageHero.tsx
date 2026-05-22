import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle, crumbs }: { eyebrow?: string; title: string; subtitle?: string; crumbs: { to?: string; label: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero border-b border-border">
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display uppercase text-5xl md:text-7xl leading-[0.9]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
        <nav className="mt-6 flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronRight className="size-3" />}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
