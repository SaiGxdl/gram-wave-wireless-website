"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/adaptive-wave", label: "Adaptive Wave" },
  { href: "/research-ip", label: "Research & IP" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
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
        scrolled ? "glass border-b border-card-border/60 py-4.5" : "bg-transparent py-7"
      }`}
    >
      <div className="max-content-width flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1">
          <div className="relative h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-emblem.png"
              alt="Gramwave Wireless Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-bold tracking-[0.2em] text-white uppercase group-hover:text-accent-light transition-colors">
            GRAMWAVE
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-10 pr-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:text-white relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md ${
                  isActive ? "text-accent-light" : "text-muted-dark hover:text-muted"
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
            className="absolute top-full left-0 right-0 glass border-b border-card-border/80 px-8 py-8 lg:hidden flex flex-col space-y-6"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
