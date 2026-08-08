"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Sliders, CheckCircle2, AlertTriangle } from "lucide-react";

export default function HeroSignalDiagram() {
  const [isActiveMatching, setIsActiveMatching] = useState(true);

  return (
    <div className="w-full glass border border-accent/25 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0a1026]/90 to-[#030712]/95 backdrop-blur-xl">
      {/* Header / Circuit Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-card-border/40">
        <div className="flex items-center space-x-3">
          <div className="h-3 w-3 rounded-full bg-accent animate-ping" />
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-accent-light" />
              RF Matching Simulator v1.2
            </span>
            <span className="text-[10px] font-mono text-muted-dark">
              Handset-Side Adaptive Impedance Frontend
            </span>
          </div>
        </div>

        {/* Interactive Toggle */}
        <button
          onClick={() => setIsActiveMatching(!isActiveMatching)}
          className={`inline-flex items-center space-x-2.5 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            isActiveMatching
              ? "bg-accent/20 border-accent/60 text-accent-light shadow-lg shadow-accent/20"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          <Sliders className="h-3.5 w-3.5" />
          <span>Active Matching: {isActiveMatching ? "ENABLED" : "BYPASSED"}</span>
          <span
            className={`h-2 w-2 rounded-full ${
              isActiveMatching ? "bg-accent-light animate-pulse" : "bg-red-400"
            }`}
          />
        </button>
      </div>

      {/* Main Diagram Area */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Circuit Schematic Diagram */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="text-[11px] font-mono text-muted-dark uppercase tracking-wider flex items-center justify-between">
            <span>Electromagnetic Circuit Architecture</span>
            <span className="text-accent-light">Sub-GHz to 6GHz Band</span>
          </div>

          <div className="relative bg-[#020510] border border-card-border/60 rounded-2xl p-4 sm:p-6 overflow-hidden">
            {/* SVG Schematic Elements */}
            <svg
              viewBox="0 0 500 200"
              className="w-full h-auto overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid background pattern */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="waveGradMatched" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="waveGradUnmatched" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f87171" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <rect width="500" height="200" fill="url(#grid)" rx="8" />

              {/* Antenna Icon Block */}
              <g transform="translate(30, 70)">
                <path d="M 0 30 L 25 30 M 25 0 L 25 60 M 25 0 L 45 -15 M 25 30 L 45 30 M 25 60 L 45 75" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="25" cy="30" r="4" fill="#3b82f6" />
                <text x="0" y="85" fill="#94a3b8" fontSize="10" fontFamily="monospace">ANTENNA</text>
              </g>

              {/* Input Wave Path */}
              <motion.path
                d="M 75 100 Q 110 70, 140 100 T 205 100"
                stroke={isActiveMatching ? "url(#waveGradMatched)" : "url(#waveGradUnmatched)"}
                strokeWidth={isActiveMatching ? "3" : "1.5"}
                fill="none"
                animate={{
                  d: isActiveMatching
                    ? ["M 75 100 Q 110 70, 140 100 T 205 100", "M 75 100 Q 110 130, 140 100 T 205 100", "M 75 100 Q 110 70, 140 100 T 205 100"]
                    : ["M 75 100 Q 110 90, 140 100 T 205 100", "M 75 100 Q 110 110, 140 100 T 205 100", "M 75 100 Q 110 90, 140 100 T 205 100"]
                }}
                transition={{ duration: isActiveMatching ? 1.5 : 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Gramwave Matching Circuit Block */}
              <g transform="translate(205, 55)">
                <rect
                  x="0"
                  y="0"
                  width="110"
                  height="90"
                  rx="10"
                  fill={isActiveMatching ? "rgba(59, 130, 246, 0.15)" : "rgba(239, 68, 68, 0.08)"}
                  stroke={isActiveMatching ? "#3b82f6" : "#ef4444"}
                  strokeWidth="2"
                  strokeDasharray={isActiveMatching ? "none" : "4 4"}
                />
                <text x="55" y="32" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  GRAMWAVE
                </text>
                <text x="55" y="48" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  {isActiveMatching ? "ACTIVE NETWORK" : "BYPASSED"}
                </text>
                {/* Inductor / Capacitor schematic symbol inside block */}
                <path d="M 20 68 H 35 M 35 60 V 76 M 42 60 V 76 M 42 68 H 55 M 55 68 L 65 60 L 75 76 L 85 60 L 90 68" stroke={isActiveMatching ? "#60a5fa" : "#64748b"} strokeWidth="1.5" />
              </g>

              {/* Output Amplified/Matched Wave Path */}
              <motion.path
                d="M 315 100 Q 350 50, 385 100 T 455 100"
                stroke={isActiveMatching ? "#06b6d4" : "#94a3b8"}
                strokeWidth={isActiveMatching ? "4" : "1.5"}
                fill="none"
                animate={{
                  d: isActiveMatching
                    ? ["M 315 100 Q 350 40, 385 100 T 455 100", "M 315 100 Q 350 160, 385 100 T 455 100", "M 315 100 Q 350 40, 385 100 T 455 100"]
                    : ["M 315 100 Q 350 95, 385 100 T 455 100", "M 315 100 Q 350 105, 385 100 T 455 100", "M 315 100 Q 350 95, 385 100 T 455 100"]
                }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Transceiver Chip Icon */}
              <g transform="translate(435, 70)">
                <rect x="0" y="0" width="45" height="60" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <text x="22" y="35" fill="#f8fafc" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">RFIC</text>
              </g>

              {/* Reflection Loss Wave (Bypassed mode reverse wave) */}
              {!isActiveMatching && (
                <motion.path
                  d="M 205 110 Q 150 130, 95 110"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  fill="none"
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </svg>

            {/* Reflection Badge Overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono">
              <span className="text-muted-dark">Reflection Loss (S₁₁):</span>
              <span
                className={`font-bold ${
                  isActiveMatching ? "text-accent-light" : "text-red-400"
                }`}
              >
                {isActiveMatching ? "-18.6 dB (Optimal Match)" : "-3.2 dB (High Reflection)"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live S-Parameter & RF Metric Telemetry */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="text-[11px] font-mono text-muted-dark uppercase tracking-wider">
            Live Telemetry Metrics
          </div>

          <div className="space-y-3">
            {/* Metric 1: SNR / Aperture Gain */}
            <div className="bg-[#020510] border border-card-border/60 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-muted block">Aperture Reception Gain</span>
                <span className="text-[10px] font-mono text-muted-dark">Constructive Array Summation</span>
              </div>
              <div className="text-right">
                <span
                  className={`text-xl font-bold font-mono ${
                    isActiveMatching ? "text-accent-light" : "text-slate-400"
                  }`}
                >
                  {isActiveMatching ? "+4.2 dB" : "0.0 dB"}
                </span>
                <span className="block text-[9px] font-mono text-muted-dark">
                  {isActiveMatching ? "Boosted" : "Baseline"}
                </span>
              </div>
            </div>

            {/* Metric 2: Antenna Impedance Matching Ratio */}
            <div className="bg-[#020510] border border-card-border/60 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-muted block">Impedance Match Efficiency</span>
                <span className="text-[10px] font-mono text-muted-dark">Complex Conjugate Target</span>
              </div>
              <div className="text-right">
                <span
                  className={`text-xl font-bold font-mono ${
                    isActiveMatching ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {isActiveMatching ? "78.4%" : "32.1%"}
                </span>
                <span className="block text-[9px] font-mono text-muted-dark">
                  {isActiveMatching ? "Low Reflection" : "Mismatch Warning"}
                </span>
              </div>
            </div>

            {/* Metric 3: Weak Signal Penetration Index */}
            <div className="bg-[#020510] border border-card-border/60 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-muted block">Rural & Shadow Zone Coverage</span>
                <span className="text-[10px] font-mono text-muted-dark">Cell-Edge Propagation</span>
              </div>
              <div className="text-right">
                <span
                  className={`text-xl font-bold font-mono ${
                    isActiveMatching ? "text-blue-400" : "text-yellow-500"
                  }`}
                >
                  {isActiveMatching ? "Optimized" : "Limited"}
                </span>
                <span className="block text-[9px] font-mono text-muted-dark">
                  {isActiveMatching ? "Active Array Mode" : "Standard Receiver"}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-1 flex items-center space-x-2 text-[11px] font-mono text-muted-dark">
            {isActiveMatching ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Simulated on 28GHz & Sub-6GHz microstrip topologies.</span>
              </>
            ) : (
              <>
                <AlertTriangle className="h-3.5 w-3.5 text-red-400 shrink-0" />
                <span>Standard antennas lose up to 68% energy to standing waves.</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
