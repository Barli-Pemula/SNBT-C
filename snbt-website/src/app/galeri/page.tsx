"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galeriData } from "@/lib/config";
import PhotoLightbox from "@/components/PhotoLightbox";

export default function GaleriPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galeriData.length);
    }
  };

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galeriData.length) % galeriData.length);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 min-h-[calc(100vh-4rem)] max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 mt-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-heading">
          Galeri Cinta
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Ini Adalah Galeri aku yang sebenernya sengaja Aku buat selama kamu ngirimmm HEHEHE, asal kamu tau Kamu Itu Cantik dan Keren BANGET
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 w-full space-y-6 mb-16">
        {galeriData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
            className="break-inside-avoid"
          >
            <div 
              className="polaroid cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden rounded-sm">
                <Image
                  src={item.src}
                  alt="Gallery photo"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Link href="/penutup" className="glow-btn inline-block">
          Baca Pesan Terakhir 💌
        </Link>
      </motion.div>

      {selectedIndex !== null && (
        <PhotoLightbox
          photo={galeriData[selectedIndex]}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
    </div>
  );
}
