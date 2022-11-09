import React from 'react';
import news1 from '../../images/news-1.jpg';
import news2 from '../../images/news-2.jpg';
import news3 from '../../images/news-3.jpg';
const News = () => {
  const news = [
    {
      image: '../../images/news-1.jpg',
      title: 'Working on my upcoming full-lenth album that`s releasing later this year.',
    },
    {
      image: '../../images/news-2.jpg',
      title: 'Halloween vibes. Listen my new track!',
    },
    {
      image: '../../images/news-3.jpg',
      title: 'WarForLove is OUT NOW!! Stream it here!',
    },
  ];
  return (
    <div className="news">
      <div className="container">
        <div className="news__inner">
          <div className="news__card">
            <img className="news__image" src={news1} alt="#" />
            <p className="news__title">
              Working on my upcoming full-lenth album that`s releasing later this year.
            </p>
          </div>
          <div className="news__card">
            <img className="news__image" src={news2} alt="#" />
            <p className="news__title">Halloween vibes. <br />  Listen my new track!</p>
          </div>
          <div className="news__card">
            <img className="news__image" src={news3} alt="#" />
            <p className="news__title">WarForLove is OUT NOW!! Stream it here!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
