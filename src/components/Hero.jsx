import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const phone = import.meta.env.VITE_PHONE || "+385 XX XXX XXXX";
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1602975911761-613be8dc6555?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFrbGVuaWslMjBzJTIwYmlsamthbWF8ZW58MHwwfHx8MTc2MzcxOTEzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Staklenik s biljkama" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-emerald-900/40"/>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-28">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow">Rasadnik i Cvjećarna Mimoza</h1>
        <p className="text-emerald-50 text-lg md:text-xl mt-4 max-w-3xl">Svježe sadnice, sezonsko cvijeće i personalizirani buketi. Lokalno, održivo i s ljubavlju uzgojeno u Sesvetama.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md text-lg">
            <Phone size={18}/> Pozovite / Pošaljite upit
          </a>
          <Link to="/proizvodi" className="bg-white/90 hover:bg-white text-emerald-900 px-5 py-3 rounded-md text-lg">Pregledajte proizvode</Link>
        </div>
      </div>
    </section>
  );
}
