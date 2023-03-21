/* eslint-disable react/prop-types */
import React from 'react';
import Swatch from './Swatch';

function Colors({ colors, setClick }) {
  return (
    <div className="color-box-container" style={{ flexWrap: 'wrap' }}>
      {colors.map((color) => (
        <Swatch
          color={color.color}
          handleOnClick={() => setClick(color.color)}
          key={color.color_id}
        />
      ))}

    </div>

  );
}

export default Colors;
