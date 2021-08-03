import React from 'react';
import './ImageSlide.css';
import "../pages/animations.css"
import "../Company/core-value.css"
import "../Company/index.css"
import '../pages/Landing.css'
import ImageSlider from './ImageSlider';
import { ImageData } from './ImageData';
import cntimg from "../assets/counts-img.svg"
import img from "../assets/school.jpg";
import goal2 from "../assets/E-WEB-Goal-02.png"
import goal6 from "../assets/E-WEB-Goal-06.png"
import goal13 from "../assets/E-WEB-Goal-13.png"
import goal17 from "../assets/E-WEB-Goal-17.png"
// import counts from "../assets/school.jpg"
import About from '../Company/About';
import CountUp from 'react-countup';
import CoreValues from '../Company/core-values';

export default function Landing() {
    return (
        <div>
            <ImageSlider slides={ImageData} />
            {/* <CarouselImage/> */}
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ftco-animate p-md-5">
                        <div class="row py-md-5">
                            <div class="col-md-12 nav-link-wrap mb-5">
                                <div
                                    class="nav ftco-animate nav-pills"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <a
                                        class="nav-link active"
                                        id="v-pills-whatwedo-tab"
                                        data-toggle="pill"
                                        href="#v-pills-whatwedo"
                                        role="tab"
                                        aria-controls="v-pills-whatwedo"
                                        aria-selected="true"
                                    > Our Mission</a >

                                    <a
                                        class="nav-link"
                                        id="v-pills-mission-tab"
                                        data-toggle="pill"
                                        href="#v-pills-mission"
                                        role="tab"
                                        aria-controls="v-pills-mission"
                                        aria-selected="false"
                                    > Our Vision </a>

                                    <a
                                        class="nav-link"
                                        id="v-pills-goal-tab"
                                        data-toggle="pill"
                                        href="#v-pills-goal"
                                        role="tab"
                                        aria-controls="v-pills-goal"
                                        aria-selected="false"
                                    > Core values</a>
                                </div>
                            </div>
                            <div class="col-md-12 d-flex align-items-center">
                                <div class="tab-content ftco-animate" id="v-pills-tabContent">
                                    <div
                                        class="tab-pane fade show active"
                                        id="v-pills-whatwedo"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-whatwedo-tab"
                                    >
                                        <div>
                                            <h2 class="mb-4">Mission</h2>
                                            <p>
                                                To promote a healthy and wealthy community through ecofriendly practices
                                            </p>

                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane fade"
                                        id="v-pills-mission"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-mission-tab"
                                    >
                                        <div>
                                            <h2 class="mb-4">Vision</h2>
                                            <p>
                                                Green, Healthy, Wealthy, Community!
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="tab-pane fade"
                                        id="v-pills-goal"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-goal-tab"
                                    >
                                        <div>
                                            <h2 class="mb-4">Core values</h2>
                                            <CoreValues />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", color: "orange", backgroundColor: "#fff" }}>
                <h1>
                    Partners
                </h1>
            </div>
            <div className="partners-container">
                <div className="partners-row">
                    <div className="partners-col-3">
                        <img src={cntimg} alt="partners" className="partners-img"  ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={cntimg} alt="partners" className="partners-img"  ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={cntimg} alt="partners" className="partners-img"   ></img>

                    </div>
                    <div className="partners-col-3">
                        <img src={cntimg} alt="partners" className="partners-img"   ></img>

                    </div>
                </div>
            </div>

            <About />
            <CoreValues />
            <div class="impact-post">
                <div class="impact-post-info">
                    <h1>
                        Impact
                    </h1>
                </div>
            </div>
            <section class="counts">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div class="content d-flex flex-column justify-content-center">
                                <div class="row">
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box" >
                                            <i class="fa fa-building"></i>
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
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box" >
                                            <i class="fa fa-trash"></i>
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
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-users"></i>
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
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-user-secret"></i>
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
                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-tree"></i>
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

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-list-ol" aria-hidden="true"></i>
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

                                    <div class="col-md-6 d-md-flex align-items-md-stretch">
                                        <div class="count-box">
                                            <i class="fa fa-award"></i>
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
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href="/garbage-collection"> Read More...</a>
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
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href="/sanitary-bin-collection"> Read More...</a>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 mb-4 " id="carst">
                        <div class="card-body">
                            <img src={img} class="card-img-top" alt="..." id="imgst"></img>
                            <h5 class="card-title">Cleaning services</h5>
                            <p class="card-text"> Project coming up in future</p>
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href="/cleaning"> Read More...</a>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 mb-4 " id="carst">
                        <div class="card-body">
                            <img src={img} class="card-img-top" alt="..." id="imgst"></img>
                            <h5 class="card-title">Fumigation and Pest control</h5>
                            <p class="card-text"> Project coming up in future</p>
                            <a className="btn btn-primary" style={{ backgroundColor: "orange", border: "none" }} href={{}}> Read More...</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
