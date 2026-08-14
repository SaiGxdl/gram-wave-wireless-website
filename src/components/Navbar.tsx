"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/adaptive-wave", label: "Adaptive Wave" },
  { href: "/research-ip", label: "Research & IP" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-16 bg-white/95 backdrop-blur-md border-b border-[#E4E7EC] transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(11,15,25,0.04)]"
          : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center space-x-3 rounded-md p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          <div className="relative h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-emblem.png"
              alt="Gramwave Wireless Emblem"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-[0.22em] uppercase transition-colors whitespace-nowrap leading-none text-[#0B0F19] group-hover:text-[#2563EB]">
              GRAMWAVE
            </span>
            <span className="text-[9px] font-mono tracking-[0.2em] uppercase mt-0.5 text-[#8A93A3]">
              WIRELESS R&D
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links & CTA */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative shrink-0 whitespace-nowrap rounded-md px-1 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isActive
                      ? "text-[#0B0F19]"
                      : "text-[#5B6472] hover:text-[#0B0F19]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-1 right-1 h-0.5 rounded-full bg-[#2563EB]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group inline-flex h-10 min-w-[132px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#0B0F19] px-5 text-[11px] font-bold font-mono uppercase tracking-[0.12em] leading-none text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] active:translate-y-0"
          >
            <span>Talk to Us</span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-md focus:outline-none focus-visible:ring-2 text-[#0B0F19] hover:text-[#2563EB] focus-visible:ring-[#2563EB]"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-[#E4E7EC] px-8 py-8 lg:hidden flex flex-col space-y-5 shadow-lg"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider uppercase py-2 border-b transition-colors focus:outline-none focus-visible:ring-2 rounded-sm border-[#E4E7EC] focus-visible:ring-[#2563EB] ${
                    isActive ? "text-[#2563EB]" : "text-[#5B6472] hover:text-[#0B0F19]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0B0F19] px-5 text-center text-xs font-bold font-mono uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-[#2563EB] active:scale-[0.98]"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
