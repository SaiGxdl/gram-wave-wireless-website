"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030712] border-t border-card-border/40 py-16 md:py-24 mt-auto">
      <div className="max-content-width grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full">
        {/* Branding & Info */}
        <div className="md:col-span-4 space-y-5">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-7 w-7 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo-emblem.png"
                alt="Gramwave Wireless Emblem"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase group-hover:text-accent-light transition-colors">
              GRAMWAVE WIRELESS
            </span>
          </Link>
          <p className="text-xs text-muted leading-relaxed max-w-sm">
            A deep-tech wireless communication research startup developing next-generation handset-side technologies for weak-signal environments.
          </p>
          <div className="flex items-center space-x-3 pt-1">
            <a
              href="mailto:founder@gramwavewireless.in"
              className="text-muted hover:text-white transition-colors p-2 glass rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Email Gramwave Wireless Founder"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com/company/gramwave-wireless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors p-2 glass rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Gramwave Wireless LinkedIn Profile"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:col-span-2 md:col-start-6 space-y-4">
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

        {/* Column 3: Contact */}
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
            <li className="text-muted/65 mt-4 font-mono text-[10px] tracking-wide">
              Location: Guntur, AP, India
            </li>
          </ul>
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
        </div>
      </div>
    </footer>
  );
}
