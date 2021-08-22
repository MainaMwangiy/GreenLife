import React, { useState } from 'react';
import "./services.css";
import img from '../assets/school.jpg'

export default function Cleaning() {
    const URL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://greenlifeafrica.herokuapp.com"
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { exampleInputName, email } = e.target.elements;
        let details = {
            exampleInputName: exampleInputName.value,
            email: email.value
        };
        let response = await fetch( URL + "/service", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        < div className = 'container' >
            <div className='gb-coll'>
                <div className="st1-style">
                    <div className="st1-style-img">
                        <img src="https://i.postimg.cc/2yThc0nT/homepage.jpg" className="card-img-top" alt="..."></img>
                    </div>
                    <div className="st1-style-info">
                        <div className="st1-style-date">
                            <span>Cleaning Services</span>
                        </div>
                        <h1 className="st1-style-title">
                            Coming Up
                        </h1>
                        <p>
                            Project coming up in future
                        </p>
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Enquire about the service..." aria-describedby="nameHelp"></input>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ borderRadius: "1rem", width: "100%",background:"orange",border:"none" }}>{status}</button>
                        </form>
                    </div>

                </div>

            </div>
        </div >
    );
}
