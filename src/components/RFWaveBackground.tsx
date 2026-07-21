"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function RFWaveBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pause animation when tab is not active or element is offscreen
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && !document.hidden);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  const runAnimation = !shouldReduceMotion && isVisible;
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030712] tech-grid">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[200px] bg-blue-500/5 rounded-full blur-[100px]" />

      <svg
        className="absolute w-full h-full opacity-40"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Wave 1 - Electric Blue high frequency */}
        <motion.path
          d="M0 400 C 300 250, 600 550, 900 400 C 1200 250, 1350 480, 1440 400"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={
            runAnimation
              ? {
                  d: [
                    "M0 400 C 300 250, 600 550, 900 400 C 1200 250, 1350 480, 1440 400",
                    "M0 400 C 350 350, 550 450, 850 350 C 1150 250, 1300 450, 1440 400",
                    "M0 400 C 300 250, 600 550, 900 400 C 1200 250, 1350 480, 1440 400",
                  ],
                }
              : false
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 2 - Cyan medium frequency */}
        <motion.path
          d="M0 450 C 200 550, 500 350, 800 500 C 1100 650, 1300 350, 1440 450"
          stroke="rgba(6, 182, 212, 0.1)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={
            runAnimation
              ? {
                  d: [
                    "M0 450 C 200 550, 500 350, 800 500 C 1100 650, 1300 350, 1440 450",
                    "M0 450 C 250 450, 550 450, 750 400 C 1050 400, 1250 500, 1440 450",
                    "M0 450 C 200 550, 500 350, 800 500 C 1100 650, 1300 350, 1440 450",
                  ],
                }
              : false
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave 3 - Deep blue low frequency base */}
        <motion.path
          d="M0 350 C 400 200, 800 500, 1200 300 C 1350 220, 1400 280, 1440 350"
          stroke="rgba(29, 78, 216, 0.08)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={
            runAnimation
              ? {
                  d: [
                    "M0 350 C 400 200, 800 500, 1200 300 C 1350 220, 1400 280, 1440 350",
                    "M0 350 C 350 300, 750 400, 1150 400 C 1300 400, 1380 300, 1440 350",
                    "M0 350 C 400 200, 800 500, 1200 300 C 1350 220, 1400 280, 1440 350",
                  ],
                }
              : false
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* Subtly animated signal waves originating from the top right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute top-0 right-0 rounded-full border border-accent"
            style={{
              width: `${i * 100}px`,
              height: `${i * 100}px`,
              x: `${i * 50}px`,
              y: `-${i * 50}px`,
            }}
            animate={
              runAnimation
                ? {
                    opacity: [0.1, 0.6, 0.1],
                    scale: [0.95, 1.05, 0.95],
                  }
                : false
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
