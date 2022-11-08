import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">About</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#">News</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#">Music</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#">Media</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#">Tours</a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
