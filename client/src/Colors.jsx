/* eslint-disable react/prop-types */
import React from 'react';
import Swatch from './Swatch';

function Colors({ setClick }) {
  const hexGen = () => {
    const hexArray = [];
    while (hexArray.length < 12) {
      const n = (Math.random() * 0xfffff * 1000000).toString(16);
      hexArray.push(`#${n.slice(0, 6)}`);
    }
    return hexArray;
  };

  return (
  // this <div> is commented out so that I could utilize the hexGen function to render my home page.
  // Previously, <div> below could map through the provided colors from the fetch.
  // Again, I reworked this to get my submission rendering the frontend of the application
  // I was having problems deploying my server and was working against the clock.
  // <div className="color-box-container" style={{ flexWrap: 'wrap' }}>
  //   {colors.map((color) => (
  //     <Swatch
  //       color={color.color}
  //       handleOnClick={() => setClick(color.color)}
  //       key={color.color_id}
  //     />
  //   ))}

    // </div>
    <div className="color-box-container" style={{ flexWrap: 'wrap' }}>
      {hexGen().map((color) => (
        <Swatch
          key={color}
          color={color}
          handleOnClick={() => setClick(color)}
        />
      ))}

    </div>

  );
}

export default Colors;
