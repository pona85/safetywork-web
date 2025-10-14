

export default function Cases(){
  const cases = [
    {
      title: "Reducción de incidentes en equipo de Workover",
      summary: "Auditoría integral y plan de acciones que disminuyó 35% los desvíos críticos en 90 días."
    },
    {
      title: "Implementación de protocolo de ergonomía",
      summary: "Evaluaciones y rediseño de puestos con mejoras medibles en fatiga y productividad."
    },
    {
      title: "Programa de capacitaciones H2S y espacios confinados",
      summary: "Cobertura 100% en cuadrillas críticas y cierre de hallazgos en auditorías internas."
    }
  ];
  return (
    
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Casos de éxito</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cases.map(c => (
          <article key={c.title} className="card p-6">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-neutral-700 mt-2">{c.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
