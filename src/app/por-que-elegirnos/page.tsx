import { valueProps } from "@/content/services"

export default function ValuePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">¿Por qué elegirnos?</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {valueProps.map(v => (
          <div key={v.title} className="rounded-xl2 border p-6 bg-white">
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-ink-500 mt-2">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
