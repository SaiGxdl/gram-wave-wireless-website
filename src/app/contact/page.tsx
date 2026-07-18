"use client";

import RFWaveBackground from "@/components/RFWaveBackground";
import { useState } from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Gramwave Wireless?",
    answer: "Gramwave Wireless is a deep-tech wireless communication research startup. Our core research focus is developing next-generation handset-side physical layer technologies to improve signals in low-gain and weak coverage environments without needing tower expansion.",
  },
  {
    question: "What is Adaptive Wave?",
    answer: "Adaptive Wave is our flagship research initiative exploring active handset-side impedance matching, sub-wavelength array feeds, and coherent phase tuning frameworks to construct constructive signal amplification pathways.",
  },
  {
    question: "Is the technology commercially available?",
    answer: "No. The project is currently in the early-stage research and simulation phase. We are validating core concepts mathematically and in software models. Product prototypes and commercialization paths are future milestones.",
  },
  {
    question: "Are you hiring?",
    answer: "We are currently accepting applications for Research Internships and seeking Academic Collaborators and Advisors. We do not have full-time staff openings at this stage.",
  },
  {
    question: "Are you looking for investors?",
    answer: "We are open to exploratory discussions with deep-tech angel investors and incubator platforms who understand early-stage research timescales. However, our primary short-term focus is establishing technical credibility through simulations and initial patent filings.",
  },
  {
    question: "Can universities collaborate?",
    answer: "Yes, we highly welcome collaborations with academic professors, laboratory research leads, and postgraduate wireless communication departments. We look forward to validating our research hypotheses in partnership with academic institutions.",
  },
  {
    question: "How can I become an advisor?",
    answer: "If you have an extensive background in RF engineering, electromagnetic fields, or semiconductor chip layouts and want to guide our research methods, please reach out via our official email for an exploratory call.",
  },
  {
    question: "How can I contribute to Gramwave Wireless?",
    answer: "You can contribute by joining our internship program, engaging in technical research reviews, participating in academic collaborations, or serving as a technical advisor or mentor.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Internship",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", inquiryType: "Internship", message: "" });
    }, 1000);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <RFWaveBackground />

      <div className="max-content-width relative z-10 space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase font-bold px-3 py-1 glass rounded-md border border-accent/25">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4 uppercase font-mono">
            Contact & FAQ
          </h1>
          <p className="text-xs md:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Have questions about our research or want to explore collaboration opportunities? Contact our founder or review the FAQ database below.
          </p>
        </div>

        {/* Contact info, SLA, and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Info Panels */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center lg:text-left">
              Contact & Inquiries
            </h2>

            {/* Main Info */}
            <div className="glass p-6.5 rounded-xl border border-card-border/30 space-y-5">
              <div className="flex items-center space-x-3.5 text-xs text-muted">
                <Mail className="h-5 w-5 text-accent-light" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted-dark block">Official Email</span>
                  <a href="mailto:founder@gramwavewireless.in" className="text-white font-semibold hover:underline">
                    founder@gramwavewireless.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 text-xs text-muted">
                <Linkedin className="h-5 w-5 text-accent-light" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted-dark block">LinkedIn Profile</span>
                  <a
                    href="https://linkedin.com/company/gramwave-wireless"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                  >
                    linkedin.com/company/gramwave-wireless
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 text-xs text-muted">
                <MapPin className="h-5 w-5 text-accent-light" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted-dark block">Location</span>
                  <span className="text-white font-semibold">Guntur, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* SLA Banner */}
            <div className="glass p-5 rounded-xl border border-card-border/30 bg-accent/5 flex items-center space-x-3.5">
              <Clock className="h-5.5 w-5.5 text-accent-light shrink-0" />
              <p className="text-xs text-muted leading-relaxed">
                <strong>Response SLA</strong>: We aim to respond to collaboration and internship inquiries within <strong>3–5 business days</strong>.
              </p>
            </div>

            {/* Collaboration Columns */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl border border-card-border/30 space-y-2">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                  Research Partnerships
                </h4>
                <p className="text-[10px] text-muted leading-relaxed">
                  Universities, professors, RF labs, and student interns.
                </p>
              </div>

              <div className="glass p-4 rounded-xl border border-card-border/30 space-y-2">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                  Industry Links
                </h4>
                <p className="text-[10px] text-muted leading-relaxed">
                  Chipset designers, RF companies, and telecom hardware firms.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase font-mono text-center lg:text-left">
              Send Inquiry
            </h2>

            <div className="glass p-6.5 rounded-xl border border-card-border/30">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-wider text-muted font-mono">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#030712] border border-card-border/60 rounded px-3 py-2.5 text-xs text-white placeholder-muted-dark focus:outline-none focus:border-accent"
                      placeholder="e.g. Dr. Sai Charan"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-wider text-muted font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#030712] border border-card-border/60 rounded px-3 py-2.5 text-xs text-white placeholder-muted-dark focus:outline-none focus:border-accent"
                      placeholder="e.g. researcher@university.edu"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="inquiryType" className="text-[10px] uppercase font-bold tracking-wider text-muted font-mono">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-[#030712] border border-card-border/60 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-accent"
                  >
                    <option value="Internship">Internship / Application</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Industry Partnership">Industry Partnership</option>
                    <option value="General Inquiry">General Q&A</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-wider text-muted font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#030712] border border-card-border/60 rounded px-3 py-2.5 text-xs text-white placeholder-muted-dark focus:outline-none focus:border-accent resize-none"
                    placeholder="Provide a brief context of your research match or inquiry details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  <Send className="h-3.5 w-3.5 mr-2" />
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                </button>
              </form>

              {/* Status Box */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 border border-green-500/20 bg-green-500/5 rounded text-xs text-center text-green-400"
                  >
                    Thank you. Your inquiry has been sent to our inbox. We aim to respond within 3–5 business days.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="space-y-8 pt-6 border-t border-card-border/20 max-w-4xl mx-auto w-full">
          <div className="text-center space-y-2">
            <h2 className="text-lg font-semibold tracking-wide text-white uppercase font-mono">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-muted">
              Common questions and answers regarding Gramwave Wireless&apos;s stage, scope, and objectives.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="glass rounded-xl border border-card-border/30 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-xs font-semibold tracking-wide text-white hover:bg-white/4 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="h-4.5 w-4.5 text-accent-light" /> : <ChevronDown className="h-4.5 w-4.5 text-muted" />}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1.5 text-xs text-muted leading-relaxed border-t border-card-border/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
