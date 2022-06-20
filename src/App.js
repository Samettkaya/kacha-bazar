import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

import Footer from "./components/footer/Footer";
import MobileApp from "./components/mobileApp/MobileApp";
import Product from "./components/product/Product";
import Checkout from "./components/checkout/Checkout";
import Order from "./components/order/Order";
import FooterHeader from "./components/footerHeader/FooterHeader";
import SideBar from "./components/sideBar/SideBar";
import DrawerCart from "./components/drawer/Drawer";
import Search from "./components/search/Search";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useState } from "react";

function App() {

  let [isOpenLogin, setIsOpenLogin] = useState(false);
  let [isOpenRegister, setIsOpenRegister] = useState(false);
  return (
    <div>
      <Header isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin}/>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path={"product/:productTitle"} element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="search" element={<Search />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <div>
        <FooterHeader />
      </div>
      <div>
        <SideBar />
        <DrawerCart />
        <Login isOpen={isOpenLogin} setIsOpenLogin={setIsOpenLogin} setIsOpenRegister={setIsOpenRegister} />
        <Register isOpen={isOpenRegister} setIsOpenRegister={setIsOpenRegister} setIsOpenLogin={setIsOpenLogin} />
      </div>
      <div className="w-full">
        <MobileApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
