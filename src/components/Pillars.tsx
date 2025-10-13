import { LinkIcon, BalanceIcon, CheckBoxIcon } from "./icons/PillarIcons";

const items = [
  {icon: LinkIcon, label: "Compromiso"},
  {icon: BalanceIcon, label: "Integridad"},
  {icon: CheckBoxIcon, label: "Excelencia"},
];

export default function Pillars(){
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map(({icon:Icon,label})=>(
          <div key={label} className="card p-6 text-center">
            <Icon className="mx-auto h-10 w-10" style={{color:"var(--brand)"}}/>
            <p className="mt-3 font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
