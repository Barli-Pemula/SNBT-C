"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataPacar } from "@/lib/config";

export default function PenutupPage() {
  const [showHug, setShowHug] = useState(false);

  const handleHug = () => {
    setShowHug(true);
    setTimeout(() => setShowHug(false), 4000);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 min-h-[calc(100vh-4rem)] max-w-3xl mx-auto w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card-strong w-full p-8 md:p-12 mb-12 mt-8 relative"
      >
        {/* Decorative corner flowers - Black and white theme */}
        <div className="absolute -top-6 -left-6 text-5xl text-gray-800 animate-wiggle">❁</div>
        <div className="absolute -bottom-6 -right-6 text-5xl text-gray-800 animate-wiggle" style={{ animationDelay: "1s" }}>❀</div>
        <div className="absolute top-1/2 -left-8 text-4xl text-gray-500 animate-float">✿</div>
        <div className="absolute top-1/4 -right-8 text-3xl text-gray-400 animate-float-slow">✧</div>
        <div className="absolute bottom-1/4 -left-10 text-3xl text-gray-600 animate-float-gentle">✽</div>
        
        <h2 className="text-2xl font-bold mb-8 text-gradient font-heading text-center">
          Untuk {dataPacar.nama},
        </h2>

        <div className="prose prose-lg text-gray-700 mx-auto whitespace-pre-wrap leading-loose font-medium">
          {dataPacar.pesanAkhir}
        </div>

        <div className="mt-12 text-right">
          <p className="text-gray-600 mb-2">Selalu ada untukmu,</p>
          <p className="text-2xl font-bold text-gradient-warm font-heading">{dataPacar.tandaTangan}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <p className="text-lg italic text-gray-600 mb-6 font-heading max-w-md">
          &quot;Setiap hal baik butuh waktu. Jangan pernah ngerasa gagal cuma dari satu hasil ujian.&quot;
        </p>

        <button 
          onClick={handleHug}
          className="glow-btn bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 shadow-gray-400 text-lg px-8 py-4 animate-pulse-glow border border-gray-400"
        >
          Tekan untuk Pelukan Hangat 🤗
        </button>
      </motion.div>

      <AnimatePresence>
        {showHug && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-sm text-center border-4 border-[var(--color-soft-pink)] relative overflow-hidden"
            >
              {/* Animated background hearts and flowers - monochrome */}
              <div className="absolute top-2 left-4 text-2xl opacity-50 animate-float text-gray-600">❀</div>
              <div className="absolute bottom-4 right-8 text-3xl opacity-50 animate-float text-gray-700" style={{ animationDelay: "0.5s" }}>❁</div>
              <div className="absolute top-8 right-4 text-xl opacity-50 animate-float text-gray-500" style={{ animationDelay: "1s" }}>✧</div>
              
              <div className="text-7xl mb-6 animate-heart-beat text-gray-800">🫂🤍</div>
              <h3 className="text-2xl font-bold text-[var(--color-deep-rose)] font-heading leading-relaxed relative z-10">
                Aku bangga banget sama kamu, Sayang.
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
