import { Phone, ShoppingBag } from "lucide-react";

export default function StickyMobileCTA(){
  const phone = import.meta.env.VITE_PHONE || "+385 XX XXX XXXX";
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden z-40">
      <div className="m-3 rounded-full bg-emerald-700 text-white shadow-lg flex overflow-hidden">
        <a href={`tel:${phone}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 border-r border-emerald-600">
          <Phone size={18}/> Nazovite
        </a>
        <a href="/narudzbe" className="flex-1 inline-flex items-center justify-center gap-2 py-3">
          <ShoppingBag size={18}/> Naruči
        </a>
      </div>
    </div>
  )
}
