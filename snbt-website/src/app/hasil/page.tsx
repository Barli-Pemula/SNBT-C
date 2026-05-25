"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";

export default function HasilPage() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 min-h-[calc(100vh-4rem)] relative w-full">
      <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card-strong max-w-2xl w-full p-8 md:p-12 flex flex-col items-center text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-7xl mb-6"
        >
          🎉
        </motion.div>
        <h2 className="text-4xl font-bold mb-4 text-emerald-600 font-heading">
          Selamat Sayang!
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Semua kerja kerasmu terbayar. Kamu luar biasa, dan aku selalu tahu kamu bisa melakukannya.
        </p>
        <div className="w-full max-w-xs h-40 rounded-2xl mb-8 relative border-4 border-gray-100 shadow-md overflow-hidden bg-gray-50">
          <Image 
            src="/images/Snapchat-2033389452.jpg" 
            alt="Foto Kemenangan" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div className="w-full h-px bg-gray-200 my-6"></div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg font-medium text-gray-800 italic mb-16 max-w-lg"
        >
          &quot;Semua akan baik-baik saja. Cantik itu butuh waktu untuk mekar. Kamu sudah luar biasa, dan aku akan selalu ada di sini menemani, apapun jalannya.&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <Link href="/apresiasi" className="glow-btn inline-block">
            Lihat Perjalananmu 🚀
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
