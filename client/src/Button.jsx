/* eslint-disable react/prop-types */
import React from 'react';

function Button({ setClick }) {
  const randomColor = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    const hexCode = `#${n.slice(0, 6)}`;
    return hexCode;
  };

  return (
    <div>
      <button type="button" onClick={() => setClick(randomColor())}>Random Color</button>
    </div>
  );
}

export default Button;
