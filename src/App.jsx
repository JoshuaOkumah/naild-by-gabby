import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Place from "./components/Place";
import Work from "./components/Work";
import Booking from "./components/Booking";
import Socials from "./components/Socials";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Place />
      <Services />
      <Work />
      <Booking />
      <Socials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
