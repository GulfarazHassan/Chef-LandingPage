import React, { useRef } from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

const itemImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scroolRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scroolRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__galley flex__center'>
      <div className='app__galley-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scroolRef}>
          {itemImages.map((image, index) => (
            <div
              className='app__gallery-images_card flex__center'
              key={`image_${index + 1}`}
            >
              <img src={image} alt='Gallery Images' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort
            className='gallery_arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery_arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
