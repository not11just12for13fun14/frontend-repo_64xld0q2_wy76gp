import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SeasonHighlights from "../components/SeasonHighlights";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function Home(){
  return (
    <div className="bg-emerald-50">
      <Navbar/>
      <Hero/>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <a href="/proizvodi" className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm hover:shadow transition">
          <div className="font-semibold text-emerald-900">Ponuda proizvoda</div>
          <p className="text-emerald-700 text-sm">Pretražite katalog po kategorijama i dostupnosti.</p>
        </a>
        <a href="/narudzbe" className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm hover:shadow transition">
          <div className="font-semibold text-emerald-900">Narudžbe buketa</div>
          <p className="text-emerald-700 text-sm">Pošaljite upit za bukete i aranžmane.</p>
        </a>
        <a href="/kontakt" className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm hover:shadow transition">
          <div className="font-semibold text-emerald-900">Kontakt i radno vrijeme</div>
          <p className="text-emerald-700 text-sm">Pronađite nas u Sesvetama.</p>
        </a>
      </div>
      <SeasonHighlights/>
      <Footer/>
      <StickyMobileCTA/>
    </div>
  )
}
