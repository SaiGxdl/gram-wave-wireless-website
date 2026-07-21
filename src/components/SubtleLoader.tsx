"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubtleLoader() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Only show loader on initial session entrance, not on every page transition or refresh
    try {
      const hasLoaded = sessionStorage.getItem("gramwave_loaded_session");
      if (!hasLoaded) {
        setLoading(true);
        sessionStorage.setItem("gramwave_loaded_session", "true");
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300); // Quick 300ms transition max
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is restricted
      setLoading(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Animated subtle pulsing wave logo representation */}
            <div className="flex items-end justify-center space-x-1.5 h-8">
              {[0.4, 0.7, 1.0, 0.7, 0.4].map((scale, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: ["8px", "28px", "8px"],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="w-1 bg-accent rounded-full"
                />
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold tracking-[0.25em] text-white"
            >
              GRAMWAVE WIRELESS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs tracking-[0.15em] text-muted font-mono"
            >
              Initializing...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
