import { Wrench, ShieldCheck, FileCog, Activity, Flame, ListChecks, Search, Gauge, Car, Map } from "lucide-react"

export type Service = {
  title: string
  desc: string
  icon: React.ComponentType<any>
}

export const services: Service[] = [
  {
    title: "Responsabilidad Legal de S&H",
    desc: "Libro de seguridad, programa anual de capacitación, cumplimiento Anexo II – Res. SRT 905/15.",
    icon: FileCog
  },
  {
    title: "Auditoría de Equipos de Torre",
    desc: "Drilling / Workover / Pulling, END, Well Control, investigación de accidentes, pruebas de BOP y Choke Manifold.",
    icon: Wrench
  },
  {
    title: "Bombeo en Fractura Hidráulica",
    desc: "Auditoría de equipamiento y documentación para operaciones de fractura.",
    icon: Activity
  },
  {
    title: "Auditorías y Controles",
    desc: "Ley 19.587 / Dec. 351/79, ISO 45001, procedimientos, identificación de peligros y evaluación de riesgos.",
    icon: ShieldCheck
  },
  {
    title: "Protección contra Incendio",
    desc: "Memoria técnica, normativas municipales, conservador de incendio.",
    icon: Flame
  },
  {
    title: "Capacitaciones Específicas",
    desc: "IPER, Analista de Gases, H2S, espacios confinados, andamios, altura, herramientas, primeros auxilios y simulacros.",
    icon: ListChecks
  },
  {
    title: "Investigación de Accidentes",
    desc: "Reporte preliminar e informe final con plan de acciones.",
    icon: Search
  },
  {
    title: "Mediciones Ambientales",
    desc: "Ruido, iluminación, puesta a tierra en instalaciones fijas y móviles.",
    icon: Gauge
  },
  {
    title: "Ergonomía – Res. 886/2015",
    desc: "Protocolos de evaluación y mejora de puestos de trabajo.",
    icon: Map
  },
  {
    title: "Conducta de Manejo Vehicular",
    desc: "Control por rastreo satelital (total o parcial).",
    icon: Car
  }
]

export const pillars = [
  "Compromiso",
  "Responsabilidad",
  "Integridad",
  "Excelencia",
  "Crecimiento"
]

export const valueProps = [
  { title: "Experiencia comprobada", desc: "Más de 20 años en yacimientos de Neuquén, Río Negro y La Pampa." },
  { title: "Enfoque preventivo", desc: "Anticipamos y evitamos incidentes protegiendo activos y personas." },
  { title: "Excelencia", desc: "Adherimos a estándares de calidad y seguridad en cada servicio." },
  { title: "Cobertura integral", desc: "Desde responsabilidad legal hasta auditorías técnicas y capacitación." },
  { title: "Flexibilidad", desc: "Nos adaptamos a necesidades específicas, parciales o programas completos." }
]
