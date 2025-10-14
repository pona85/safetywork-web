export default function WhyChoose() {
  const items = [
    { t: "Experiencia comprobada", d: "20+ años en yacimientos de Neuquén, Río Negro y La Pampa." },
    { t: "Enfoque preventivo", d: "Anticipamos incidentes y protegemos personas y activos." },
    { t: "Excelencia y estándares", d: "Prácticas alineadas a normativa y sistema ISO 45001." },
    { t: "Soluciones integrales", d: "Desde la responsabilidad legal hasta auditorías y capacitación." },
    { t: "Flexibilidad", d: "Programas completos o controles puntuales según tu operación." },
  ];
  return (
    <section id="porque" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-semibold mb-6">¿Por qué elegirnos?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <article key={i.t} className="card p-6">
            <h3 className="font-semibold">{i.t}</h3>
            <p className="text-sm text-neutral-700 mt-2">{i.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
