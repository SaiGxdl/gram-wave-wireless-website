"use client";

import React from "react";

// 1. Impedance Matching Network Diagram
export function ImpedanceMatchingSchematic() {
  return (
    <div className="w-full h-36 bg-[#020510] border border-accent/20 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-center justify-between text-[10px] font-mono text-accent-light">
        <span>SCHEMATIC: ACTIVE MATCHING</span>
        <span className="text-muted-dark">Z_in = Z_L*</span>
      </div>
      <svg viewBox="0 0 300 90" className="w-full h-20 text-accent-light" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Input line */}
        <path d="M 10 45 H 50" />
        <circle cx="50" cy="45" r="3" fill="#60a5fa" />
        
        {/* Inductor L1 */}
        <path d="M 50 45 C 60 25, 70 25, 80 45 C 90 25, 100 25, 110 45 C 120 25, 130 25, 140 45" stroke="#3b82f6" strokeWidth="2" />
        <text x="95" y="20" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">L_active</text>

        {/* Node to Capacitor */}
        <path d="M 140 45 H 180" />
        <circle cx="180" cy="45" r="3" fill="#60a5fa" />
        <path d="M 180 45 V 65" />
        <path d="M 165 65 H 195" stroke="#06b6d4" strokeWidth="2" />
        <path d="M 165 72 H 195" stroke="#06b6d4" strokeWidth="2" />
        <path d="M 180 72 V 85" />
        {/* Ground */}
        <path d="M 170 85 H 190" stroke="#64748b" />
        <path d="M 174 88 H 186" stroke="#64748b" />
        <path d="M 178 91 H 182" stroke="#64748b" />
        <text x="210" y="70" fill="#94a3b8" fontSize="8" fontFamily="monospace">C_tune</text>

        {/* Output to Load */}
        <path d="M 180 45 H 250" stroke="#60a5fa" strokeWidth="2" />
        <rect x="250" y="30" width="35" height="30" rx="4" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" />
        <text x="267" y="48" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">RFIC</text>
      </svg>
    </div>
  );
}

// 2. Signal Propagation Curve
export function SignalPropagationCurve() {
  return (
    <div className="w-full h-36 bg-[#020510] border border-red-500/20 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-center justify-between text-[10px] font-mono text-red-400">
        <span>CURVE: COVERAGE AT DISTANCE</span>
        <span className="text-muted-dark">+4.2dB Delta</span>
      </div>
      <svg viewBox="0 0 300 90" className="w-full h-20" fill="none">
        {/* Axes */}
        <path d="M 25 10 V 80 H 280" stroke="#334155" strokeWidth="1" />
        <text x="15" y="15" fill="#64748b" fontSize="8" fontFamily="monospace">dBm</text>
        <text x="265" y="88" fill="#64748b" fontSize="8" fontFamily="monospace">Dist</text>

        {/* Standard Receiver Curve (Dips below sensitivity threshold) */}
        <path d="M 25 25 Q 120 40, 280 75" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="200" y="76" fill="#ef4444" fontSize="7" fontFamily="monospace">Standard</text>

        {/* Gramwave Matched Curve */}
        <path d="M 25 20 Q 120 28, 280 45" stroke="#3b82f6" strokeWidth="2.5" />
        <text x="190" y="38" fill="#60a5fa" fontSize="8" fontWeight="bold" fontFamily="monospace">Gramwave</text>

        {/* Threshold Line */}
        <path d="M 25 55 H 280" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
        <text x="30" y="52" fill="#f59e0b" fontSize="7" fontFamily="monospace">Sensitivity Cutoff (-110 dBm)</text>
      </svg>
    </div>
  );
}

// 3. Antenna Array Sub-wavelength Diagram
export function AntennaArrayDiagram() {
  return (
    <div className="w-full h-36 bg-[#020510] border border-blue-500/20 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-center justify-between text-[10px] font-mono text-blue-400">
        <span>ARRAY: SUB-WAVELENGTH FEEDS</span>
        <span className="text-muted-dark">4-Elem Phase</span>
      </div>
      <svg viewBox="0 0 300 90" className="w-full h-20" fill="none">
        {/* 4 Antenna Elements */}
        {[50, 110, 170, 230].map((x, i) => (
          <g key={i} transform={`translate(${x}, 15)`}>
            <path d="M 0 0 V 30 M -10 0 H 10 M -5 -5 L 0 0 L 5 -5" stroke="#60a5fa" strokeWidth="1.5" />
            <circle cx="0" cy="30" r="3" fill="#3b82f6" />
            <path d="M 0 30 V 45" stroke="#3b82f6" strokeWidth="1" />
            <rect x="-12" y="45" width="24" height="15" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1" />
            <text x="0" y="56" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">{`φ${i+1}`}</text>
          </g>
        ))}
        {/* Summing Bus */}
        <path d="M 50 75 H 230" stroke="#06b6d4" strokeWidth="2" />
        <path d="M 140 75 V 85" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="140" cy="85" r="3" fill="#06b6d4" />
      </svg>
    </div>
  );
}

