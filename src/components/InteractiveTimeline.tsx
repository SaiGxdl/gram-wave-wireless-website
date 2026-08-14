"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Play, Circle, ArrowRight } from "lucide-react";

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
    details:
      "Conducted analysis on signal drop-offs, slow data rates, and dropped calls in complex topographies (villages, mountains, coastal boundaries) where tower-side infrastructure upgrades are economically unfeasible. Identified structural gaps in handset-side reception dynamics.",
    deliverables: [
      "User pain point indexing",
      "Topological connectivity studies",
      "Handset-side path loss modeling",
    ],
  },
  {
    id: 2,
    title: "Research & Literature Review",
    status: "active",
    subtitle: "Analyzing handset-side paradigms and research gaps",
    details:
      "Currently examining academic and industry research on adaptive matching circuits, array feeds, and propagation behaviors. Formulating novel mathematical formulations to overcome passive antenna constraints on mobile device formats.",
    deliverables: [
      "Analysis of current IEEE publications",
      "Gap analysis of handset RF front-ends",
      "Hypothesis documentation for Adaptive Wave",
    ],
  },
  {
    id: 3,
    title: "Technology Validation",
    status: "planned",
    subtitle: "Confirming mathematical feasibility",
    details:
      "Formulate analytical models to validate the feasibility of phase-coherent signal aggregation. Check calculations against antenna efficiency boundaries and thermodynamic noise constraints.",
    deliverables: [
      "Mathematical modeling reports",
      "Simulation parameters definition",
      "Initial feasibility reviews",
    ],
  },
  {
    id: 4,
    title: "Architecture Design",
    status: "planned",
    subtitle: "Drafting structural and electrical topologies",
    details:
      "Design system architectures for adaptive feed networks, switching nodes, and baseband integration models. Outline critical thermal, power budget, and space constraints appropriate for modern handsets.",
    deliverables: [
      "Block diagram architecture",
      "RF system link budget",
      "Component selection lists",
    ],
  },
  {
    id: 5,
    title: "Simulation",
    status: "planned",
    subtitle: "Electromagnetic and RF system simulation",
    details:
      "Run extensive simulation batches in HFSS and MATLAB to validate antenna parameters, impedance matching paths, and signal amplification efficiency in high-noise topographies.",
    deliverables: [
      "HFSS electromagnetic models",
      "S-parameter simulation plots",
      "Signal-to-noise ratio projections",
    ],
  },
  {
    id: 6,
    title: "Prototype Development",
    status: "planned",
    subtitle: "Fabricating physical research boards",
    details:
      "Develop hardware testbeds and proof-of-concept PCBs containing array elements and phase control nodes to conduct physical research trials.",
    deliverables: [
      "PCB layout design",
      "Prototype assembly instructions",
      "Material procurement specs",
    ],
  },
  {
    id: 7,
    title: "Laboratory Testing",
    status: "planned",
    subtitle: "Anechoic chamber and validation benchmarks",
    details:
      "Evaluate constructed prototypes in controlled environments to record radiation patterns, gain profiles, efficiency metrics, and noise factors under precise signal inputs.",
    deliverables: [
      "Anechoic chamber testing reports",
      "Gain & radiation pattern graphs",
      "Discrepancy mitigation reports",
    ],
  },
  {
    id: 8,
    title: "Field Evaluation",
    status: "planned",
    subtitle: "Real-world environmental validation",
    details:
      "Validate handset-side performance improvements in real-world shadow zones, including valleys, forests, coastal lines, and low-density rural villages.",
    deliverables: [
      "Field test telemetry data",
      "Comparative performance logs",
      "Reliability analysis statistics",
    ],
  },
  {
    id: 9,
    title: "Technology Transfer / Commercialization",
    status: "planned",
    subtitle: "Licensing and industry collaboration",
    details:
      "Engage device manufacturers, chipset designers, and network providers to license validated intellectual property, reference designs, and patent structures to update mobile standards.",
    deliverables: [
      "Patent application files",
      "Reference designs and documentation",
      "Partner evaluation guidelines",
    ],
  },
];

export default function InteractiveTimeline() {
  const [selectedStep, setSelectedStep] = useState<number>(2); // Default to active step (Research & Lit Review)

  const stepDetails =
    roadmapSteps.find((s) => s.id === selectedStep) || roadmapSteps[1];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
      {/* Timeline Selection Sidebar */}
      <div className="lg:col-span-5 space-y-3 max-h-[560px] overflow-y-auto pr-2 custom-scrollbar">
        {roadmapSteps.map((step) => {
          const isSelected = step.id === selectedStep;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(step.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                isSelected
                  ? "bg-[#EFF4FF] border-[#2563EB] shadow-sm text-[#0B0F19]"
                  : "bg-white border-[#E4E7EC] hover:border-[#BFD3FE] hover:bg-[#FAFBFC] text-[#5B6472]"
              }`}
            >
              <div className="flex items-center space-x-3">
                {step.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-[#2563EB] shrink-0" />
                ) : step.status === "active" ? (
                  <Play className="h-5 w-5 text-[#2563EB] fill-[#2563EB]/15 shrink-0 animate-pulse" />
                ) : (
                  <Circle className="h-5 w-5 text-[#8A93A3] shrink-0" />
                )}
                <span
                  className={`text-xs font-bold font-mono tracking-wide transition-colors ${
                    isSelected
                      ? "text-[#0B0F19]"
                      : "text-[#5B6472] group-hover:text-[#0B0F19]"
                  }`}
                >
                  {step.id}. {step.title}
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-wider uppercase">
                {step.status === "completed" && (
                  <span className="rounded bg-[#EFF4FF] px-2 py-0.5 font-bold text-[#2563EB]">
                    Completed
                  </span>
                )}
                {step.status === "active" && (
                  <span className="rounded bg-[#2563EB] px-2 py-0.5 font-bold text-white shadow-sm">
                    Active
                  </span>
                )}
                {step.status === "planned" && (
                  <span className="text-[#8A93A3]">Planned</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Pane */}
      <div className="lg:col-span-7 rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 min-h-[480px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] pb-5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-[#2563EB] font-mono block mb-1">
                  Stage {stepDetails.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B0F19]">
                  {stepDetails.title}
                </h3>
              </div>
              <span
                className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border ${
                  stepDetails.status === "completed"
                    ? "bg-[#EFF4FF] border-[#BFD3FE] text-[#2563EB]"
                    : stepDetails.status === "active"
                    ? "bg-[#2563EB] border-[#2563EB] text-white"
                    : "bg-[#FAFBFC] border-[#E4E7EC] text-[#8A93A3]"
                }`}
              >
                {stepDetails.status}
              </span>
            </div>

            {/* Subtitle & Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#2563EB] font-mono tracking-wide">
                {stepDetails.subtitle}
              </h4>
              <p className="text-base text-[#5B6472] leading-relaxed">
                {stepDetails.details}
              </p>
            </div>

            {/* Deliverables / Objectives */}
            <div className="pt-2">
              <h4 className="text-[11px] uppercase font-bold tracking-[0.18em] text-[#0B0F19] mb-4 font-mono">
                Key Deliverables &amp; Objectives
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {stepDetails.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] p-3.5 text-sm text-[#5B6472]"
                  >
                    <ArrowRight className="h-4 w-4 text-[#2563EB] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="border-t border-[#E4E7EC] pt-5 mt-8 text-[11px] text-[#8A93A3] font-mono flex items-center justify-between">
          <span>Gramwave Wireless Roadmap v1.0</span>
          <span>Click stages to explore details</span>
        </div>
      </div>
    </div>
  );
}
