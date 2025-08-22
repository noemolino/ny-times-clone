import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./Header.scss";

const Header = ({ onSearch }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('it-IT', options);
    setCurrentDate(formattedDate);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className="header">
      <div className="header__top-bar">
        <p className="header__date">{currentDate}</p>
      </div>

      <div className="header__middle-bar">
        <Link to="/" className="logo-link">
          <h1 className="logo">NYT Clone</h1>
        </Link>
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
        <button className="search-btn" onClick={handleSearchSubmit}>
          <FaSearch className="search-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;