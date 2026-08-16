"use client";

export default function DisclaimerPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 md:py-20 relative z-10 space-y-8 text-sm text-[#5B6472] leading-relaxed">
        {/* Header */}
        <div className="border-b border-[#E4E7EC] pb-6 space-y-2">
          <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            Legal
          </span>
          <h1 className="text-3xl font-extrabold text-[#0B0F19] tracking-tight sm:text-4xl">
            Research &amp; Engineering Disclaimer
          </h1>
          <p className="font-mono text-xs text-[#8A93A3]">
            Last Updated: July 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            1. Research &amp; Technology Stage
          </h2>
          <p>
            Gramwave Wireless is a deep-tech wireless communication research startup currently operating in the <strong>research and technology validation phase</strong>. All descriptions of technical concepts, feed networks, impedance matching schemes, and signal behaviors represent research hypotheses, theoretical studies, and planned verification activities.
          </p>
          <p>
            No claims of validated hardware performance, cellular field improvements, or commercial readiness are made or implied. Experimental validation and hardware prototyping are planned milestones to be pursued in future testing phases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            2. Proprietary Engineering Representations
          </h2>
          <p>
            Gramwave Wireless is actively developing its core system architectures relating to the Adaptive Wave concept.
            This website does not disclose confidential engineering layouts or internal circuit design files,
            which remain protected proprietary material of Gramwave Wireless.
          </p>
          <p>
            Research, simulation validation, and engineering verification are ongoing. Updates on technical progress
            will be shared on this website as milestones are achieved.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            3. Collaborations &amp; Advisory Relationships
          </h2>
          <p>
            All listings of advisory positions, university collaborations, and mentor roles are subject to ongoing academic alignment, contractual discussions, and mutual agreement. We represent our relationships with strict honesty; no finalized backing, sponsorship, or institutional endorsement is implied unless explicitly stated as finalized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Gramwave Wireless, its founder, or contributors be held liable for any direct, indirect, incidental, or consequential damages arising from the use or reliance upon information presented on this research portal.
          </p>
        </section>
      </div>
    </div>
  );
}
