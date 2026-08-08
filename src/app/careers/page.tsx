"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import {
  Compass,
  Cpu,
  Bookmark,
  Mail,
  GraduationCap,
} from "lucide-react";

export default function CareersPage() {
  const gains = [
    "Exposure to wireless communication research and academic standards",
    "Mentorship on structured technical investigations and calculations",
    "Practical experience with simulation tools (HFSS, MATLAB) and technical writing",
    "Opportunities to contribute to early-stage deep-tech R&D from the ground up",
  ];

  const whoShouldApply = [
    { title: "RF Engineers", icon: <Cpu className="h-5 w-5" /> },
    { title: "Electronics Students", icon: <GraduationCap className="h-5 w-5" /> },
    { title: "Wireless Researchers", icon: <Compass className="h-5 w-5" /> },
    { title: "Signal processing enthusiasts", icon: <Bookmark className="h-5 w-5" /> },
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
    <div className="relative min-h-screen pt-4 sm:pt-8 pb-24">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent-light">
              Careers & Internships
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white uppercase font-mono">
            Opportunities
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-8 text-muted">
            We are looking for dedicated individuals who value research integrity, technical depth, and rigorous engineering to join our early R&D efforts.
          </p>
        </div>

        {/* What You'll Gain, Who, What we work on */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-12 md:mt-16 pt-4 items-stretch">
          {/* Gains & Work items */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            {/* What you'll gain */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white font-mono text-center lg:text-left">
                What You&apos;ll Gain
              </h2>
              <div className="glass p-6.5 rounded-xl border border-card-border/30 space-y-4">
                {gains.map((gain, i) => (
                  <div key={i} className="flex items-start space-x-3.5 text-sm text-muted">
                    <span className="text-accent-light font-mono">✓</span>
                    <p className="leading-relaxed">{gain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What you'll work on */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white font-mono text-center lg:text-left">
                What You&apos;ll Work On
              </h2>
              <div className="glass p-6.5 rounded-xl border border-card-border/30 grid grid-cols-1 md:grid-cols-2 gap-4">
                {workItems.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-sm text-muted">
                    <span className="text-accent-light font-mono">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who should apply & Apply layout */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            {/* Who */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white font-mono text-center lg:text-left">
                Who Should Apply
              </h2>
              <div className="glass p-6 rounded-xl border border-card-border/30 grid grid-cols-2 gap-4">
                {whoShouldApply.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4.5 bg-card/25 border border-card-border/50 rounded-lg flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="text-accent-light">{item.icon}</div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Info */}
            <div className="glass p-6.5 rounded-xl border border-card-border/30 space-y-5 flex flex-col justify-between flex-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
                Application Process
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                To apply for any intern or research position, please compile your CV and a concise statement (under 200 words) summarizing your interest and research matches. Send it directly to:
              </p>
              <a
                href="mailto:founder@gramwavewireless.in?subject=GramWave%20Wireless%20Research%20Application"
                className="btn-primary w-full"
              >
                <Mail className="h-4.5 w-4.5 mr-2" />
                <span>Submit Application via Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Current Openings */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center">
            Open Positions & Roles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {openings.map((open, idx) => (
              <div
                key={idx}
                className="glass p-6.5 rounded-xl border border-card-border/30 flex flex-col justify-between space-y-5 h-full hover-card"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-card-border/30 pb-3">
                    <h3 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                      {open.title}
                    </h3>
                    <span className="text-[9px] font-mono text-accent-light bg-accent/8 px-2.5 py-0.5 rounded border border-accent/15 uppercase">
                      {open.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{open.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-muted-dark uppercase tracking-wide">
                  Commitment: {open.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
