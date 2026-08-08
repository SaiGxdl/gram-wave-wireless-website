"use client";

import Link from "next/link";
import Image from "next/image";
import RFWaveBackground from "@/components/RFWaveBackground";
import { Signal, ArrowRight } from "lucide-react";
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
      <section className="max-content-width pt-10 sm:pt-14 md:pt-20 lg:pt-24 min-h-[46vh] flex flex-col items-center justify-center text-center relative z-10 w-full pb-4 md:pb-6">
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
          className="max-w-3xl text-lg md:text-xl leading-9 text-muted mb-10"
        >
          We build next-generation, handset-side receiver technology that keeps
          phones connected in weak-signal environments.
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
      <section className="max-content-width relative z-10 flex justify-center -mt-12 md:-mt-16 mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass backdrop-blur-xl border border-accent/15 rounded-2xl px-8 md:px-12 py-6 md:py-8 max-w-5xl w-full shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center"
        >
          <div>
            <span className="block text-2xl font-extrabold text-white font-mono">R&D</span>
            <span className="block text-xs uppercase tracking-widest text-muted mt-1">Current Phase</span>
          </div>
          <div className="sm:border-x sm:border-card-border/40">
            <span className="block text-2xl font-extrabold text-white font-mono">1</span>
            <span className="block text-xs uppercase tracking-widest text-muted mt-1">Active Research Initiative</span>
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-white font-mono">2026</span>
            <span className="block text-xs uppercase tracking-widest text-muted mt-1">Founded</span>
          </div>
        </motion.div>
      </section>

      {/* Why Gramwave Wireless Section */}
      <section className="max-content-width flex flex-col justify-center items-center relative z-10 w-full pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/5 backdrop-blur-md px-7 py-3 text-sm font-mono font-bold uppercase tracking-[0.3em] text-accent-light">
            Why Gramwave
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-mono leading-tight">
            Signal shouldn&apos;t drop just because you&apos;re far from a tower
          </h2>

          <p className="mt-8 text-lg md:text-xl leading-9 text-muted">
            We&apos;re rethinking the receiver, not the network — building
            adaptive antenna and impedance-matching systems that live inside
            the device itself.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-12 w-full max-w-6xl"
        >
          {/* Card 1: The Problem */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10">
              <Image
                src="/images/cards/the-problem.png"
                alt="The Problem - Weak signal drop-outs in remote regions"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="pt-6 text-xl font-bold text-white">The Problem</h3>
            <p className="mt-3 text-base leading-7 text-muted">
              Millions in rural and mountainous regions still face drop-outs,
              even with tower infrastructure nearby.
            </p>
          </motion.div>

          {/* Card 2: Our Approach */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10">
              <Image
                src="/images/cards/our-approach.png"
                alt="Our Approach - Active impedance matching RF receiver design"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="pt-6 text-xl font-bold text-white">Our Approach</h3>
            <p className="mt-3 text-base leading-7 text-muted">
              Active impedance matching and receiver array design, built
              directly into the handset to boost reception where it counts.
            </p>
            <Link href="/adaptive-wave" className="mt-4 text-sm font-semibold text-accent-light flex items-center gap-1 hover:underline">
              <span>Explore Adaptive Wave</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Card 3: What's Next */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-white/5 border border-white/10">
              <Image
                src="/images/cards/whats-next.png"
                alt="What's Next - Simulation, prototype fabrication and lab testing"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="pt-6 text-xl font-bold text-white">What&apos;s Next</h3>
            <p className="mt-3 text-base leading-7 text-muted">
              Simulation and validation today, prototype fabrication and lab
              testing ahead — with an eye on 6G and satellite integration.
            </p>
            <Link href="/roadmap" className="mt-4 text-sm font-semibold text-accent-light flex items-center gap-1 hover:underline">
              <span>View Roadmap</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Collaborate CTA */}
      <div className="relative z-10 w-full">
        <section className="max-content-width py-16 md:py-24 w-full flex flex-col items-center">
          <div className="w-full max-w-4xl glass rounded-3xl border border-accent/20 overflow-hidden shadow-2xl p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-accent/5 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase font-mono">
                Collaborate With Us
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted">
                Open to universities, RF engineers, and research labs who want to push wireless connectivity forward with us.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>

      {/* News & Updates */}
      <section className="max-content-width py-20 md:py-24 relative z-10 w-full border-t border-card-border/20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-mono">
            Latest Milestones
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-7 rounded-2xl border-t-2 border-t-accent">
            <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold block mb-3">
              Completed
            </span>
            <span className="text-lg font-bold text-white block">Problem Discovery</span>
            <span className="text-[10px] text-muted-dark font-mono block mb-2">2026</span>
            <p className="text-sm leading-7 text-muted">
              Identified weak-signal drop-out patterns across rural and mountainous regions.
            </p>
          </div>

          <div className="glass p-7 rounded-2xl border-t-2 border-t-yellow-500">
            <span className="text-[10px] font-mono tracking-widest text-yellow-500 uppercase font-bold block mb-3">
              In Progress
            </span>
            <span className="text-lg font-bold text-white block">Research Validation</span>
            <span className="text-[10px] text-muted-dark font-mono block mb-2">Active</span>
            <p className="text-sm leading-7 text-muted">
              Simulating propagation behavior across varying terrain.
            </p>
          </div>

          <div className="glass p-7 rounded-2xl border-t-2 border-t-muted-dark">
            <span className="text-[10px] font-mono tracking-widest text-muted-dark uppercase font-bold block mb-3">
              Planned
            </span>
            <span className="text-lg font-bold text-white block">Prototype Fabrication</span>
            <span className="text-[10px] text-muted-dark font-mono block mb-2">Next</span>
            <p className="text-sm leading-7 text-muted">
              Initial PCB designs for anechoic chamber testing.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/roadmap" className="inline-flex items-center space-x-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-light hover:text-white transition-colors">
            <span>View Full Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
