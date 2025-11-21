import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact(){
  const [status, setStatus] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    data.consent = !!data.consent;

    if(!data.consent){
      setStatus({error:true, msg:"Molimo označite privolu za obradu podataka."});
      return;
    }

    try{
      const res = await fetch((API+"/api/contact")||"/api/contact", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
      });
      const json = await res.json();
      setStatus({error:false, msg:"Poruka poslana. Hvala! Referenca: "+json.id});
      e.target.reset();
    }catch(err){
      setStatus({error:true, msg:"Greška pri slanju. Pokušajte kasnije."});
    }
  }

  const address = "Vugrovečka cesta 48, 10360 Sesvete";

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900">Kontakt i lokacija</h1>
          <p className="text-emerald-800 mt-2">Adresa: {address}</p>
          <iframe title="Mapa" className="w-full h-64 rounded mt-4" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Vugrove%C4%8Dka%20cesta%2048%2C%2010360%20Sesvete&output=embed"></iframe>
        </div>
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl border border-emerald-100 grid gap-3 h-fit">
          <input name="full_name" required placeholder="Ime i prezime" className="px-3 py-2 rounded border border-emerald-200"/>
          <input name="phone" placeholder="Telefon" className="px-3 py-2 rounded border border-emerald-200"/>
          <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded border border-emerald-200"/>
          <textarea name="message" rows="4" required placeholder="Poruka" className="px-3 py-2 rounded border border-emerald-200"/>
          <label className="inline-flex items-center gap-2 text-emerald-900 text-sm"><input type="checkbox" name="consent" required/> Slažem se s obradom podataka.</label>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md">Pošalji</button>
          {status && <div className={`${status.error?"text-red-700 bg-red-50":"text-emerald-800 bg-emerald-50"} p-3 rounded`}>{status.msg}</div>}
        </form>
      </div>
      <Footer/>
    </div>
  );
}
