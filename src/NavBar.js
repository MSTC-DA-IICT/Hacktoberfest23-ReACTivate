import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SettingsMenu from './SettingsMenu';
import "./navbar.css";

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="navbar">
      <div className="logo">
      <img
            src="../logo-new.png"
            alt="Club Logo"
            className="img-fluid mt-4"
            style={{ maxHeight: "70px", maxWidth: "60px" }}
          />
      </div>
      <SearchBar />
      <button className="settings-button" onClick={toggleSettings}>
        Settings
      </button>
      {showSettings && <SettingsMenu />}
    </div>
  );
};

export default Navbar;
