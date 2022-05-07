import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

import Footer from "./components/footer/Footer";
import MobileApp from "./components/mobileApp/MobileApp";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD

        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />

        <Route path="about-us" element={<About />} />
=======
        <Route path="about-us" element={ <About />} />
        <Route path="contact-us" element={ <Contact />} />
>>>>>>> DevMelis
      </Routes>
      <div className="w-full">
        <MobileApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