// 4. Electromagnetic Simulation Heatmap
export function SimulationHeatmap() {
  return (
    <div className="w-full h-36 bg-[#020510] border border-purple-500/20 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
        <span>HFSS: E-FIELD DISTRIBUTION</span>
        <span className="text-muted-dark">28GHz Field</span>
      </div>
      <svg viewBox="0 0 300 90" className="w-full h-20" fill="none">
        <defs>
          <radialGradient id="fieldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#020510" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="20" y="10" width="260" height="70" rx="8" fill="url(#fieldGlow)" />
        {/* Field Contour Concentric Lines */}
        <ellipse cx="150" cy="45" rx="100" ry="25" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <ellipse cx="150" cy="45" rx="60" ry="15" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8" />
        <ellipse cx="150" cy="45" rx="25" ry="8" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="150" cy="45" r="3" fill="#ffffff" />
        <text x="150" y="48" fill="#000000" fontSize="6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">MAX</text>
      </svg>
    </div>
  );
}

// 5. Patent Architecture Diagram
export function PatentArchitectureDiagram() {
  return (
    <div className="w-full h-36 bg-[#020510] border border-green-500/20 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-center justify-between text-[10px] font-mono text-green-400">
        <span>IP: PATENT APPLICATION FLOW</span>
        <span className="text-muted-dark">Temp No. 20264...</span>
      </div>
      <svg viewBox="0 0 300 90" className="w-full h-20" fill="none">
        {/* Step 1 */}
        <rect x="20" y="25" width="70" height="40" rx="6" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1.5" />
        <text x="55" y="43" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">IMPEDANCE</text>
        <text x="55" y="54" fill="#86efac" fontSize="7" fontFamily="monospace" textAnchor="middle">Sensing</text>

        {/* Arrow 1 */}
        <path d="M 90 45 H 115" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* Step 2 */}
        <rect x="115" y="25" width="70" height="40" rx="6" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="150" y="43" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CONJUGATE</text>
        <text x="150" y="54" fill="#93c5fd" fontSize="7" fontFamily="monospace" textAnchor="middle">Algorithm</text>

        {/* Arrow 2 */}
        <path d="M 185 45 H 210" stroke="#3b82f6" strokeWidth="1.5" />

        {/* Step 3 */}
        <rect x="210" y="25" width="70" height="40" rx="6" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="245" y="43" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ACTIVE</text>
        <text x="245" y="54" fill="#67e8f9" fontSize="7" fontFamily="monospace" textAnchor="middle">Feedback</text>
      </svg>
    </div>
  );
}

// 6. Beam Steering Diagram
export function BeamSteeringDiagram() {
  return (
    <div className="w-full h-36 bg-[#020510] border border-yellow-500/20 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-center justify-between text-[10px] font-mono text-yellow-400">
        <span>VISION: 6G BEAM STEERING</span>
        <span className="text-muted-dark">Phase Tracking</span>
      </div>
      <svg viewBox="0 0 300 90" className="w-full h-20" fill="none">
        {/* Source */}
        <circle cx="40" cy="45" r="6" fill="#eab308" />
        <circle cx="40" cy="45" r="14" stroke="#eab308" strokeWidth="1" strokeDasharray="2 2" />

        {/* Directed Lobes */}
        <path d="M 40 45 Q 150 15, 270 25" stroke="#facc15" strokeWidth="2.5" />
        <path d="M 40 45 Q 150 45, 270 45" stroke="#eab308" strokeWidth="1.5" opacity="0.6" />
        <path d="M 40 45 Q 150 75, 270 65" stroke="#ca8a04" strokeWidth="1" opacity="0.4" />

        {/* Target Node */}
        <circle cx="270" cy="25" r="4" fill="#38bdf8" />
        <text x="270" y="15" fill="#38bdf8" fontSize="7" fontFamily="monospace" textAnchor="middle">Tower</text>
      </svg>
    </div>
  );
}
