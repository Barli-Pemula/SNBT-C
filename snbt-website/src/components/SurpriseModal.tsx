"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SurpriseModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal
    const hasSeen = localStorage.getItem("hasSeenSurprise");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenSurprise", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 modal-overlay"
            onClick={closeModal}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white border-2 border-gray-200 rounded-[24px] shadow-2xl p-8 max-w-sm w-full relative z-10 text-center flex flex-col items-center gap-4"
          >
            <div className="text-5xl animate-bounce mb-2">✉️</div>
            <h2 className="text-2xl font-bold text-gradient">Halo Sayang!</h2>
            <p className="text-gray-700">
              Website ini spesial dibuat buat kamu. Coba jelajahi pelan-pelan ya... 🤍
            </p>
            <button
              onClick={closeModal}
              className="glow-btn mt-4 w-full bg-gray-800 hover:bg-gray-700 text-white"
            >
              Mulai Jelajah ✧
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
