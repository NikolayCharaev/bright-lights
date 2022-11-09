import React from 'react';

import quoteImg from '../../images/quote.png'
const Quote = () => {
  return (
    <div className="quote">
      <div className="container">
        <div className="quote__inner">
          <div className="qoute__content">
            <p className="quote__text">
              “In an age where mainstream music is designed to be as easily consumed as possible,
              listening to Bright Lights is refreshing, to say the least. Her sound is perfect for
              radio but complex enough to separate her from other pop newcomers.”
            </p>
            <a className="quote__link" href="# ">PopULove.net</a>
          </div>
          <div className="quote__img">
            <img src={quoteImg} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
