import React from 'react';
import "./services.css";
import img from '../assets/homepage.JPG'

export default function Fumigation() {
    return <>
        <div className='container'>
            <div className='gb-coll'>

                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src={img} class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st1-style-info">
                        <div class="st1-style-date">
                            <span>Fumigation and Pest control  </span>
                        </div>
                        <h1 class="st1-style-title">
                            Fumigation Services
                        </h1>
                        <p>
                            Project coming up in future....
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
