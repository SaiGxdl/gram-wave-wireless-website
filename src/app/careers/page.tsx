"use client";

import {
  Compass,
  Cpu,
  Bookmark,
  Mail,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const gains = [
    "Exposure to wireless communication research and academic standards",
    "Mentorship on structured technical investigations and calculations",
    "Practical experience with simulation tools (HFSS, MATLAB) and technical writing",
    "Opportunities to contribute to early-stage deep-tech R&D from the ground up",
  ];

  const whoShouldApply = [
    { title: "RF Engineers", icon: Cpu },
    { title: "Electronics Students", icon: GraduationCap },
    { title: "Wireless Researchers", icon: Compass },
    { title: "Signal Enthusiasts", icon: Bookmark },
  ];

  const workItems = [
    "Literature reviews and research logging",
    "RF path simulation and electromagnetic drafting",
    "Drafting technical patent documents",
    "Participating in design brainstorming sessions",
  ];

  const openings = [
    {
      title: "Research Intern",
      type: "Remote / Hybrid",
      duration: "3–6 Months",
      desc: "For electronics, communication, or physics students interested in wireless research. Focuses on literature curation, baseline math review, and HFSS drafting assistance.",
    },
    {
      title: "Wireless Research Associate",
      type: "Part-Time / Academic Partnership",
      duration: "Flexible",
      desc: "Focuses on developing simulation matrices and testing phase coherence designs. Ideally suited for postgraduate research scholars in telecommunications.",
    },
    {
      title: "RF Engineer (Contract / Advisor)",
      type: "Project-Based Consult",
      duration: "Ongoing",
      desc: "Reviewing feed network layouts, schematic architectures, and simulation outputs. Suitability: Industry veterans or PhD scholars in RF front-ends.",
    },
    {
      title: "Academic / Industry Mentor",
      type: "Honorary Advisory Board",
      duration: "Long-Term",
      desc: "Providing rigorous peer review on our technical directions, reviewing publication submissions, and checking patent claims. Open to university professors and lab leads.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full pt-10 pb-16 sm:pt-14 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Careers &amp; Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Opportunities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-base leading-8 text-[#5B6472] sm:text-lg md:text-xl md:leading-9"
          >
            We are looking for dedicated individuals who value research integrity,
            technical depth, and rigorous engineering to join our early R&amp;D efforts.
          </motion.p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. GAINS, WORK ITEMS, & APPLY SECTION                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-24">
        <div className="max-content-width">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
            {/* Left Column: Gains & Work Items */}
            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
              {/* What You'll Gain */}
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                    Benefits
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#0B0F19]">
                    What You&apos;ll Gain
                  </h2>
                </div>

                <div className="space-y-4">
                  {gains.map((gain, i) => (
                    <div key={i} className="flex items-start space-x-3.5 text-sm text-[#5B6472]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                      <p className="leading-relaxed">{gain}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Work On */}
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                    Responsibilities
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#0B0F19]">
                    What You&apos;ll Work On
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] p-3.5 text-sm text-[#5B6472]"
                    >
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#2563EB]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Who Should Apply & Application Process */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              {/* Who Should Apply */}
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                    Target Profile
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#0B0F19]">
                    Who Should Apply
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {whoShouldApply.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-5 flex flex-col items-center justify-center text-center space-y-3 transition-all hover:border-[#2563EB] hover:bg-white"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#0B0F19]">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Application Process */}
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 space-y-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                    How to Apply
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#0B0F19]">
                    Application Process
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#5B6472]">
                    To apply for any intern or research position, please compile your CV and a concise statement (under 200 words) summarizing your interest and research matches. Send it directly to:
                  </p>
                </div>

                <a
                  href="mailto:founder@gramwavewireless.in?subject=GramWave%20Wireless%20Research%20Application"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#0B0F19] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#2563EB] active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  <span>Submit Application via Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. OPEN POSITIONS & ROLES                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full pt-16 pb-20 sm:pt-20 md:pt-24 md:pb-28">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            Openings
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
            Open Positions &amp; Roles
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5B6472]">
            Active areas where we welcome academic contributors and research fellows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {openings.map((open, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 flex flex-col justify-between space-y-6 transition-all hover:border-[#2563EB] hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] pb-4">
                  <h3 className="text-lg font-extrabold text-[#0B0F19]">
                    {open.title}
                  </h3>
                  <span className="rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-3 py-1 font-mono text-[10px] font-bold text-[#2563EB] uppercase">
                    {open.type}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#5B6472]">{open.desc}</p>
              </div>

              <div className="rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] px-4 py-2.5 font-mono text-xs text-[#8A93A3]">
                Commitment: <span className="font-bold text-[#0B0F19]">{open.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
