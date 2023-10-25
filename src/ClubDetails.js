import React from 'react';
import "./ClubDetails.css";
const ClubDetails = ({ club }) => {
  return (
    <div className="club-details">
      <h2>{club}</h2>
      {/* Add more club details and events here */}
    </div>
  );
};

export default ClubDetails;
