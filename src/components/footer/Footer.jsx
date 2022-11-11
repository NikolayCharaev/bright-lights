import React from 'react';
import Logo from '../header/Logo';

import icon1 from '../../images/social-network/icon-1.svg';
import icon2 from '../../images/social-network/icon-2.svg';
import icon3 from '../../images/social-network/icon-3.svg';
import icon4 from '../../images/social-network/icon-4.svg';
import icon5 from '../../images/social-network/icon-5.svg';
import icon6 from '../../images/social-network/icon-6.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="artist__data">
            <h2 className="artist-management">
              Artist Management: <span>Jake Henny</span>
            </h2>
            <h2 className="artist-email">
              EMAIL : <span>jake@brightlightsofficial.com</span>
            </h2>
          </div>

          <ul className="artist__links">
            <li className="artist__links-item">
              <a className="artist__link" href="# ">
                <img className="artist__link-icon" src={icon1} alt="" />
              </a>
            </li>

            <li className="artist__links-item">
              <a className="artist__link" href="# ">
                <img className="artist__link-icon" src={icon2} alt="" />
              </a>
            </li>

            <li className="artist__links-item">
              <a className="artist__link" href="# ">
                <img className="artist__link-icon" src={icon3} alt="" />
              </a>
            </li>

            <li className="artist__links-item">
              <a className="artist__link" href="# ">
                <img className="artist__link-icon" src={icon4} alt="" />
              </a>
            </li>

            <li className="artist__links-item">
              <a className="artist__link" href="# ">
                <img className="artist__link-icon" src={icon5} alt="" />
              </a>
            </li>

            <li className="artist__links-item">
              <a className="artist__link" href="# ">
                <img className="artist__link-icon" src={icon6} alt="" />
              </a>
            </li>
          </ul>

          <div className="footer__copyright">
            <p>&copy; 2020 DJ bright lights.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
