"use client";

import Link from "next/link";
import RFWaveBackground from "@/components/RFWaveBackground";
import {
  Signal,
  Cpu,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileCheck,
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col pt-24">
      {/* Background Graphic */}
      <RFWaveBackground />

      {/* Hero Section */}
      <section className="max-content-width pt-16 pb-12 flex flex-col items-center text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 bg-accent/8 border border-accent/20 px-3.5 py-1 rounded-full text-accent-light mb-6"
        >
          <Signal className="h-3.5 w-3.5 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-semibold">
            Deep-Tech Wireless Research Startup
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] mb-6"
        >
          Advancing Wireless Connectivity <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-blue-400">
            Through Research
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-sm md:text-base text-muted max-w-2xl leading-relaxed mb-4"
        >
          Gramwave Wireless is a deep-tech communication research startup developing next-generation handset-side receiver matching designs to optimize connectivity in weak-signal sectors.
        </motion.p>

        {/* Plain-Language Summary for Non-RF Specialists */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-xs md:text-sm text-accent-light/90 max-w-xl leading-relaxed mb-10 font-mono"
        >
          Simply put: We build smart internal receiver technology that helps mobile devices maintain strong, stable connections in signal dead-zones — without needing expensive new cell towers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Link href="/adaptive-wave" className="btn-primary w-full sm:w-auto">
            Explore Technology
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Contact Research Team
          </Link>
        </motion.div>
      </section>

      {/* Current Status Banner (Visual Separator) */}
      <section className="max-content-width py-8 border-b border-card-border/20 relative z-10 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass border border-accent/15 rounded-xl p-6 text-center max-w-2xl mx-auto w-full flex flex-col items-center justify-center"
        >
          <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold block mb-2 text-center">
            Current Status
          </span>
          <p className="text-xs md:text-sm text-muted leading-relaxed max-w-lg mx-auto text-center">
            Gramwave Wireless is currently in the <strong>research and technology validation phase</strong>. Prototype fabrication and laboratory testing are planned as future milestones.
          </p>
        </motion.div>
      </section>

      {/* Why Gramwave Wireless Section */}
      <section className="max-content-width section-spacing relative z-10 w-full space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase font-mono text-center">
            Why Gramwave Wireless
          </h2>
          <p className="text-xs md:text-sm text-muted max-w-xl mx-auto leading-relaxed text-center">
            Focusing on fundamental physical layout limitations and weak-signal boundaries with rigorous scientific methods.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1: The Problem */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="h-11 w-11 rounded-lg bg-red-500/8 border border-red-500/15 flex items-center justify-center text-red-400">
                <Signal className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">The Problem</h3>
              <p className="text-xs md:text-sm text-muted leading-relaxed">
                The connectivity gap still exists. Millions in rural communities, mountainous grids, and disaster limits face drop-outs even with tower infrastructure present.
              </p>
            </div>
            <Link href="/adaptive-wave" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Read Signal Analysis</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 2: Our Approach */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="h-11 w-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                <Cpu className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Our Approach</h3>
              <p className="text-sm text-muted leading-relaxed">
                We are developing active impedance matching systems and receiver array configurations directly at the device side to boost aperture reception coefficients.
              </p>
            </div>
            <Link href="/adaptive-wave" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Explore Adaptive Wave</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 3: Our Technical Approach */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="h-11 w-11 rounded-lg bg-blue-500/8 border border-blue-500/15 flex items-center justify-center text-blue-400">
                <Compass className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Our Technical Approach</h3>
              <p className="text-sm text-muted leading-relaxed">
                Using sub-wavelength arrays, phase-coherent aggregation circuits, and constructive matching logic optimized for modern smartphone form factors.
              </p>
            </div>
            <Link href="/research-ip" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Research Directions</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 4: Current Research Status */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="h-11 w-11 rounded-lg bg-purple-500/8 border border-purple-500/15 flex items-center justify-center text-purple-400">
                <BookOpen className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Current Research Status</h3>
              <p className="text-sm text-muted leading-relaxed">
                Currently running simulation audits in electromagnetic and analytical tools to measure gains, impedance deviations, and baseline signal noise parameters.
              </p>
            </div>
            <Link href="/roadmap" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>View Technical Roadmap</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 5: Intellectual Property */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="h-11 w-11 rounded-lg bg-green-500/8 border border-green-500/15 flex items-center justify-center text-green-400">
                <FileCheck className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Intellectual Property</h3>
              <p className="text-sm text-muted leading-relaxed">
                A provisional patent application has been filed in India, securing key proprietary design rules for active handset matching algorithms.
              </p>
            </div>
            <Link href="/research-ip" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Patent Filing Status</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 6: Long-term Vision */}
          <motion.div variants={itemVariants} className="hover-card p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="h-11 w-11 rounded-lg bg-yellow-500/8 border border-yellow-500/15 flex items-center justify-center text-yellow-400">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Long-term Vision</h3>
              <p className="text-sm text-muted leading-relaxed">
                Broadening designs to support future 6G connectivity, satellite integrations, and autonomous electromagnetic beam steering setups.
              </p>
            </div>
            <Link href="/research-ip" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Principles & Ethics</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Research-Driven Innovation */}
      <section className="max-content-width section-spacing relative z-10 w-full border-t border-card-border/20 flex justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase font-mono text-center">
            Research-Driven Innovation
          </h2>
          <p className="text-xs md:text-sm text-muted leading-relaxed text-center max-w-xl mx-auto">
            At Gramwave Wireless, we believe meaningful technological advances begin with rigorous research and honest technical validation. Our work focuses on identifying practical solutions to real-world wireless communication challenges through structured engineering research, simulation, and iterative development.
          </p>
          <div className="pt-4 text-center">
            <Link
              href="/research-ip"
              className="inline-flex items-center space-x-2 text-xs text-accent-light hover:text-white font-semibold uppercase tracking-wider transition-colors focus:outline-none"
            >
              <span>Our Research Methodology & Principles</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership & Research Team Section */}
      <section className="max-content-width section-spacing relative z-10 w-full border-t border-card-border/20 flex flex-col items-center justify-center">
        <div className="text-center space-y-3 mb-12 max-w-xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold px-3 py-1 glass rounded-md border border-accent/25">
            Team & Leadership
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase font-mono text-center">
            Led By Engineering Purpose
          </h2>
          <p className="text-xs md:text-sm text-muted max-w-md mx-auto leading-relaxed text-center">
            Combining physical-layer RF research with mathematical rigor to solve fundamental signal propagation limits.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto glass p-8 md:p-10 rounded-2xl border border-accent/20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-gradient-to-tr from-accent/30 to-blue-500/20 border border-accent/40 flex items-center justify-center text-accent-light shrink-0 shadow-lg">
              <Cpu className="h-12 w-12 text-accent-light" />
            </div>
            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold block">
                  Founding Lead & RF Engineering Researcher
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  Deep-Tech Research Founder
                </h3>
              </div>
              <p className="text-xs md:text-sm text-muted leading-relaxed">
                Specializing in handset-side receiver matching, electromagnetics, and sub-wavelength array feeds. Authored Indian provisional patent filings for active matching circuits in low-gain sectors.
              </p>
              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
                <span className="text-[10px] font-mono bg-white/5 border border-card-border/50 px-2.5 py-1 rounded text-white">
                  Electromagnetic Simulation
                </span>
                <span className="text-[10px] font-mono bg-white/5 border border-card-border/50 px-2.5 py-1 rounded text-white">
                  Active Impedance Matching
                </span>
                <span className="text-[10px] font-mono bg-white/5 border border-card-border/50 px-2.5 py-1 rounded text-white">
                  Provisional Patent Author
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate With Us */}
      <section className="max-content-width section-spacing relative z-10 w-full border-t border-card-border/20 flex flex-col items-center justify-center">
        <div className="text-center space-y-3 mb-14 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase font-mono text-center">
            Collaborate With Us
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto leading-relaxed text-center">
            We actively seek research and ecosystem alignments with organizations committed to wireless integrity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center w-full max-w-5xl">
          {[
            "Universities",
            "RF Engineers",
            "Industry Experts",
            "Wireless Researchers",
            "Incubators",
            "Research Organizations",
          ].map((collab, idx) => (
            <div
              key={idx}
              className="glass p-5 rounded-lg border border-card-border/40 flex flex-col justify-center items-center h-24 hover:border-accent/30 transition-all duration-300 w-full"
            >
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono leading-tight text-center">{collab}</span>
            </div>
          ))}
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="max-content-width section-spacing relative z-10 w-full border-t border-card-border/20 mb-10">
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase font-mono">
            News & Updates
          </h2>
          <p className="text-sm text-muted">
            Tracking timeline developments and verified achievements of our startup.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Completed */}
          <div className="glass p-6.5 rounded-xl border-t-2 border-t-accent hover:border-accent/15 transition-all">
            <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold block mb-4">
              Completed
            </span>
            <ul className="space-y-4 text-sm text-muted">
              <li className="space-y-1">
                <span className="font-semibold text-white block">Website Launch</span>
                <span className="text-[10px] text-muted-dark font-mono block">July 2026</span>
                <p className="leading-relaxed text-xs">First official version of the project portal published.</p>
              </li>
              <li className="space-y-1">
                <span className="font-semibold text-white block">Internship Initiated</span>
                <span className="text-[10px] text-muted-dark font-mono block">July 2026</span>
                <p className="leading-relaxed text-xs">Opened recruiting process for summer research interns.</p>
              </li>
            </ul>
          </div>

          {/* In Progress */}
          <div className="glass p-6.5 rounded-xl border-t-2 border-t-yellow-500 hover:border-yellow-500/15 transition-all">
            <span className="text-[10px] font-mono tracking-widest text-yellow-500 uppercase font-bold block mb-4">
              In Progress
            </span>
            <ul className="space-y-4 text-sm text-muted">
              <li className="space-y-1">
                <span className="font-semibold text-white block">Architecture Design</span>
                <span className="text-[10px] text-muted-dark font-mono block">Active</span>
                <p className="leading-relaxed text-xs">Drafting phase feed networks and software interfaces.</p>
              </li>
              <li className="space-y-1">
                <span className="font-semibold text-white block">Research Validation</span>
                <span className="text-[10px] text-muted-dark font-mono block">Active</span>
                <p className="leading-relaxed text-xs">Analyzing propagation behaviors under varying topography coefficients.</p>
              </li>
            </ul>
          </div>

          {/* Planned */}
          <div className="glass p-6.5 rounded-xl border-t-2 border-t-muted-dark hover:border-muted-dark/15 transition-all">
            <span className="text-[10px] font-mono tracking-widest text-muted-dark uppercase font-bold block mb-4">
              Planned
            </span>
            <ul className="space-y-4 text-sm text-muted">
              <li className="space-y-1">
                <span className="font-semibold text-white block">Prototype Fabrication</span>
                <p className="leading-relaxed text-xs">Initial PCB designs for anechoic chamber testing.</p>
              </li>
              <li className="space-y-1">
                <span className="font-semibold text-white block">Laboratory Testing</span>
                <p className="leading-relaxed text-xs">Calibrating antenna gain models in chamber environments.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
