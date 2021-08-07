import React, { useState } from 'react';
import { ImageData } from "./ImageData"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className='slider'>
      <button className=" left-arrow" type="button" onClick={prevSlide}  >
        <span className="visually-hidden"> <i className="fa fa-angle-left" aria-hidden="true"></i> </span>
      </button>
      <button className=" right-arrow" type="button" onClick={nextSlide} >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"> <i className="fa fa-angle-right" aria-hidden="true"></i> </span>

      </button>
      {ImageData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    </section>

  );
}

export default ImageSlider;