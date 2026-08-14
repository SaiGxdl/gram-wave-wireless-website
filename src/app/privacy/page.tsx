"use client";

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16 md:py-20 relative z-10 space-y-8 text-sm text-[#5B6472] leading-relaxed">
        {/* Header */}
        <div className="border-b border-[#E4E7EC] pb-6 space-y-2">
          <span className="inline-flex items-center rounded-full border border-[#BFD3FE] bg-[#EFF4FF] px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            Policy
          </span>
          <h1 className="text-3xl font-extrabold text-[#0B0F19] tracking-tight sm:text-4xl">
            Privacy Policy &amp; Cookie Notice
          </h1>
          <p className="font-mono text-xs text-[#8A93A3]">
            Last Updated: July 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            1. Overview
          </h2>
          <p>
            Gramwave Wireless (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a deep-tech research organization. This page outlines our policy regarding the collection, use, and disclosure of information we receive from visitors to gramwavewireless.in.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            2. Data Collection &amp; Usage
          </h2>
          <p>
            As a research-centric website, we collect minimal data:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Inquiry Form Information</strong>: If you contact us through our website contact form or send us an email, we collect your name, email address, inquiry type, and any contents of the messages you send. We only use this information to respond to your inquiry (e.g. evaluating internship matches or answering research collaboration requests).
            </li>
            <li>
              <strong>Technical Log Files</strong>: Like most websites, our servers collect standard server log data (such as IP addresses, browser types, landing pages, and access timestamps) for security audit trails and system performance monitoring.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            3. Cookie Notice
          </h2>
          <p>
            Our website uses strictly necessary and basic analytics cookies. Cookies are small text files stored on your local device to verify session integrity and trace navigation flows.
          </p>
          <p>
            We do not use tracking cookies for advertising purposes. You can disable cookies in your web browser settings; however, certain minor interactive sections (such as saving timeline states or contact forms) may lose full responsiveness.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#0B0F19]">
            4. Contact
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, please email us directly at{" "}
            <a
              href="mailto:founder@gramwavewireless.in"
              className="text-[#2563EB] underline font-bold"
            >
              founder@gramwavewireless.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
