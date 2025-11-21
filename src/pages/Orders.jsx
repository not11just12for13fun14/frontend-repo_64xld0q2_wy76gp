import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Orders(){
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    data.pickup = !!data.pickup;
    data.delivery = !!data.delivery;
    data.consent = !!data.consent;

    if(!data.consent){
      setStatus({error:true, msg:"Molimo označite privolu za obradu podataka."});
      return;
    }

    setLoading(true);
    try{
      const res = await fetch((API+"/api/orders")||"/api/orders", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
      });
      const json = await res.json();
      setStatus({error:false, msg:"Hvala! Vaš upit je zaprimljen. Referenca: "+json.id});
      e.target.reset();
    }catch(err){
      setStatus({error:true, msg:"Došlo je do greške. Pokušajte ponovno."});
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar/>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Narudžbe buketa i aranžmana</h1>
        <p className="text-emerald-800 mt-2">Ispunite obrazac za upit. Odgovorit ćemo u najkraćem roku.</p>
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-xl border border-emerald-100 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="full_name" required placeholder="Ime i prezime" className="px-3 py-2 rounded border border-emerald-200"/>
            <input name="phone" required placeholder="Telefon" className="px-3 py-2 rounded border border-emerald-200"/>
            <input name="email" type="email" placeholder="Email (opcionalno)" className="px-3 py-2 rounded border border-emerald-200"/>
            <input name="event_date" type="date" className="px-3 py-2 rounded border border-emerald-200"/>
          </div>
          <textarea name="message" rows="4" placeholder="Opis, boje, stil, cvijeće..." className="px-3 py-2 rounded border border-emerald-200"/>
          <div className="flex gap-6">
            <label className="inline-flex items-center gap-2 text-emerald-900"><input type="checkbox" name="pickup"/> Preuzimanje</label>
            <label className="inline-flex items-center gap-2 text-emerald-900"><input type="checkbox" name="delivery"/> Dostava</label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="budget_eur" type="number" min="0" step="1" placeholder="Okvirni budžet (€)" className="px-3 py-2 rounded border border-emerald-200"/>
            <input name="reference_images" type="url" placeholder="Link na referentne fotografije (opc.)" className="px-3 py-2 rounded border border-emerald-200"/>
          </div>
          <label className="inline-flex items-center gap-2 text-emerald-900 text-sm">
            <input type="checkbox" name="consent" required/> Slažem se s obradom podataka u svrhu odgovora na upit.
          </label>
          <button disabled={loading} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md">{loading?"Slanje...":"Pošalji upit"}</button>
          {status && <div className={`${status.error?"text-red-700 bg-red-50":"text-emerald-800 bg-emerald-50"} p-3 rounded`}>{status.msg}</div>}
        </form>
      </div>
      <Footer/>
    </div>
  )
}
