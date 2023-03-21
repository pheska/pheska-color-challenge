/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import Swatch from './Swatch';

function Color({ click, setClick }) {
  const randomHex = () => {
    const hexArray = [];
    while (hexArray.length < 5) {
      const n = (Math.random() * 0xfffff * 1000000).toString(16);
      hexArray.push(`#${n.slice(0, 6)}`);
    }
    return hexArray;
  };

  return (
    <div className="detail-view">
      <Swatch color={click} height="600px" width="800px" />
      <div className="color-box-container">
        {randomHex().map((color) => <Swatch key={color.color_id} color={color} handleOnClick={() => setClick(color)} />)}

      </div>
      <div className="button-container">
        <button onClick={() => setClick()}>Clear</button>
      </div>

    </div>
  );
}

export default Color;
