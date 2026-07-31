"use client";

import Link from "next/link";
import { ShieldCheck, Linkedin, MapPin, ExternalLink } from "lucide-react";

export default function TopUtilityBar() {
  return (
    <div className="w-full bg-[#02050e] border-b border-card-border/40 text-muted-dark text-[11px] font-mono py-1.5 px-6 sm:px-8 md:px-12 xl:px-16 flex items-center justify-between z-50">
      {/* Left: Patent status badge */}
      <div className="flex items-center space-x-3 truncate">
        <span className="inline-flex items-center space-x-1.5 text-accent-light font-semibold bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-[10px]">
          <ShieldCheck className="h-3 w-3 shrink-0" />
          <span className="truncate">Patent Pending (India)</span>
        </span>
        <span className="hidden sm:inline-block text-muted-dark/60">•</span>
        <span className="hidden sm:inline-block truncate text-muted">
          Ref: Temp App No. 2026410...
        </span>
      </div>

      {/* Right: Quick Utility Links */}
      <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
        <div className="hidden md:flex items-center space-x-1.5 text-muted">
          <MapPin className="h-3 w-3 text-accent-light shrink-0" />
          <span>Guntur, AP, India</span>
        </div>

        <span className="hidden md:inline-block text-muted-dark/60">•</span>

        <a
          href="https://linkedin.com/company/gramwave-wireless"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center space-x-1"
        >
          <Linkedin className="h-3 w-3" />
          <span className="hidden xs:inline">LinkedIn</span>
        </a>

        <Link
          href="/careers"
          className="hover:text-accent-light transition-colors flex items-center space-x-1 text-muted"
        >
          <span>Careers & Internships</span>
          <ExternalLink className="h-2.5 w-2.5 opacity-70" />
        </Link>
      </div>
    </div>
  );
}
