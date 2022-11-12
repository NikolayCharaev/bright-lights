import React from 'react';
import logo from '../../images/logo.png';
import logoText from '../../images/logo-text.png';
import play from '../../images/play.svg';
import { GiHamburgerMenu } from 'react-icons/gi';



import Nav from '../nav/Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <GiHamburgerMenu className='burger'/>
          <Nav />
        </div>
        <section className="header__content">
          <h1 className="header__title">New Single</h1>
          <h2 className="header__description">War For Love</h2>
          <div className="player">
            <img src={play} alt="play" className="player-play" />
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
