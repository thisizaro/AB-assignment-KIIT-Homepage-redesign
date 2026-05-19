import { useState } from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Rankings from "./components/Rankings";
import StatsBanner from "./components/StatsBanner";
import Academics from "./components/Academics";
import Campus from "./components/Campus";
import Admissions from "./components/Admissions";
import News from "./components/News";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} />
      <main>
        <Hero />
        <Rankings />
        <StatsBanner />
        <Academics />
        <Campus />
        <Admissions />
        <News />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
