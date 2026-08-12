"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
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
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const focusAreas = [
  {
    title: "Wireless Communication",
    desc: "RF path attenuation analysis, propagation dynamics, and system-level transceiver budgets.",
    icon: Radio,
  },
  {
    title: "Antenna Systems",
    desc: "Small aperture design limits, multi-element arrays, and software-defined impedance networks.",
    icon: Layers,
  },
  {
    title: "RF Engineering",
    desc: "Active feed structures, matching circuit layouts, and front-end noise reduction methodologies.",
    icon: Cpu,
  },
  {
    title: "Signal Processing",
    desc: "Phase coherent aggregation, noise filtering, and software-defined matching logic.",
    icon: Brain,
  },
  {
    title: "Rural & Emergency Networks",
    desc: "Targeted systems to restore link connectivity in disasters and fringe mountain and valley zones.",
    icon: Globe,
  },
  {
    title: "Future Technologies",
    desc: "Early investigations into 6G topologies, non-terrestrial satellite-cellular integrations, and AI-assisted matching.",
    icon: Search,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Simulate",
    tool: "HFSS & CST Studio",
    desc: "Full-wave electromagnetic simulation modeling scattering parameters across 700MHz–6GHz bands.",
  },
  {
    step: "02",
    title: "Validate",
    tool: "Analytical & MATLAB",
    desc: "Mathematical synthesis of complex-conjugate impedance matching bounds using Smith chart trajectories.",
  },
  {
    step: "03",
    title: "Prototype",
    tool: "RF PCB & Microstrip",
    desc: "Handset-scale PCB layouts integrating tuning networks, compact patch feeds, and low-loss substrates.",
  },
  {
    step: "04",
    title: "Test",
    tool: "Anechoic Chamber",
    desc: "Calibrated gain pattern measurements, radiation efficiency, and noise figure verification.",
  },
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

/* -------------------------------------------------------------------------- */
/* Button System                                                              */
/* Controlled minimum widths prevent text overflow across font renderers      */
/* -------------------------------------------------------------------------- */

const primaryButton =
  "inline-flex min-h-[46px] min-w-[200px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#2563EB] px-6 py-3 text-xs font-bold font-mono uppercase tracking-[0.08em] leading-none text-white shadow-md shadow-blue-500/15 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]";

const inlineAction =
  "inline-flex min-h-[32px] w-fit max-w-full shrink-0 items-center justify-start gap-1.5 whitespace-nowrap text-xs font-mono font-bold uppercase tracking-wider leading-none text-[#2563EB] transition-all duration-200 hover:gap-2.5 hover:text-[#1D4ED8]";

const outlineButton =
  "inline-flex min-h-[44px] min-w-[190px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#E4E7EC] bg-white px-6 py-3 text-xs font-bold font-mono uppercase tracking-[0.14em] leading-none text-[#2563EB] shadow-sm transition-all duration-200 hover:border-[#2563EB] hover:text-[#0B0F19] hover:shadow-md";

const ctaButton =
  "inline-flex min-h-[50px] min-w-[160px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-white px-8 py-4 text-xs font-bold font-mono uppercase tracking-[0.08em] leading-none text-[#0B0F19] shadow-lg transition-all duration-200 hover:bg-[#F6F7F9] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]";

/* -------------------------------------------------------------------------- */
/* Section Heading                                                            */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-12 max-w-2xl md:mb-14 ${center ? "mx-auto text-center" : ""
        }`}
    >
      <span className="inline-flex max-w-full items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] leading-none text-[#2563EB]">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0B0F19] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#5B6472] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero Schematic                                                             */
/* -------------------------------------------------------------------------- */

function HeroSchematic() {
  const [active, setActive] = useState(true);

  return (
    <div className="relative z-10 w-full min-w-0 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_1px_2px_rgba(11,15,25,0.04)]">
      {/* Simulator Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-5 py-4 sm:px-6">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="truncate text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B0F19]">
            RF Matching Simulator
          </span>

          <span className="text-[10px] font-mono text-[#8A93A3]">
            Handset-Side Adaptive Frontend
          </span>
        </div>

        <button
          type="button"
          onClick={() => setActive((prev) => !prev)}
          aria-pressed={active}
          className={`inline-flex min-h-[32px] min-w-[82px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide leading-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] hover:scale-105 active:scale-95 ${active
            ? "border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]"
            : "min-w-[100px] border-[#F3C8C8] bg-[#FDF2F2] text-[#B42318]"
            }`}
        >
          <Sliders className="h-3 w-3 shrink-0" />

          <span>{active ? "Active" : "Bypassed"}</span>
        </button>
      </div>

      {/* Simulator Body */}
      <div className="p-5 sm:p-6">
        <svg
          viewBox="0 0 500 190"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="RF matching simulator schematic"
        >
          <rect
            width="500"
            height="190"
            fill="#FAFBFC"
            rx="8"
          />

          {/* Antenna */}
          <g transform="translate(28, 65)">
            <path
              d="M 0 30 L 25 30 M 25 0 L 25 60 M 25 0 L 45 -15 M 25 30 L 45 30 M 25 60 L 45 75"
              stroke="#0B0F19"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle
              cx="25"
              cy="30"
              r="4"
              fill="#2563EB"
            />

            <text
              x="0"
              y="88"
              fill="#8A93A3"
              fontSize="9"
              fontFamily="monospace"
            >
              ANTENNA
            </text>
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
              x="0"
              y="0"
              width="105"
              height="90"
              rx="10"
              fill={active ? "#EFF4FF" : "#FAFAFA"}
              stroke={active ? "#2563EB" : "#C6CCD6"}
              strokeWidth="1.75"
              strokeDasharray={active ? "none" : "4 4"}
            />

            <text
              x="52"
              y="34"
              fill="#0B0F19"
              fontSize="10"
              fontWeight="700"
              fontFamily="monospace"
              textAnchor="middle"
            >
              GRAMWAVE
            </text>

            <text
              x="52"
              y="49"
              fill={active ? "#2563EB" : "#8A93A3"}
              fontSize="8.5"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {active ? "ACTIVE NETWORK" : "BYPASSED"}
            </text>

            <path
              d="M 18 66 H 32 M 32 58 V 74 M 39 58 V 74 M 39 66 H 50 M 50 66 L 60 58 L 70 74 L 80 58 L 86 66"
              stroke={active ? "#2563EB" : "#C6CCD6"}
              strokeWidth="1.5"
            />
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
            <rect
              x="0"
              y="0"
              width="42"
              height="58"
              rx="4"
              fill="#0B0F19"
            />

            <text
              x="21"
              y="34"
              fill="#ffffff"
              fontSize="8.5"
              fontWeight="700"
              fontFamily="monospace"
              textAnchor="middle"
            >
              RFIC
            </text>
          </g>
        </svg>

        {/* Reflection result */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#E4E7EC] pt-4 text-[11px] font-mono">
          <span className="text-[#8A93A3]">
            Reflection Loss (S11)
          </span>

          <span
            className={`shrink-0 font-bold ${active
              ? "text-[#2563EB]"
              : "text-[#B42318]"
              }`}
          >
            {active
              ? "−18.6 dB · Optimal"
              : "−3.2 dB · High Reflection"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Page                                                                  */
/* -------------------------------------------------------------------------- */

export default function HomeTest() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white" style={{ paddingTop: "64px" }}>
      {/* Draft/Test Page Banner */}
      <div className="relative z-20 border-b border-[#FDE0AF] bg-[#FFF7ED] px-4 py-1.5 text-center text-xs font-mono text-[#8A5A00]">
        <strong>LIGHT THEME PREVIEW (/home-test)</strong>{" "}
        — isolated redesign, main site is unaffected.
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 w-full pt-6 pb-16 sm:pt-8 md:pt-10 md:pb-24">
        <div className="grid min-w-0 grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="min-w-0 lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mb-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B0F19] sm:text-5xl md:text-[3.4rem] lg:text-[3.6rem]"
            >
              Engineering signal where towers can&apos;t reach.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mb-9 max-w-xl text-base leading-8 text-[#5B6472] sm:text-lg"
            >
              Gramwave Wireless builds next-generation, handset-side receiver
              technology that keeps phones connected in weak-signal
              environments — no new towers required.
            </motion.p>

            {/* Hero Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/adaptive-wave"
                className={primaryButton}
              >
                <span>Explore Adaptive Wave</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="min-w-0 lg:col-span-6"
          >
            <HeroSchematic />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STATS                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 flex justify-center mt-6 mb-16 sm:mt-8 md:mt-10 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid w-full max-w-5xl grid-cols-1 gap-6 rounded-2xl border border-[#1E293B] bg-[#0B0F19] px-8 py-7 text-center shadow-2xl shadow-black/20 sm:grid-cols-3 sm:gap-4 md:px-12 md:py-8"
        >
          <div className="min-w-0 px-2">
            <span className="block text-2xl font-extrabold font-mono text-white sm:text-3xl">
              R&D
            </span>

            <span className="mt-1.5 block text-[11px] font-mono uppercase tracking-wide text-[#8A93A3]">
              Current Phase
            </span>
          </div>

          <div className="min-w-0 px-2 sm:border-x sm:border-white/10">
            <span className="block text-2xl font-extrabold font-mono text-white sm:text-3xl">
              1
            </span>

            <span className="mt-1.5 block text-[11px] font-mono uppercase tracking-wide text-[#8A93A3]">
              Active Research Initiative
            </span>
          </div>

          <div className="min-w-0 px-2">
            <span className="block text-2xl font-extrabold font-mono text-white sm:text-3xl">
              2026
            </span>

            <span className="mt-1.5 block text-[11px] font-mono uppercase tracking-wide text-[#8A93A3]">
              Founded
            </span>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHY GRAMWAVE                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 w-full py-16 md:py-20">
        <SectionHeading
          eyebrow="Why Gramwave"
          title="Signal shouldn't drop just because you're far from a tower"
          description="We're rethinking the receiver, not the network — building adaptive antenna and impedance-matching systems that live inside the device itself."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8"
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
              link: {
                href: "/adaptive-wave",
                label: "Explore Adaptive Wave",
              },
            },
            {
              img: "/images/cards/whats-next.png",
              title: "What's Next",
              desc: "Simulation and validation today, prototype fabrication and lab testing ahead — with an eye on 6G and satellite integration.",
              link: {
                href: "/roadmap",
                label: "View Roadmap",
              },
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F6F7F9]">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-5 p-7 sm:p-8">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-[#0B0F19]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#5B6472]">
                    {card.desc}
                  </p>
                </div>

                {card.link && (
                  <Link
                    href={card.link.href}
                    className={inlineAction}
                  >
                    <span>{card.link.label}</span>

                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* RESEARCH FOCUS                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative z-10 w-full border-y border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-20">
        <div className="max-content-width">
          <SectionHeading
            eyebrow="Research Focus"
            title="Where we spend our engineering hours"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3"
          >
            {focusAreas.map((area, i) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex h-full min-h-[170px] min-w-0 flex-col justify-between rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg"
                >
                  <div className="min-w-0">
                    <div className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#BFD3FE] bg-[#EFF4FF]">
                      <Icon className="h-5 w-5 text-[#2563EB]" />
                    </div>

                    <h3 className="mb-2.5 text-base font-bold tracking-tight text-[#0B0F19]">
                      {area.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#5B6472]">
                      {area.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PROCESS (HOW WE WORK)                                              */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 w-full py-16 md:py-20">
        <SectionHeading
          eyebrow="How We Work"
          title="From simulation to validated hardware"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="flex h-full min-h-[235px] min-w-0 flex-col justify-between rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-7 shadow-sm transition-all hover:shadow-md"
            >
              <div className="min-w-0">
                <span className="mb-4 block text-3xl font-extrabold font-mono text-[#D8DCE3]">
                  {item.step}
                </span>

                <h3 className="text-base font-bold text-[#0B0F19]">
                  {item.title}
                </h3>

                <span className="mt-2 mb-3 inline-flex max-w-full items-center rounded-md bg-[#EFF4FF] px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.08em] leading-none text-[#2563EB]">
                  {item.tool}
                </span>

                <p className="text-sm leading-relaxed text-[#5B6472]">
                  {item.desc}
                </p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="mt-6 hidden justify-end text-[#D8DCE3] lg:flex">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MILESTONES                                                          */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative z-10 w-full border-y border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-20">
        <div className="max-content-width">
          <SectionHeading
            eyebrow="Progress"
            title="Latest Milestones"
            center
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="relative flex h-full min-h-[190px] min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-7 shadow-sm transition-all hover:shadow-md sm:p-8"
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    backgroundColor: m.color,
                  }}
                />

                <div className="min-w-0">
                  <span
                    className="mb-4 inline-flex min-h-[26px] items-center rounded-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wide leading-none"
                    style={{
                      backgroundColor: `${m.color}15`,
                      color: m.color,
                    }}
                  >
                    {m.status}
                  </span>

                  <h3 className="mb-1.5 text-xl font-bold text-[#0B0F19]">
                    {m.title}
                  </h3>

                  <span className="mb-3.5 block text-[11px] font-mono text-[#8A93A3]">
                    {m.date}
                  </span>

                  <p className="text-sm leading-relaxed text-[#5B6472]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/roadmap"
              className={outlineButton}
            >
              <span>View Full Roadmap</span>

              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA COLLABORATE BANNER                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 w-full pt-16 pb-20 md:pt-20 md:pb-24">
        <div
          className="w-full rounded-3xl bg-[#0B0F19] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
          style={{
            padding: "44px 56px",
          }}
        >
          {/* CTA Content */}
          <div className="min-w-0 max-w-2xl text-center lg:text-left">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.15] tracking-tight text-white">
              Looking for a research partner or lab collaboration?
            </h2>

            <p className="max-w-xl text-sm sm:text-base leading-7 text-[#8A93A3]">
              Open to universities, RF engineers, and research labs who want to
              push wireless connectivity forward with us.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={ctaButton}
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
