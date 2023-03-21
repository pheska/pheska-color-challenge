/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

function Sidebar({ setClick }) {
  return (
    <div className="sidenav">
      <Button setClick={setClick} />
      <a onClick={() => setClick('#FF0000')} href="#red">Red</a>
      <a onClick={() => setClick('#FFA500')} href="#orange">Orange</a>
      <a onClick={() => setClick('#FFFF00')} href="#yellow">Yellow</a>
      <a onClick={() => setClick('#00FF00')} href="#green">Green</a>
      <a onClick={() => setClick('#0000FF')} href="#blue">Blue</a>
      <a onClick={() => setClick('#A020F0')} href="#purple">Purple</a>
      <a onClick={() => setClick('#964B00')} href="#brown">Brown</a>
      <a onClick={() => setClick('#808080')} href="#gray">Gray</a>
    </div>
  );
}

export default Sidebar;
