import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import LogoText from "../img/logo-text.png";

function Header({ searchQuery, setSearchQuery }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState(searchQuery);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Debounce: update searchQuery after 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 400);
    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery]);

  return (
    <header className={`header ${showSearch ? "searchbar-active" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <img src={LogoText} alt="Arewafilm Logo" className="logo" />
        </Link>
      </div>
      <div className={`search-container ${showSearch ? "show" : ""}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="search-button">Search</button>
      </div>
      <div className="header-right">
        <button className="search-toggle" onClick={toggleSearch}>
          🔍
        </button>
      </div>
    </header>
  );
}

export default Header;
