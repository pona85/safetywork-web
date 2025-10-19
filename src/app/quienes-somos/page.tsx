export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">¿Quiénes somos?</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <p className="text-ink-700">
          Somos un equipo de profesionales con más de 20 años de experiencia en la industria petrolera,
          trabajando en yacimientos de Neuquén, Río Negro y La Pampa. Nos enfocamos en prevenir accidentes
          y elevar los estándares de seguridad en cada operación.
        </p>
        <p className="text-ink-700">
          Acompañamos a nuestros clientes con soluciones integrales que abarcan aspectos legales,
          auditorías técnicas, capacitaciones específicas y mejora continua de procesos.
        </p>
      </div>
    </div>
  )
}
