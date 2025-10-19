import Link from "next/link"
import Image from "next/image"
import { services, valueProps, pillars } from "@/content/services"
import type { LucideIcon } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* HERO simple, sólido, bien espaciado */}
      <section className="bg-brand-600">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Consultores de Seguridad e Higiene
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/95 leading-relaxed max-w-xl">
              Su aliado estratégico para la prevención de accidentes y la excelencia operacional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="rounded-xl2 bg-white text-brand-700 px-5 py-3 font-semibold shadow-soft hover:bg-brand-50 transition-colors"
              >
                Solicitar asesoramiento
              </Link>
              <Link
                href="/servicios"
                className="rounded-xl2 px-5 py-3 font-semibold text-white ring-1 ring-white/70 hover:bg-white/10 transition-colors"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="justify-self-end">
            <div className="bg-white/95 rounded-xl2 p-6 shadow-soft inline-flex">
              <Image
                src="/logo-safetywork.png"
                alt="Safety & Work"
                width={220}
                height={220}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">¿Por qué elegirnos?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {valueProps.map((v) => (
            <div
              key={v.title}
              className="rounded-xl2 bg-white ring-1 ring-black/5 p-6 shadow-sm hover:shadow-soft transition-shadow"
            >
              <h3 className="text-base font-semibold">{v.title}</h3>
              <p className="text-sm text-ink-500 mt-2 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios (6 destacados) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Servicios</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => (
              <Card key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/servicios" className="text-brand-700 font-semibold hover:underline">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Nuestros pilares</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {pillars.map((p) => (
            <span
              key={p}
              className="rounded-full bg-brand-50 text-brand-700 px-4 py-2 text-sm font-medium border border-brand-100"
            >
              {p}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}

/* Card local (sin archivos nuevos) */
function Card({
  icon: Icon, title, desc,
}: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <article className="h-full rounded-xl2 bg-white ring-1 ring-black/5 p-6 shadow-sm hover:shadow-soft transition-shadow">
      <div className="flex items-start gap-4">
        <div className="rounded-xl2 bg-brand-50 text-brand-700 ring-1 ring-brand-100 p-3 shrink-0">
          <Icon size={28} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{desc}</p>
        </div>
      </div>
    </article>
  )
}
