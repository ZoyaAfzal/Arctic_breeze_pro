import { Link } from "@tanstack/react-router";
import { Wind, Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[oklch(0.1_0.005_240)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-ember opacity-70" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-md bg-gradient-ember">
              <Wind className="size-5 text-primary-foreground" />
            </span>
            <span className="font-display text-xl tracking-wider">ARCTIC<span className="text-primary">BREEZE</span> PRO</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Precision HVAC for homes and businesses. Installed right, running perfect,since 1999.          
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/pricing", label: "Pricing" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>AC Installation</li>
            <li>AC Repair & Maintenance</li>
            <li>Heating Systems</li>
            <li>Duct Cleaning</li>
            <li>Indoor Air Quality</li>
            <li>Commercial HVAC</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-wider mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-primary" /> hello@arcticbreezepro.com</li>
          </ul>
          <form className="mt-5 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l-md bg-secondary border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
            <button type="submit" className="rounded-r-md bg-gradient-ember px-3 grid place-items-center text-primary-foreground">
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex justify-end text-xs text-muted-foreground">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
