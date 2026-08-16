"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F6F7F9] border-t border-[#E4E7EC] py-16 md:py-24 mt-auto relative z-10">
      <div className="max-content-width grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 w-full">
        {/* Branding */}
        <div className="md:col-span-5 space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-8 w-8 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo-emblem.png"
                alt="Gramwave Wireless Emblem"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.2em] text-[#0B0F19] uppercase group-hover:text-[#2563EB] transition-colors">
                GRAMWAVE WIRELESS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#8A93A3] uppercase">
                Deep-Tech Communication R&D
              </span>
            </div>
          </Link>

          <p className="text-xs text-[#5B6472] leading-relaxed max-w-md">
            A deep-tech wireless research startup developing next-generation handset-side receiver matching designs to optimize connectivity in weak-signal sectors.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B0F19]">
            Navigation
          </h3>
          <ul className="space-y-3 text-xs">
            {[
              { href: "/", label: "Home" },
              { href: "/adaptive-wave", label: "Adaptive Wave" },
              { href: "/research", label: "Research" },
              { href: "/careers", label: "Careers" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[#5B6472] hover:text-[#0B0F19] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Join & Contact */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B0F19]">
            Join & Contact
          </h3>
          <ul className="space-y-3 text-xs">
            <li>
              <Link
                href="/careers"
                className="text-[#5B6472] hover:text-[#0B0F19] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
              >
                Careers & Internships
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#5B6472] hover:text-[#0B0F19] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
              >
                Contact & FAQ
              </Link>
            </li>
            <li className="text-[#8A93A3] pt-2 font-mono text-[10px] tracking-wide flex flex-col space-y-1">
              <span>Email: founder@gramwavewireless.in</span>
            </li>
          </ul>

          <div className="flex items-center space-x-3 pt-2">
            <a
              href="mailto:founder@gramwavewireless.in"
              className="text-[#5B6472] hover:text-[#0B0F19] transition-colors p-2 bg-white border border-[#E4E7EC] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Email Gramwave Wireless Founder"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/gramwave-wireless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B6472] hover:text-[#0B0F19] transition-colors p-2 bg-white border border-[#E4E7EC] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label="Gramwave Wireless LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B0F19]">
            Legal Policies
          </h3>
          <ul className="space-y-3 text-xs">
            <li>
              <Link
                href="/privacy"
                className="text-[#5B6472] hover:text-[#0B0F19] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-[#5B6472] hover:text-[#0B0F19] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-[#5B6472] hover:text-[#0B0F19] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-content-width border-t border-[#E4E7EC] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#8A93A3] font-mono gap-4 w-full">
        <span>© {currentYear} Gramwave Wireless. All Rights Reserved.</span>
        <div className="flex space-x-6">
          <span>Deep-Tech Research Portal</span>
          <span>•</span>
          <span>Active Matching Technologies</span>
        </div>
      </div>
    </footer>
  );
}
