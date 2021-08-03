import React, { useState } from 'react';
import "./services.css";
import img from '../assets/school.jpg'

export default function Cleaning() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { exampleInputName, email } = e.target.elements;
        let details = {
            exampleInputName: exampleInputName.value,
            email: email.value
        };
        let response = await fetch("http://localhost:5000/service", {
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
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src="https://i.postimg.cc/2yThc0nT/homepage.jpg" class="card-img-top" alt="..."></img>
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
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Enquire about the service..." aria-describedby="nameHelp"></input>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%",background:"orange",border:"none" }}>{status}</button>
                        </form>
                    </div>

                </div>

            </div>
        </div >
    );
}
