"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-safetywork.png" alt="Safety & Work" width={36} height={36} className="rounded-sm"/>
          <span className="font-semibold">Safety & Work</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#porque" className="hover:underline">Por qué elegirnos</a>
          <a href="#contacto" className="btn-primary">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
