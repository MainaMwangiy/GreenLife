import React from 'react';
import '../pages/Home.css'
import img from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import cntimg from "../assets/counts-img.svg"



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
              For a Green, Healthy, Wealthy, Community!
            </p>
            <p id="pstl">
              To promote a healthy and wealthy community through ecofriendly practices
            </p>
            <button className="btnno" href="/contact-us">Get in Touch</button>

          </main>
        </div>
      </main>


      {/* Section */}
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna">
        <div class="col ">
          <img src={cntimg} alt="Section " style={{ width: "100%", height: "400px" }} id="rmvimgsect"></img>
        </div>
        <div class="col">
          <div id="whorwe" >
            <h2 style={{ color: "orange" }}>
              Core Values
              <hr />

              <ul id="ulstyl">
                <li>	Professionalism and work ethics in every service we offer</li>
                <li>	Credibility, honesty and Integrity in our relationship and services we undertake.</li>
                <li>	Confidentiality. We take our clients trust in us with utmost seriousness.</li>
                <li>  Innovativeness and creativity in our services.</li>
                <li>	Transparency and openness to our clients in our undertakings</li>

              </ul>
            </h2 >

          </div>
        </div>
      </div>

      {/* Section */}
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna">
          <div class="col">
            <div id="whorwe" >
              <h2 style={{ color: "orange" }} id="diststyl">
                Who are we?
                <hr />
              </h2 >

              Green Life Africa (GLA) is a registered Youth Focused, Community Based Organization (CBO) with
              a vision of a Green, Healthy, Wealthy Community! We implement programs on Active citizenship,
              Food and Nutrition, Environmental Justice, Water and Sanitation (AFEW). Led by our Theory of
              Change statement: Be the Innovator, Be the Voice, build partnership and Achieve results,
              we have been able to create impact in Machakos County through reaching over 100,000
              individuals yearly with its program.
            </div>
          </div>
          <div class="col ">
            <img src={cntimg} alt="Section " style={{ width: "100%", height: "400px" }} id="rmvimgsect"></img>
          </div>
      </div>



        <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna">
          <div class="st2-style-info">
            <div class="st2-style-date">
              <span>Sunday</span>
              <span>October</span>
            </div>
            <h1 class="st2-style-title">
              Shark Sighting
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis aspernatur perferendis cumque
              vitae, quos, necessitatibus hic aperiam voluptatibus officiis, quaerat consequatur iure perspiciatis
              libero nam illo fugit. Quam, molestiae.
            </p>
            <a href="#" class="st2-style-cta">Submit</a>
          </div>
        </div>

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
          {/* <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a> */}
        </div>
      </div>


    </>
  );
}
