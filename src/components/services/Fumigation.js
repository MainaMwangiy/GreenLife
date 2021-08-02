import React from 'react';
import "./services.css";
import img from '../assets/school.jpg'

export default function Fumigation() {
    return <>
        <div className='container'>
            <div className='gb-coll'>

                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src="https://i.postimg.cc/2yThc0nT/homepage.jpg" class="card-img-top" alt="..."></img>
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
