import { useState } from "react";
import Acceuil from "./pages/Acceuil";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Documentation from "./pages/Documentation";

function App() {
  const location = useLocation();

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main id="main-content">
        <div>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Acceuil />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
