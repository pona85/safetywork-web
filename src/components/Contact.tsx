import { BRAND } from "@/lib/brand";

export default function Contact(){
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
      <div className="card p-8">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="text-neutral-600 mt-2">Estamos listos para ser su socio en seguridad y eficiencia.</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            {BRAND.phones.map(p => <p key={p}>📞 {p}</p>)}
            <p>✉️ <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
          </div>
          <form action={`mailto:${BRAND.email}`} method="POST" className="grid gap-3">
            <input className="border rounded-lg px-3 py-2" name="name" placeholder="Nombre"/>
            <input className="border rounded-lg px-3 py-2" name="email" placeholder="Email" type="email"/>
            <textarea className="border rounded-lg px-3 py-2" name="message" placeholder="Mensaje" rows={4}/>
            <button className="btn-primary" type="submit">Enviar consulta</button>
          </form>
        </div>
      </div>
    </section>
  );
}
