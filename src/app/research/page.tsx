"use client";

import {
  BookOpen,
  Scale,
  Brain,
  Search,
  Cpu,
  Layers,
  Globe,
  Radio,
  Activity,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResearchPage() {
  const methodologySteps = [
    "Identify real-world connectivity challenges in weak-signal topographies",
    "Review academic and industry literature across IEEE and 3GPP standards",
    "Evaluate physical bounds on small-aperture receiver elements",
    "Identify critical handset-side research gaps and formulate hypotheses",
    "Validate mathematical feasibility through HFSS and MATLAB simulations",
    "Develop prototype PCB architectures with adaptive matching nodes",
    "Iterate based on laboratory and anechoic chamber measurements",
  ];

  const principles = [
    {
      title: "Problem-First Engineering",
      desc: "Focusing strictly on validating real physical needs rather than inventing tech in search of a problem.",
    },
    {
      title: "Evidence-Based Decisions",
      desc: "Relying on rigorous calculations, verified simulations, and reproducible laboratory metrics.",
    },
    {
      title: "Honest Technical Validation",
      desc: "Representing performance benchmarks transparently without inflating early simulation indicators.",
    },
    {
      title: "Long-Term Thinking",
      desc: "Developing foundational wireless technologies with a long-term vision for standard integration rather than quick hacks.",
    },
    {
      title: "Practical Impact Over Hype",
      desc: "Prioritizing physical connectivity improvements in difficult environments over industry buzzwords.",
    },
  ];

  const focusAreas = [
    {
      title: "Wireless Communication",
      desc: "RF path attenuation analysis, propagation dynamics, and system-level transceiver budgets.",
      icon: Radio,
    },
    {
      title: "Antenna Systems",
      desc: "Small aperture design limits, multi-element arrays, and software-defined impedance networks.",
      icon: Layers,
    },
    {
      title: "RF Engineering",
      desc: "Active feed structures, matching circuit layouts, and front-end noise reduction methodologies.",
      icon: Cpu,
    },
    {
      title: "Signal Processing",
      desc: "Phase coherent aggregation, noise filtering, and software-defined matching logic.",
      icon: Brain,
    },
    {
      title: "Rural & Emergency Networks",
      desc: "Targeted systems to restore link connectivity in disasters and fringe mountain and valley zones.",
      icon: Globe,
    },
    {
      title: "Future Technologies",
      desc: "Early investigations into 6G topologies, non-terrestrial satellite-cellular integrations, and AI-assisted matching.",
      icon: Search,
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full pt-10 pb-16 sm:pt-14 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Scientific Research
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Research &amp; Methodology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-base leading-8 text-[#5B6472] sm:text-lg md:text-xl md:leading-9"
          >
            Gramwave Wireless&apos;s core scientific principles, engineering methodologies,
            analytical frameworks, and wireless communication directions.
          </motion.p>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-[#E4E7EC] bg-[#FAFBFC] px-4 py-1.5 font-mono text-[11px] text-[#5B6472]">
              <Calendar className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Last Updated: July 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. FOCUS AREAS GRID                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-24">
        <div className="max-content-width">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Domains
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
              Research Focus Areas
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5B6472]">
              Our specific hardware and electrical engineering domains of analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg"
                >
                  <div>
                    <div className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#BFD3FE] bg-[#EFF4FF]">
                      <Icon className="h-5 w-5 text-[#2563EB]" />
                    </div>

                    <h3 className="mb-2.5 text-base font-bold text-[#0B0F19]">
                      {area.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#5B6472]">
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. METHODOLOGY & ETHICS                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Methodology */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm lg:col-span-7 sm:p-10">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Pipeline
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0B0F19] sm:text-3xl">
                Research Methodology
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#5B6472]">
                We operate through a structured engineering sequence designed to filter unfeasible concepts early and validate working designs rigorously.
              </p>

              <div className="mt-8 space-y-3.5">
                {methodologySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 text-sm text-[#5B6472]"
                  >
                    <span className="shrink-0 rounded-md border border-[#BFD3FE] bg-[#EFF4FF] px-2.5 py-1 font-mono text-[10px] font-bold text-[#2563EB]">
                      Step {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ethics & Integrity */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-[#F6F7F9] p-8 shadow-sm lg:col-span-5 sm:p-10">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Governance
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0B0F19] sm:text-3xl">
                Ethics &amp; Research Integrity
              </h2>

              <div className="my-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#BFD3FE] bg-white text-[#2563EB] shadow-sm">
                <Scale className="h-6 w-6" />
              </div>

              <p className="text-base leading-8 text-[#5B6472]">
                We are committed to conducting responsible research, representing our validation progress accurately, maintaining rigorous scientific standards, and collaborating transparently with academic and industry partners.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-white p-5 font-mono text-xs text-[#5B6472]">
              <span className="font-bold text-[#0B0F19]">Commitment: </span>
              All performance claims are strictly validated by physical electromagnetic models and empirical tests.
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. PRINCIPLES                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-24">
        <div className="max-content-width">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Core Values
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
              Our Research Principles
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5B6472]">
              The scientific foundation that guides our investigation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md"
              >
                <div>
                  <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                    {pr.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5B6472]">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. EXPERIMENTAL TESTBEDS & PUBLICATIONS                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full pt-16 pb-20 sm:pt-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Experimental Testbeds */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Validation
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0B0F19] sm:text-3xl">
                Experimental Testbeds
              </h2>

              <div className="my-6 flex items-center space-x-3 text-[#2563EB]">
                <Activity className="h-6 w-6" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Simulation &amp; Laboratory Workflows
                </span>
              </div>

              <p className="text-base leading-8 text-[#5B6472]">
                Our research centers on empirical simulation modeling, 3D electromagnetic finite-element solvers, and laboratory bench setups designed to test dynamic impedance matching behaviors under real-world human-body loading conditions.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-5 font-mono text-xs text-[#5B6472]">
              Focus: HFSS EM solvers, MATLAB signal modeling &amp; anechoic measurements.
            </div>
          </div>

          {/* Publications */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Literature
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0B0F19] sm:text-3xl">
                Publications &amp; Literature
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#5B6472]">
                Technical manuscripts and whitepapers prepared by our engineering team.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "Technical Whitepapers",
                  "Research Publications",
                  "Technical Notes",
                  "Conference Papers",
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-5 text-center transition-all hover:border-[#2563EB] hover:bg-white"
                  >
                    <BookOpen className="h-5 w-5 text-[#2563EB]" />
                    <span className="mt-3 font-mono text-xs font-bold text-[#0B0F19]">
                      {doc}
                    </span>
                    <span className="mt-2 rounded-md border border-[#BFD3FE] bg-[#EFF4FF] px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase text-[#2563EB]">
                      Coming Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
