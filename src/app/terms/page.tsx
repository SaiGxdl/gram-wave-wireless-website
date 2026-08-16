"use client";

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 md:py-20 relative z-10 space-y-8 text-sm text-[#5B6472] leading-relaxed">
        {/* Header */}
        <div className="border-b border-[#E4E7EC] pb-6 space-y-2">
          <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            Legal
          </span>
          <h1 className="text-3xl font-extrabold text-[#0B0F19] tracking-tight sm:text-4xl">
            Terms of Use
          </h1>
          <p className="font-mono text-xs text-[#8A93A3]">
            Last Updated: July 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or browsing gramwavewireless.in, you agree to comply with and be bound by these Terms of Use and all applicable laws in India. If you do not agree, please cease using this portal immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            2. Proprietary Rights &amp; Content Ownership
          </h2>
          <p>
            All content, designs, logos, text, wave graphics, schematic visuals, and software code files are the property of Gramwave Wireless. You may not copy, reproduce, distribute, or modify any materials for commercial purposes without our prior written permission.
          </p>
          <p>
            Reference to this research or theoretical models does not license or assign any proprietary rights or commercial authorization to the viewer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            3. Disclaimer &amp; Restrictions
          </h2>
          <p>
            The content is provided for informational and scientific research discussion purposes only. You must not use our website to perform any harmful, unauthorized, or illegal activities, including but not limited to attempts to disrupt the host server, extract user database contents, or transmit malicious code packages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            4. Revisions &amp; Updates
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the website following any changes signifies your agreement to comply with the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
