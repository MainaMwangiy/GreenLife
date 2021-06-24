import React, { useState } from 'react';
import '../pages/Home.css'
import img from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import cntimg from "../../images/counts-img.svg"
// import '../../Assets/bootstrap-5.0.2-dist/css/bootstrap.css'



export default function Home() {
  return (
    <>
      {/* Main Content */}

      <main className="container center" id="page-home" >
        <div className="content">
          <main>
            <h1>
              Get in touch for garbage services.
            </h1>
            <p>
              Reprehenderit nostrud dolore dolor eiusmod dolore
              Lorem occaecat nisi laborum et.
            </p>
            <p id="pstl">
              Duis irure
              reprehenderit eiusmod duis duis reprehenderit
              qui ad ipsum enim pariatur in id enim. Ea deserunt
              do sint ipsum ex esse sint amet. Non sint
              non irure commodo cillum do ea. Proident
              ea laboris dolor dolore minim sit occaecat
              mollit culpa. Deserunt laborum ut quis
              dolore labore Lorem veniam consectetur
              amet duis qui magna velit dolor.
            </p>
            <button className="btnno" href="/contact-us">Get in Touch</button>

          </main>
        </div>
      </main>


      {/* Section */}
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna">
        <div class="col ">
          <img src={cntimg} alt="Section " style={{width:"100%", height:"400px"}} id="rmvimgsect"></img>
        </div>
        <div class="col">
          <div  >
            <h2 style={{ color: "orange" }}>
              Eiusmod aliquip officias?
            </h2 >
            <hr />
            Duis irure
            reprehenderit eiusmod duis duis reprehenderit
            qui ad ipsum enim pariatur in id enim. Ea deserunt
            do sint ipsum ex esse sint amet. Non sint
            non irure commodo cillum do ea. Proident
            ea laboris dolor dolore minim sit occaecat
            mollit culpa. Deserunt laborum ut quis
            dolore labore Lorem veniam consectetur
            amet duis qui magna velit dolor.
          </div>
        </div>
      </div>
      <hr />
      {/* Which service do you need? */}
      {/* <div style={{textAlign:"center"}}>
          Services
          <hr/>
        </div> */}

      <div class="row row-cols-1 row-cols-md-6 ">
        <div class="col">
          <div class="card h-100 mb-4 " id="carst">
            <div class="card-body">
              <img src={img} class="card-img-top" alt="..." id="imgst"></img>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100 mb-4 " id="carst">
            <div class="card-body">
              <img src={img} class="card-img-top" alt="..." id="imgst"></img>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100 mb-4 " id="carst">
            <div class="card-body">
              <img src={img} class="card-img-top" alt="..." id="imgst"></img>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100 mb-4 " id="carst">
            <div class="card-body">
              <img src={img} class="card-img-top" alt="..." id="imgst"></img>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100 mb-4 " id="carst">
            <div class="card-body">
              <img src={img} class="card-img-top" alt="..." id="imgst"></img>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100 mb-4 " id="carst">
            <div class="card-body">
              <img src={img} class="card-img-top" alt="..." id="imgst"></img>
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
        </div>
      </div>

      {/* More Services */}
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corousel */}
      <div className="home">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img} class="d-block w-100" alt="..." style={{ width: "100%", height: "600px" }}></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..." style={{ width: "100%", height: "600px" }}></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." style={{ width: "100%", height: "600px" }}></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
        </div>
      </div>


    </>
  );
}
