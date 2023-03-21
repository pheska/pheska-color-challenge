/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

function Swatch({
  color, handleOnClick, height = '200px', width = '200px',
}) {
  return (
    <div className="color-box" onClick={handleOnClick} style={{ backgroundColor: color, width, height }}>
      <div className="bottom-hex">
        <p>{color}</p>
      </div>
    </div>
  );
}

export default Swatch;
