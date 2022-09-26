import "./App.css";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import ShopAllProducts from "./components/pages/ShopAllProducts";
import Careers from './components/pages/Careers'
import AboutUs from './components/pages/AboutUs'
import ShopByBrand from './components/pages/ShopByBrand'
import Download from './components/pages/Download'
import Support from './components/pages/Support'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Login</div>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop-all-products" element={<ShopAllProducts />} />
        <Route path="/shop-by-brand" element={<ShopByBrand />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/download-center" element={<Download />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
