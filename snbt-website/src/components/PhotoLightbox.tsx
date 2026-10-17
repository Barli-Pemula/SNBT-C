"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  items: { src: string; label: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

export default function PhotoLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  const item = items[index];

  return (
    <div
      className="lightbox-backdrop flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto: ${item.label}`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full max-w-[min(96vw,1100px)] flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.label}
          width={1200}
          height={1500}
          className="max-h-[78vh] w-auto object-contain"
          priority
        />
        <div className="flex w-full items-center justify-between gap-4 text-[length:var(--step-small)] text-bg">
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + items.length) % items.length)}
            className="px-3 py-2 text-accent-ink transition-opacity duration-[var(--t-hover)] hover:opacity-70"
            aria-label="Foto sebelumnya"
          >
            Sebelumnya
          </button>
          <span className="text-surface">
            {item.label} · {index + 1}/{items.length}
          </span>
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % items.length)}
            className="px-3 py-2 text-accent-ink transition-opacity duration-[var(--t-hover)] hover:opacity-70"
            aria-label="Foto berikutnya"
          >
            Berikutnya
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 px-3 py-2 text-accent-ink transition-opacity duration-[var(--t-hover)] hover:opacity-70"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
