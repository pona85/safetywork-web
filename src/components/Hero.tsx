import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[420px] sm:h-[520px] overflow-hidden ">
        {/* Fondo */}
        <Image
          src="/hero-placeholder.png"            // poné tu imagen acá
          alt="Industria petrolera - Safety & Work"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Degradé azul → transparente (izq → der) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r
                        from-[color:var(--brand)]/70 via-[color:var(--brand)]/33 to-transparent" />


        {/* --- CHAPA DEL LOGO --- */}
        <div className="absolute left-2 top-2">
          <div className="flex items-center gap-3 rounded-xl bg-[color:var(--brand)]/95 px-3 py-2 shadow-lg ring-1 ring-white/40">
            <Image src="/logo-safetywork.png" alt="Safety & Work" width={44} height={44} className="rounded-[6px] bg-white"/>
            <div className="leading-tight text-white">
              <p className="font-semibold">Safety & Work</p>
              <p className="text-xs opacity-90">Consultores de Seguridad e Higiene</p>
            </div>
          </div>
        </div>

        {/* Vignette suave para contraste (opcional) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b
                        from-black/3 via-transparent to-black/8" />

        {/* Texto alineado a la izquierda */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 sm:px-10">
            <div className="max-w-[75ch] text-white">
              <h1 className="font-semibold leading-tight text-3xl sm:text-5xl">
                Su aliado estratégico en prevención y excelencia operacional
              </h1>

              <a
                href="#servicios"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-white/95 px-5 py-3 font-medium text-[color:var(--brand)] shadow-sm hover:bg-white"
              >
                Conocé nuestros servicios
              </a>
            </div>
          </div>
        </div>

        {/* Esquinas redondeadas ya aplicadas por rounded-3xl */}
      </div>
    </section>
  );
}
