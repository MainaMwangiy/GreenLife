import React from 'react';
import '../../App.css';
import './garbage-collection.css'
import img from '../assets/mobi.svg'

export default function GarbageCollection() {
  return <>
    <div className='container'>
      <div className='gb-coll'>

        <div class="st1-style">
          <div class="st1-style-img">
            <img src={{ img }} alt="" srcset=""></img>
          </div>
          <div class="st1-style-info">
            <div class="st1-style-date">
              <span>Sunday</span>
              <span>October</span>
            </div>
            <h1 class="st1-style-title">
              Shark Sighting
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis aspernatur perferendis cumque
              vitae, quos, necessitatibus hic aperiam voluptatibus officiis, quaerat consequatur iure perspiciatis
              libero nam illo fugit. Quam, molestiae.
            </p>
            <a href="#" class="st1-style-cta">Submit</a>
          </div>
        </div>
        <div class="st2-style">
          <div class="st2-style-img">
            <img src={{ img }} alt="" srcset=""></img>
          </div>
          <div class="st2-style-info">
            <div class="st2-style-date">
              <span>Sunday</span>
              <span>October</span>
            </div>
            <h1 class="st2-style-title">
              Shark Sighting
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis aspernatur perferendis cumque
              vitae, quos, necessitatibus hic aperiam voluptatibus officiis, quaerat consequatur iure perspiciatis
              libero nam illo fugit. Quam, molestiae.
            </p>
            <a href="#" class="st2-style-cta">Submit</a>
          </div>
        </div>
      </div>

    </div>
  </>;
}
