import React from 'react';
import './ImageSlide.css';
import "../pages/animations.css"
import "../Company/core-value.css"
import "../Company/index.css"
import '../pages/Landing.css'
import ImageSlider from './ImageSlider';
import { ImageData } from './ImageData';
import img from "../assets/school.jpg";
import goal2 from "../assets/E-WEB-Goal-02.png"
import goal6 from "../assets/E-WEB-Goal-06.png"
import goal13 from "../assets/E-WEB-Goal-13.png"
import goal17 from "../assets/E-WEB-Goal-17.png"
import kenya_government from "../logo/kenya_government.png"
import vso from "../logo/vso.jpg"
import pa from "../logo/pa.jpg"
import machakos_county from "../logo/machakos_county.jpg"
import KYCN from "../logo/KYCN.jpeg"
import Kenya_redcross from "../logo/Kenya_redcross.png"
import tkh from "../logo/tkh.png"
import Tabs from "../Tabs/Tabs"
import About from '../Company/About';
import CountUp from 'react-countup';
import CoreValues from '../Company/core-values';

export default function Landing() {
    return (
        <div>
            <ImageSlider slides={ImageData} />
            <Tabs>
                <div label="Our Mission">
                    <p>  To promote a healthy and wealthy community through ecofriendly practices</p>
                </div>
                <div label="Our Vision">
                    <p>   Green, Healthy, Wealthy, Community!</p>
                </div>
                <div label="Core values">
                    <CoreValues/>
                </div>
            </Tabs>
            <div style={{ textAlign: "center", color: "orange", backgroundColor: "#fff" }}>
                <h1>
                    Partners
                </h1>
            </div>
            <div className="partners-container">
                <div className="partners-row">
                    <div className="partners-col-3">
                        <img src={kenya_government} alt="partners" className="partners-img"  ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={Kenya_redcross} alt="partners" className="partners-img"  ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={KYCN} alt="partners" className="partners-img"   ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={pa} alt="partners" className="partners-img"   ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={machakos_county} alt="partners" className="partners-img"   ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={vso} alt="partners" className="partners-img"   ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={tkh} alt="partners" className="partners-img"   ></img>

                    </div>
                </div>
            </div>

            <About />
            <CoreValues />
            <div className="impact-post">
                <div className="impact-post-info">
                    <h1>
                        Impact
                    </h1>
                </div>
            </div>
            <section className="counts">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="content d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box" >
                                            <i className="fa fa-building"></i>
                                            <span data-toggle="counter-up">
                                                <CountUp start={0} end={5} delay={0}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} >  </span>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </span>
                                            <p>
                                                <strong>mega cleanups</strong>
                                                Campaigns conducted in Machakos and its environment
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box" >
                                            <i className="fa fa-trash"></i>
                                            <span data-toggle="counter-up"> <CountUp start={0} end={50} delay={0}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                    </div>
                                                )}
                                            </CountUp></span>
                                            <p>
                                                <strong>tons of waste </strong>collected weekly: every week we collect waste from hundreds of households and commercial and industrial clients across Machakos town.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="fa fa-users"></i>
                                            <span data-toggle="counter-up">
                                                <CountUp start={0} end={20} delay={0}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </span>
                                            <p>
                                                <strong>youths</strong> Empowered through garbage collection value chain
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="fa fa-user-secret"></i>
                                            <span data-toggle="counter-up">
                                                <CountUp start={0} end={5000} delay={0}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </span>
                                            <p>
                                                <strong>Farmers</strong> empowered to make organic manure from household waste.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="fa fa-tree"></i>
                                            <span data-toggle="counter-up">
                                                {/* 6,400+ */}
                                                <CountUp start={0} end={6400} delay={0}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </span>
                                            <p>
                                                <strong>Trees </strong> planted in various public spaces.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="fa fa-list-ol" aria-hidden="true"></i>
                                            <span data-toggle="counter-up">
                                                {/* 1000+  */}
                                                <CountUp start={0} end={1000} delay={0}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </span>
                                            <p>
                                                <strong>needy </strong> individuals have benefited from our give back initiative with clothes and shoes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="fa fa-award"></i>
                                            <span data-toggle="counter-up">
                                                {/* 30,000  */}
                                                <CountUp start={0} end={30000} delay={0}>
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </span>
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

            <div style={{ textAlign: "center", color: "orange", backgroundColor: "" }}>
                <h1>
                    Our Focus SDGs
                </h1>
            </div>
            <div className="focus-container ">
                <div className="focus-row">
                    <div className="focus-col-3" data-aos="fade-left" data-aos-delay="200">
                        <img src={goal2} alt="Focus" className="focus-img animated"  ></img>

                    </div>
                    <div className="focus-col-3">
                        <img src={goal6} alt="Focus" className="focus-img animated"  ></img>

                    </div>
                    <div className="focus-col-3">
                        <img src={goal13} alt="Focus" className="focus-img animated"   ></img>

                    </div>
                    <div className="focus-col-3">
                        <img src={goal17} alt="Focus" className="focus-img animated"   ></img>

                    </div>
                </div>
            </div>


            <div className="row row-cols-1 row-cols-md-4 " >
                <div className="col" >
                    <div className="card h-100 mb-4 " id="carst">
                        <div className="card-body">
                            <img src={img} className="card-img-top" alt="..." id="imgst"></img>
                            <h5 className="card-title">Garbage collection </h5>
                            <p className="card-text">The amount of solid waste produced is growing proportionate to
                                the growth in population, which is significantly high in the
                                urban areas. With a 4.3% growth in urbanization annually
                            </p>
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href="/garbage-collection"> Read More...</a>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 mb-4 " id="carst">
                        <div className="card-body">
                            <img src={img} className="card-img-top" alt="..." id="imgst"></img>
                            <h5 className="card-title">Sanitary bin collection </h5>
                            <p className="card-text">
                                From small businesses to government facilities,
                                Green life Africa has the solutions to meet your
                                washroom needs. We carter for sanitary towels
                                disposal in commercial buildings, schools and
                                institutions...
                            </p>
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href="/sanitary-bin-collection"> Read More...</a>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 mb-4 " id="carst">
                        <div className="card-body">
                            <img src={img} className="card-img-top" alt="..." id="imgst"></img>
                            <h5 className="card-title">Cleaning services</h5>
                            <p className="card-text"> Project coming up in future</p>
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href="/cleaning"> Read More...</a>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 mb-4 " id="carst">
                        <div className="card-body">
                            <img src={img} className="card-img-top" alt="..." id="imgst"></img>
                            <h5 className="card-title">Fumigation and Pest control</h5>
                            <p className="card-text"> Project coming up in future</p>
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href={{}}> Read More...</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
