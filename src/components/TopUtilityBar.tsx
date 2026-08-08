"use client";

import Link from "next/link";
import { Linkedin, ExternalLink } from "lucide-react";

export default function TopUtilityBar() {
  return (
    <div className="w-full bg-[#02050e] border-b border-card-border/40 text-muted-dark text-[11px] font-mono py-1.5 px-6 sm:px-8 md:px-12 xl:px-16 flex items-center justify-between z-50">
      <div className="flex items-center space-x-3 truncate">
        <span className="truncate text-muted">Deep-Tech Wireless Communication R&D</span>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
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
