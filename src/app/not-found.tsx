"use client";

import Link from "next/link";
import RFWaveBackground from "@/components/RFWaveBackground";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
      <RFWaveBackground />

      <div className="max-w-md mx-auto px-6 text-center relative z-10 space-y-6">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
            <Compass className="h-7 w-7 animate-pulse" />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-bold">
            Error 404
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-xs text-muted leading-relaxed">
            The page you are looking for does not exist or has been relocated to another directory.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Home className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
