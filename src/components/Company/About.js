import React from 'react';
import '../../App.css';
import './about.css'
import img from '../assets/logo.svg'

export default function About() {
    return <>
        <section id="clients" class="clients clients">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-6">
                        <img
                            src={{img}}
                            class="img-fluid"
                            alt=""
                            data-aos="zoom-in"
                        />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                        <img
                            src={{img}}
                            class="img-fluid"
                            alt=""
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                        <img
                            src={{img}}
                            class="img-fluid"
                            alt=""
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                        <img
                            src={{img}}
                            class="img-fluid"
                            alt=""
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                        <img
                            src={{img}}
                            class="img-fluid"
                            alt=""
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6">
                        <img
                            src={{img}}
                            class="img-fluid"
                            alt=""
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>;
}
