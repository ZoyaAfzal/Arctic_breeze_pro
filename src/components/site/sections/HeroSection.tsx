import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Counter } from "../Counter";
import hero from "@/assets/hero-technician.jpg";

const words = ["CLIMATE", "CONTROL.", "PERFECTED."];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 hero-grid-bg" />
      {/* floating orbs */}
      <motion.div
        className="absolute -top-32 -left-20 size-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.15 210 / 0.35), transparent 70%)" }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 size-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.12 210 / 0.3), transparent 70%)" }}
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-primary"
          >
            <Sparkles className="size-3.5" /> Trusted since 1999. NATE Certified
          </motion.div>

          <h1 className="mt-6 font-display uppercase text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight">
            {words.map((w, i) => (
              <span key={w} className="block overflow-hidden">
                {w.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: i * 0.2 + charIdx * 0.03,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {i === 1 && char === "O" && w[charIdx - 1] === "C" ? (
                      <span className="text-gradient-ember">O</span>
                    ) : i === 1 && "CONTROL".includes(char) ? (
                      <span className="text-gradient-ember">{char}</span>
                    ) : (
                      char
                    )}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
          >
            Precision HVAC solutions for residential and commercial spaces. Installed right, running perfect, year after year.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-ember"
            >
              Explore Services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="group inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              <PlayCircle className="size-4" /> Watch Our Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { v: 98, s: "%", l: "Client Satisfaction" },
              { v: 25, s: "+", l: "Years Experience" },
              { v: 500, s: "+", l: "Projects Completed" },
              { v: 20, s: "+", l: "Expert Technicians" },
            ].map((s, idx) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + idx * 0.1, duration: 0.5 }}
                className="border-l border-border/60 pl-4"
              >
                <div className="font-display text-4xl md:text-5xl text-foreground">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-3, -2, -3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-2xl overflow-hidden glass-card shadow-ember"
          >
            <img src={hero} alt="HVAC technician at work" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-3">
              <div className="rounded-lg glass-card px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Avg. Response</div>
                <div className="font-display text-2xl text-primary">UNDER 2H</div>
              </div>
              <div className="rounded-lg glass-card px-4 py-3 flex items-center gap-2">
                <ShieldCheck className="size-5 text-[color:var(--color-ice-deep)]" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Licensed</div>
                  <div className="font-display text-lg">& Insured</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-xs uppercase tracking-widest flex flex-col items-center gap-1"
      >
        Scroll
        <span className="block h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
