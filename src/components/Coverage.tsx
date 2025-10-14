export default function Coverage() {
  const zonas = ["Neuquén", "Río Negro", "La Pampa"];
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="card p-8 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Cobertura</h2>
          <p className="text-neutral-700 mt-2">
            Operamos principalmente en la cuenca con presencia en yacimientos y frentes de trabajo.
          </p>
          <ul className="mt-4 space-y-2">
            {zonas.map(z => <li key={z}>• {z}</li>)}
          </ul>
        </div>
        {/* Mapa/imagen simple (colocá un PNG/SVG en /public cuando lo tengas) */}
        <img src="/mapa-patagonia.png" alt="Cobertura" className="w-full rounded-xl border" />
      </div>
    </section>
  );
}
