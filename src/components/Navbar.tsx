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

  // Close mobile drawer on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-card-border/60 py-4"
          : "bg-[#030712]/90 backdrop-blur-md border-b border-card-border/30 py-5"
      }`}
    >
      <div className="w-full px-6 sm:px-8 md:px-12 xl:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1 shrink-0">
          <div className="relative h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-emblem.png"
              alt="Gramwave Wireless Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-[0.22em] text-white uppercase group-hover:text-accent-light transition-colors whitespace-nowrap leading-none">
              GRAMWAVE
            </span>
            <span className="text-[9px] font-mono tracking-[0.2em] text-muted-dark uppercase mt-0.5">
              WIRELESS R&D
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links & Highlighted CTA */}
        <div className="hidden lg:flex items-center justify-end ml-auto gap-6 lg:gap-8 xl:gap-10">
          <nav className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:text-white relative py-1 shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md ${
                    isActive ? "text-accent-light" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Distinct Highlighted CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-accent/90 to-blue-600 hover:from-accent hover:to-blue-500 text-white font-mono text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-accent/40 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-105 transition-all duration-200 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-white/90" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-1.5 rounded-md"
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
            className="absolute top-full left-0 right-0 glass border-b border-card-border/80 px-8 py-8 lg:hidden flex flex-col space-y-5"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider uppercase py-2 border-b border-card-border/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                    isActive ? "text-accent-light" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 text-center bg-accent text-white font-mono text-xs font-bold tracking-wider uppercase py-3 rounded-xl border border-accent/40 shadow-lg"
            >
              Get in Touch (Research Team)
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
