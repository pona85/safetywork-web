import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <p className="font-semibold">Safety & Work</p>
          <p className="text-sm text-ink-500 mt-2">Consultores de Seguridad e Higiene. Su aliado estratégico para la prevención de accidentes y la excelencia operacional.</p>
        </div>
        <div className="md:justify-self-end">
          <p className="text-sm">Neuquén – Río Negro – La Pampa</p>
          <p className="text-sm">(+54) 299 5107895 · 4563947 · 4210492</p>
          <p className="text-sm"><Link href="mailto:sw.seguridad.higiene@gmail.com" className="underline">sw.seguridad.higiene@gmail.com</Link></p>
        </div>
      </div>
      <div className="text-center text-xs text-ink-500 py-4">© {new Date().getFullYear()} Safety & Work</div>
    </footer>
  )
}
