import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center font-bold text-xl">
                SW
              </div>
              <span className="font-bold text-xl">Safety & Work</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Consultores de Seguridad e Higiene. Su aliado estratégico para la prevención de accidentes y la excelencia operacional.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-white/70">
              <a href="mailto:sw.seguridad.higiene@gmail.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Mail size={18} />
                sw.seguridad.higiene@gmail.com
              </a>
              <a href="tel:+542995107895" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Phone size={18} />
                (+54) 299 - 5107895
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={18} className="shrink-0 mt-1" />
                Neuquén – Río Negro – La Pampa
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Teléfonos adicionales</h3>
            <div className="space-y-2 text-white/70">
              <p>(+54) 299 - 4563947</p>
              <p>(+54) 299 - 4210492</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Safety & Work. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}