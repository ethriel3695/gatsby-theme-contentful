import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Swiper from 'react-id-swiper';

export const Carousel = ({ images }) => {
  const swiperParams = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  };
  return (
    <Swiper {...swiperParams}>
      {images.map((image, index) => {
        return (
          <div key={`slide_${index}`}>
            <Img fluid={image.fluid} alt={image.title} />
          </div>
        );
      })}
    </Swiper>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
