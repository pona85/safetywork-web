import "./globals.css";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `${BRAND.name} · Seguridad e Higiene`,
  description: BRAND.claim,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
