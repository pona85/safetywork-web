import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-2xl bg-[color:var(--brand)] text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Conversemos sobre tu operación</h3>
          <p className="opacity-90">Te ayudamos a elevar la seguridad y la eficiencia de tu equipo.</p>
        </div>
        <Link href="#contacto" className="bg-white text-[color:var(--brand)] px-5 py-3 rounded-xl font-medium shadow">
          Contactanos
        </Link>
      </div>
    </section>
  );
}
