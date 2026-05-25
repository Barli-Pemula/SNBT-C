"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhotoLightboxProps {
  photo: { src: string; caption: string } | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PhotoLightbox({ photo, onClose, onNext, onPrev }: PhotoLightboxProps) {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
        >
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-[var(--color-peach)] text-xl p-2"
          >
            Tutup ✕
          </button>
          
          <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black/20 rounded-lg overflow-hidden">
            <Image
              src={photo.src}
              alt="Gallery photo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          
          <div className="mt-6 text-center w-full flex items-center justify-between">
            <button 
              onClick={onPrev}
              className="text-white hover:text-[var(--color-peach)] p-2 text-2xl"
            >
              ←
            </button>
            <div className="flex-1"></div>
            <button 
              onClick={onNext}
              className="text-white hover:text-[var(--color-peach)] p-2 text-2xl"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
