import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Blog(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch((API+"/api/posts")||"/api/posts").then(r=>r.json()).then(setPosts).catch(()=>setPosts([]));
  },[]);

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-emerald-900">Savjeti i novosti</h1>
        <div className="mt-6 grid gap-6">
          {posts.map(p => (
            <article key={p.id} className="bg-white rounded-xl border border-emerald-100 p-5">
              <h2 className="text-xl font-semibold text-emerald-900">{p.title}</h2>
              {p.cover_image && <img src={p.cover_image} alt={p.title} className="w-full h-56 object-cover rounded mt-3"/>}
              {p.excerpt && <p className="text-emerald-800 mt-2">{p.excerpt}</p>}
            </article>
          ))}
          {posts.length===0 && <div className="text-emerald-700">Trenutno nema objava.</div>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
