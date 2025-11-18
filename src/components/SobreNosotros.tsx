"use client"

import { motion } from "framer-motion"
import { Shield, Target, Award, TrendingUp, Users } from "lucide-react"

export default function SobreNosotros() {
  const pillars = [
    { icon: Shield, title: "Compromiso", desc: "Con la seguridad de cada persona en cada operación" },
    { icon: Users, title: "Responsabilidad", desc: "Actuamos con profesionalismo y ética" },
    { icon: Award, title: "Integridad", desc: "Transparencia y honestidad en cada servicio" },
    { icon: Target, title: "Excelencia", desc: "Superamos estándares de calidad constantemente" },
    { icon: TrendingUp, title: "Crecimiento", desc: "Evolución continua junto a nuestros clientes" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* QUIÉNES SOMOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-brand-50 rounded-full text-brand-700 font-semibold text-sm"
              >
                Sobre Nosotros
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
                ¿Quiénes somos?
              </h2>
              
              <div className="space-y-4 text-lg text-ink-700 leading-relaxed">
                <p>
                  Somos un <strong className="text-brand-600">equipo de profesionales</strong> con más de <strong className="text-brand-600">20 años de experiencia</strong> en la industria petrolera, trabajando en los yacimientos más importantes de <strong>Neuquén, Río Negro y La Pampa</strong>.
                </p>
                
                <p>
                  Nuestra trayectoria nos ha permitido comprender profundamente los desafíos únicos de la industria y desarrollar soluciones efectivas que protegen vidas, equipos y operaciones.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center h-full text-white p-8 text-center">
                    <svg className="w-24 h-24 mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-2xl font-bold mb-2">Nuestro Equipo</p>
                    <p className="text-sm opacity-90">20+ años de experiencia en yacimientos</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-400 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-600 rounded-full blur-3xl opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* NUESTRO DESAFÍO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8"
                >
                  <Target className="text-white" size={40} strokeWidth={2} />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nuestro Desafío
                </h2>
                
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
                  Es <strong>prevenir accidentes</strong> que puedan derivar en daños a las personas, equipos, instalaciones y ambiente.
                </p>

                <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                  <p className="text-white/90 font-medium italic">
                    &ldquo;La prevención de accidentes es fundamental para cuidar nuestra vida y la de los demás. La seguridad es una inversión valiosa.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NUESTROS PILARES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              Nuestros Pilares
            </h2>
            <p className="text-xl text-ink-500 max-w-2xl mx-auto">
              Valores fundamentales que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl mb-4 shadow-lg"
                  >
                    <pillar.icon className="text-white" size={28} strokeWidth={2} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-ink-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}