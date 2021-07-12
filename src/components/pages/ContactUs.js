import React from 'react';
import img from '../assets/mobi.svg'
import './contact-us.css'
import 'react-bootstrap'

export default function ContactUs() {
  return <>
    <div className='container'>
      <div className='gb-coll'>
        <div class="st1-style">
          <div class="contact-st">
            <h1 class="st1-style-title">
              Shark Sighting
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis aspernatur perferendis cumque
              vitae, quos, necessitatibus hic aperiam voluptatibus officiis, quaerat consequatur iure perspiciatis
              libero nam illo fugit. Quam, molestiae.
            </p>
            <a href="#" class="st1-style-cta">Submit</a>
          </div>
          <div class="st1-style-info">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </>
    ;
}
