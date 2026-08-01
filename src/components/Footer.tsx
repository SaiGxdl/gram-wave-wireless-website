"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030712] border-t border-card-border/40 py-16 md:py-24 mt-auto relative z-10">
      <div className="max-content-width grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 w-full">
        {/* Branding & Newsletter Info */}
        <div className="md:col-span-5 space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-8 w-8 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo-emblem.png"
                alt="Gramwave Wireless Emblem"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase group-hover:text-accent-light transition-colors">
                GRAMWAVE WIRELESS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-muted-dark uppercase">
                Deep-Tech Communication R&D
              </span>
            </div>
          </Link>

          <p className="text-xs text-muted leading-relaxed max-w-md">
            A deep-tech wireless research startup developing next-generation handset-side receiver matching designs to optimize connectivity in weak-signal sectors.
          </p>

          {/* Patent Pending Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg text-[11px] font-mono text-accent-light">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent-light" />
            <span>Patent Pending (India App Ref: 2026410...)</span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Navigation
          </h3>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/adaptive-wave" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Adaptive Wave
              </Link>
            </li>
            <li>
              <Link href="/research-ip" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Research & IP
              </Link>
            </li>
            <li>
              <Link href="/roadmap" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Join & Contact */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Join & Contact
          </h3>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/careers" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Careers & Internships
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Contact & FAQ
              </Link>
            </li>
            <li className="text-muted/70 pt-2 font-mono text-[10px] tracking-wide flex flex-col space-y-1">
              <span>Location: Guntur, AP, India</span>
              <span>Email: founder@gramwavewireless.in</span>
            </li>
          </ul>

          <div className="flex items-center space-x-3 pt-2">
            <a
              href="mailto:founder@gramwavewireless.in"
              className="text-muted hover:text-white transition-colors p-2 glass rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Email Gramwave Wireless Founder"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/gramwave-wireless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors p-2 glass rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Gramwave Wireless LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 4: Legal */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Legal Policies
          </h3>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/privacy" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-muted hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-content-width border-t border-card-border/30 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-muted-dark font-mono gap-4 w-full">
        <div>
          <span>© {currentYear} Gramwave Wireless. All Rights Reserved.</span>
        </div>
        <div className="flex space-x-6">
          <span>Deep-Tech Research Portal</span>
          <span>•</span>
          <span>Active Matching Technologies</span>
        </div>
      </div>
    </footer>
  );
}
