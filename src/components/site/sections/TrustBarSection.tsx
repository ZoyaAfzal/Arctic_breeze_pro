const items = ["NATE CERTIFIED", "EPA APPROVED", "ENERGY STAR", "BBB A+", "ANGI TOP PRO", "LICENSED & INSURED", "TRANE COMFORT", "CARRIER PARTNER"];

export function TrustBarSection() {
  const row = [...items, ...items];
  return (
    <section className="relative py-10 border-y border-border bg-[oklch(0.13_0.005_240)] overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex marquee whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-8 text-muted-foreground/80 font-display text-xl tracking-widest">
            <span className="size-1.5 rounded-full bg-primary" />
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
