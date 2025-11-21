import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const phone = import.meta.env.VITE_PHONE || "+385 XX XXX XXXX";
  const email = import.meta.env.VITE_EMAIL || "info@primjer.hr";
  const address = "Vugrovečka cesta 48, 10360 Sesvete";

  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-emerald-900 mb-2">Rasadnik i Cvjećarna Mimoza</div>
          <p className="text-emerald-700 text-sm">Lokalni rasadnik i cvjećarna s naglaskom na sezonsku ponudu i održive prakse.</p>
        </div>
        <div className="text-emerald-800 text-sm grid gap-2">
          <div className="inline-flex items-center gap-2"><MapPin size={16}/> {address}</div>
          <a className="inline-flex items-center gap-2 hover:text-emerald-900" href={`tel:${phone}`}><Phone size={16}/> {phone}</a>
          <a className="inline-flex items-center gap-2 hover:text-emerald-900" href={`mailto:${email}`}><Mail size={16}/> {email}</a>
        </div>
        <div className="text-emerald-700 text-xs">
          © {new Date().getFullYear()} Mimoza. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
