"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
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
    answer:
      "Gramwave Wireless is a deep-tech wireless communication research startup. Our core research focus is developing next-generation handset-side physical layer technologies to improve signals in low-gain and weak coverage environments without needing tower expansion.",
  },
  {
    question: "What is Adaptive Wave?",
    answer:
      "Adaptive Wave is our flagship research initiative exploring active handset-side impedance matching, sub-wavelength array feeds, and coherent phase tuning frameworks to construct constructive signal amplification pathways.",
  },
  {
    question: "Is the technology commercially available?",
    answer:
      "No. The project is currently in the early-stage research and simulation phase. We are validating core concepts mathematically and in software models. Product prototypes and commercialization paths are future milestones.",
  },
  {
    question: "Are you hiring?",
    answer:
      "We are currently accepting applications for Research Internships and seeking Academic Collaborators and Advisors. We do not have full-time staff openings at this stage.",
  },
  {
    question: "Are you looking for investors?",
    answer:
      "We are open to exploratory discussions with deep-tech angel investors and incubator platforms who understand early-stage research timescales. However, our primary short-term focus is establishing technical credibility through simulations and empirical validation.",
  },
  {
    question: "Can universities collaborate?",
    answer:
      "Yes, we highly welcome collaborations with academic professors, laboratory research leads, and postgraduate wireless communication departments. We look forward to validating our research hypotheses in partnership with academic institutions.",
  },
  {
    question: "Where are you based?",
    answer:
      "Gramwave Wireless is founded and based in India, operating through a distributed remote-first research model across academic centers.",
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
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", inquiryType: "Internship", message: "" });
      } else {
        throw new Error(data.error || "Failed to send inquiry.");
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setSubmitStatus("error");
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Network error. Please try emailing directly.";
      setSubmitErrorMessage(errorMessage);
    }
  };

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
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Contact &amp; FAQ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-base leading-8 text-[#5B6472] sm:text-lg md:text-xl md:leading-9"
          >
            Have questions about our research or want to explore collaboration
            opportunities? Contact our engineering team or review the FAQ database below.
          </motion.p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. CONTACT INFO & INQUIRY FORM                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative z-10 w-full border-t border-[#E4E7EC] bg-[#F6F7F9] py-16 md:py-24">
        <div className="max-content-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Info Panels */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                    Channels
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#0B0F19]">
                    Direct Inquiries
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5 rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-4 text-xs text-[#5B6472]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] font-bold uppercase text-[#8A93A3]">
                        Official Email
                      </span>
                      <a
                        href="mailto:founder@gramwavewireless.in"
                        className="font-bold text-[#0B0F19] hover:text-[#2563EB] transition-colors"
                      >
                        founder@gramwavewireless.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3.5 rounded-2xl border border-[#E4E7EC] bg-[#FAFBFC] p-4 text-xs text-[#5B6472]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#BFD3FE] bg-[#EFF4FF] text-[#2563EB]">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] font-bold uppercase text-[#8A93A3]">
                        LinkedIn Profile
                      </span>
                      <a
                        href="https://linkedin.com/company/gramwave-wireless"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#0B0F19] hover:text-[#2563EB] transition-colors"
                      >
                        linkedin.com/company/gramwave-wireless
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rounded-2xl border border-[#BFD3FE] bg-[#EFF4FF] p-4 text-xs text-[#2563EB]">
                  <Clock className="h-5 w-5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong>Response SLA</strong>: We respond to academic collaboration and internship applications within <strong>3–5 business days</strong>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 space-y-1.5 shadow-sm">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                    Research Labs
                  </h4>
                  <p className="text-xs text-[#5B6472] leading-relaxed">
                    Universities, professors, RF labs, and student interns.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 space-y-1.5 shadow-sm">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B0F19]">
                    Industry Links
                  </h4>
                  <p className="text-xs text-[#5B6472] leading-relaxed">
                    Chipset designers, RF companies, and telecom hardware firms.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                    Send Message
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#0B0F19]">
                    Submit an Inquiry
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5B6472]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] px-4 py-3 text-xs text-[#0B0F19] placeholder-[#8A93A3] focus:border-[#2563EB] focus:bg-white focus:outline-none"
                        placeholder="e.g. Dr. Sai Charan"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5B6472]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] px-4 py-3 text-xs text-[#0B0F19] placeholder-[#8A93A3] focus:border-[#2563EB] focus:bg-white focus:outline-none"
                        placeholder="e.g. researcher@university.edu"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiryType"
                      className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5B6472]"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] px-4 py-3 text-xs text-[#0B0F19] focus:border-[#2563EB] focus:bg-white focus:outline-none"
                    >
                      <option value="Internship">Internship / Application</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Industry Partnership">Industry Partnership</option>
                      <option value="General Inquiry">General Q&amp;A</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5B6472]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#E4E7EC] bg-[#FAFBFC] px-4 py-3 text-xs text-[#0B0F19] placeholder-[#8A93A3] focus:border-[#2563EB] focus:bg-white focus:outline-none resize-none"
                      placeholder="Provide a brief context of your research match or inquiry details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#0B0F19] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#2563EB] active:scale-[0.98] disabled:opacity-50"
                  >
                    <Send className="h-4 w-4 mr-1" />
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
                      className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center text-xs text-green-800 space-y-2"
                    >
                      <p className="font-bold">Thank you. Your inquiry has been submitted!</p>
                      <p className="text-green-700 leading-relaxed">
                        We aim to respond within 3–5 business days. You can also send a copy directly from your mail client below.
                      </p>
                      <div className="pt-2">
                        <a
                          href="mailto:founder@gramwavewireless.in?subject=GramWave%20Wireless%20Inquiry"
                          className="inline-flex items-center space-x-2 rounded-xl border border-green-300 bg-white px-4 py-2 font-mono text-xs font-bold text-green-800 shadow-sm transition-colors hover:bg-green-100"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Send Backup Copy via Email Client</span>
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center text-xs text-red-800 space-y-2"
                    >
                      <p className="font-bold">{submitErrorMessage}</p>
                      <a
                        href="mailto:founder@gramwavewireless.in?subject=GramWave%20Wireless%20Inquiry"
                        className="inline-block mt-1 font-bold text-red-700 underline"
                      >
                        Click here to email founder@gramwavewireless.in directly
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. FAQ ACCORDION SECTION                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-content-width relative z-10 w-full pt-16 pb-20 sm:pt-20 md:pt-24 md:pb-28">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            Knowledge Base
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5B6472]">
            Common questions regarding Gramwave Wireless&apos;s stage, scope, and objectives.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-bold text-[#0B0F19] transition-colors hover:bg-[#FAFBFC] focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-[#2563EB] shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#8A93A3] shrink-0" />
                  )}
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
                      <div className="border-t border-[#E4E7EC] px-6 pt-3 pb-6 text-sm leading-relaxed text-[#5B6472]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
