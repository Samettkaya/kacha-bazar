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
import { Fragment, useState } from "react";
import User from "./components/user/User";
import Dashboard from "./components/dashboard/Dashboard";
import ChangePassword from "./components/changePassword/ChangePassword";
import MyOrders from "./components/myOrders/MyOrders";
import UpdateProfile from "./components/updateProfile/UpdateProfile";
import Offers from "./pages/Offers";

function App() {
  let [isOpenRegister, setIsOpenRegister] = useState(false);
  return (
    <Fragment>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path={"product/:productTitle"} element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="search" element={<Search />} />
        <Route path={"order/:id"} element={<Order />} />
        <Route path="offer" element={<Offers />} />
        <Route path="user" element={<User />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <div>
        <FooterHeader />
      </div>
      <div>
        <SideBar />
        <DrawerCart />
        <Login setIsOpenRegister={setIsOpenRegister} />
        <Register
          isOpen={isOpenRegister}
          setIsOpenRegister={setIsOpenRegister}
        />
      </div>
      <div className="w-full">
        <MobileApp />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
