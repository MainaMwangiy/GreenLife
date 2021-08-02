import React from 'react';
import './signup.css';

export default function SignUp() {
  return <div className="signup">
    <form>
      <div class="mb-3 s-st">
        <input type="text" class="form-control" id="exampleInputName" placeholder="Your Full Name." aria-describedby="nameHelp"></input>
      </div>
      <div class="mb-3 s-st">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email." aria-describedby="emailHelp"></input>
      </div>
      <div class="mb-3 s-st">
        <input type="text" class="form-control" id="exampleInputsubject" placeholder="Subject." aria-describedby="subjectHelp"></input>
      </div>
      <div class="mb-3 s-st">
        <textarea class="form-control" aria-label="With textarea" placeholder="Message."></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

    ;
}
