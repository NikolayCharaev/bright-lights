import React from 'react';
import logo from '../../images/logo.png';
import logoText from '../../images/logo-text.png';
const Logo = () => {
  return (
    <div className="header__logo logo">
      <img className="header__logo-img" src={logo} alt="logo" />
      <img className="header__logo-text" src={logoText} alt="logo" />
    </div>
  );
};

export default Logo;
