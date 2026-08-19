"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sliders,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Research Focus Data — Grouped For Interactive Toggle                       */
/* -------------------------------------------------------------------------- */

type FocusSlide = {
  label: string;
  title: string;
  sub: string;
  desc: string;
  image: string;
};

type FocusGroup = {
  key: string;
  label: string;
  color: string;
  overview: FocusSlide;
  items: FocusSlide[];
};

const focusGroups: FocusGroup[] = [
  {
    key: "core",
    label: "Core Engineering",
    color: "#EA580C",
    overview: {
      label: "Overview",
      title: "Core Engineering",
      sub: "The physical layer, built right.",
      desc: "The physical RF systems — antennas, front-ends, and matching networks — that keep a signal alive before it ever reaches the chipset.",
      image: "/images/research/core-overview.png",
    },
    items: [
      {
        label: "Wireless Communication",
        title: "Wireless Communication",
        sub: "RF path budgets, done right.",
        desc: "System-level transceiver budgets and propagation analysis across every band we design for.",
        image: "/images/research/core-wireless.png",
      },
      {
        label: "Antenna Systems",
        title: "Antenna Systems",
        sub: "Small aperture, full performance.",
        desc: "Multi-element arrays and software-defined impedance networks packed into handset-scale footprints.",
        image: "/images/research/core-antenna.png",
      },
      {
        label: "RF Engineering",
        title: "RF Engineering",
        sub: "Cleaner signal, less noise.",
        desc: "Active feed structures and matching circuit layouts built for front-end noise reduction.",
        image: "/images/research/core-rf.png",
      },
    ],
  },
  {
    key: "systems",
    label: "Systems & Vision",
    color: "#0D9488",
    overview: {
      label: "Overview",
      title: "Systems & Vision",
      sub: "Where signal becomes intelligence.",
      desc: "The processing, deployment, and forward-looking work that turns a clean signal into a connection that reaches further.",
      image: "/images/research/systems-overview.png",
    },
    items: [
      {
        label: "Signal Processing",
        title: "Signal Processing",
        sub: "Coherence out of chaos.",
        desc: "Phase coherent aggregation and software-defined matching logic tuned for weak-signal environments.",
        image: "/images/research/systems-signal.png",
      },
      {
        label: "Rural & Emergency Networks",
        title: "Rural & Emergency Networks",
        sub: "Signal where towers can't reach.",
        desc: "Targeted systems built to restore link connectivity in disasters and fringe mountain and valley terrain.",
        image: "/images/research/systems-rural.png",
      },
      {
        label: "Future Technologies",
        title: "Future Technologies",
        sub: "Beyond today's bands.",
        desc: "Early investigations into 6G topologies, non-terrestrial satellite-cellular integration, and AI-assisted matching.",
        image: "/images/research/systems-future.png",
      },
    ],
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

/* -------------------------------------------------------------------------- */
/* Button Styles                                                              */
/* -------------------------------------------------------------------------- */

const primaryButton =
  "inline-flex min-h-[46px] min-w-[200px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#2563EB] px-6 py-3 text-xs font-bold font-mono uppercase tracking-[0.08em] leading-none text-white shadow-md shadow-blue-500/15 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]";

const inlineAction =
  "inline-flex min-h-[32px] w-fit max-w-full shrink-0 items-center justify-start gap-1.5 whitespace-nowrap text-xs font-mono font-bold uppercase tracking-wider leading-none text-[#2563EB] transition-all duration-200 hover:gap-2.5 hover:text-[#1D4ED8]";

const ctaButton =
  "inline-flex min-h-[50px] min-w-[160px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-white px-8 py-4 text-xs font-bold font-mono uppercase tracking-[0.08em] leading-none text-[#0B0F19] shadow-lg transition-all duration-200 hover:bg-[#F6F7F9] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]";

/* -------------------------------------------------------------------------- */
/* Section Heading Helper                                                     */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-12 max-w-2xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      <span
        className={`inline-flex max-w-full items-center rounded-full px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] leading-none ${dark
          ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
          : "border border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]"
          }`}
      >
        {eyebrow}
      </span>

      <h2
        className={`mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight md:text-4xl ${dark ? "text-white" : "text-[#0B0F19]"
          }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-[#8A93A3]" : "text-[#5B6472]"
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero Schematic Component                                                   */
/* -------------------------------------------------------------------------- */

function HeroSchematic() {
  const [active, setActive] = useState(true);

  return (
    <div className="relative z-10 w-full min-w-0 overflow-hidden rounded-md border border-[#E4E7EC] bg-white shadow-[0_1px_3px_rgba(11,15,25,0.05)]">
      {/* Simulator Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-6 py-4.5 sm:px-7">
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
          className={`inline-flex min-h-[32px] min-w-[82px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide leading-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] hover:scale-105 active:scale-95 cursor-pointer ${active
            ? "border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]"
            : "min-w-[100px] border-[#F3C8C8] bg-[#FDF2F2] text-[#B42318]"
            }`}
        >
          <Sliders className="h-3 w-3 shrink-0" />
          <span>{active ? "Active" : "Bypassed"}</span>
        </button>
      </div>

      {/* Simulator Body */}
      <div className="p-6 sm:p-7">
        <svg
          viewBox="0 0 500 200"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="RF matching simulator schematic"
        >
          <rect width="500" height="200" fill="#FAFBFC" rx="2" />

          {/* Antenna */}
          <g transform="translate(30, 70)">
            <path
              d="M 0 30 L 25 30 M 25 0 L 25 60 M 25 0 L 45 -15 M 25 30 L 45 30 M 25 60 L 45 75"
              stroke="#0B0F19"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle cx="25" cy="30" r="4" fill="#2563EB" />

            <text
              x="0"
              y="92"
              fill="#8A93A3"
              fontSize="9"
              fontFamily="monospace"
            >
              ANTENNA
            </text>
          </g>

          {/* Input wave */}
          <path
            d="M 80 100 Q 114 73, 142 100 T 202 100"
            stroke={active ? "#2563EB" : "#B45309"}
            strokeWidth={active ? "2.5" : "1.5"}
            fill="none"
            strokeDasharray={active ? "8 4" : "4 4"}
            className="transition-all duration-300"
          />

          {/* Matching block */}
          <g transform="translate(202, 48)">
            <rect
              x="0"
              y="0"
              width="105"
              height="104"
              rx="2"
              fill={active ? "#EFF4FF" : "#FAFAFA"}
              stroke={active ? "#2563EB" : "#C6CCD6"}
              strokeWidth="1.75"
              strokeDasharray={active ? "none" : "4 4"}
            />

            <text
              x="52"
              y="30"
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
              d="M 18 76 H 32 M 32 68 V 84 M 39 68 V 84 M 39 76 H 50 M 50 76 L 60 68 L 70 84 L 80 68 L 86 76"
              stroke={active ? "#2563EB" : "#C6CCD6"}
              strokeWidth="1.5"
            />
          </g>

          {/* Output wave */}
          <path
            d="M 307 100 Q 340 57, 372 100 T 437 100"
            stroke={active ? "#06B6D4" : "#8A93A3"}
            strokeWidth={active ? "3" : "1.5"}
            fill="none"
            strokeDasharray={active ? "6 3" : "3 3"}
            className="transition-all duration-300"
          />

          {/* RFIC */}
          <g transform="translate(420, 70)">
            <rect x="0" y="0" width="42" height="58" rx="1" fill="#0B0F19" />

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
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-[#E4E7EC] pt-4 text-[11px] font-mono">
          <span className="text-[#8A93A3]">Reflection Loss (S11)</span>

          <span
            className={`shrink-0 whitespace-nowrap font-bold ${active ? "text-[#2563EB]" : "text-[#B42318]"
              }`}
          >
            {active ? "−18.6 dB · Optimal" : "−3.2 dB · High Reflection"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Research Focus Interactive Toggle                                         */
/* MediaTek Products / Technology inspired layout                            */
/* -------------------------------------------------------------------------- */

function ResearchFocusToggle() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeTab, setActiveTab] = useState(-1);

  const group = focusGroups[activeGroup];

  const current =
    activeTab === -1 ? group.overview : group.items[activeTab];

  const accent = group.color;

  return (
    <div className="mx-auto flex w-full max-w-[1504px] flex-col gap-4 sm:gap-5 md:gap-6">
      {/* ============================================================ */}
      {/* SECTION HEADER & GROUP SWITCHER                              */}
      {/* ============================================================ */}

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-mono font-medium uppercase tracking-[0.18em] text-white">
            RESEARCH FOCUS
          </span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto">
          {focusGroups.map((g, i) => (
            <div key={g.key} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  className="h-[24px] w-[2px] shrink-0"
                  style={{
                    backgroundColor: accent,
                  }}
                />
              )}

              <button
                type="button"
                onClick={() => {
                  setActiveGroup(i);
                  setActiveTab(-1);
                }}
                aria-pressed={i === activeGroup}
                className={`cursor-pointer whitespace-nowrap bg-transparent p-0 text-[17px] font-medium uppercase leading-none tracking-[-0.02em] transition-colors duration-200 ${
                  i === activeGroup
                    ? "text-white"
                    : "text-[#8A8F96] hover:text-white"
                }`}
              >
                {g.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* FEATURE CARD                                                 */}
      {/* ============================================================ */}

      <div className="relative h-auto lg:h-[360px] lg:min-h-[360px] lg:max-h-[360px] w-full overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${group.key}-${activeTab}`}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -5,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="flex flex-col lg:grid lg:grid-cols-2 h-auto lg:h-[360px] min-h-0 w-full"
          >
            {/* ====================================================== */}
            {/* TOP / LEFT PANEL (TEXT)                                */}
            {/* ====================================================== */}

            <div className="flex h-auto lg:h-[360px] min-h-0 min-w-0 flex-col justify-start pt-10 lg:justify-center lg:pt-0 bg-white py-10 px-10 sm:py-12 sm:px-14 lg:py-10 lg:pl-20 lg:pr-12 xl:pl-24 xl:pr-14">
              <div className="w-full">
                <div
                  className="border-l-[4px] pl-6 sm:pl-7"
                  style={{
                    borderColor: accent,
                  }}
                >
                  {/* ==================================================== */}
                  {/* TITLE                                                */}
                  {/* ==================================================== */}
                  <h3
                    className={`m-0 max-w-[620px] font-normal uppercase leading-[1.05] tracking-[-0.03em] text-[#0B0F19] ${
                      activeTab === -1
                        ? "text-[28px] sm:text-[34px] lg:text-[36px] xl:text-[38px]"
                        : "text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[30px]"
                    }`}
                  >
                    {current.title}
                  </h3>

                  {/* ==================================================== */}
                  {/* SUBTITLE                                             */}
                  {/* ==================================================== */}
                  {current.sub && (
                    <p className="mt-3 mb-0 max-w-[570px] text-[14px] sm:text-[15px] font-medium leading-[1.4] text-[#5B6472]">
                      {current.sub}
                    </p>
                  )}

                  {/* ==================================================== */}
                  {/* DESCRIPTION                                          */}
                  {/* ==================================================== */}
                  <p className="mt-2.5 mb-0 max-w-[610px] text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-[1.48] text-[#5B6472]">
                    {current.desc}
                  </p>

                  {/* ==================================================== */}
                  {/* LEARN MORE                                            */}
                  {/* ==================================================== */}
                  {activeTab !== -1 && (
                    <Link
                      href="/adaptive-wave"
                      className="mt-5 inline-flex h-[38px] sm:h-[40px] items-center justify-center rounded-full px-5 sm:px-6 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]"
                      style={{
                        backgroundColor: accent,
                      }}
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/* BOTTOM / RIGHT IMAGE                                    */}
            {/* ====================================================== */}

            <div className="relative h-[240px] sm:h-[290px] lg:h-[360px] min-h-0 w-full overflow-hidden bg-white">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 752px"
                className="object-contain object-center"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============================================================ */}
      {/* CATEGORY NAVIGATION (SLIDES / TABS)                           */}
      {/* ============================================================ */}

      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4 lg:gap-x-8">
        {/* ============================================================ */}
        {/* OVERVIEW                                                     */}
        {/* ============================================================ */}
        <button
          type="button"
          onClick={() => setActiveTab(-1)}
          className="group flex min-h-[58px] w-full flex-col items-start border-t-[3px] pt-4 text-left transition-all duration-200 cursor-pointer"
          style={{
            borderColor:
              activeTab === -1 ? accent : "rgba(255,255,255,0.2)",
          }}
        >
          <span
            className={`text-[14px] sm:text-[15px] font-semibold uppercase leading-[1.2] tracking-[-0.01em] transition-colors duration-200 ${
              activeTab === -1
                ? "text-white"
                : "text-[#8A8F96] group-hover:text-white"
            }`}
          >
            Overview
          </span>
        </button>

        {/* ============================================================ */}
        {/* CATEGORY ITEMS                                               */}
        {/* ============================================================ */}
        {group.items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveTab(i)}
            className="group flex min-h-[58px] w-full flex-col items-start border-t-[3px] pt-4 text-left transition-all duration-200 cursor-pointer"
            style={{
              borderColor:
                activeTab === i ? accent : "rgba(255,255,255,0.2)",
            }}
          >
            <span
              className={`text-[14px] sm:text-[15px] font-semibold uppercase leading-[1.2] tracking-[-0.01em] transition-colors duration-200 ${
                activeTab === i
                  ? "text-white"
                  : "text-[#8A8F96] group-hover:text-white"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Home Page                                                             */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* ------------------------------------------------------------------ */}
      {/* HERO SECTION                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 w-full pt-10 pb-16 sm:pt-12 md:pt-14 lg:pt-16 md:pb-24">
        <div className="grid min-w-0 grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="min-w-0 lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mb-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B0F19] sm:text-5xl md:text-[3.4rem] lg:text-[3.6rem]"
            >
              Advancing Wireless Reception Through Engineering.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mb-9 max-w-xl text-base leading-8 text-[#5B6472] sm:text-lg"
            >
              Gramwave Wireless develops handset-side receiver technologies
              designed to improve signal reception and connectivity in weak-signal
              environments.
            </motion.p>

            {/* Hero Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/adaptive-wave" className={primaryButton}>
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
      {/* STATS SECTION                                                      */}
      {/* ------------------------------------------------------------------ */}

      <section className="max-content-width relative z-10 flex justify-center mt-4 mb-16 sm:mt-6 md:mt-8 md:mb-20">
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
      {/* WHY GRAMWAVE SECTION                                               */}
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
                href: "/research",
                label: "Explore Research",
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
                  <Link href={card.link.href} className={inlineAction}>
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
      {/* RESEARCH FOCUS (INTERACTIVE TOGGLE SECTION)                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative z-10 w-full border-y border-[#3a3a3a] bg-[#2D2D2D] py-10 sm:py-14 md:py-16">
        <div className="max-content-width !px-12 sm:!px-16 md:!px-24">
          <ResearchFocusToggle />
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
      {/* CTA COLLABORATE BANNER                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-20 md:py-28">
        <div className="max-content-width">
          <div
            className="flex w-full flex-col items-center justify-between gap-10 rounded-2xl bg-[#0B0F19] shadow-2xl lg:flex-row lg:gap-16"
            style={{
              padding: "50px 80px",
            }}
          >
            {/* CTA Content */}
            <div className="min-w-0 max-w-2xl text-center lg:text-left">
              <h2 className="mb-3 text-xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-2xl md:text-3xl">
                Looking for a research partner or lab collaboration?
              </h2>

              <p className="max-w-xl text-sm leading-7 text-[#8A93A3] sm:text-base">
                Open to universities, RF engineers, and research labs who want to
                push wireless connectivity forward with us.
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/contact" className={ctaButton}>
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
