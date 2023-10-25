import React from 'react'; // Import 'React' at the beginning of the file
import AppearanceSettings from './AppearanceSettings';
import "./settings.css";

const SettingsMenu = () => {
  return (
    <div className="settings-menu">
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>
          <AppearanceSettings />
        </li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
