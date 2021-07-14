import React from 'react';
import img from "../assets/img-1.jpg";
import fourr from "../assets/4R.jpg"
import hm1 from "../assets/home-page.JPG"
import hm2 from "../assets/homepage.JPG"
import './gallery.css'

export default function Gallery() {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-4 gall-coll">
        <div class="example col">
          <img src={fourr} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
        <div class="example col">
          <img src={hm1} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
        <div class="example col">
          <img src={hm2} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
        <div class="example col">
          <img src={hm1} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 gall-coll">
        <div class="example col">
          <img src={hm1} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
        <div class="example col">
          <img src={img} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
        <div class="example col">
          <img src={img} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
        <div class="example col">
          <img src={img} class=" mb-2 " alt="..." ></img>
          <div class="content">
            <div class="text"><a href="#" className="rad">Image Services </a></div>
          </div>
        </div>
      </div>
    </>
  );
}
