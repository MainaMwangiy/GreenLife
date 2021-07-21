import React from 'react';
import './ImageSlide.css';
import ImageSlider from './ImageSlider';
import { ImageData } from './ImageData';

function Gallery() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ImageSlider slides={ImageData} />;
}

export default Gallery;
