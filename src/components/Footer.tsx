import { BRAND } from "@/lib/brand";

export default function Footer(){
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid sm:grid-cols-2 gap-6">
        <div className="text-sm">
          <p className="font-semibold">SW · {BRAND.name}</p>
          <p>{BRAND.claim}</p>
          <p className="mt-2">{BRAND.location}</p>
        </div>
        <div className="text-sm sm:text-right">
          {BRAND.phones.map(p=><p key={p}>📞 {p}</p>)}
          <p>✉️ <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
        </div>
      </div>
    </footer>
  );
}
