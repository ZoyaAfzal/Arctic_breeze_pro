import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref} className="font-mono-stat inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}
