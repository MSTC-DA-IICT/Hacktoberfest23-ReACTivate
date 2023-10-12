import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { FaCog } from 'react-icons/fa';

export const NavBar = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  return (
    <Navbar expand="md" className='navbar'>
        
        <Navbar.Brand as={Link} to="/">
          LOGO
        </Navbar.Brand>

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} aria-label="home" to="/">
              HOME
            </Nav.Link>

            <Nav.Link as={Link} aria-label="home" to="/clubs">
              CLUBS
            </Nav.Link>

            <div className='search-box'>
              <input type="text" />
              <button>Search</button>
            </div>
            
            <Nav.Link className="settings-button" onClick={handleSettingsClick} aria-label="settings">
              <FaCog />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {showSettings && (
          <div className="settings-dropdown">
            <ul>
              <li>
                <a href='/appearance' >Appearance</a>
              </li>
              <li>
                <a href='/' >lorem</a>
              </li>
              <li>
                <a href='/' >ipsum</a>
              </li>
              <li>
                <a href='/' >dolor</a>
              </li>
            </ul>
          </div>
        )}
    </Navbar>
  );
};
