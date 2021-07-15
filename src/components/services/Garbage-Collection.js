import React from 'react';
import "./services.css";
import img from '../assets/homepage.JPG'

export default function GarbageCollection() {
  return <>
    <div className='gb-coll'>

      <div class="st1-style">
        <div class="st1-style-img">
          <img src={img} class="card-img-top" alt="..."></img>
        </div>
        <div class="st1-style-info">
          <div class="st1-style-date">
            <span>Garbage collection service </span>
          </div>
          <h1 class="st1-style-title">
            Usafi mtaani project
          </h1>
          <p>
            The amount of solid waste produced is growing proportionate to
            the growth in population, which is significantly high in the
            urban areas. With a 4.3% growth in urbanization annually,
            Kenyan Cities and Towns are faced with the ever- growing
            challenge of managing the waste generated by the urban citizens.
            In addition, the advent of devolution has inspired growth of
            secondary towns, which are likely to exacerbate the solid
            waste management situation exposing the urban citizenry to
            wanton suffering. The impacts of solid waste if not properly
            managed within the urban settlements particularly cities
            and big municipalities can be disastrous. But this also
            presents opportunities of turning the waste into a resource!
            We offer professional garbage collection services, termed “Usafi
            Mtaani Project”, in Machakos and its environs. Garbage is collected
            once a week and clients are provided with convenient waste bins
            or environmentally friendly garbage bags for proper waste handling.
            Get a free quote by booking our service.

          </p>
        </div>
      </div>
    </div>
  </>;
}
