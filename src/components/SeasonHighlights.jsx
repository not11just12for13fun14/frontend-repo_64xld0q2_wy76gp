export default function SeasonHighlights(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-emerald-900">Sezonske istaknutosti</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[{
          title: "Proljetne sadnice povrća",
          img: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1974&auto=format&fit=crop",
          desc: "Rajčice, paprike, krastavci i više – spremno za sadnju."},
        { title: "Aranžmani za događanja",
          img: "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1974&auto=format&fit=crop",
          desc: "Buketi i aranžmani po mjeri za svadbe i proslave."},
        { title: "Grmovi i živice",
          img: "https://images.unsplash.com/photo-1545241047-6083e492c620?q=80&w=1974&auto=format&fit=crop",
          desc: "Tuja, lovorvišnja i drugi za uređenje okućnica."}].map((c,i)=> (
          <div key={i} className="bg-white rounded-xl overflow-hidden border border-emerald-100 shadow-sm">
            <img src={c.img} alt={c.title} className="w-full h-44 object-cover" loading="lazy" />
            <div className="p-4">
              <div className="font-semibold text-emerald-900">{c.title}</div>
              <p className="text-emerald-700 text-sm mt-1">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
