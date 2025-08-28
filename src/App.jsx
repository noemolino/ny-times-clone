import React, { useState } from 'react';
import Home from "./pages/Home";
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
        <Home searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;