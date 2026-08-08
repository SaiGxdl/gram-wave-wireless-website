"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Signal,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  Radio,
  Layers,
  Brain,
  Globe,
  Search,
  Sliders,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const focusAreas = [
  { title: "Wireless Communication", desc: "RF path attenuation analysis, propagation dynamics, and system-level transceiver budgets.", icon: Radio },
  { title: "Antenna Systems", desc: "Small aperture design limits, multi-element arrays, and software-defined impedance networks.", icon: Layers },
  { title: "RF Engineering", desc: "Active feed structures, matching circuit layouts, and front-end noise reduction methodologies.", icon: Cpu },
  { title: "Signal Processing", desc: "Phase coherent aggregation, noise filtering, and software-defined matching logic.", icon: Brain },
  { title: "Rural & Emergency Networks", desc: "Targeted systems to restore link connectivity in disasters and fringe mountain and valley zones.", icon: Globe },
  { title: "Future Technologies", desc: "Early investigations into 6G topologies, non-terrestrial satellite-cellular integrations, and AI-assisted matching.", icon: Search },
];

const processSteps = [
  { step: "01", title: "Simulate", tool: "HFSS & CST Studio", desc: "Full-wave electromagnetic simulation modeling scattering parameters across 700MHz–6GHz bands." },
  { step: "02", title: "Validate", tool: "Analytical & MATLAB", desc: "Mathematical synthesis of complex-conjugate impedance matching bounds using Smith chart trajectories." },
  { step: "03", title: "Prototype", tool: "RF PCB & Microstrip", desc: "Handset-scale PCB layouts integrating tuning networks, compact patch feeds, and low-loss substrates." },
  { step: "04", title: "Test", tool: "Anechoic Chamber", desc: "Calibrated gain pattern measurements, radiation efficiency, and noise figure verification." },
];

const milestones = [
  {
    status: "Completed",
    color: "#2563EB",
    title: "Problem Discovery",
    date: "2026",
    desc: "Identified weak-signal drop-out patterns across rural and mountainous regions.",
  },
  {
    status: "In Progress",
    color: "#B45309",
    title: "Research Validation",
    date: "Active",
    desc: "Simulating propagation behavior across varying terrain.",
  },
  {
    status: "Planned",
    color: "#8A93A3",
    title: "Prototype Fabrication",
    date: "Next",
    desc: "Initial PCB designs for anechoic chamber testing.",
  },
];

