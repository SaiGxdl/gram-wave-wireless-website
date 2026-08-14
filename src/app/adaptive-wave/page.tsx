"use client";

import Link from "next/link";
import { Signal, ShieldAlert, Cpu, Award, Zap, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const flowSteps = [
  {
    step: "01",
    title: "The Weak-Signal Problem",
    description:
      "Mobile handsets operating in fringe coverage areas suffer from low signal-to-noise ratios (SNR), causing packet loss, high latency, and complete link drops.",
    icon: Signal,
  },
  {
    step: "02",
    title: "Current Infrastructure Limits",
    description:
      "Adding more tower cells is economically non-viable in remote topographies. Current handset receivers rely on passive aperture structures which are physically constrained.",
    icon: ShieldAlert,
  },
  {
    step: "03",
    title: "Research Gap Identified",
    description:
      "Most academic focus is on tower-side MIMO and beamforming. Handset-side adaptive phase optimization and active impedance adjustments remain under-researched.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "The Adaptive Wave Hypothesis",
    description:
      "By dynamically matching impedance paths and optimizing phase coherence across compact handset array feeds, we can construct positive feedback amplification curves.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Expected Impact",
    description:
      "Increasing effective handset gain in weak-signal sectors. Validating hardware standards for rural, emergency, and satellite handset reception.",
    icon: Award,
  },
];

const methods = [
  {
    title: "Active Impedance Matching Structures",
    desc: "Dynamic conjugate matching circuits capable of shifting resonance frequency in real-time under fluctuating dielectric conditions.",
  },
  {
    title: "Sub-Wavelength Signal Phase Alignment",
    desc: "Coherent phase synthesis across miniaturized aperture arrays to achieve constructive interference and enhanced SNR.",
  },
  {
    title: "Spatial Multipath Interference Utilization",
    desc: "Algorithmic transformation of destructive multipath reflections into phase-aligned received energy.",
  },
];

export default function AdaptiveWavePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO / INTRO SECTION                                            */}
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
              Research Initiative
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Adaptive Wave
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-base leading-8 text-[#5B6472] sm:text-lg md:text-xl md:leading-9"
          >
            Adaptive Wave is Gramwave Wireless&apos;s primary research initiative.
            We are exploring novel handset-side electromagnetic configurations
            designed to improve weak-signal communication through adaptive
            electromagnetic behaviour and intelligent antenna architectures.
          </motion.p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. RESEARCH FLOW & LOGIC SECTION                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-24">
        <div className="max-content-width">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Methodology
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
              Research Flow &amp; Logic
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5B6472]">
              Our sequential approach to understanding and solving handset-side signal limits.
            </p>
          </div>

          {/* Timeline Process Cards */}
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l-2 border-[#E4E7EC] pl-6 sm:pl-10 space-y-8">
              {flowSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="relative"
                  >
                    {/* Glowing Node on Timeline */}
                    <div className="absolute -left-[35px] sm:-left-[51px] top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2563EB] bg-white shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                    </div>

                    <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]">
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <h3 className="text-base font-bold text-[#0B0F19]">
                            {step.title}
                          </h3>
                        </div>

                        <span className="font-mono text-xs font-bold text-[#8A93A3]">
                          STAGE {step.step}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-[#5B6472]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. RESEARCH OBJECTIVE & METHODS UNDER STUDY SECTION                */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Card 1: Research Objective */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm lg:col-span-6 sm:p-10"
          >
            <div>
              <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Core Objective
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0B0F19] sm:text-3xl">
                Research Objective
              </h2>

              <p className="mt-5 text-base leading-8 text-[#5B6472]">
                We seek to address the fundamental physical limits of small apertures.
                When antennas are reduced in scale to fit modern handset sizes, their
                radiation efficiency decreases. Our objective is to design matching feeds
                that dynamically adapt to spatial and electromagnetic environments to
                optimize signal reception.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-5 font-mono text-xs text-[#5B6472]">
              <span className="font-bold text-[#0B0F19]">Target Outcome: </span>
              Constructive gain optimization on handset form factors without needing additional carrier cell towers.
            </div>
          </motion.div>

          {/* Card 2: Methods Under Study */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm lg:col-span-6 sm:p-10"
          >
            <div>
              <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                Techniques
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-[#0B0F19] sm:text-3xl">
                Methods Under Study
              </h2>

              <div className="mt-6 space-y-4">
                {methods.map((method, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-4.5 transition-all hover:border-[#2563EB] hover:bg-white sm:p-5"
                  >
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0B0F19]">
                          {method.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#5B6472]">
                          {method.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. BOTTOM CTA (REPLACING DISCLAIMER WITH ACTIVE ENGAGEMENT)        */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full pb-20 md:pb-24">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#0B0F19] px-8 py-10 text-center shadow-xl sm:px-12 sm:py-12 md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              Interested in our research methodologies?
            </h3>
            <p className="mt-3 text-sm text-[#8A93A3] sm:text-base">
              Explore our project roadmap or connect directly with our engineering team for academic partnerships.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/roadmap"
              className="inline-flex min-h-[46px] min-w-[160px] shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
            >
              <span>View Roadmap</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[46px] min-w-[160px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#0B0F19] shadow-lg transition-all hover:bg-[#F6F7F9] hover:scale-105 active:scale-95"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
