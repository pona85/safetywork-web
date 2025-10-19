export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">Contacto</h1>
      <p className="mt-3 text-ink-700">Estamos listos para ser su socio en seguridad y eficiencia. ¡Hablemos!</p>

      <div className="mt-8 rounded-xl2 border p-6 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Datos de contacto</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Tel: (+54) 299 5107895 · 4563947 · 4210492</li>
            <li>Email: <a className="underline" href="mailto:sw.seguridad.higiene@gmail.com">sw.seguridad.higiene@gmail.com</a></li>
            <li>Región: Neuquén – Río Negro – La Pampa</li>
          </ul>
        </div>
        <form className="grid gap-3">
          <input className="border rounded-lg px-3 py-2" placeholder="Nombre y empresa" />
          <input type="email" className="border rounded-lg px-3 py-2" placeholder="Email" />
          <textarea className="border rounded-lg px-3 py-2 min-h-[120px]" placeholder="Cómo podemos ayudar" />
          <button className="rounded-xl2 bg-brand-500 text-white px-4 py-2 justify-self-start hover:bg-brand-600">Enviar</button>
          <p className="text-xs text-ink-500">* Conecta esta forma a tu backend/servicio de email en otro paso.</p>
        </form>
      </div>
    </div>
  )
}
