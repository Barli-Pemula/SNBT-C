"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const doodles = [
  "✿", "❀", "❁", "✾", "✽", "❃", "❋", "🌿", "🍃", "🍄", "✍️", "〰️", "✧", "⋆", "☁️"
];

export default function DoodleBackground() {
  const [elements, setElements] = useState<{ id: number; char: string; left: string; top: string; delay: number; duration: number; rotate: number }[]>([]);

  useEffect(() => {
    // Generate static random positions on mount
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      char: doodles[Math.floor(Math.random() * doodles.length)],
      left: `${Math.random() * 95}vw`,
      top: `${Math.random() * 95}vh`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      rotate: Math.random() * 360,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 mix-blend-multiply">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-gray-400 select-none text-2xl md:text-4xl"
          initial={{ opacity: 0, rotate: el.rotate }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: ["0%", "-10%", "0%"],
            rotate: el.rotate + 10,
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
          style={{ left: el.left, top: el.top }}
        >
          {el.char}
        </motion.div>
      ))}
    </div>
  );
}
