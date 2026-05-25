"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { dataPacar } from "@/lib/config";

export default function Home() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const handleCekHasil = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      router.push("/hasil");
    }, 3000);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card-strong max-w-2xl w-full p-8 md:p-12 flex flex-col items-center text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="photo-frame mb-8 relative w-48 h-48 md:w-64 md:h-64"
        >
          <Image
            src={dataPacar.fotoHero}
            alt={dataPacar.nama}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gradient-warm"
        >
          Perjalanan Indahmu, {dataPacar.nama}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg"
        >
          Aku tau banget seberapa keras dan hebat perjuangan kamu belakangan ini.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1 }}
          onClick={handleCekHasil}
          className="glow-btn"
        >
          Lihat Hasil SNBT ✨
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 modal-overlay"
          >
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-sm text-center border-2 border-[var(--color-peach)]">
              <div className="text-6xl mb-4 animate-heart-beat">🤗</div>
              <h3 className="text-xl font-bold text-gray-800 font-heading">
                Apa pun hasilnya, aku sudah siap memelukmu
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
