import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/_main.scss";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearchChange} />
      <main>
        <Routes>
          {/* Passa il termine di ricerca e la sua funzione di aggiornamento a Home */}
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;