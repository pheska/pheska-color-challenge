import React from 'react';
import Search from './Search';
import logo from './images/logo-symbol.svg';

// eslint-disable-next-line react/prop-types
function Header({ setClick }) {
  return (
    <div className="header">
      <a className="active" href="/"><img src={logo} alt="logo" /></a>
      <Search setClick={setClick} />
    </div>
  );
}

export default Header;
