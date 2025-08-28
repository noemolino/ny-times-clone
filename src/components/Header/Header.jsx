import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import "./Header.scss";

const Header = ({ onSearch }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false); // <-- nuovo stato

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      setIsSearching(true); // attiva modalità ricerca
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setIsSearching(false); // torna alla lente
  };

  return (
    <header className="header">
      <div className="header__top-bar">
        <Link to="/" className="logo-link">
          <h1 className="logo">NYT Clone</h1>
        </Link>
      </div>

      <div className="header__middle-bar">
        <p className="header__date">{currentDate}</p>
      </div>
      
      <div className="header__search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />

        {isSearching ? (
          <button className="search-btn" onClick={handleClearSearch}>
            <FaTimes className="search-icon" />
          </button>
        ) : (
          <button className="search-btn" onClick={handleSearchSubmit}>
            <FaSearch className="search-icon" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
