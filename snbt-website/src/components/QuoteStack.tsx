"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motivasiList } from "@/lib/config";

export default function QuoteStack() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const draw = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
    timerRef.current = setTimeout(() => {
      setIndex((i) => {
        let next = i;
        while (next === i) next = Math.floor(Math.random() * motivasiList.length);
        return next;
      });
      setVisible(true);
    }, 180);
  }, []);

  return (
    <div className="quote-stack bg-paper px-5 py-4 max-w-[34ch]">
      <p
        className="text-[length:var(--step-body)] italic transition-opacity duration-[var(--t-ui)]"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {motivasiList[index]}
      </p>
      <button
        type="button"
        onClick={draw}
        className="mt-3 text-[length:var(--step-small)] text-muted underline underline-offset-4 transition-colors duration-[var(--t-hover)] hover:text-accent"
      >
        Tarik kartu lain
      </button>
    </div>
  );
}
