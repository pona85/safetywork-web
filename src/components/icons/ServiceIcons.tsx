import * as React from "react";
import {
  type Icon as LucideIcon,
  Handshake, Scale, Check,
  RadioTower, Wrench, Flame,
  ClipboardList, HardHat, Gauge,
  Car, FileSearch, Map as MapIcon,
  Presentation, Factory
} from "lucide-react";

export function IconBadge({ children, size = 44 }: { children: React.ReactNode; size?: number }) {
  return (
    <div
      className="badge"
      style={{ width: size, height: size }}
    >
      <div className="text-brand-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[1.8]">
        {children}
      </div>
    </div>
  );
}

/** Marco consistente, sin styled-jsx, 100% tailwind (server-safe) */
export default function IconFrame({
  children,
  className = "w-10 h-10"
}: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-xl border",
        "border-[color:rgba(124,179,210,0.9)]",
        className
      ].join(" ")}
    >
      {/* Lucide usa stroke=currentColor; seteamos el color con text-brand-blue */}
      <div className="text-brand-blue [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-[1.8]">
        {children}
      </div>
    </div>
  );
}

/** Pilares (como en el mockup) */
export const Icon = {
  Compromiso: Handshake,
  Integridad: Scale,
  Excelencia: Check,
} as const;

/** Mapeo (ajustable) para tus 11 servicios */
export const IconServicios: Record<string, LucideIcon> = {
  "Auditorías de equipos de torre": RadioTower,
  "Pruebas de BOP y Manifold": Wrench,
  "Capacitaciones": Presentation,
  "Memoria técnica contra incendio": Flame,
  "Ergonomía": HardHat,
  "Mediciones ambientales": Gauge,
  "Rastreo vehicular": Car,
  "Investigación de accidentes": FileSearch,
  "Auditorías de procesos / ISO 45001": ClipboardList,
  "Mapa de riesgos": MapIcon,
  "Habilitaciones": Factory,
};
