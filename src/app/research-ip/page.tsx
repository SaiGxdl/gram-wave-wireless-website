"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import {
  BookOpen,
  Scale,
  Brain,
  Search,
  Cpu,
  Layers,
  Globe,
  Radio,
  FileCheck,
  Calendar,
} from "lucide-react";

export default function ResearchIPPage() {
  const methodologySteps = [
    "Identify real-world connectivity challenges",
    "Review academic and industry literature",
    "Evaluate existing technologies",
    "Identify research gaps",
    "Validate feasibility through simulation",
    "Develop prototype concepts",
    "Iterate based on technical findings",
  ];

  const principles = [
    {
      title: "Problem-first engineering",
      desc: "Focusing strictly on validating real physical needs rather than inventing tech in search of a problem.",
    },
    {
      title: "Evidence-based decisions",
      desc: "Relying on rigorous calculations, verified simulations, and reproducible laboratory metrics.",
    },
    {
      title: "Honest technical validation",
      desc: "Representing performance benchmarks transparently without inflating early simulation indicators.",
    },
    {
      title: "Long-term thinking",
      desc: "Developing intellectual property with a long-term vision for standard integration rather than quick hacks.",
    },
    {
      title: "Practical impact over hype",
      desc: "Prioritizing physical connectivity improvements in difficult environments over industry buzzwords.",
    },
  ];

  const focusAreas = [
    {
      title: "Wireless Communication",
      desc: "RF path attenuation analysis, propagation dynamics, and system-level transceiver budgets.",
      icon: <Radio className="h-5.5 w-5.5" />,
    },
    {
      title: "Antenna Systems",
      desc: "Small aperture design limits, multi-element arrays, and software-defined impedance networks.",
      icon: <Layers className="h-5.5 w-5.5" />,
    },
    {
      title: "RF Engineering",
      desc: "Active feed structures, matching circuit layouts, and front-end noise reduction methodologies.",
      icon: <Cpu className="h-5.5 w-5.5" />,
    },
    {
      title: "Signal Processing",
      desc: "Phase coherent aggregation, noise filtering, and software-defined matching logic.",
      icon: <Brain className="h-5.5 w-5.5" />,
    },
    {
      title: "Rural & Emergency networks",
      desc: "Targeted systems to restore link connectivity in disasters and fringe mountain and valley zones.",
      icon: <Globe className="h-5.5 w-5.5" />,
    },
    {
      title: "Future Technologies",
      desc: "Early investigations into 6G topologies, non-terrestrial satellite-cellular integrations, and AI-assisted matching.",
      icon: <Search className="h-5.5 w-5.5" />,
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 space-y-16">
        {/* Header & Meta */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between border-b border-card-border/30 pb-6 gap-4 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-mono">
              Research & IP
            </h1>
            <p className="text-xs text-muted max-w-xl">
              Gramwave Wireless&apos;s core research principles, methodologies, and intellectual property details.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-mono text-muted bg-card/75 px-3.5 py-1.5 rounded-lg border border-card-border/40 shrink-0">
            <Calendar className="h-4 w-4 text-accent-light" />
            <span>Last Updated: July 2026</span>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-base font-semibold tracking-wider text-white uppercase font-mono">
              Research Focus Areas
            </h2>
            <p className="text-xs text-muted max-w-md mx-auto">
              Our specific hardware and electrical engineering domains of analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="hover-card p-6 rounded-xl space-y-4 flex flex-col h-full"
              >
                <div className="text-accent-light">{area.icon}</div>
                <h3 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
                  {area.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center lg:text-left">
              Research Methodology
            </h2>
            <div className="glass p-8 rounded-xl border border-card-border/30 space-y-5">
              <p className="text-xs text-muted leading-relaxed">
                We operate through a structured engineering sequence designed to filter unfeasible concepts early and validate working designs rigorously.
              </p>
              <div className="space-y-3.5">
                {methodologySteps.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-muted">
                    <span className="font-mono text-accent-light text-[10px] bg-accent/10 border border-accent/15 px-2.5 py-0.5 rounded">
                      Step {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ethics & Integrity */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center lg:text-left">
              Ethics & Research Integrity
            </h2>
            <div className="glass p-8 rounded-xl border border-card-border/30 space-y-5 flex flex-col justify-center h-full">
              <div className="text-accent-light mb-1">
                <Scale className="h-7 w-7" />
              </div>
              <p className="text-xs text-muted leading-relaxed">
                We are committed to conducting responsible research, representing our validation progress accurately, respecting intellectual property standards, and collaborating transparently with academic and industry partners.
              </p>
            </div>
          </div>
        </div>

        {/* Research Principles */}
        <div className="space-y-8">
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center">
            Our Research Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="glass p-5.5 rounded-xl border border-card-border/30 space-y-3 flex flex-col h-full"
              >
                <h3 className="text-xs font-bold text-accent-light tracking-wide uppercase font-mono">
                  {pr.title}
                </h3>
                <p className="text-[11px] text-muted leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Intellectual Property */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {/* Patent Registry */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center lg:text-left">
              Intellectual Property Status
            </h2>
            <div className="glass p-8 rounded-xl border border-card-border/30 space-y-5 flex flex-col justify-between h-[300px]">
              <div className="space-y-4.5">
                <div className="flex items-center space-x-2 text-accent-light">
                  <FileCheck className="h-5.5 w-5.5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">
                    Provisional Patent Application
                  </span>
                </div>
                <div className="text-[11px] text-muted space-y-1 font-mono">
                  <p>Application Jurisdiction: India</p>
                  <p>Patent Office: IN (Indian Patent Office)</p>
                  <p>Application Status: Provisional Filed</p>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  A provisional patent application has been filed to protect architectural aspects of the Adaptive Wave research concept. Research and technical validation are ongoing, and the technology is under active development.
                </p>
              </div>
              <span className="text-[10px] text-muted-dark font-mono block">
                *Further patent details are kept confidential during early R&D phases.
              </span>
            </div>
          </div>

          {/* Whitepapers & Documents */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center lg:text-left">
              Publications & Literature
            </h2>
            <div className="glass p-8 rounded-xl border border-card-border/30 h-[300px] grid grid-cols-2 gap-4 text-center">
              {[
                "Technical Whitepapers",
                "Research Publications",
                "Technical Notes",
                "Conference Papers",
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="border border-card-border/40 bg-card/25 rounded-lg p-5 flex flex-col items-center justify-center space-y-3 group hover:border-accent/15 transition-colors"
                >
                  <BookOpen className="h-5 w-5 text-muted-dark group-hover:text-accent-light transition-colors" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                    {doc}
                  </span>
                  <span className="text-[9px] font-mono text-muted bg-white/5 border border-white/5 px-2.5 py-0.5 rounded uppercase">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
