import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const phone = import.meta.env.VITE_PHONE || "+385 XX XXX XXXX";
  const email = import.meta.env.VITE_EMAIL || "info@primjer.hr";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600" />
            <div className="leading-tight">
              <div className="font-semibold text-emerald-900">Mimoza</div>
              <div className="text-xs text-emerald-700">Rasadnik & Cvjećarna</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-emerald-900">
            <Link to="/proizvodi" className="hover:text-emerald-600">Proizvodi</Link>
            <Link to="/narudzbe" className="hover:text-emerald-600">Narudžbe</Link>
            <Link to="/galerija" className="hover:text-emerald-600">Galerija</Link>
            <Link to="/o-nama" className="hover:text-emerald-600">O nama</Link>
            <Link to="/kontakt" className="hover:text-emerald-600">Kontakt</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">
              <Phone size={16} /> Nazovite
            </a>
            <a href={`mailto:${email}`} className="text-emerald-700 hover:text-emerald-900">
              <Mail size={18} />
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            <Link to="/proizvodi" onClick={() => setOpen(false)}>Proizvodi</Link>
            <Link to="/narudzbe" onClick={() => setOpen(false)}>Narudžbe</Link>
            <Link to="/galerija" onClick={() => setOpen(false)}>Galerija</Link>
            <Link to="/o-nama" onClick={() => setOpen(false)}>O nama</Link>
            <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  );
}
