import Image from "next/image";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BRAND } from "@/lib/brand";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image src="/hero-industrial.jpg" alt="Industria" width={1920} height={800}
          className="h-[54vh] w-full object-cover"/>
        <div className="absolute inset-0 bg-[color:var(--brand)]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-white text-3xl sm:text-5xl font-semibold max-w-3xl">
              {BRAND.claim}
            </h1>
            <a href="#servicios" className="btn-primary mt-6 inline-block">Conocé nuestros servicios</a>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <Pillars/>

      {/* Por qué elegirnos */}
      <section id="porque" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-4">¿Por qué elegirnos?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-neutral-700">
          <li>• Experiencia comprobada en yacimientos de Neuquén, Río Negro y La Pampa.</li>
          <li>• Enfoque preventivo para proteger activos y personal.</li>
          <li>• Compromiso con estándares de calidad y seguridad (ISO 45001).</li>
          <li>• Soluciones integrales y flexibles según tu operación.</li>
        </ul>
      </section>

      {/* Servicios */}
      <Services/>

      {/* Contacto */}
      <Contact/>
    </>
  );
}
