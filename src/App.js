import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products";
import Register from "./components/Register";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <div className="hero_area">
        {/* header section strats */}
        <Header />
        {/* end header section */}
        {/* slider section */}
        <Slider />
        {/* end slider section */}
      </div>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      {/* footer section */}
    </div>
  );
}

export default App;
