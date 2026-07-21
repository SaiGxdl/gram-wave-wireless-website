"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { Compass } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen pt-36 lg:pt-40 pb-20">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold px-3 py-1 glass rounded-md border border-accent/25">
            Project Progression
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 uppercase font-mono">
            Technology Roadmap
          </h1>
          <p className="text-xs md:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            This roadmap outlines our planned progression from Problem Discovery to final Technology Transfer / Commercialization. We represent our status with stage-honesty, indicating both achieved milestones and long-term directions.
          </p>
        </div>

        {/* Current State Info Card */}
        <div className="glass border border-card-border/40 p-6 rounded-xl flex flex-col md:flex-row items-center gap-5 max-w-3xl mx-auto">
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
