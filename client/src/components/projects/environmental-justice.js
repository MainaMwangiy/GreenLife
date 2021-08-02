import React, { useState } from 'react';
import "./project.css"
import img from '../assets/school.jpg'

export default function EnvironmentalJustice() {
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
        <div className='container'>
            <div className='gb-coll'>
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src="https://i.postimg.cc/05GfKfKz/IMG-9400.jpg" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st1-style-info">

                        <h1 class="st1-style-title">
                            Give back project
                        </h1>
                        <p>
                            This is a brainchild of the ‘Usafi mtaani project’ (Garbage collection service). As the garbage collecting team were doing their weekly rounds, it was realized that households were disposing off valuables such as clothes, shoes, toys and electronics. It was thought wise the valuables could help
                            the less fortunate in the community. Since 2016, more than 1,000 needy individuals have benefited from the project.
                        </p>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleInputName" style={{ borderRadius: "1rem" }} placeholder="Type a message here to know more about the service..." aria-describedby="nameHelp"></input>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%" }}>Submit</button>
                    </div>
                </div>

            </div>
            <div className='gb-coll'>
                <div class="st2-style">
                    <div class="st2-style-img">
                        <img src="https://i.postimg.cc/2yThc0nT/homepage.jpg" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st2-style-info">

                        <h1 class="st2-style-title">
                            4R project
                        </h1>
                        <p>
                            We aim to inspire Children to love the world they live in. Children absorb information better when they are actually involved, using their own creativity and using practical ways to learn. To encourage more children in the community to become involved, Green life Africa
                            runs the 4R project (Reduce, Reuse, Recycle and Remember) which makes environmental conservation fun and exciting.
                        </p>
                        <p>
                            The project is in a competition form, where each green team and other students wanting to be part, will be tasked to come up with a project using the 3R’s. They are expected to recycle waste materials to come up with new creative products. They send a
                            short video, maximum 3 minutes, explaining the problem, their idea including the solution and how it can help.
                        </p>
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Type a message here to know more about the service..." aria-describedby="nameHelp"></input>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%" }}>{status}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='gb-coll'>
                <div class="st3-style">
                    <div class="st3-style-img">
                        <img src="https://i.postimg.cc/gJWhGCDN/DSC-8589.jpg" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st3-style-info">

                        <h1 class="st3-style-title">
                            Trash2cash project
                        </h1>
                        <p>
                            Youth account for a third of Machakos population yet they have the largest percentage of unemployment. When youth are unemployed for long periods, they are likely to engage in anti-social behavior. This situation presents youth as needy, helpless and unprepared to make any contribution to national
                            development affairs. Consequently, they are marginalized in national state policies and have a weak legal position.
                        </p>
                        <p>
                            One of the interventions in creating sustainable employment to the youth in Machakos county is through waste management and recovery social enterprise. By applying the ‘polluter pay principle’ the youth can create a social enterprise that focus on management of waste and recovery in major towns.
                            Green life Africa implements Trash2Cash project in Machakos town. The project has employed 10 youth who collect garbage and an additional of 3 youth involved in recycling of used papers.

                        </p>
                        <p>
                            Solid waste collection youth charge clients to collect garbage.
                            Separation of waste  Able to get plastic, metal which is sold separately.
                            Reusing of waste  using papers youth develop crafts to be sold.
                            Recycling of waste  biodegradable waste decomposed to provide fertilizer

                        </p>
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Type a message here to know more about the service..." aria-describedby="nameHelp"></input>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%" }}>{status}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='gb-coll'>
                <div class="st4-style">
                    <div class="st4-style-img">
                        <img src={img} class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st4-style-info">

                        <h1 class="st4-style-title">
                            Mti yangu challenge
                        </h1>
                        <p>
                            Kenya loses 52,000 hectares of forest trees every year for biomass – that’s about the equivalent of 15,000 football fields. In Machakos, the high demand for charcoal, timber and electric poles from neighboring communities like Nairobi, Arthi river and Thika has resulted in a major felling of trees. This impacts water availability, air quality,
                            soil erosion and agriculture, biodiversity and even local weather patterns. To continue in this direction is not sustainable.
                        </p>
                        <p>
                            It is against this background that Green Life Africa initiated the MTI YANGU CHALLENGE campaign which targets to plant 1Million trees in Machakos county by 2024.  The campaign challenges individuals to take environmental responsibility and plant trees during
                            their birthdays based on the number of years they have lived. It is both promoted online, on ground and on air.
                        </p>
                        <form onSubmit={handleSubmit} style={{ border: "none" }}>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleInputName" required style={{ borderRadius: "1rem" }} placeholder="Type a message here to know more about the service..." aria-describedby="nameHelp"></input>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="email" required style={{ borderRadius: "1rem" }} placeholder="Email Adress" aria-describedby="nameHelp"></input>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%" }}>{status}</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
