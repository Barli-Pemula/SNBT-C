"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { timelineData } from "@/lib/config";

export default function ApresiasiPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 min-h-[calc(100vh-4rem)] max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 mt-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
          Perjalanan Hebat Kamu
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Aku Tau Pasti Banyak Banget hal yang kamu akuin tapi kamu korbanin dan memilih untuk belajarr
        </p>
      </motion.div>

      <div className="relative w-full max-w-3xl mb-20">
        {/* Timeline center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 timeline-line rounded-full opacity-50 hidden md:block"></div>

        <div className="space-y-12 md:space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Center icon */}
              <div className="z-10 bg-white rounded-full p-4 shadow-lg border-4 border-[var(--color-peach-light)] text-3xl mb-4 md:mb-0 transform transition-transform hover:scale-110">
                {item.icon}
              </div>

              {/* Content card */}
              <div className="w-full md:w-5/12">
                <div className="glass-card p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.desc}</p>
                  
                  {item.photo && (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mt-4 shadow-inner">
                      <Image
                        src={item.photo}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl text-center mb-16"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Skor Perjuangan Kamu</h3>
        <div className="h-6 w-full bg-white/50 rounded-full p-1 shadow-inner overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full rounded-full progress-fill flex items-center justify-end pr-2"
          >
            <span className="text-xs text-white font-bold drop-shadow-md">💯</span>
          </motion.div>
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">Di mata aku mah, nilai kamu udah 100 dari awal! hehe.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Link href="/galeri" className="glow-btn inline-block">
          Lanjut ke Galeri 📸
        </Link>
      </motion.div>
    </div>
  );
}
