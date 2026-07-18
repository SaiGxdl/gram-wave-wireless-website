"use client";

import RFWaveBackground from "@/components/RFWaveBackground";

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <RFWaveBackground />

      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8 text-xs text-muted leading-relaxed">
        {/* Header */}
        <div className="border-b border-card-border/30 pb-4 space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Research & Patent Disclaimer
          </h1>
          <p className="font-mono text-[10px] text-muted-dark">
            Last Updated: July 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            1. Research & Technology Stage
          </h2>
          <p>
            Gramwave Wireless is a deep-tech wireless communication research startup currently operating in the <strong>research and technology validation phase</strong>. All descriptions of technical concepts, feed networks, impedance matching schemes, and signal behaviors represent research hypotheses, theoretical studies, and planned verification activities.
          </p>
          <p>
            No claims of validated hardware performance, cellular field improvements, or commercial readiness are made or implied. Experimental validation and hardware prototyping are milestones on our roadmap to be pursued in future stages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            2. Intellectual Property (IP) Representation
          </h2>
          <p>
            A provisional patent application has been filed in India to protect specific architectural layouts and phase alignment systems relating to the Adaptive Wave concept. This website does not disclose detailed schematic indices or confidential engineering drawings, which remain protected proprietary material of Gramwave Wireless.
          </p>
          <p>
            Research, validation, and expansion of our IP portfolio are ongoing. The filing of a provisional patent application does not guarantee the granting of a utility patent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            3. Collaborations & Advisory Relationships
          </h2>
          <p>
            All listings of advisory positions, university collaborations, and mentor roles are subject to ongoing academic alignment, contractual discussions, and mutual agreement. We represent our relationships with strict honesty; no finalized backing, sponsorship, or institutional endorsement is implied unless explicitly stated as finalized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            4. Limitation of Liability
          </h2>
          <p>
            The information on this website is provided &quot;as is&quot; without warranties of any kind. Gramwave Wireless, its founder Sai Charan, and its contributors shall not be held liable for any decisions, actions, or academic investigations undertaken based on the research text and roadmap structures provided on this site.
          </p>
        </section>
      </div>
    </div>
  );
}
