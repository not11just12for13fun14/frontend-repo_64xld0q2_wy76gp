import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About(){
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Naša priča</h1>
        <p className="text-emerald-800 mt-4 leading-relaxed">Mimoza je obiteljski rasadnik i cvjećarna u Sesvetama. Njegujemo održive prakse, koristimo lokalne dobavljače i stalno pratimo sezonu kako bismo ponudili najkvalitetnije sadnice i cvjetne aranžmane. Vjerujemo u osobni pristup i savjetovanje svakog kupca.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1974&auto=format&fit=crop" alt="Vlasnici u stakleniku" className="rounded-xl"/>
          <div className="bg-white rounded-xl border border-emerald-100 p-5">
            <div className="font-semibold text-emerald-900">Radno vrijeme</div>
            <ul className="text-emerald-800 text-sm mt-2 grid gap-1">
              <li>Pon-Pet: 08:00 - 18:00</li>
              <li>Sub: 08:00 - 14:00</li>
              <li>Ned: zatvoreno</li>
            </ul>
            <div className="mt-4">
              <div className="font-semibold text-emerald-900 mb-2">Lokacija</div>
              <iframe title="Mapa" className="w-full h-56 rounded" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Vugrove%C4%8Dka%20cesta%2048%2C%2010360%20Sesvete&output=embed"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
