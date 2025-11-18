"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import SobreNosotros from "@/components/SobreNosotros"
import { Shield, CheckCircle, Award, Users, Zap, TrendingUp, ArrowRight, Phone, Mail } from "lucide-react"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const services = [
    {
      icon: Shield,
      title: "Responsabilidad Legal",
      desc: "Libro de seguridad, programa anual de capacitación, cumplimiento Anexo II – Res. SRT 905/15"
    },
    {
      icon: CheckCircle,
      title: "Auditoría de Equipos",
      desc: "Control de equipos de torre, certificaciones Well Control, pruebas BOP y Manifold"
    },
    {
      icon: Users,
      title: "Capacitaciones",
      desc: "H2S, espacios confinados, trabajo en altura, primeros auxilios y más"
    },
    {
      icon: TrendingUp,
      title: "Mediciones Ambientales",
      desc: "Ruido, iluminación, ergonomía y puesta a tierra"
    },
    {
      icon: Award,
      title: "Investigación de Accidentes",
      desc: "Reporte preliminar e informe final detallado"
    },
    {
      icon: Zap,
      title: "Auditorías Integrales",
      desc: "Cumplimiento legal, ISO 45001, procedimientos y evaluación de riesgos"
    }
  ]

  const valueProps = [
    { title: "20+ años", desc: "Experiencia comprobada en yacimientos de la región" },
    { title: "Enfoque preventivo", desc: "Anticipamos y evitamos incidentes" },
    { title: "Excelencia", desc: "Adherimos a los más altos estándares" },
    { title: "Flexibilidad", desc: "Soluciones adaptadas a cada necesidad" },
    { title: "Cobertura integral", desc: "Desde responsabilidad legal hasta auditorías" }
  ]

  const pillars = ["Compromiso", "Responsabilidad", "Integridad", "Excelencia", "Crecimiento"]

  return (
    <>
      {/* HERO CON PARALLAX */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/95 via-brand-600/80 to-brand-600/60 z-10" />
          <img
            src="/hero-placeholder.png"
            alt="Industria Petrolera"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
        
        {/* Animated Background Pattern */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >

          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                ✨ Tu aliado estratégico en prevención
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                Seguridad e Higiene{" "}
                <span className="block text-brand-100">para la Industria</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Más de 20 años protegiendo activos y personas en yacimientos de Neuquén, Río Negro y La Pampa
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Solicitar asesoramiento
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>
                
                <motion.a
                  href="#servicios"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  Ver servicios
                </motion.a>
              </div>
            </motion.div>

            {/* Logo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-48 h-48 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                    <Image
                          src="/logo-safetywork.png"
                          alt="Safety & Work"
                          width={192}
                          height={192}
                          className="rounded-2xl"
                        />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-700">Safety & Work</div>
                    <div className="text-sm text-gray-600">Consultores de Seguridad e Higiene</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>


      {/* AGREGAR AQUÍ */}
      <SobreNosotros />

      {/* VALUE PROPS */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-ink-500 max-w-2xl mx-auto">
              Comprometidos con la excelencia en cada proyecto
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl font-bold text-brand-600 mb-2">{prop.title}</div>
                  <div className="text-sm text-ink-500 leading-relaxed">{prop.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-ink-500 max-w-2xl mx-auto">
              Soluciones integrales para la prevención y seguridad industrial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-brand-700/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-600 text-white rounded-2xl mb-6 shadow-lg"
                  >
                    <service.icon size={32} strokeWidth={2} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-ink-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              Nuestros Pilares
            </h2>
            <p className="text-xl text-ink-500">
              Valores que nos definen y guían nuestro trabajo
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all cursor-default"
              >
                {pillar}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    {/* GALERÍA DE PROYECTOS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              Nuestro Trabajo en Campo
            </h2>
            <p className="text-xl text-ink-500 max-w-2xl mx-auto">
              Presencia en los principales yacimientos de la región
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/yacimiento-1.jpg", title: "Auditoría de Equipos" },
              { img: "/capacitacion.jpg", title: "Capacitación H2S" },
              { img: "/equipo-torre.jpg", title: "Control BOP" },
              { img: "/yacimiento-2.jpg", title: "Inspección de Seguridad" },
              { img: "/epp-team.jpg", title: "Equipo en Campo" },
              { img: "/certificacion.jpg", title: "Certificaciones" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para elevar tu seguridad operacional?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Conversemos sobre cómo podemos proteger su operación y potenciar su crecimiento
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="mailto:sw.seguridad.higiene@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-brand-700 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                <Mail size={24} />
                sw.seguridad.higiene@gmail.com
              </motion.a>
              
              <motion.a
                href="tel:+542995107895"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <Phone size={24} />
                (+54) 299 - 5107895
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
              <span>(+54) 299 - 4210492</span>
              <span>•</span>
              <span>(+54) 299 - 4563947</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}