import Link from "next/link";

export default function CasesTeaser() {
  const cases = [
    { t: "Workover: -35% desvíos críticos", d: "Plan de acciones post auditoría integral en 90 días." },
    { t: "Ergonomía aplicada", d: "Reducción de fatiga y mejoras de productividad medibles." },
    { t: "Capacitaciones H2S", d: "Cobertura total en cuadrillas críticas y cierre de hallazgos." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Casos de éxito</h2>
        <Link href="/casos" className="text-[color:var(--brand)] hover:underline">Ver todos</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cases.map(c => (
          <article key={c.t} className="card p-6">
            <h3 className="font-semibold">{c.t}</h3>
            <p className="text-sm text-neutral-700 mt-2">{c.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
