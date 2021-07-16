import React from 'react';
import "./services.css";
import img from '../assets/homepage.JPG'

export default function SanitaryBinCollection() {
    return <>
        <div className='container'>
            <div className='gb-coll'>
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src={img} class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st1-style-info">
                        <div class="st1-style-date">
                            <span>Sanitary bin collection </span>
                        </div>
                        <h1 class="st1-style-title">
                            Sanitary Project
                        </h1>
                        <p>
                            From small businesses to government facilities,
                            Green life Africa has the solutions to meet your
                            washroom needs. We carter for sanitary towels
                            disposal in commercial buildings, schools and
                            institutions. We install and change sanitary bins
                            regularly depending on our customer needs
                            maintaining high level of sanitation.
                            Get a free quote by booking our service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
