"use client";

import RFWaveBackground from "@/components/RFWaveBackground";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <RFWaveBackground />

      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8 text-xs text-muted leading-relaxed">
        {/* Header */}
        <div className="border-b border-card-border/30 pb-4 space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Terms of Use
          </h1>
          <p className="font-mono text-[10px] text-muted-dark">
            Last Updated: July 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or browsing gramwavewireless.in, you agree to comply with and be bound by these Terms of Use and all applicable laws in India. If you do not agree, please cease using this portal immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            2. Intellectual Property Rights
          </h2>
          <p>
            All content, designs, logos, text, wave graphics, and software code files are the exclusive property of Gramwave Wireless. You may not copy, copy-cat, distribute, or modify any materials for commercial purposes without our prior written permission.
          </p>
          <p>
            Our provisional patent filing protects designated proprietary frameworks described under the Adaptive Wave section. Reference to this research does not license or assign any intellectual property rights to the viewer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            3. Disclaimer & Restrictions
          </h2>
          <p>
            The content is provided for informational and scientific research discussion purposes only. You must not use our website to perform any harmful, unauthorized, or illegal activities, including but not limited to attempts to disrupt the host server, extract user database contents, or transmit malicious code packages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            4. Revisions & Updates
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the website following any changes signifies your agreement to comply with the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
