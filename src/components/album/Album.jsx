import React from 'react'
import image1 from '../../images/album/image-1.png'
import image2 from '../../images/album/image-2.png'
import image3 from '../../images/album/image-3.png'
import image4 from '../../images/album/image-4.png'
import image5 from '../../images/album/image-5.png'

const Album = () => {
  return (
    <div className='album'>
        <div className="container">
            <div className="album__inner">
                <div className="album__card box1">
                    <img className="album__img" src={image1} alt="" />
                    <p className="album__text">EDC Las Vegas Mainstage</p>
                </div>
                <div className="album__card box2">
                    <img className="album__img" src={image2} alt="" />
                    <p className="album__text">EDC Las Vegas Mainstage</p>
                </div>
                <div className="album__card box3">
                    <img className="album__img" src={image3} alt="" />
                    <p className="album__text">EDC Las Vegas Mainstage</p>
                </div>
                <div className="album__card box4">
                    <img className="album__img" src={image4} alt="" />
                    <p className="album__text">EDC Las Vegas Mainstage</p>
                </div>
                <div className="album__card box5">
                    <img className="album__img" src={image5} alt="" />
                    <p className="album__text">EDC Las Vegas Mainstage</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Album
