"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Simplified, "clean" card section — same structural idea as the
 * reference screenshots (category tag, title, image, arrow) but
 * built with our own code, copy, and color system.
 */
const milestones = [
  {
    category: "Completed",
    title: "Problem Discovery",
    subtitle: "India · 2026",
    href: "/research",
    accent: "text-accent-light",
  },
  {
    category: "In Progress",
    title: "Research Validation & Simulation",
    subtitle: "Active",
    href: "/research",
    accent: "text-yellow-400",
  },
  {
    category: "Planned",
    title: "Prototype Fabrication",
    subtitle: "Next",
    href: "/research",
    accent: "text-muted-dark",
  },
];

export default function SimpleNewsCards() {
  return (
    <section className="max-content-width py-20 md:py-24">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Building the future of connectivity.
        </h2>
        <p className="mt-3 text-muted text-base md:text-lg">
          Research and empirical validation — tracked openly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group rounded-2xl overflow-hidden bg-card border border-card-border/50 hover:border-accent/40 transition-colors duration-200 flex flex-col"
          >
            {/* Top: label + arrow, no borders/glass clutter */}
            <div className="flex items-center justify-between px-6 pt-6">
              <span className={`text-[11px] font-mono font-bold uppercase tracking-widest ${item.accent}`}>
                {item.category}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-dark group-hover:text-accent-light group-hover:translate-x-0.5 transition-all" />
            </div>

            <div className="px-6 pt-3">
              <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
              <span className="text-xs text-muted-dark font-mono">{item.subtitle}</span>
            </div>

            {/* Simple image block instead of a busy gradient/border treatment */}
            <div className="mt-6 h-40 bg-gradient-to-br from-accent/15 to-transparent" />
          </Link>
        ))}
      </div>
    </section>
  );
}
