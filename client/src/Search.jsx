/* eslint-disable react/prop-types */
import React from 'react';

function Search({ setClick }) {
  return (
    <div>
      <input
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setClick(e.target.value);
          }
        }}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
