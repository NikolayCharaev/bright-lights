import React from 'react';
import logo from '../../images/logo.png';
import logoText from '../../images/logo-text.png';
import play from '../../images/play.svg'

import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img className="header__logo-img" src={logo} alt="logo" />
            <img className="header__logo-text" src={logoText} alt="logo" />
          </div>
          <Nav />
        </div>
        <section className="header__content">
            <h1 className='header__title'>New Single</h1> 
            <h2 className='header__description'>War For Love</h2>
            <div className="player">
                <img src={play} alt="play" className='player-play'/>
                <span className="line"></span>
                <div className="player-timer">
                    <span className="time-start">00:22-</span>
                    <span className="time-end">02:54</span>
                </div>
            </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
