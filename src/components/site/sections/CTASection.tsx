import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-ember p-10 md:p-16 text-primary-foreground shadow-ember">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 size-[420px] rounded-full bg-white/20 blur-3xl"
          />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="font-display uppercase text-4xl md:text-6xl leading-[0.95]">
                Ready for perfect <br /> climate control?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85 max-w-lg">
                Free in-home assessment. Honest pricing. Same-week installs available across Nevada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[oklch(0.12_0.005_240)] px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-[oklch(0.18_0.005_240)] transition-colors"
              >
                Get Free Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
