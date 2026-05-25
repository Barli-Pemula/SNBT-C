"use client";

import { useEffect, useState } from "react";

export default function MouseTrail() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; char: string }[]>([]);

  useEffect(() => {
    let idCounter = 0;
    const chars = ["❀", "🤍", "✧", "❁", "✽"];

    const handleMouseMove = (e: MouseEvent) => {
      // Add particle sparingly
      if (Math.random() > 0.1) return;

      const newParticle = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        char: chars[Math.floor(Math.random() * chars.length)]
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter(p => p.id !== newParticle.id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="trail-particle"
          style={{ left: p.x - 10, top: p.y - 10 }}
        >
          {p.char}
        </div>
      ))}
    </>
  );
}
