"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const emojis = ["✧", "❀", "❁", "✿", "✽", "❃", "❋", "🌿"];

export default function FloatingEmoji() {
  const [elements, setElements] = useState<{ id: number; x: number; y: number; emoji: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random elements on mount
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-2xl opacity-30 animate-float"
          initial={{ x: `${el.x}vw`, y: `${el.y}vh` }}
          animate={{
            y: [`${el.y}vh`, `${el.y - 20}vh`, `${el.y}vh`],
            x: [`${el.x}vw`, `${el.x + 5}vw`, `${el.x}vw`],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  );
}
