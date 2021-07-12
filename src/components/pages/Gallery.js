import React from 'react';
import img from "../assets/img-1.jpg";
import './gallery.css'

export default function Gallery() {
  return (
    <>
      <div className='container'>
        <div className='gall-coll'>
          <img src={img} class="card-img-top" alt="..."></img>
        </div>
        <div className='gall-coll'>
          <img src={img} class="card-img-top" alt="..."></img>
        </div>
        <div className='gall-coll'>
          <img src={img} class="card-img-top" alt="..."></img>
        </div>
        <div className='gall-coll'>
          <img src={img} class="card-img-top" alt="..."></img>
        </div>
      </div>
    </>
  );
}
