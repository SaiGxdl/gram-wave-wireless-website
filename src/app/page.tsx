"use client";

import Link from "next/link";
import RFWaveBackground from "@/components/RFWaveBackground";
import HeroSignalDiagram from "@/components/HeroSignalDiagram";
import ProcessDiagram from "@/components/ProcessDiagram";
import ResearchBlog from "@/components/ResearchBlog";
import {
  ImpedanceMatchingSchematic,
  SignalPropagationCurve,
  AntennaArrayDiagram,
  SimulationHeatmap,
  PatentArchitectureDiagram,
  BeamSteeringDiagram,
} from "@/components/TechnicalDiagrams";
import {
  Signal,
  ArrowRight,
  ShieldCheck,
  FileText,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const collaborationPathways = [
    {
      title: "Universities",
      desc: "Joint academic research, student research internships, and electromagnetic lab sharing.",
      mailtoSubject: "University%20Research%20Collaboration%20Inquiry",
      badge: "Academic R&D",
    },
    {
      title: "RF Engineers",
      desc: "Peer hardware reviews, microstrip topology audits, and simulation model exchanges.",
      mailtoSubject: "RF%20Engineering%20Peer%20Collaboration",
      badge: "Peer Testing",
    },
    {
      title: "Industry Experts",
      desc: "Telecom ecosystem advisory, handset RF integration guidance, and standards alignment.",
      mailtoSubject: "Telecom%20Industry%20Advisory%20Inquiry",
      badge: "Ecosystem",
    },
    {
      title: "Wireless Researchers",
      desc: "Co-authoring technical papers, S-parameter dataset sharing, and propagation trials.",
      mailtoSubject: "Wireless%20Research%20Data%20Sharing",
      badge: "Publications",
    },
    {
      title: "Incubators",
      desc: "Deep-tech venture acceleration, laboratory access, and seed research grants.",
      mailtoSubject: "Incubator%20%26%20Acceleration%20Inquiry",
      badge: "Venture Grant",
    },
    {
      title: "Research Orgs",
      desc: "Anechoic chamber testing partnerships, field trials, and governmental R&D initiatives.",
      mailtoSubject: "Research%20Organization%20Partnership",
      badge: "Field Trials",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col pt-24 sm:pt-28">
      {/* Background Graphic */}
      <RFWaveBackground />

      {/* Hero Section with Interactive Signal Circuit Diagram Visual Proof */}
      <section className="max-content-width py-12 md:py-16 min-h-[70vh] flex flex-col justify-center relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-md px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent-light"
            >
              <Signal className="h-3.5 w-3.5 animate-pulse text-accent-light" />
              <span>Deep-Tech Wireless R&D Lab</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              Advancing Handset Wireless Connectivity
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-blue-400 to-cyan-300">
                Through Active Matching
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg leading-8 text-muted max-w-xl"
            >
              Gramwave Wireless is a deep-tech communication research initiative developing
              next-generation handset-side receiver matching architectures to optimize
              connectivity in weak-signal and shadow-coverage sectors.
            </motion.p>

            {/* 3 CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full"
            >
              <Link href="/adaptive-wave" className="btn-primary flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5">
                <span>Explore Technology</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href="/contact" className="btn-secondary flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5">
                <span>Contact Team</span>
              </Link>

              {/* 3rd Quieter CTA: Read Whitepaper */}
              <Link
                href="/research-ip"
                className="glass hover:bg-white/10 text-muted hover:text-white transition-all flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider px-5 py-3.5 rounded-xl border border-card-border/60 hover:border-accent/40"
              >
                <FileText className="h-4 w-4 text-accent-light" />
                <span>Read Whitepaper</span>
              </Link>
            </motion.div>

            {/* Trust highlights */}
            <div className="pt-4 flex items-center space-x-6 text-[11px] font-mono text-muted-dark border-t border-card-border/30 w-full">
              <span className="flex items-center gap-1.5 text-accent-light font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Patent Pending (India)
              </span>
              <span>•</span>
              <span className="text-muted">Sub-GHz to 6GHz Band</span>
              <span>•</span>
              <span className="text-muted">Handset Form Factor</span>
            </div>
          </div>

          {/* Hero Visual Proof: Live Interactive Circuit & Signal Diagram */}
          <div className="lg:col-span-6 w-full">
            <HeroSignalDiagram />
          </div>
        </div>
      </section>

      {/* Quantified Stat Strip (Qualcomm / Corporate R&D Style) */}
      <section className="max-content-width relative z-10 py-8 mb-16">
        <div className="glass backdrop-blur-xl border border-accent/20 rounded-3xl p-6 sm:p-10 shadow-2xl bg-gradient-to-r from-[#070d24]/90 via-[#030712]/95 to-[#08122c]/90">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-accent-light">
              RESEARCH & R&D TELEMETRY METRICS
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-card-border/40">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center p-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white tracking-tight">
                1
              </span>
              <span className="text-xs font-mono font-bold uppercase text-accent-light mt-2">
                Patent Application
              </span>
              <span className="text-[11px] font-mono text-muted mt-1">
                Filed in India (Temp App No.)
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-blue-400 tracking-tight">
                12+
              </span>
              <span className="text-xs font-mono font-bold uppercase text-accent-light mt-2">
                Months in R&D
              </span>
              <span className="text-[11px] font-mono text-muted mt-1">
                Mathematical & EM Modeling
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center p-2 pt-6 lg:pt-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-emerald-400 tracking-tight">
                +4.2 dB
              </span>
              <span className="text-xs font-mono font-bold uppercase text-emerald-400 mt-2">
                Target Aperture Gain
              </span>
              <span className="text-[11px] font-mono text-muted mt-1">
                Active Receiver Array Sum
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center p-2 pt-6 lg:pt-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-cyan-300 tracking-tight">
                HFSS / CST
              </span>
              <span className="text-xs font-mono font-bold uppercase text-cyan-300 mt-2">
                Simulation Phase: Active
              </span>
              <span className="text-[11px] font-mono text-muted mt-1">
                Full-Wave 3D Field Solvers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gramwave Wireless Section (With Custom Technical Diagrams) */}
      <section className="max-content-width flex flex-col justify-center items-center relative z-10 w-full py-16 md:py-24 border-t border-card-border/20">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-6 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-accent-light">
            <Sparkles className="h-3.5 w-3.5 text-accent-light" />
            <span>Deep-Tech Research & Rationale</span>
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight">
            Why Gramwave Wireless
          </h2>

          <p className="text-base sm:text-lg leading-8 text-muted max-w-3xl mx-auto">
            Gramwave Wireless is focused on advancing handset-side wireless communication through rigorous electromagnetic research rather than expensive infrastructure expansion. Our work investigates adaptive receiver architectures, active impedance matching networks, and compact antenna arrays designed to improve signal reception in weak-coverage sectors.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 w-full"
        >
          {/* Card 1: The Problem */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-3xl flex flex-col justify-between h-full border border-card-border/40 hover:border-red-500/40 transition-all duration-300">
            <div className="space-y-4">
              <SignalPropagationCurve />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono pt-2">1. The Connectivity Gap</h3>
              <p className="text-sm leading-7 text-muted">
                Standard mobile antennas suffer up to 12 dB mismatch loss in rural edge sectors or human body hand-grip loading, leading to dropped calls.
              </p>
            </div>
            <Link href="/adaptive-wave#signal-analysis" className="text-[11px] uppercase font-mono font-bold text-red-400 tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Read Signal Analysis</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 2: Our Approach */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-3xl flex flex-col justify-between h-full border border-card-border/40 hover:border-accent/40 transition-all duration-300">
            <div className="space-y-4">
              <ImpedanceMatchingSchematic />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono pt-2">2. Active Receiver Matching</h3>
              <p className="text-sm leading-7 text-muted">
                Developing handset-side active impedance networks that dynamically tune component values to preserve complex-conjugate match (Z_in = Z_L*).
              </p>
            </div>
            <Link href="/adaptive-wave#architecture" className="text-[11px] uppercase font-mono font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Explore Adaptive Wave</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 3: Technical Approach */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-3xl flex flex-col justify-between h-full border border-card-border/40 hover:border-blue-500/40 transition-all duration-300">
            <div className="space-y-4">
              <AntennaArrayDiagram />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono pt-2">3. Sub-wavelength Arrays</h3>
              <p className="text-sm leading-7 text-muted">
                Integrating multi-element compact feeds and phase-coherent delay lines optimized for modern smartphone mechanical envelopes.
              </p>
            </div>
            <Link href="/research-ip#directions" className="text-[11px] uppercase font-mono font-bold text-blue-400 tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Research Directions</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 4: Research Status */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-3xl flex flex-col justify-between h-full border border-card-border/40 hover:border-purple-500/40 transition-all duration-300">
            <div className="space-y-4">
              <SimulationHeatmap />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono pt-2">4. 3D Electromagnetic Solvers</h3>
              <p className="text-sm leading-7 text-muted">
                Running high-frequency finite element audits in Ansys HFSS and CST Studio to measure radiation efficiency and S-parameter metrics.
              </p>
            </div>
            <Link href="/roadmap#milestones" className="text-[11px] uppercase font-mono font-bold text-purple-400 tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Technical Roadmap</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 5: Intellectual Property */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-3xl flex flex-col justify-between h-full border border-card-border/40 hover:border-green-500/40 transition-all duration-300">
            <div className="space-y-4">
              <PatentArchitectureDiagram />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono pt-2">5. Patent Protection</h3>
              <p className="text-sm leading-7 text-muted">
                Provisional patent filed in India securing key proprietary active matching topologies and receiver-side phase summation logic.
              </p>
            </div>
            <Link href="/research-ip#patent-filing" className="text-[11px] uppercase font-mono font-bold text-green-400 tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Patent Filing Details</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 6: Long-term Vision */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-3xl flex flex-col justify-between h-full border border-card-border/40 hover:border-yellow-500/40 transition-all duration-300">
            <div className="space-y-4">
              <BeamSteeringDiagram />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono pt-2">6. 6G & Satellite Vision</h3>
              <p className="text-sm leading-7 text-muted">
                Extending active receiver principles toward future 6G terrestrial-non-terrestrial networks (NTN) and autonomous beam steering.
              </p>
            </div>
            <Link href="/research-ip#ethics" className="text-[11px] uppercase font-mono font-bold text-yellow-400 tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Principles & Ethics</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Research-Driven Innovation (With Horizontal Step Process Diagram) */}
      <section className="max-content-width py-20 md:py-28 relative z-10 w-full border-t border-card-border/20 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center space-x-2 rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-6 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-accent-light mb-4">
            Structured Workflow
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight">
            Research-Driven Innovation Methodology
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-8 text-muted max-w-3xl mx-auto">
            At Gramwave Wireless, we advance technology through a systematic 4-phase engineering pipeline: from rigorous 3D simulation to calibrated chamber validation.
          </p>
        </div>

        {/* Horizontal Process Diagram Component */}
        <ProcessDiagram />

        <div className="mt-6 text-center">
          <Link
            href="/research-ip"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-accent-light hover:text-white transition-colors glass border border-accent/30 px-6 py-3 rounded-full"
          >
            <span>Read Deep Methodology Whitepaper</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Leadership & Research Team (Enhanced Founder Credentials Profile) */}
      <section className="max-content-width py-20 md:py-28 relative z-10 w-full border-t border-card-border/20 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-6 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-accent-light">
            Team & Leadership
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight">
            Led by Engineering Purpose
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-8 text-muted max-w-3xl mx-auto">
            Gramwave Wireless is led by dedicated RF researchers combining electromagnetic modeling, mathematical synthesis, and circuit design to solve fundamental wireless reception constraints.
          </p>
        </div>

        {/* Enhanced High-Credibility Founder Card */}
        <div className="w-full max-w-4xl glass rounded-3xl border border-accent/30 p-8 sm:p-12 shadow-2xl bg-gradient-to-r from-[#060c20]/90 to-[#030712]/95 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
            {/* Founder Avatar Representation */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative h-32 w-32 rounded-3xl bg-gradient-to-tr from-accent/30 via-blue-600/30 to-cyan-400/20 border-2 border-accent/50 p-1 flex items-center justify-center shadow-xl">
                <div className="w-full h-full rounded-[22px] bg-[#030712] flex flex-col items-center justify-center space-y-1">
                  <GraduationCap className="h-10 w-10 text-accent-light" />
                  <span className="text-[9px] font-mono font-bold text-accent-light uppercase tracking-widest">
                    RF LEAD
                  </span>
                </div>
              </div>
              <span className="mt-3 inline-flex items-center space-x-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <ShieldCheck className="h-3 w-3" />
                <span>Verified Lead Researcher</span>
              </span>
            </div>

            {/* Profile Information */}
            <div className="flex-1 space-y-5 text-center md:text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-light font-bold">
                  Founder & Lead RF Researcher
                </span>

                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  Sai Wireless & RF Engineering Researcher
                </h3>
              </div>

              <p className="text-sm sm:text-base leading-8 text-muted">
                Specializing in handset-side receiver matching, active impedance tuning circuits, and electromagnetic field modeling. Research focus includes complex-conjugate impedance optimization and compact microstrip array layouts for weak-signal wireless environments.
              </p>

              {/* Verified Credentials */}
              <div className="space-y-2 pt-1 text-xs font-mono">
                <div className="flex items-center justify-center md:justify-start gap-2 text-muted">
                  <Award className="h-4 w-4 text-accent-light shrink-0" />
                  <span>Specialization: RF & Microwave Engineering / Applied Electromagnetics</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-muted">
                  <Layers className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Focus: Active Receiver Arrays, Ansys HFSS & CST Electromagnetic Solvers</span>
                </div>
              </div>

              {/* Tags & LinkedIn Link */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
                <a
                  href="https://linkedin.com/company/gramwave-wireless"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs uppercase font-mono font-bold px-5 py-2.5 inline-flex items-center space-x-2 rounded-xl"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </a>

                <Link
                  href="/contact"
                  className="btn-secondary text-xs uppercase font-mono font-bold px-5 py-2.5 inline-flex items-center space-x-2 rounded-xl"
                >
                  <Mail className="h-4 w-4" />
                  <span>Direct Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate With Us (Actionable Interactive Trigger Cards) */}
      <section className="max-content-width py-20 md:py-28 relative z-10 w-full border-t border-card-border/20 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-6 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-accent-light mb-4">
            Partnership & R&D Pathways
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono mb-6">
            Collaborate With Us
          </h2>

          <p className="text-base sm:text-lg leading-8 text-muted max-w-3xl mx-auto">
            We actively invite joint research partnerships with universities, RF engineers, incubators, and research laboratories. Select an actionable pathway below to start a discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {collaborationPathways.map((path, idx) => (
            <a
              key={idx}
              href={`mailto:founder@gramwavewireless.in?subject=${path.mailtoSubject}`}
              className="glass rounded-2xl border border-card-border/40 p-6 flex flex-col justify-between hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-accent-light bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                    {path.badge}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-dark group-hover:text-accent-light transition-colors" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider font-mono text-white group-hover:text-accent-light transition-colors mb-2">
                  {path.title}
                </h3>
                <p className="text-xs text-muted leading-6 mb-4">
                  {path.desc}
                </p>
              </div>

              <span className="text-[11px] font-mono font-bold text-accent-light uppercase tracking-wider flex items-center space-x-1 pt-2 group-hover:underline">
                <span>Inquire Pathway</span>
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* News & Updates (Interactive Research Blog & Technical Changelog) */}
      <section className="max-content-width py-20 md:py-28 relative z-10 w-full border-t border-card-border/20">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-6 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-accent-light mb-4">
            Technical Changelog & Lab Notes
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-mono">
            News & Research Articles
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-8 text-muted max-w-3xl mx-auto">
            Tracking verified technical milestones, simulation result write-ups, active impedance research papers, and patent progress.
          </p>
        </div>

        {/* Interactive Blog Component */}
        <ResearchBlog />
      </section>
    </div>
  );
}
