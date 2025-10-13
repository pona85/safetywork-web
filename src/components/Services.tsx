import { RigIcon, BopIcon, TrainingIcon } from "./icons/ServiceIcons";

const services = [
  {icon: RigIcon, title:"Auditorías de equipos de torre"},
  {icon: BopIcon, title:"Pruebas de BOP / Choke Manifold"},
  {icon: TrainingIcon, title:"Capacitaciones específicas"},
  {icon: RigIcon, title:"Memoria técnica contra incendio"},
  {icon: TrainingIcon, title:"Investigación de accidentes"},
  {icon: BopIcon, title:"Mediciones ambientales"},
  // …completamos los 11 del PDF cuando te parezca bien
];

export default function Services(){
  return (
    <section id="servicios" className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-8">Servicios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon,title})=>(
            <div key={title} className="card p-6 flex items-start gap-4">
              <Icon className="h-8 w-8 shrink-0" style={{color:"var(--brand)"}}/>
              <p className="font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
