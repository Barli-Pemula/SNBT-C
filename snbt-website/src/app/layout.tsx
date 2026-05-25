import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import MouseTrail from "@/components/MouseTrail";
import FloatingEmoji from "@/components/FloatingEmoji";
import SurpriseModal from "@/components/SurpriseModal";
import SecretButton from "@/components/SecretButton";
import DoodleBackground from "@/components/DoodleBackground";

export const metadata: Metadata = {
  title: "Untuk Cinta 🌸",
  description: "Website spesial untuk menyambut hasil SNBT-mu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="antialiased">
      <body className="min-h-screen flex flex-col pt-16">
        <DoodleBackground />
        <MouseTrail />
        <FloatingEmoji />
        <SurpriseModal />
        <Navbar />
        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>
        <SecretButton />
      </body>
    </html>
  );
}
