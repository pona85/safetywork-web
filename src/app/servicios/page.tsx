import { services } from "@/content/services"
import { Reveal } from "@/components/Reveal"

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">Servicios</h1>
      <p className="text-ink-500 mt-2 max-w-2xl">Ofrecemos una gama integral de servicios especializados para prevenir accidentes y asegurar el cumplimiento normativo.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <Reveal key={s.title}>
            <div className="rounded-xl2 border p-6 bg-white hover:shadow-soft">
              <s.icon className="size-6 text-brand-600" />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="text-sm text-ink-500 mt-2">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
