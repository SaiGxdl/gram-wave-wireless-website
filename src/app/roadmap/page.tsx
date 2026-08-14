"use client";

import InteractiveTimeline from "@/components/InteractiveTimeline";
import { Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function RoadmapPage() {
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
              Project Progression
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Technology Roadmap
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-base leading-8 text-[#5B6472] sm:text-lg md:text-xl md:leading-9"
          >
            This roadmap outlines our planned progression from Problem Discovery to final
            Technology Transfer / Commercialization. We represent our status with stage-honesty,
            indicating both achieved milestones and long-term directions.
          </motion.p>
        </div>

        {/* Current State Info Card */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-6 shadow-sm flex flex-col md:flex-row items-center gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]">
            <Compass className="h-6 w-6 animate-spin" style={{ animationDuration: "14s" }} />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
              Active Focus: Stage 2 (Research &amp; Literature Review)
            </h3>
            <p className="text-sm leading-relaxed text-[#5B6472]">
              We are currently focused on academic searches, modeling electromagnetic constraints,
              and drafting signal matching schemas. Future validation stages will be entered sequentially as technical conditions are met.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. INTERACTIVE TIMELINE SECTION                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-24">
        <div className="max-content-width">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Milestones
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
              Phase-by-Phase Execution
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5B6472]">
              Select any stage below to inspect objectives, milestones, and deliverable targets.
            </p>
          </div>

          <InteractiveTimeline />
        </div>
      </section>
    </div>
  );
}
