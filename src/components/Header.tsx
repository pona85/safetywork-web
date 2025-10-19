"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const nav = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/por-que-elegirnos", label: "¿Por qué elegirnos?" },
    { href: "/quienes-somos", label: "¿Quiénes somos?" },
    { href: "/contacto", label: "Contacto" }
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-safetywork.png" alt="Safety & Work" width={36} height={36} className="rounded-sm" />
          <span className="font-semibold">Safety & Work</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm hover:text-brand-700 transition-colors",
                pathname === item.href && "text-brand-700 font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="ml-4 hidden md:inline-block rounded-xl2 bg-brand-500 text-white px-4 py-2 shadow-soft hover:bg-brand-600">
          Hablemos
        </Link>
      </div>
    </header>
  )
}
