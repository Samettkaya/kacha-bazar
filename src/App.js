import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/About";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={ <About />} />
        <Route path="contact-us" element={ <Contact />} />
      </Routes>
     
    </div>
  );
}

export default App;
