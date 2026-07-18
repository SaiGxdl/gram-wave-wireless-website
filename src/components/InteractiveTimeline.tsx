"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Play, Circle } from "lucide-react";

interface Step {
  id: number;
  title: string;
  status: "completed" | "active" | "planned";
  subtitle: string;
  details: string;
  deliverables: string[];
}

const roadmapSteps: Step[] = [
  {
    id: 1,
    title: "Problem Discovery",
    status: "completed",
    subtitle: "Identifying real-world weak signal anomalies",
    details: "Conducted analysis on signal drop-offs, slow data rates, and dropped calls in complex topographies (villages, mountains, coastal boundaries) where tower-side infrastructure upgrades are economically unfeasible. Identified structural gaps in handset-side reception dynamics.",
    deliverables: ["User pain point indexing", "Topological connectivity studies", "Handset-side path loss modeling"],
  },
  {
    id: 2,
    title: "Research & Literature Review",
    status: "active",
    subtitle: "Analyzing handset-side paradigms and research gaps",
    details: "Currently examining academic and industry research on adaptive matching circuits, array feeds, and propagation behaviors. Formulating novel mathematical formulations to overcome passive antenna constraints on mobile device formats.",
    deliverables: ["Analysis of current IEEE publications", "Gap analysis of handset RF front-ends", "Hypothesis documentation for Adaptive Wave"],
  },
  {
    id: 3,
    title: "Technology Validation",
    status: "planned",
    subtitle: "Confirming mathematical feasibility",
    details: "Formulate analytical models to validate the feasibility of phase-coherent signal aggregation. Check calculations against antenna efficiency boundaries and thermodynamic noise constraints.",
    deliverables: ["Mathematical modeling reports", "Simulation parameters definition", "Initial feasibility reviews"],
  },
  {
    id: 4,
    title: "Architecture Design",
    status: "planned",
    subtitle: "Drafting structural and electrical topologies",
    details: "Design system architectures for adaptive feed networks, switching nodes, and baseband integration models. Outline critical thermal, power budget, and space constraints appropriate for modern handsets.",
    deliverables: ["Block diagram architecture", "RF system link budget", "Component selection lists"],
  },
  {
    id: 5,
    title: "Simulation",
    status: "planned",
    subtitle: "Electromagnetic and RF system simulation",
    details: "Run extensive simulation batches in HFSS and MATLAB to validate antenna parameters, impedance matching paths, and signal amplification efficiency in high-noise topographies.",
    deliverables: ["HFSS electromagnetic models", "S-parameter simulation plots", "Signal-to-noise ratio projections"],
  },
  {
    id: 6,
    title: "Prototype Development",
    status: "planned",
    subtitle: "Fabricating physical research boards",
    details: "Develop hardware testbeds and proof-of-concept PCBs containing array elements and phase control nodes to conduct physical research trials.",
    deliverables: ["PCB layout design", "Prototype assembly instructions", "Material procurement specs"],
  },
  {
    id: 7,
    title: "Laboratory Testing",
    status: "planned",
    subtitle: "Anechoic chamber and validation benchmarks",
    details: "Evaluate constructed prototypes in controlled environments to record radiation patterns, gain profiles, efficiency metrics, and noise factors under precise signal inputs.",
    deliverables: ["Anechoic chamber testing reports", "Gain & radiation pattern graphs", "Discrepancy mitigation reports"],
  },
  {
    id: 8,
    title: "Field Evaluation",
    status: "planned",
    subtitle: "Real-world environmental validation",
    details: "Validate handset-side performance improvements in real-world shadow zones, including valleys, forests, coastal lines, and low-density rural villages.",
    deliverables: ["Field test telemetry data", "Comparative performance logs", "Reliability analysis statistics"],
  },
  {
    id: 9,
    title: "Technology Transfer / Commercialization",
    status: "planned",
    subtitle: "Licensing and industry collaboration",
    details: "Engage device manufacturers, chipset designers, and network providers to license validated intellectual property, reference designs, and patent structures to update mobile standards.",
    deliverables: ["Patent application files", "Reference designs and documentation", "Partner evaluation guidelines"],
  },
];

export default function InteractiveTimeline() {
  const [selectedStep, setSelectedStep] = useState<number>(2); // Default to active step (Research & Lit Review)

  const stepDetails = roadmapSteps.find((s) => s.id === selectedStep) || roadmapSteps[1];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
      {/* Timeline Selection Sidebar */}
      <div className="lg:col-span-5 space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {roadmapSteps.map((step) => {
          const isSelected = step.id === selectedStep;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(step.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-250 flex items-center justify-between group focus:outline-none focus:ring-1 focus:ring-accent ${
                isSelected
                  ? "bg-accent/8 border-accent/35"
                  : "bg-card/45 border-card-border/40 hover:border-card-border hover:bg-card/75"
              }`}
            >
              <div className="flex items-center space-x-3.5">
                {step.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-accent-light shrink-0" />
                ) : step.status === "active" ? (
                  <Play className="h-5 w-5 text-accent-light animate-pulse fill-accent/10 shrink-0" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-dark shrink-0" />
                )}
                <span
                  className={`text-xs font-bold tracking-wide transition-colors font-mono ${
                    isSelected ? "text-white" : "text-muted group-hover:text-white"
                  }`}
                >
                  {step.id}. {step.title}
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-wider uppercase">
                {step.status === "completed" && (
                  <span className="text-accent-light/80 font-bold">Completed</span>
                )}
                {step.status === "active" && (
                  <span className="text-accent-light font-bold animate-pulse">Active</span>
                )}
                {step.status === "planned" && (
                  <span className="text-muted-dark">Planned</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Pane */}
      <div className="lg:col-span-7 bg-card border border-card-border rounded-xl p-8 min-h-[420px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-card-border/50 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-light font-mono block mb-1">
                  Stage {stepDetails.id} Details
                </span>
                <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                  {stepDetails.title}
                </h3>
              </div>
              <span
                className={`text-[9px] font-mono uppercase px-2.5 py-0.5 rounded border ${
                  stepDetails.status === "completed"
                    ? "bg-accent/8 border-accent/20 text-accent-light"
                    : stepDetails.status === "active"
                    ? "bg-accent/20 border-accent-light text-accent-light animate-pulse"
                    : "bg-muted-dark/10 border-muted-dark/25 text-muted"
                }`}
              >
                {stepDetails.status}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-muted font-mono tracking-wide">
                {stepDetails.subtitle}
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {stepDetails.details}
              </p>
            </div>

            {/* Deliverables / Objectives */}
            <div className="pt-2">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-white mb-3.5 font-mono">
                Key Objectives
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {stepDetails.deliverables.map((del, i) => (
                  <li key={i} className="text-xs text-muted flex items-start space-x-2.5">
                    <span className="text-accent-light font-mono shrink-0">→</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="border-t border-card-border/30 pt-4 mt-6 text-[10px] text-muted-dark font-mono flex items-center justify-between">
          <span>Gramwave Wireless Research Roadmap v1.0</span>
          <span>Click sidebar to navigate stages</span>
        </div>
      </div>
    </div>
  );
}
