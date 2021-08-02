import React from 'react';
import "./services.css";
import img from '../assets/school.jpg'

export default function SanitaryBinCollection() {
    return <>
        <div className='container'>
            <div className='gb-coll'>
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src="https://i.postimg.cc/rFPtD0jd/school.jpg" class="card-img-top" alt="..."></img>
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
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleInputName" style={{ borderRadius: "1rem" }} placeholder="Type a message here to know more about the service..." aria-describedby="nameHelp"></input>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%" }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
