import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BusinessModel from "./pages/BusinessModel";
import Clients from "./pages/Clients";
import DoingBusiness from "./pages/DoingBusiness";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import TradeInvestment from "./pages/TradeInvestment";
import Network from "./pages/Network";
import CountryDetail from "./pages/CountryDetail";
import News from "./pages/News";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business-model" element={<BusinessModel />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/doing-business" element={<DoingBusiness />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/trade-investment" element={<TradeInvestment />} />
            <Route path="/network" element={<Network />} />
            <Route path="/network/:slug" element={<CountryDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
