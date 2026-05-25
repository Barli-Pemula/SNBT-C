"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { motivasiList } from "@/lib/config";

export default function SecretButton() {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");

  const handleClick = () => {
    if (!showQuote) {
      const quote = motivasiList[Math.floor(Math.random() * motivasiList.length)];
      setCurrentQuote(quote);
    }
    setShowQuote(!showQuote);
  };

  return (
    <>
      <div className="secret-btn" onClick={handleClick}>
        🌻
      </div>

      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs z-50 border border-[var(--color-peach)]"
          >
            <p className="text-sm font-medium text-center text-gray-800">
              &quot;{currentQuote}&quot;
            </p>
            <button 
              onClick={() => setShowQuote(false)}
              className="mt-2 text-xs text-gray-500 w-full text-center hover:text-gray-700"
            >
              Tutup
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
