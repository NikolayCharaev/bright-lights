import React from 'react';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slider1 from '../../images/slider/slider-1.png';
import slider2 from '../../images/slider/slider-2.png';
import slider3 from '../../images/slider/slider-3.png';

import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const Galery = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', backgroundImage: BsArrowRight }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function(index) {
        console.log(index)
    }
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider__inner">
          <Slider {...settings} className="slider__wrapper">
            <div className="slider__card">
              <div className="slider__image">
                <img src={slider1} alt="" />
              </div>
              <div className="slider__content">
                <p className="slider__countries">Chandler, AZ</p>
                <p className="slider__title">The Park at Wild Horse Pass</p>
                <div className="slider__bottom">
                <p className="slider__date">Apr 02 2021</p>
                <button className="slider__tickets">tickets</button>
                </div>
              </div>
            </div>

            <div className="slider__card">
              <div className="slider__image">
                <img src={slider2} alt="" />
              </div>
              <div className="slider__content">
                <p className="slider__countries">Ibiza, IBZ</p>
                <p className="slider__title">Swag Ibiza Club</p>
                <div className="slider__bottom">
                <p className="slider__date">Jul 08 2021</p>
                <button className="slider__tickets">tickets</button>
                </div>
              </div>
            </div>

            <div className="slider__card">
              <div className="slider__image">
                <img src={slider3} alt="" />
              </div>
              <div className="slider__content">
                <p className="slider__countries">Ibiza, IBZ</p>
                <p className="slider__title">El Swing Ibiza</p>
                <div className="slider__bottom">
                <p className="slider__date">Jul 10 2021</p>
                <button className="slider__tickets">tickets</button>
                </div>
              </div>
            </div>

            <div className="slider__card">
              <div className="slider__image">
                <img src={slider1} alt="" />
              </div>
              <div className="slider__content">
                <p className="slider__countries">Chandler, AZ</p>
                <p className="slider__title">The Park at Wild Horse Pass</p>

                <div className="slider__bottom">
                <p className="slider__date">Apr 02 2021</p>
                <button className="slider__tickets">tickets</button>
                </div>
              </div>
            </div>

            <div className="slider__card">
              <div className="slider__image">
                <img src={slider2} alt="" />
              </div>
              <div className="slider__content">
                <p className="slider__countries">Ibiza, IBZ</p>
                <p className="slider__title">Swag Ibiza Club</p>
                <div className="slider__bottom">
                <p className="slider__date">Jul 08 2021</p>
                <button className="slider__tickets">tickets</button>
                </div>
              </div>
            </div>

            <div className="slider__card">
              <div className="slider__image">
                <img src={slider3} alt="" />
              </div>
              <div className="slider__content">
                <p className="slider__countries">Ibiza, IBZ</p>
                <p className="slider__title">El Swing Ibiza</p>

                <div className="slider__bottom">
                  <p className="slider__date">Jul 10 2021</p>
                  <button className="slider__tickets">tickets</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Galery;
