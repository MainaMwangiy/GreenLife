import React, { useState } from 'react';
import "./services.css";
import sanitary from "../images/sanitary-bin.png"

export default function SanitaryBinCollection() {
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
        let response = await fetch(URL + "/service", {
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
        <div className='container'>
            <div className='gb-coll'>
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src={sanitary} class="card-img-top" alt="..."></img>
                        {/* <img src="https://i.postimg.cc/rFPtD0jd/school.jpg" class="card-img-top" alt="..."></img> */}
                    </div>
                    <div class="st1-style-info">
                        <div class="st1-style-date">
                            <span>Sanitary bin collection </span>
                        </div>
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
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Enquire about the service..." aria-describedby="nameHelp"></input>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%", background: "orange", border: "none" }}>{status}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
