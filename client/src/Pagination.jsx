/* eslint-disable react/prop-types */
import React from 'react';

function Pagination({ colorsPerPage, totalColors, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalColors / colorsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}

            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
