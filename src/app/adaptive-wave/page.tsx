"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import { Signal, ShieldAlert, Cpu, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AdaptiveWavePage() {
  const flowSteps = [
    {
      title: "1. The Weak-Signal Problem",
      description: "Mobile handsets operating in fringe coverage areas suffer from low signal-to-noise ratios (SNR), causing packet loss, high latency, and complete link drops.",
      icon: <Signal className="h-5.5 w-5.5" />,
    },
    {
      title: "2. Current Infrastructure Limits",
      description: "Adding more tower cells is economically non-viable in remote topographies. Current handset receivers rely on passive aperture structures which are physically constrained.",
      icon: <ShieldAlert className="h-5.5 w-5.5" />,
    },
    {
      title: "3. Research Gap Identified",
      description: "Most academic focus is on tower-side MIMO and beamforming. Handset-side adaptive phase optimization and active impedance adjustments remain under-researched.",
      icon: <Cpu className="h-5.5 w-5.5" />,
    },
    {
      title: "4. The Adaptive Wave Hypothesis",
      description: "By dynamically matching impedance paths and optimizing phase coherence across compact handset array feeds, we can construct positive feedback amplification curves.",
      icon: <Zap className="h-5.5 w-5.5" />,
    },
    {
      title: "5. Expected Impact",
      description: "Increasing effective handset gain in weak-signal sectors. Validating hardware standards for rural, emergency, and satellite handset reception.",
      icon: <Award className="h-5.5 w-5.5" />,
    },
  ];

  return (
    <div className="relative min-h-screen pt-4 sm:pt-8 pb-24">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent-light">
              Research Initiative
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
            Adaptive Wave
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-8 text-muted">
            Adaptive Wave is Gramwave Wireless&apos;s primary research initiative. We are exploring novel handset-side electromagnetic configurations designed to improve weak-signal communication through adaptive electromagnetic behaviour and intelligent antenna architectures.
          </p>
        </div>

        {/* Technical Flow Grid */}
        <div className="space-y-10 max-w-3xl mx-auto mt-12 md:mt-16 pt-4">
          <h2 className="text-base font-semibold tracking-wide text-white uppercase font-mono text-center mb-10">
            Research Flow & Logic
          </h2>

          <div className="relative border-l border-card-border/40 pl-8 ml-4 space-y-10">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[42px] top-1.5 h-5 w-5 rounded-full bg-[#030712] border-2 border-accent flex items-center justify-center text-accent">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                </div>

                <div className="glass p-6.5 rounded-xl border border-card-border/30 hover:border-accent/20 transition-all space-y-3">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="text-accent-light">{step.icon}</div>
                    <h3 className="text-xs font-bold tracking-wider uppercase font-mono">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Depth Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6">
          <div className="glass p-8 rounded-xl border border-card-border/30 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white font-mono">
              Research Objective
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              We seek to address the fundamental physical limits of small apertures. When antennas are reduced in scale to fit modern handset sizes, their radiation efficiency decreases. Our objective is to design matching feeds that dynamically adapt to spatial and electromagnetic environments to optimize signal reception.
            </p>
          </div>

          <div className="glass p-8 rounded-xl border border-card-border/30 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white font-mono">
              Methods Under Study
            </h3>
            <ul className="space-y-3.5 text-sm text-muted">
              <li className="flex items-center space-x-2.5">
                <span className="text-accent-light font-mono">→</span>
                <span>Active impedance matching structures</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="text-accent-light font-mono">→</span>
                <span>Sub-wavelength signal phase alignment</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="text-accent-light font-mono">→</span>
                <span>Spatial multipath interference utilization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Research Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 border border-yellow-500/20 bg-yellow-500/4 rounded-xl text-center max-w-3xl mx-auto"
        >
          <span className="text-[10px] font-mono tracking-widest text-yellow-500 uppercase font-bold block mb-2">
            Research Disclaimer
          </span>
          <p className="text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Adaptive Wave is an ongoing research initiative. Technical concepts presented on this website represent research hypotheses, engineering investigations, and planned validation activities. Performance claims will only be made following successful technical verification.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
