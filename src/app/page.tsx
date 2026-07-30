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
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Graphic */}
      <RFWaveBackground />

      {/* Hero Section */}
      <section className="max-content-width pt-10 sm:pt-14 md:pt-20 lg:pt-24 min-h-[62vh] flex flex-col items-center justify-center text-center relative z-10 w-full pb-6 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-accent-light mb-8"
        >
          <Signal className="h-3.5 w-3.5 animate-pulse" />
          <span>Deep-Tech Wireless Research Startup</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white max-w-5xl mb-8"
        >
          Advancing Wireless Connectivity
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-blue-400">
            Through Research
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="max-w-4xl text-lg md:text-xl leading-9 text-muted mb-10"
        >
          Gramwave Wireless is a deep-tech communication research startup developing
          next-generation handset-side receiver matching designs to optimize
          connectivity in weak-signal sectors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/adaptive-wave" className="btn-primary">
            Explore Technology
          </Link>

          <Link href="/contact" className="btn-secondary">
            Contact Research Team
          </Link>
        </motion.div>
      </section>

      {/* Current Status */}
      <section className="max-content-width relative z-10 flex justify-center -mt-8 md:-mt-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass backdrop-blur-xl border border-accent/15 rounded-2xl px-10 md:px-12 py-7 md:py-8 max-w-5xl w-full text-center shadow-xl"
        >
          <span className="block text-[11px] font-mono tracking-[0.32em] uppercase text-accent-light font-bold mb-3">
            Current Status
          </span>

          <p className="max-w-3xl mx-auto text-base md:text-lg leading-8 text-muted">
            Gramwave Wireless is currently in the
            <strong className="text-white font-semibold">
              {" "}research and technology validation phase
            </strong>.
            Prototype fabrication and laboratory testing are planned as future milestones.
          </p>
        </motion.div>
      </section>

      {/* Why Gramwave Wireless Section */}
      <section
        className="max-content-width flex flex-col justify-center items-center relative z-10 w-full pt-16 pb-24 md:pt-20 md:pb-32"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span
            className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-7 py-3 text-sm font-mono font-bold uppercase tracking-[0.3em] text-accent-light"
          >
            Core Focus & Rationale
          </span>

          <h2
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight"
          >
            Why Gramwave Wireless
          </h2>

          <p
            className="mt-8 max-w-4xl mx-auto text-lg md:text-xl leading-9 text-muted"
          >
            Gramwave Wireless is focused on advancing handset-side wireless communication through rigorous electromagnetic research rather than conventional infrastructure expansion. Our work investigates adaptive receiver architectures, impedance matching techniques, and compact antenna systems designed to improve signal reception in challenging environments such as rural regions, mountainous terrain, disaster-response zones, and other weak-coverage areas. By combining scientific validation with engineering innovation, we aim to establish practical technologies that can contribute to more reliable, efficient, and accessible wireless connectivity for future communication systems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12 w-full"
        >
          {/* Card 1: The Problem */}
          <motion.div variants={itemVariants} className="hover-card p-10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="space-y-5">
              <div className="h-14 w-14 rounded-lg bg-red-500/8 border border-red-500/15 flex items-center justify-center text-red-400">
                <Signal className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">The Problem</h3>
              <p className="text-base leading-8 text-muted">
                The connectivity gap still exists. Millions in rural communities, mountainous grids, and disaster limits face drop-outs even with tower infrastructure present.
              </p>
            </div>
            <Link href="/adaptive-wave" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Read Signal Analysis</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 2: Our Approach */}
          <motion.div variants={itemVariants} className="hover-card p-10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="space-y-5">
              <div className="h-14 w-14 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">Our Approach</h3>
              <p className="text-base leading-8 text-muted">
                We are developing active impedance matching systems and receiver array configurations directly at the device side to boost aperture reception coefficients.
              </p>
            </div>
            <Link href="/adaptive-wave" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Explore Adaptive Wave</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 3: Our Technical Approach */}
          <motion.div variants={itemVariants} className="hover-card p-10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="space-y-5">
              <div className="h-14 w-14 rounded-lg bg-blue-500/8 border border-blue-500/15 flex items-center justify-center text-blue-400">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">Our Technical Approach</h3>
              <p className="text-base leading-8 text-muted">
                Using sub-wavelength arrays, phase-coherent aggregation circuits, and constructive matching logic optimized for modern smartphone form factors.
              </p>
            </div>
            <Link href="/research-ip" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Research Directions</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 4: Current Research Status */}
          <motion.div variants={itemVariants} className="hover-card p-10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="space-y-5">
              <div className="h-14 w-14 rounded-lg bg-purple-500/8 border border-purple-500/15 flex items-center justify-center text-purple-400">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">Current Research Status</h3>
              <p className="text-base leading-8 text-muted">
                Currently running simulation audits in electromagnetic and analytical tools to measure gains, impedance deviations, and baseline signal noise parameters.
              </p>
            </div>
            <Link href="/roadmap" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>View Technical Roadmap</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 5: Intellectual Property */}
          <motion.div variants={itemVariants} className="hover-card p-10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="space-y-5">
              <div className="h-14 w-14 rounded-lg bg-green-500/8 border border-green-500/15 flex items-center justify-center text-green-400">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">Intellectual Property</h3>
              <p className="text-base leading-8 text-muted">
                A provisional patent application has been filed in India, securing key proprietary design rules for active handset matching algorithms.
              </p>
            </div>
            <Link href="/research-ip" className="text-[11px] uppercase font-bold text-accent-light tracking-wider flex items-center space-x-1.5 pt-6 hover:underline mt-auto">
              <span>Patent Filing Status</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Card 6: Long-term Vision */}
          <motion.div variants={itemVariants} className="hover-card p-10 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="space-y-5">
              <div className="h-14 w-14 rounded-lg bg-yellow-500/8 border border-yellow-500/15 flex items-center justify-center text-yellow-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono">Long-term Vision</h3>
              <p className="text-base leading-8 text-muted">
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
      <section className="max-content-width py-20 md:py-24 relative z-10 w-full border-t border-card-border/20 flex justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight mb-8">
            Research-Driven Innovation
          </h2>

          <p className="text-lg md:text-xl leading-9 text-muted max-w-3xl mx-auto">
            At Gramwave Wireless, we believe meaningful technological advances begin
            with rigorous research, scientific validation, and engineering precision.
            Our work focuses on solving real-world wireless communication challenges
            through structured electromagnetic research, simulation-driven design,
            iterative optimization, and practical prototype development.
          </p>

          <div className="mt-10">
            <Link
              href="/research-ip"
              className="inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-light hover:text-white transition-colors"
            >
              <span>Our Research Methodology & Principles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership & Research Team */}
      <section className="max-content-width py-20 md:py-24 relative z-10 w-full border-t border-card-border/20 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-6 py-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-accent-light">
            Team & Leadership
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight">
            Led by Engineering Purpose
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-9 text-muted max-w-3xl mx-auto">
            Combining RF engineering, electromagnetics, and mathematical modelling to
            develop practical handset-side wireless technologies that address
            fundamental limitations in signal reception and propagation.
          </p>
        </div>

        <div className="w-full max-w-4xl glass rounded-2xl border border-accent/20 p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-accent/30 to-blue-500/20 border border-accent/40 flex items-center justify-center shrink-0">
              <Cpu className="h-14 w-14 text-accent-light" />
            </div>

            <div className="flex-1 space-y-5 text-center md:text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent-light">
                  Founding Lead & RF Engineering Researcher
                </span>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  Deep-Tech Research Founder
                </h3>
              </div>

              <p className="text-base md:text-lg leading-8 text-muted">
                Specializing in handset-side receiver matching, electromagnetic
                systems, compact antenna architectures, and adaptive impedance
                matching. Current research includes patented receiver-side
                optimization methods for improving wireless connectivity in
                weak-signal environments.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                <span className="px-4 py-2 rounded-full border border-card-border bg-white/5 text-sm text-white font-mono">
                  Electromagnetic Simulation
                </span>

                <span className="px-4 py-2 rounded-full border border-card-border bg-white/5 text-sm text-white font-mono">
                  Active Impedance Matching
                </span>

                <span className="px-4 py-2 rounded-full border border-card-border bg-white/5 text-sm text-white font-mono">
                  Patent Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate With Us */}
      <section className="max-content-width py-24 md:py-28 relative z-10 w-full border-t border-card-border/20 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-mono mb-6">
            Collaborate With Us
          </h2>

          <p className="text-lg md:text-xl leading-9 text-muted max-w-3xl mx-auto">
            We welcome collaborations with universities, RF engineers,
            research laboratories, industry experts, incubators, and
            organizations that share our vision of advancing wireless
            communication through scientific research and engineering.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-7xl">
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
              className="glass rounded-2xl border border-card-border/40 p-8 h-36 flex items-center justify-center hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-sm md:text-base font-bold uppercase tracking-wider font-mono text-white text-center leading-relaxed">
                {collab}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* News & Updates */}
      <section className="max-content-width py-24 md:py-28 relative z-10 w-full border-t border-card-border/20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-mono">
            News & Updates
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-9 text-muted max-w-3xl mx-auto">
            Tracking verified milestones, ongoing research progress,
            prototype development, and upcoming technical achievements
            across the Gramwave Wireless research initiative.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Completed */}
          <div className="glass p-8 rounded-2xl border-t-2 border-t-accent hover:border-accent/15 transition-all">
            <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold block mb-4">
              Completed
            </span>
            <ul className="space-y-4 text-base text-muted">
              <li className="space-y-1">
                <span className="text-lg font-bold text-white block">Website Launch</span>
                <span className="text-[10px] text-muted-dark font-mono block">July 2026</span>
                <p className="leading-relaxed text-sm leading-7">First official version of the project portal published.</p>
              </li>
              <li className="space-y-1">
                <span className="text-lg font-bold text-white block">Internship Initiated</span>
                <span className="text-[10px] text-muted-dark font-mono block">July 2026</span>
                <p className="leading-relaxed text-sm leading-7">Opened recruiting process for summer research interns.</p>
              </li>
            </ul>
          </div>

          {/* In Progress */}
          <div className="glass p-8 rounded-2xl border-t-2 border-t-yellow-500 hover:border-yellow-500/15 transition-all">
            <span className="text-[10px] font-mono tracking-widest text-yellow-500 uppercase font-bold block mb-4">
              In Progress
            </span>
            <ul className="space-y-4 text-base text-muted">
              <li className="space-y-1">
                <span className="text-lg font-bold text-white block">Architecture Design</span>
                <span className="text-[10px] text-muted-dark font-mono block">Active</span>
                <p className="leading-relaxed text-sm leading-7">Drafting phase feed networks and software interfaces.</p>
              </li>
              <li className="space-y-1">
                <span className="text-lg font-bold text-white block">Research Validation</span>
                <span className="text-[10px] text-muted-dark font-mono block">Active</span>
                <p className="leading-relaxed text-sm leading-7">Analyzing propagation behaviors under varying topography coefficients.</p>
              </li>
            </ul>
          </div>

          {/* Planned */}
          <div className="glass p-8 rounded-2xl border-t-2 border-t-muted-dark hover:border-muted-dark/15 transition-all">
            <span className="text-[10px] font-mono tracking-widest text-muted-dark uppercase font-bold block mb-4">
              Planned
            </span>
            <ul className="space-y-4 text-base text-muted">
              <li className="space-y-1">
                <span className="text-lg font-bold text-white block">Prototype Fabrication</span>
                <p className="leading-relaxed text-sm leading-7">Initial PCB designs for anechoic chamber testing.</p>
              </li>
              <li className="space-y-1">
                <span className="text-lg font-bold text-white block">Laboratory Testing</span>
                <p className="leading-relaxed text-sm leading-7">Calibrating antenna gain models in chamber environments.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
