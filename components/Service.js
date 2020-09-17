import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";
const Service = memo(({ service }) => {
  const{images,price}=service;
  return ( 
  <article className='service'>
      <div className='img-container'>
          <img src={images[0]} alt='single service'/>
          <div className='price-top'>
              <h6>${price}</h6>
              <p>per seans</p>
          </div>
      </div>
      </article>
);
});

Service.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Service;