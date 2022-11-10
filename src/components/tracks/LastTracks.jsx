import React from 'react';
import banner from '../../images/company-banner.png';
import play from '../../images/play.svg';
import playerGirl from '../../images/player-girl.png';
import spotify from '../../images/spotify.png';
import itunes from '../../images/itunes.png';
const LastTracks = () => {
  return (
    <section className="tracks">
      <div className="container">
        <div className="tracks__inner">
          <div className="tracks__img">
            <img src={playerGirl} alt="" className="tracks__image" />
          </div>
          <div className="tracks__content ">
            <div className="company__banner">
              <img src={banner} alt="#" className="company__logo" />
              <h2 className="tracks__title company__title">Last tracks</h2>
            </div>
            <div className="player">
              <img src={play} alt="play" className="player-play" />
              <span className="line"></span>
              <div className="player-timer">
                <span className="time-start">00:47-</span>
                <span className="time-end">03:30</span>
              </div>
            </div>

            <ol className="playlist">
              <li className="playlist__item active-track">3LAU, Bright Lights — How You Love Me</li>
              <li className="playlist__item">
                Bright Lights, Kaleena Zanders, Kandy — War For Love
              </li>
              <li className="playlist__item">Pink Is Punk, Benny Benassi, Bright Lights — Ghost</li>
              <li className="playlist__item">Hardwell, Dyro, Bright Lights — Never Say Goodbye</li>
              <li className="playlist__item">
                Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now
              </li>
              <li className="playlist__item"></li>
            </ol>

            <div className="tracks__social">
              <p className="social__title">Follow me:</p>
              <div className="social__list">
                <a href="# ">
                 <img src={spotify} alt="" />
                  Spotify
                </a>
                <a href="# ">
                  <img src={itunes} alt="" />
                  iTunes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastTracks;
