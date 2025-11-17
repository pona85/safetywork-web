"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const nav = [
    { href: "/", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#contacto", label: "Contacto" }
  ]
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"
          >
            SW
          </motion.div>
          <span className="font-bold text-lg text-ink-900 group-hover:text-brand-600 transition-colors">
            Safety & Work
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-brand-50 hover:text-brand-700",
                pathname === item.href && "bg-brand-50 text-brand-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Hablemos
        </motion.a>
      </div>
    </motion.header>
  )
}