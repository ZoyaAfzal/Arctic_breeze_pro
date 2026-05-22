import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wind, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["oklch(0.12 0.005 240 / 0)", "oklch(0.12 0.005 240 / 0.9)"]);
  const border = useTransform(scrollY, [0, 80], ["oklch(1 0 0 / 0)", "oklch(1 0 0 / 0.08)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
    >
      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center size-9 rounded-md bg-gradient-ember shadow-ember">
            <Wind className="size-5 text-primary-foreground" />
          </span>
          <span className="font-display text-2xl tracking-wider">
            ARCTIC<span className="text-primary">BREEZE</span> PRO
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
              <span className="absolute left-1/2 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-gradient-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-pulse"
          >
            Get Free Quote
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden grid place-items-center size-10 rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md hover:bg-muted text-foreground/90"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center rounded-md bg-gradient-ember px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Get Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
