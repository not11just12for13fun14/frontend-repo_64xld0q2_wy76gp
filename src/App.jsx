import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/proizvodi" element={<Products/>} />
      <Route path="/narudzbe" element={<Orders/>} />
      <Route path="/galerija" element={<Gallery/>} />
      <Route path="/o-nama" element={<About/>} />
      <Route path="/kontakt" element={<Contact/>} />
      <Route path="/blog" element={<Blog/>} />
    </Routes>
  );
}
export default App;
