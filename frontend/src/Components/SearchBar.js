import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(e);  
  };

  return (
    <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search Products"/>
  );
};

export default SearchBar;