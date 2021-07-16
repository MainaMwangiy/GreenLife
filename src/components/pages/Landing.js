import React from 'react';
import '../pages/Landing.css'
import cntimg from "../assets/counts-img.svg"
import img from "../assets/IMG_9400.jpg";
import counts from "../assets/school.jpg"
import About from '../Company/About';

export default function Landing() {
    return (
        <>
            <main className="container " id="page-home" >
                <div className="content">
                    <main>
                        <h1>
                            Get in touch for garbage services.
                        </h1>
                        <p>
                            For a Green, Healthy, Wealthy, Community!
                        </p>
                        <p id="pstl">
                            To promote a healthy and wealthy community through ecofriendly practices
                        </p>
                        <button className="btnno" to="/contact-us">Get in Touch</button>

                    </main>
                </div>
            </main>
            <div className="cnt-st">
                <div class="blog-post">
                    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna box-sahdw-s">
                        <div class="col ">
                            <img src={cntimg} alt="Section " style={{ width: "100%", height: "400px" }} id="rmvimgsect"></img>
                        </div>
                        <div class="col">
                            <div id="whorwe" >
                                <h2 style={{ color: "orange" }}>
                                    Core Values

                                </h2 >

                                <ul id="ulstyl">
                                    <li>	Professionalism and work ethics in every service we offer</li>
                                    <li>	Credibility, honesty and Integrity in our relationship and services we undertake.</li>
                                    <li>	Confidentiality. We take our clients trust in us with utmost seriousness.</li>
                                    <li>  Innovativeness and creativity in our services.</li>
                                    <li>	Transparency and openness to our clients in our undertakings</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", color: "orange" }}>
                <h1>
                    Partners
                </h1>
            </div>
            <div className="cnt-st">
                <div class="blog-post">
                    <div class="blog-post-info">
                        <div class="row row-cols-1 row-cols-md-4 g-4">
                            <div class="col partners">
                                <img src={cntimg} alt="Section " style={{ width: "100px", height: "100px" }} id="rmvimgsect"></img>
                            </div>
                            <div class="col partners">
                                <img src={cntimg} alt="Section " style={{ width: "100px", height: "100px" }} id="rmvimgsect"></img>
                            </div>
                            <div class="col partners">
                                <img src={cntimg} alt="Section " style={{ width: "100px", height: "100px" }} id="rmvimgsect"></img>
                            </div>
                            <div class="col partners">
                                <img src={cntimg} alt="Section " style={{ width: "100px", height: "100px" }} id="rmvimgsect"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section id="counts" class="counts">
                <div class="container">
                    <div class="row">

                        <div
                            class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >
                            <img src={counts} class="img-fluid" alt="Section " style={{ width: "450px", height: "100%", borderRadius: "0.5rem", boxShadow: " 0 1.4rem 8rem rgba(0, 0, 0, .2)" }} ></img>
                        </div>


                        <div
                            class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div class="content d-flex flex-column justify-content-center">
                                <div class="row">
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-building"></i>
                                            <span data-toggle="counter-up">5</span>
                                            <p>
                                                <strong>mega cleanups</strong>
                                                Campaigns conducted in Machakos and its environment
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-code"></i>
                                            <span data-toggle="counter-up">50</span>
                                            <p>
                                                <strong>tons of waste </strong>collected weekly: every week we collect waste from hundreds of households and commercial and industrial clients across Machakos town.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-user"></i>
                                            <span data-toggle="counter-up">20</span>
                                            <p>
                                                <strong>youths</strong> Empowered through garbage collection value chain
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-user"></i>
                                            <span data-toggle="counter-up">500+</span>
                                            <p>
                                                <strong>Farmers</strong> empowered to make organic manure from household waste.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-fire"></i>
                                            <span data-toggle="counter-up">6,400+ </span>
                                            <p>
                                                <strong>Trees </strong> planted in various public spaces.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-clock"></i>
                                            <span data-toggle="counter-up">1000+ </span>
                                            <p>
                                                <strong>needy </strong> individuals have benefited from our give back initiative with clothes and shoes.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-award"></i>
                                            <span data-toggle="counter-up">30,000 </span>
                                            <p>
                                                <strong>Residents</strong> residents of Machakos reached with behavior change communication messages on solid waste management.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />

            <div class="row row-cols-1 row-cols-md-4 " >
                <div class="col" >
                    <div class="card h-100 mb-4 " id="carst">
                        <div class="card-body">
                            <img src={img} class="card-img-top" alt="..." id="imgst"></img>
                            <h5 class="card-title">Garbage collection </h5>
                            <p class="card-text">The amount of solid waste produced is growing proportionate to
                                the growth in population, which is significantly high in the
                                urban areas. With a 4.3% growth in urbanization annually
                            </p>
                            <button className="btn btn-primary"> Read More...</button>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 mb-4 " id="carst">
                        <div class="card-body">
                            <img src={img} class="card-img-top" alt="..." id="imgst"></img>
                            <h5 class="card-title">Sanitary bin collection </h5>
                            <p class="card-text">
                                From small businesses to government facilities,
                                Green life Africa has the solutions to meet your
                                washroom needs. We carter for sanitary towels
                                disposal in commercial buildings, schools and
                                institutions...
                            </p>
                            <button className="btn btn-primary"> Read More...</button>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 mb-4 " id="carst">
                        <div class="card-body">
                            <img src={img} class="card-img-top" alt="..." id="imgst"></img>
                            <h5 class="card-title">Cleaning services</h5>
                            <p class="card-text"> Project coming up in future</p>
                            <button className="btn btn-primary"> Read More...</button>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 mb-4 " id="carst">
                        <div class="card-body">
                            <img src={img} class="card-img-top" alt="..." id="imgst"></img>
                            <h5 class="card-title">Fumigation and Pest control</h5>
                            <p class="card-text"> Project coming up in future</p>
                            <button className="btn btn-primary"> Read More...</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
