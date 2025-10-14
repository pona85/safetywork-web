// src/components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur ">
      <nav className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/safetywork.png" alt="Safety & Work" width={32} height={32} className="rounded-[6px] ring-1 ring-[color:var(--brand)]/30"/>
          <div className="leading-none">
            <span className="font-semibold group-hover:opacity-90">Safety & Work</span>
            <span className="ml-2 hidden sm:inline text-xs text-neutral-500">Seguridad e Higiene</span>
          </div>
        </Link>
       
        <div className="hidden sm:flex items-center gap-6">
          <a href="/#servicios" className="hover:underline">Servicios</a>
          <a href="/#porque" className="hover:underline">Por qué elegirnos</a>
           <a href="/quienes-somos" className="hover:underline">Quiénes somos</a>
        <a href="/casos" className="hover:underline">Casos de éxito</a>
          <a href="/#contacto" className="btn-primary">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
