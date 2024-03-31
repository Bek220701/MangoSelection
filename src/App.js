import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./companents/Footer";
import Header from "./companents/Header";
import Hero from "./companents/Hero";
import Home from "./companents/Home";
import About from "./companents/About";
import Product from "./companents/Product";
import Contact from "./companents/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Hero />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
