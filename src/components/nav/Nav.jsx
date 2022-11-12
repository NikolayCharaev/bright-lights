import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  function showSettings(event) {
    event.preventDefault();
  }
  return (
    <div className="nav__menu">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="# ">
              About
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="# ">
              News
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="# ">
              Music
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="# ">
              Media
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="# ">
              Tours
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="# ">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    
    </div>
  );
};

export default Nav;
