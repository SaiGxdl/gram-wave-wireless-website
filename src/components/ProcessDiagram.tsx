"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, CheckCircle2, FlaskConical, Layers, ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Simulate",
    tool: "HFSS & CST Studio",
    desc: "3D full-wave electromagnetic simulation modeling scattering parameters (S11, S21) and surface current density across 700MHz–6GHz bands.",
    metrics: "S11 < -15 dB Target",
    icon: Cpu,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/40",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    step: "02",
    title: "Validate",
    tool: "Analytical & MATLAB",
    desc: "Mathematical synthesis of complex-conjugate impedance matching bounds using Smith chart trajectories and active reflection coefficient equations.",
    metrics: "Z_in = Z_L* Exact Match",
    icon: FlaskConical,
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/40",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    step: "03",
    title: "Prototype",
    tool: "RF PCB & Microstrip",
    desc: "Handset-scale PCB layouts integrating varactor/PIN diode tuning networks, compact patch feeds, and low-loss dielectric substrates.",
    metrics: "Sub-wavelength Layout",
    icon: Layers,
    color: "from-accent/20 to-blue-600/20",
    borderColor: "border-accent/40",
    badgeColor: "text-accent-light bg-accent/10 border-accent/20",
  },
  {
    step: "04",
    title: "Test",
    tool: "Anechoic Chamber",
    desc: "Calibrated gain pattern measurements, radiation efficiency calculation, and noise figure verification in controlled RF environments.",
    metrics: "+4.2 dB Realized Gain",
    icon: CheckCircle2,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/40",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function ProcessDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full my-12">
      {/* Step Process Bar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {processSteps.map((item, idx) => {
          const Icon = item.icon;
          const isCurrent = activeStep === idx;

          return (
            <motion.div
              key={idx}
              onClick={() => setActiveStep(idx)}
              whileHover={{ y: -4 }}
              className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 relative flex flex-col justify-between ${
                isCurrent
                  ? `glass bg-gradient-to-b ${item.color} ${item.borderColor} shadow-xl shadow-accent/10`
                  : "bg-[#020510]/80 border-card-border/40 hover:border-card-border"
              }`}
            >
              <div>
                {/* Header: Step Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-white/30">
                    {item.step}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.tool}
                  </span>
                </div>

                {/* Step Title & Icon */}
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`p-2 rounded-xl border ${
                      isCurrent ? "bg-accent/20 border-accent/40 text-accent-light" : "bg-white/5 border-card-border/50 text-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono tracking-wide uppercase">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs leading-6 text-muted mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Footer Metric */}
              <div className="pt-4 border-t border-card-border/30 flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted-dark">Target KPI:</span>
                <span className="text-white font-bold">{item.metrics}</span>
              </div>

              {/* Connecting Arrow for Desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-muted-dark/50">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
