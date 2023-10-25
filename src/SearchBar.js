import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement search functionality using searchText
    console.log(`Searching for: ${searchText}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Clubs..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
