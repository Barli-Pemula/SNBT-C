"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhotoLightbox from "@/components/PhotoLightbox";
import QuoteStack from "@/components/QuoteStack";
import {
  dataPacar,
  galeriData,
  hasilCopy,
  heroCrossfade,
  pesanAkhir,
  timelineData,
} from "@/lib/config";

function Stripe({ small = false }: { small?: boolean }) {
  return (
    <div className={`stripe ${small ? "stripe-sm" : ""}`} aria-hidden="true">
      {Array.from({ length: small ? 40 : 36 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export default function Home() {
  const [crossIndex, setCrossIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const hasil = hasilCopy[dataPacar.hasilSNBT];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      setCrossIndex((i) => (i + 1) % heroCrossfade.length);
    }, 5600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-rise-block]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      {/* ——— Hero: striped card beside the room ——— */}
      <section className="grid min-h-svh grid-cols-1 gap-3 p-3 md:grid-cols-2 md:gap-3">
        <div className="flex flex-col bg-paper md:min-h-[calc(100svh-1.5rem)]">
          <Stripe />
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center md:px-10">
            <p
              data-rise
              style={{ ["--i" as string]: 0 }}
              className="text-[length:var(--step-small)] tracking-[0.08em] text-muted"
            >
              Dari Barlian
            </p>
            <h1
              data-rise
              style={{ ["--i" as string]: 1 }}
              className="mt-6 text-[length:var(--step-head)]"
            >
              Untuk kamu,
              <br />
              Cinta
            </h1>
            <p
              data-rise
              style={{ ["--i" as string]: 2 }}
              className="mt-6 max-w-[36ch] text-[length:var(--step-body)] text-muted"
            >
              Aku tau banget seberapa keras kamu belajar belakangan ini. Ini
              surat kecil dariku, buka pelan-pelan ya.
            </p>
            <a
              data-rise
              style={{ ["--i" as string]: 3 }}
              href="#hasil"
              className="btn mt-8"
            >
              Buka suratnya
            </a>
            <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[length:var(--step-small)]">
              <a className="underline underline-offset-4 transition-colors duration-[var(--t-hover)] hover:text-accent" href="#hasil">
                Hasil
              </a>
              <a className="underline underline-offset-4 transition-colors duration-[var(--t-hover)] hover:text-accent" href="#perjalanan">
                Perjalanan
              </a>
              <a className="underline underline-offset-4 transition-colors duration-[var(--t-hover)] hover:text-accent" href="#galeri">
                Galeri
              </a>
              <a className="underline underline-offset-4 transition-colors duration-[var(--t-hover)] hover:text-accent" href="#pesan">
                Pesan
              </a>
            </nav>
            <div className="mt-10" data-rise style={{ ["--i" as string]: 4 }}>
              <QuoteStack />
            </div>
          </div>
        </div>
        <div className="relative h-[48svh] overflow-hidden md:sticky md:top-3 md:h-[calc(100svh-1.5rem)]">
          <div className="crossfade absolute inset-0">
            {heroCrossfade.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={i === 0 ? "Foto Cinta" : ""}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={i === crossIndex ? "is-on" : undefined}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ——— Hasil: printed announcement card ——— */}
      <section
        id="hasil"
        className="relative overflow-hidden bg-ink px-3 pb-0 pt-24 md:pt-36"
      >
        <div
          data-rise-block
          className="mx-auto w-[92%] max-w-[560px] rotate-[-1deg] bg-paper px-7 pb-24 pt-10 md:px-14 md:pt-14"
          style={{ ["--i" as string]: 0 }}
        >
          <h2 className="text-center text-[length:clamp(1.75rem,3vw,2.5rem)]">
            {hasil.judul}
          </h2>
          <div className="drift relative mt-8 aspect-video w-full overflow-hidden">
            <Image
              src="/images/snap-2033389452.jpg"
              alt="Foto Cinta"
              fill
              sizes="(max-width: 640px) 80vw, 480px"
              className="object-cover"
            />
          </div>
          <p className="mt-8 text-center text-[length:var(--step-body)] text-muted">
            {hasil.paragraf}
          </p>
          <blockquote className="mx-auto mt-8 max-w-[34ch] text-center text-[length:var(--step-lead)] italic">
            {hasil.kutipan}
          </blockquote>
          <p className="mt-10 text-center text-[length:var(--step-small)] text-muted">
            Untuk {dataPacar.nama} · SNBT · dari {dataPacar.tandaTangan}
          </p>
          <div className="mt-10 text-center">
            <a href="#perjalanan" className="btn">
              Lihat perjalanannya
            </a>
          </div>
        </div>
      </section>

      {/* ——— Perjalanan: printed menu sheet ——— */}
      <section id="perjalanan" className="bg-bg px-3 py-24 md:py-36">
        <div
          data-rise-block
          className="scallop-both mx-auto max-w-[640px] bg-paper px-7 py-16 md:px-16 md:py-20"
        >
          <h2 className="text-center text-[length:clamp(2rem,4vw,3rem)]">
            Perjalananmu
          </h2>
          <p className="mx-auto mt-4 max-w-[36ch] text-center text-[length:var(--step-small)] text-muted">
            Lima hal yang aku lihat selama kamu belajar, dan yang bikin aku
            bangga.
          </p>
          <ul className="mt-14 space-y-12">
            {timelineData.map((item, i) => (
              <li
                key={item.title}
                data-rise-block
                style={{ ["--i" as string]: i }}
                className="text-center"
              >
                <h3 className="text-[length:var(--step-lead)] font-semibold">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[42ch] text-[length:var(--step-body)] text-muted">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-center text-[length:var(--step-small)] text-muted">
            Di mata aku, nilaimu udah seratus dari awal.
          </p>
        </div>
      </section>

      {/* ——— Galeri: photo tiles with label strips ——— */}
      <section id="galeri" className="bg-surface px-3 py-24 md:py-36">
        <h2
          data-rise-block
          className="px-1 text-[length:clamp(1.75rem,3vw,2.5rem)]"
        >
          Foto-foto kamu
        </h2>
        <p
          data-rise-block
          style={{ ["--i" as string]: 1 }}
          className="mt-3 max-w-[42ch] px-1 text-muted"
        >
          Semua yang kamu kirim, aku simpan. Biar kamu tau: kamu itu cantik dan
          keren banget.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {galeriData.map((item, i) => {
            const pair = i % 4;
            const stripClass =
              pair === 0
                ? "bg-paper text-ink"
                : pair === 1
                  ? "bg-ink text-paper"
                  : pair === 2
                    ? "bg-accent text-accent-ink"
                    : "bg-paper text-accent";
            return (
              <button
                key={item.src}
                type="button"
                data-rise-block
                style={{ ["--i" as string]: i }}
                onClick={() => setLightbox(i)}
                className="group block text-left"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[var(--t-hover)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className={`px-3 py-3 ${stripClass}`}>
                  <p className="text-[length:var(--step-small)]">{item.label}</p>
                  <p className="mt-1 flex justify-between text-[length:var(--step-small)] opacity-80">
                    <span>{item.tanggal}</span>
                    <span>{item.asal}</span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ——— Pesan: back of the card ——— */}
      <section id="pesan" className="bg-bg px-3 pb-16 pt-24 md:pb-24 md:pt-36">
        <Stripe small />
        <div
          data-rise-block
          className="mx-auto max-w-[1100px] bg-paper px-7 py-14 md:px-14"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-[length:clamp(1.75rem,3vw,2.5rem)]">
                Selalu,
                <br />
                {dataPacar.tandaTangan}
              </h2>
              <div className="mt-8 max-w-[62ch] space-y-5">
                {pesanAkhir.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[length:var(--step-lead)]"
                        : "text-[length:var(--step-body)] text-muted"
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              <div className="duotone w-[88px] p-1.5">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/cinta-1.jpg"
                    alt="Perangko kenangan"
                    fill
                    sizes="88px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-[length:var(--step-body)] md:text-right">
                <p>Untuk Cinta</p>
                <p className="text-muted">Mei 2026</p>
                <p className="text-muted">Dari Barlian</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-[length:var(--step-small)] text-muted">
          Dibuat dengan sayang, satu halaman penuh.
        </p>
      </section>

      {lightbox !== null && (
        <PhotoLightbox
          items={galeriData}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={(next) => setLightbox(next)}
        />
      )}
    </div>
  );
}
