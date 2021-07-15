import React from 'react';
import "./services.css";
import img from '../assets/homepage.JPG'

export default function Cleaning() {
    return <>
        <div className='gb-coll'>
            <div class="st1-style">
                <div class="st1-style-img">
                    <img src={img} class="card-img-top" alt="..."></img>
                </div>
                <div class="st1-style-info">
                    <div class="st1-style-date">
                        <span>Cleaning Services</span>
                    </div>
                    <h1 class="st1-style-title">
                        Coming Up
                    </h1>
                    <p>
                        Project coming up in future
                    </p>
                </div>
            </div>
        </div>
    </>;
}
