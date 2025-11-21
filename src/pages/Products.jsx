import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_BACKEND_URL || "";

const categories = [
  "sobne biljke",
  "trajnica",
  "grmovi",
  "zivica",
  "povrtne sadnice",
  "zacinsko bilje",
  "sezonsko cvijece",
  "posude i aranzmani",
];

export default function Products(){
  const [items, setItems] = useState([]);
  const [cat, setCat] = useState("");
  const [avail, setAvail] = useState("");
  const [q, setQ] = useState("");

  useEffect(()=>{
    const url = new URL((API + "/api/products") || "/api/products", window.location.origin);
    if (cat) url.searchParams.set("category", cat);
    if (avail) url.searchParams.set("availability", avail);
    if (q) url.searchParams.set("q", q);
    fetch(url).then(r=>r.json()).then(setItems).catch(()=>setItems([]));
  },[cat, avail, q]);

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Proizvodi i biljke</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <select value={cat} onChange={e=>setCat(e.target.value)} className="px-3 py-2 rounded border border-emerald-200 bg-white">
            <option value="">Sve kategorije</option>
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={avail} onChange={e=>setAvail(e.target.value)} className="px-3 py-2 rounded border border-emerald-200 bg-white">
            <option value="">Sve dostupnosti</option>
            <option value="na stanju">Na stanju</option>
            <option value="sezonski">Sezonski</option>
            <option value="rasprodano">Rasprodano</option>
          </select>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Traži..." className="px-3 py-2 rounded border border-emerald-200 bg-white"/>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl border border-emerald-100 overflow-hidden hover:shadow transition">
              {item.image && <img src={item.image} alt={item.name} className="w-full h-44 object-cover" loading="lazy"/>}
              <div className="p-4">
                <div className="font-semibold text-emerald-900">{item.name}</div>
                <div className="text-sm text-emerald-700">{item.category}</div>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-emerald-900">€{item.price.toFixed(2)}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${item.availability === 'na stanju' ? 'bg-emerald-100 text-emerald-800' : item.availability === 'sezonski' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'}`}>{item.availability}</span>
                </div>
                <a href="/narudzbe" className="mt-4 inline-block w-full text-center px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white">Naruči</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
