"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { Compass } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen pt-4 sm:pt-8 pb-24">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent-light">
              Project Progression
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white uppercase font-mono">
            Technology Roadmap
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-8 text-muted">
            This roadmap outlines our planned progression from Problem Discovery to final Technology Transfer / Commercialization. We represent our status with stage-honesty, indicating both achieved milestones and long-term directions.
          </p>
        </div>

        {/* Current State Info Card */}
        <div className="glass border border-card-border/40 p-6 rounded-xl flex flex-col md:flex-row items-center gap-5 max-w-3xl mx-auto mt-12 md:mt-16">
          <div className="h-11 w-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light shrink-0">
            <Compass className="h-6 w-6 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
              Active Focus: Stage 2 (Research & Literature Review)
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              We are currently focused on academic searches, modeling electromagnetic constraints, and drafting signal matching schemas. Future validation stages will be entered sequentially as technical conditions are met.
            </p>
          </div>
        </div>

        {/* Interactive Timeline Component */}
        <div className="pt-6">
          <InteractiveTimeline />
        </div>
      </div>
    </div>
  );
}
