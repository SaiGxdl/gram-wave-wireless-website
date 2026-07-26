"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { Compass } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen pt-44 sm:pt-48 lg:pt-52 pb-24">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 space-y-20 md:space-y-24">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto pt-6 sm:pt-10 mb-20 md:mb-24">
          <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold px-3.5 py-1.5 glass rounded-md border border-accent/25">
            Project Progression
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-5 uppercase font-mono">
            Technology Roadmap
          </h1>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl mx-auto mt-3">
            This roadmap outlines our planned progression from Problem Discovery to final Technology Transfer / Commercialization. We represent our status with stage-honesty, indicating both achieved milestones and long-term directions.
          </p>
        </div>

        {/* Current State Info Card */}
        <div className="glass border border-card-border/40 p-6 rounded-xl flex flex-col md:flex-row items-center gap-5 max-w-3xl mx-auto mt-16 md:mt-24">
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
