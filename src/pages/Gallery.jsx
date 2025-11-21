import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Gallery(){
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(()=>{
    fetch((API+"/api/gallery")||"/api/gallery").then(r=>r.json()).then(setItems).catch(()=>setItems([]));
  },[]);

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Galerija i inspiracije</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map(it => (
            <button key={it.id} onClick={()=>setOpen(it)} className="text-left bg-white rounded-xl border border-emerald-100 overflow-hidden hover:shadow">
              <img src={it.image} alt={it.alt||it.title} className="w-full h-48 object-cover" loading="lazy"/>
              <div className="p-3">
                <div className="font-semibold text-emerald-900">{it.title}</div>
                {it.photographer && <div className="text-xs text-emerald-700">Foto: {it.photographer}</div>}
              </div>
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/70 grid place-items-center p-4" onClick={()=>setOpen(null)}>
          <img src={open.image} alt={open.alt||open.title} className="max-h-[85vh] rounded-lg"/>
        </div>
      )}
      <Footer/>
    </div>
  )
}
