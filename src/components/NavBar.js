import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { FaCog } from 'react-icons/fa';

export const NavBar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('light'); 

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
  };

  const handleAppearanceChange = (style) => {
    setSelectedStyle(style);
    console.log('Selected style:', style);
    setShowSettings(false);
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
            
            <Nav.Link className="settings-button" onClick={handleSettingsClick} aria-label="settings">
              <FaCog />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {showSettings && (
          <div className="settings-dropdown">
            <ul>
              <li
                onClick={() => handleAppearanceChange('light')}
                className={selectedStyle === 'light' ? 'active' : ''}
              >
                Light
              </li>
              <li
                onClick={() => handleAppearanceChange('dark')}
                className={selectedStyle === 'dark' ? 'active' : ''}
              >
                Dark
              </li>
              <li
                onClick={() => handleAppearanceChange('light-blue')}
                className={selectedStyle === 'light-blue' ? 'active' : ''}
              >
                Light Blue
              </li>
              <li
                onClick={() => handleAppearanceChange('light-green')}
                className={selectedStyle === 'light-green' ? 'active' : ''}
              >
                Light Green
              </li>
              <li
                onClick={() => handleAppearanceChange('light-pink')}
                className={selectedStyle === 'light-pink' ? 'active' : ''}
              >
                Light Pink
              </li>
            </ul>
          </div>
        )}

    </Navbar>
  );
};
