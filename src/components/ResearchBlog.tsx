"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Calendar, Clock } from "lucide-react";

interface Article {
  id: string;
  category: "Research Article" | "Patent & Milestones" | "Simulation Notes";
  date: string;
  readTime: string;
  title: string;
  summary: string;
  fullContent: string[];
  tags: string[];
}

const articles: Article[] = [
  {
    id: "active-vs-passive",
    category: "Research Article",
    date: "July 2026",
    readTime: "4 min read",
    title: "Why Active Impedance Matching Outperforms Passive LC Networks in Small-Form Handsets",
    summary:
      "A deep dive into why conventional fixed LC matching networks fail under dynamic hand-grip loading, and how active feedback loops restore optimum receiver aperture efficiency.",
    tags: ["Electromagnetics", "RF Front-End", "Handset Design"],
    fullContent: [
      "In modern sub-6GHz and millimeter-wave smartphones, space constraints limit the physical size of internal antennas below their resonant wavelength (λ/2). As a consequence, antenna radiation resistance drops significantly while reactive Q-factor increases.",
      "Traditional passive LC matching circuits are fixed at the factory. When a user grips the handset or holds it near their body, proximity loading alters the antenna's input impedance (Z_in). This causes severe impedance mismatch, resulting in high reflection loss (S11 > -3 dB) and signal attenuation up to 10-15 dB.",
      "At Gramwave Wireless, our research explores active impedance matching topologies using dynamic feedback sensing. By sensing real-time reflection vectors and adjusting active tuning elements within nanoseconds, the circuit maintains complex-conjugate matching (Z_in = Z_L*) continuously.",
      "Simulations indicate a net reception aperture gain improvement of +4.2 dB in cell-edge weak signal conditions—effectively doubling signal sensitivity without increasing tower transmit power."
    ]
  },
  {
    id: "patent-filing-india",
    category: "Patent & Milestones",
    date: "June 2026",
    readTime: "3 min read",
    title: "Provisional Patent Filed for Handset Receiver Matching Architecture",
    summary:
      "Gramwave Wireless has secured key intellectual property protections covering active receiver array configurations and phase-coherent aggregation logic in India.",
    tags: ["Intellectual Property", "Patent Pending", "R&D Milestone"],
    fullContent: [
      "Gramwave Wireless has officially submitted a provisional patent application in India, establishing early priority for our proprietary handset-side receiver matching algorithms and sub-wavelength antenna array layouts.",
      "The patent covers key claims including: (1) Dynamic complex-conjugate matching algorithms optimized for mobile form factors, (2) Phase-coherent signal summation circuits for multi-element receiver arrays, and (3) Active reflection loss mitigation loops.",
      "Securing this intellectual property provides a strong foundational barrier and validates our commitment to creating high-impact deep-tech innovations rooted in rigorous electromagnetic research."
    ]
  },
  {
    id: "simulation-audit-hfss",
    category: "Simulation Notes",
    date: "May 2026",
    readTime: "5 min read",
    title: "Electromagnetic Simulation Results: 2.4GHz & 5GHz Microstrip Array Audits",
    summary:
      "3D full-wave electromagnetic solver outputs demonstrate a 64% reduction in standing wave ratio (VSWR) across simulated rural propagation channels.",
    tags: ["HFSS", "Electromagnetic Modeling", "S-Parameters"],
    fullContent: [
      "Using full-wave finite element solvers in Ansys HFSS and CST Microwave Studio, we evaluated the radiation patterns and scattering parameters of our 4-element sub-wavelength array.",
      "Key findings from our simulation audits include: (1) S11 return loss improved from -4.1 dB (unmatched) to -18.6 dB (actively matched) at 2.45 GHz. (2) Total active reflection coefficient was maintained below 15% across severe dielectric detuning scenarios.",
      "These simulation results provide empirical baseline metrics required before proceeding to initial PCB prototype fabrication and chamber validation stages."
    ]
  }
];

export default function ResearchBlog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ["All", "Research Article", "Patent & Milestones", "Simulation Notes"];

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              selectedCategory === cat
                ? "bg-accent text-white border border-accent/40 shadow-md shadow-accent/20"
                : "glass text-muted hover:text-white border border-card-border/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="hover-card p-8 rounded-2xl flex flex-col justify-between h-full border border-card-border/40 hover:border-accent/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-dark mb-4">
                <span className="text-accent-light font-semibold bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors leading-snug mb-3 font-mono">
                {article.title}
              </h3>

              <p className="text-sm text-muted leading-7 mb-6 line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-muted-dark bg-white/5 border border-card-border/30 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveArticle(article)}
                className="w-full btn-secondary text-xs uppercase font-mono font-bold flex items-center justify-center space-x-2 py-2.5"
              >
                <span>Read Write-up</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent-light" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#080d1a] border border-accent/30 rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass text-muted hover:text-white transition-colors"
                aria-label="Close article"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-3 text-xs font-mono text-accent-light mb-4">
                <span className="bg-accent/20 border border-accent/30 px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  {activeArticle.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-mono leading-tight mb-6">
                {activeArticle.title}
              </h2>

              <div className="space-y-5 text-sm sm:text-base leading-8 text-muted border-t border-card-border/40 pt-6">
                {activeArticle.fullContent.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-card-border/40 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-dark">
                  Gramwave Wireless Technical Paper & Changelog
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="btn-primary text-xs uppercase font-mono px-5 py-2"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