function HeroSchematic() {
  const [active, setActive] = useState(true);

  return (
    <div className="w-full bg-white border border-[#E4E7EC] rounded-2xl shadow-[0_1px_2px_rgba(11,15,25,0.04)] overflow-hidden relative z-10">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-[#E4E7EC]">
        <div className="flex flex-col">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B0F19]">
            RF Matching Simulator
          </span>
          <span className="text-[10px] font-mono text-[#8A93A3]">Handset-Side Adaptive Frontend</span>
        </div>
        <button
          type="button"
          onClick={() => setActive((prev) => !prev)}
          className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wide border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] hover:scale-105 active:scale-95 ${
            active ? "bg-[#EFF4FF] border-[#BFD3FE] text-[#2563EB]" : "bg-[#FDF2F2] border-[#F3C8C8] text-[#B42318]"
          }`}
        >
          <Sliders className="h-3 w-3" />
          <span>{active ? "Active" : "Bypassed"}</span>
        </button>
      </div>

      <div className="p-5 sm:p-6">
        <svg viewBox="0 0 500 190" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="190" fill="#FAFBFC" rx="8" />

          {/* Antenna */}
          <g transform="translate(28, 65)">
            <path d="M 0 30 L 25 30 M 25 0 L 25 60 M 25 0 L 45 -15 M 25 30 L 45 30 M 25 60 L 45 75" stroke="#0B0F19" strokeWidth="2" strokeLinecap="round" />
            <circle cx="25" cy="30" r="4" fill="#2563EB" />
            <text x="0" y="88" fill="#8A93A3" fontSize="9" fontFamily="monospace">ANTENNA</text>
          </g>

          {/* Input wave */}
          <path
            d="M 78 95 Q 112 68, 140 95 T 200 95"
            stroke={active ? "#2563EB" : "#B45309"}
            strokeWidth={active ? "2.5" : "1.5"}
            fill="none"
            strokeDasharray={active ? "8 4" : "4 4"}
            className="transition-all duration-300"
          />

          {/* Matching block */}
          <g transform="translate(200, 50)">
            <rect
              x="0" y="0" width="105" height="90" rx="10"
              fill={active ? "#EFF4FF" : "#FAFAFA"}
              stroke={active ? "#2563EB" : "#C6CCD6"}
              strokeWidth="1.75"
              strokeDasharray={active ? "none" : "4 4"}
            />
            <text x="52" y="34" fill="#0B0F19" fontSize="10" fontWeight="700" fontFamily="monospace" textAnchor="middle">GRAMWAVE</text>
            <text x="52" y="49" fill={active ? "#2563EB" : "#8A93A3"} fontSize="8.5" fontFamily="monospace" textAnchor="middle">
              {active ? "ACTIVE NETWORK" : "BYPASSED"}
            </text>
            <path d="M 18 66 H 32 M 32 58 V 74 M 39 58 V 74 M 39 66 H 50 M 50 66 L 60 58 L 70 74 L 80 58 L 86 66" stroke={active ? "#2563EB" : "#C6CCD6"} strokeWidth="1.5" />
          </g>

          {/* Output wave */}
          <path
            d="M 305 95 Q 338 52, 370 95 T 435 95"
            stroke={active ? "#06B6D4" : "#8A93A3"}
            strokeWidth={active ? "3" : "1.5"}
            fill="none"
            strokeDasharray={active ? "6 3" : "3 3"}
            className="transition-all duration-300"
          />

          {/* RFIC */}
          <g transform="translate(420, 65)">
            <rect x="0" y="0" width="42" height="58" rx="4" fill="#0B0F19" />
            <text x="21" y="34" fill="#ffffff" fontSize="8.5" fontWeight="700" fontFamily="monospace" textAnchor="middle">RFIC</text>
          </g>
        </svg>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t border-[#E4E7EC] text-[11px] font-mono">
          <span className="text-[#8A93A3]">Reflection Loss (S11)</span>
          <span className={`font-bold ${active ? "text-[#2563EB]" : "text-[#B42318]"}`}>
            {active ? "−18.6 dB · Optimal" : "−3.2 dB · High Reflection"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomeTest() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Draft/Test Page Banner */}
      <div className="bg-[#FFF7ED] border-b border-[#FDE0AF] text-[#8A5A00] text-xs font-mono text-center py-2.5 px-4 relative z-20">
        <strong>LIGHT THEME PREVIEW (/home-test)</strong> — isolated redesign, main site is unaffected.
      </div>

      {/* HERO */}
      <section className="max-content-width pt-10 sm:pt-14 md:pt-20 pb-16 md:pb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 rounded-full border border-[#E4E7EC] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#5B6472] mb-7"
            >
              <Signal className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Deep-Tech Wireless Research</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#0B0F19] mb-7"
            >
              Engineering signal where towers can&apos;t reach.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-base sm:text-lg leading-8 text-[#5B6472] mb-9 max-w-xl"
            >
              Gramwave Wireless builds next-generation, handset-side receiver technology that keeps phones connected in weak-signal environments — no new towers required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/adaptive-wave"
                className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 whitespace-nowrap"
              >
                <span>Explore Adaptive Wave</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0B0F19] hover:bg-[#1A2033] text-white text-xs font-bold font-mono uppercase tracking-wider px-6 py-3.5 rounded-xl border border-[#0B0F19] shadow-sm transition-all duration-200 whitespace-nowrap"
              >
                <span>Contact Research Team</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <HeroSchematic />
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION (FLOATING ROUNDED CARD) */}
      <section className="max-content-width relative z-10 flex justify-center -mt-4 sm:-mt-6 md:-mt-8 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0B0F19] border border-[#1E293B] rounded-2xl px-8 md:px-12 py-7 md:py-8 max-w-4xl w-full shadow-2xl shadow-black/20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center"
        >
          <div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">R&D</span>
            <span className="block text-[11px] uppercase tracking-widest text-[#8A93A3] mt-1.5 font-mono">Current Phase</span>
          </div>
          <div className="sm:border-x sm:border-white/10">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">1</span>
            <span className="block text-[11px] uppercase tracking-widest text-[#8A93A3] mt-1.5 font-mono">Active Research Initiative</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">2026</span>
            <span className="block text-[11px] uppercase tracking-widest text-[#8A93A3] mt-1.5 font-mono">Founded</span>
          </div>
        </motion.div>
      </section>

      {/* WHY GRAMWAVE */}
      <section className="max-content-width py-20 md:py-28 relative z-10 w-full">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB]">Why Gramwave</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B0F19] leading-tight">
            Signal shouldn&apos;t drop just because you&apos;re far from a tower
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-8 text-[#5B6472]">
            We&apos;re rethinking the receiver, not the network — building adaptive antenna and impedance-matching systems that live inside the device itself.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              img: "/images/cards/the-problem.png",
              title: "The Problem",
              desc: "Millions in rural and mountainous regions still face drop-outs, even with tower infrastructure nearby.",
            },
            {
              img: "/images/cards/our-approach.png",
              title: "Our Approach",
              desc: "Active impedance matching and receiver array design, built directly into the handset to boost reception where it counts.",
              link: { href: "/adaptive-wave", label: "Explore Adaptive Wave" },
            },
            {
              img: "/images/cards/whats-next.png",
              title: "What's Next",
              desc: "Simulation and validation today, prototype fabrication and lab testing ahead — with an eye on 6G and satellite integration.",
              link: { href: "/roadmap", label: "View Roadmap" },
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col bg-white border border-[#E4E7EC] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] bg-[#F6F7F9] overflow-hidden">
                <Image src={card.img} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0B0F19]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B6472]">{card.desc}</p>
                </div>
                {card.link && (
                  <Link
                    href={card.link.href}
                    className="mt-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] flex items-center gap-1.5 hover:gap-2.5 transition-all w-fit"
                  >
                    <span>{card.link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* RESEARCH FOCUS GRID */}
      <section className="w-full bg-[#F6F7F9] border-y border-[#E4E7EC] py-20 md:py-28 relative z-10">
        <div className="max-content-width">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB]">Research Focus</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B0F19] leading-tight">
              Where we spend our engineering hours
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white border border-[#E4E7EC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-[#EFF4FF] border border-[#BFD3FE] flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-[#2563EB]" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0F19] tracking-tight mb-2.5">{area.title}</h3>
                    <p className="text-sm leading-relaxed text-[#5B6472]">{area.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-content-width py-20 md:py-28 relative z-10 w-full">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB]">How We Work</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B0F19] leading-tight">
            From simulation to validated hardware
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((item, idx) => (
            <div key={idx} className="border border-[#E4E7EC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-3xl font-extrabold font-mono text-[#D8DCE3] block mb-4">{item.step}</span>
                <h3 className="text-base font-bold text-[#0B0F19]">{item.title}</h3>
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF4FF] px-2.5 py-1 rounded-md mt-2 mb-3">{item.tool}</span>
                <p className="text-sm leading-relaxed text-[#5B6472]">{item.desc}</p>
              </div>
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:flex justify-end mt-6 text-[#D8DCE3]">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="w-full bg-[#F6F7F9] border-y border-[#E4E7EC] py-24 md:py-32 relative z-10">
        <div className="max-content-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2563EB]">Progress</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B0F19]">Latest Milestones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-white border border-[#E4E7EC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                {/* Top accent bar inside card */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: m.color }} />
                <div>
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase font-bold inline-block px-2.5 py-1 rounded-md mb-4"
                    style={{ backgroundColor: `${m.color}15`, color: m.color }}
                  >
                    {m.status}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B0F19] block mb-1.5">{m.title}</h3>
                  <span className="text-[11px] text-[#8A93A3] font-mono block mb-3.5">{m.date}</span>
                  <p className="text-sm leading-relaxed text-[#5B6472]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 mb-4">
            <Link
              href="/roadmap"
              className="inline-flex items-center space-x-2 text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#2563EB] hover:text-[#0B0F19] transition-colors px-6 py-3 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#2563EB] shadow-sm hover:shadow transition-all"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA COLLABORATE BANNER */}
      <section className="max-content-width pt-20 md:pt-28 pb-24 md:pb-36 relative z-10 w-full">
        <div className="bg-[#0B0F19] rounded-3xl p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 shadow-2xl">
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Looking for a research partner or lab collaboration?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#8A93A3]">
              Open to universities, RF engineers, and research labs who want to push wireless connectivity forward with us.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F6F7F9] text-[#0B0F19] text-xs font-bold font-mono uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
