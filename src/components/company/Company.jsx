import React from 'react';
import banner from '../../images/company-banner.png';

import image1 from '../../images/achievements-one.png';
import image2 from '../../images/achievements-two.png';

const Company = () => {
  return (
    <section className="company">
      <div className="container">
        <div className="company__inner">
          <div className="company__content">
            <div className="company__banner">
              <img className="company__logo" src={banner} alt="" />
              <h2 className="company__title">Bright Lights</h2>
            </div>
            <div className="company__text">
              <p>
                Bright Lights is a multi-Grammy nominated singer, songwriter, DJ and record
                producer. She has written for numerous
              </p>
              <p>
                pop stars including Britney Spears, Justin Bieber, Usher and Beyoncé. Her catalog
                has amassed over 1 billion streams worldwide. More than 100 million of those streams
                can be attributed to her artist career and include such hits as Porter Robinson's
                "Language," 3LAU's "How You Love Me" and her own single "Runaway." She was also a
                featured vocalist on Zedd's #1 Clarity album. Her latest music video, "Put It Down,"
                reached 1 million streams in the first week, releasing independently. Bright Lights
                is currently in the studio working on a self-produced album slated for release in
                2020.{' '}
              </p>
            </div>
            <ul className="company__achievements">
              <li className="company__achievements-item">
                <p className="company__achievements-text">Based in: Los Angeles</p>
              </li>
              <li className="company__achievements-item">
                <p className="company__achievements-text"> Genre: #DancePop</p>
              </li>
              <li className="company__achievements-item">
                <p className="company__achievements-text"> Founded in 2011</p>
              </li>
              <li className="company__achievements-item">
                <p className="company__achievements-text"> Label: 333 Recordings</p>
              </li>
            </ul>
          </div>
          <div className="company__images">
            <img className="company__image front" src={image2} alt="#" />
            <img className="company__image" src={image1} alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
