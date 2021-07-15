import React from 'react';
import '../pages/Home.css'
import img from "../assets/IMG_9400.jpg";
import img2 from "../assets/DSC_8589.jpg";
import img3 from "../assets/IMG_9377.jpg";
import cntimg from "../assets/counts-img.svg"

export default function Home() {
  return (
    <>

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
            <button className="btnno" to="/contact-us">Get in Touch</button>

          </main>
        </div>
      </main>
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna box-sahdw-s">
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
      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna box-sahdw-st">
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



      <div class="row row-cols-1 row-cols-md-2 g-4 mb-4 sectna box-sahdw-st">
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
            <img src={img3} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={img2} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
