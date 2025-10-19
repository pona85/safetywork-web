// app/services/page.tsx (fragmento)
import { IconFrame, IconServicios, IconBadge } from "@/components/icons/ServiceIcons";

const services = [
  { title: "Auditorías de equipos de torre", desc: "Inspección técnica de Drilling, Workover y Pulling." },
  { title: "Pruebas de BOP y Manifold", desc: "Ensayos de integridad y registros trazables." },
  { title: "Capacitaciones", desc: "H2S, altura, espacios confinados, RCP y más." },
  { title: "Memoria técnica contra incendio", desc: "Cálculo, diseño y conservador." },
  { title: "Ergonomía", desc: "Evaluaciones Res. 886/2015 y mejoras de puesto." },
  { title: "Mediciones ambientales", desc: "Ruido, iluminación, puesta a tierra." },
  { title: "Rastreo vehicular", desc: "Monitoreo y control de desvíos de flota." },
  { title: "Investigación de accidentes", desc: "Causas, reporte preliminar e informe final." },
  { title: "Auditorías de procesos / ISO 45001", desc: "Cumplimiento legal y mejora continua." },
  { title: "Mapa de riesgos", desc: "Identificación de peligros y controles." },
  { title: "Habilitaciones", desc: "Gestión documental y soporte técnico." },
];


export default function ServiceItem({
  icon, title, desc,
}: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <article className="card card-hover p-4 md:p-5 flex items-start gap-4">
      <IconBadge>{icon}</IconBadge>
      <div className="min-w-0">
        <h3 className="h3">{title}</h3>
        <p className="subtle mt-1">{desc}</p>
      </div>
    </article>
  );
}



