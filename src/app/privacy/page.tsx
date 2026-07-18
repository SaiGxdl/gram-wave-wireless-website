"use client";

import RFWaveBackground from "@/components/RFWaveBackground";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <RFWaveBackground />

      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8 text-xs text-muted leading-relaxed">
        {/* Header */}
        <div className="border-b border-card-border/30 pb-4 space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Privacy Policy & Cookie Notice
          </h1>
          <p className="font-mono text-[10px] text-muted-dark">
            Last Updated: July 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            1. Overview
          </h2>
          <p>
            Gramwave Wireless (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a deep-tech research organization. This page outlines our policy regarding the collection, use, and disclosure of information we receive from visitors to gramwavewireless.in.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            2. Data Collection & Usage
          </h2>
          <p>
            As a research-centric website, we collect minimal data:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Inquiry Form Information</strong>: If you contact us through our website contact form or send us an email, we collect your name, email address, inquiry type, and any contents of the messages you send. We only use this information to respond to your inquiry (e.g. evaluating internship matches or answering research collaboration requests).
            </li>
            <li>
              <strong>Technical Log Files</strong>: Like most websites, our servers collect standard server log data (such as IP addresses, browser types, landing pages, and access timestamps) for security audit trails and system performance monitoring.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
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
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            4. Data Retention & Sharing
          </h2>
          <p>
            We retain message details for as long as necessary to address your requests. We do not sell, distribute, or license personal details or message contents to third parties unless required by legal authorities under Indian law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
            5. Contact Information
          </h2>
          <p>
            For any queries regarding this Privacy Policy, please write to: <a href="mailto:founder@gramwavewireless.in" className="text-accent hover:underline">founder@gramwavewireless.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
