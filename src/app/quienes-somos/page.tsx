import { BRAND } from "@/lib/brand";

export default function About(){
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Quiénes somos</h1>
      <p className="mt-4 text-neutral-700 max-w-3xl">
        Somos un equipo de profesionales con más de 20 años de experiencia en la industria
        petrolera, operando en yacimientos de Neuquén, Río Negro y La Pampa. Nuestro desafío es
        prevenir accidentes que puedan derivar en daños a las personas, equipos, instalaciones y al ambiente.
      </p>
      <h2 className="text-2xl font-semibold mt-10">Nuestros pilares</h2>
      <ul className="mt-3 space-y-2 text-neutral-700">
        <li>• Compromiso</li>
        <li>• Integridad</li>
        <li>• Excelencia</li>
        <li>• Responsabilidad</li>
        <li>• Crecimiento</li>
      </ul>
    </div>
  );
}
