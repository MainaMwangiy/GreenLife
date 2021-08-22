import React, { useState }  from 'react';
import './signup.css';

export default function SignUp() {
  const [status, setStatus] = useState("Sign Up");
  const URL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://greenlifeafrica.herokuapp.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Signing Up...");
    const { exampleInputName, exampleInputEmail1, exampleInputsubject, message } = e.target.elements;
    let details = {
      exampleInputName: exampleInputName.value,
      exampleInputEmail1: exampleInputEmail1.value,
      exampleInputsubject: exampleInputsubject.value,
      message: message.value,
    };
    let response = await fetch(URL + "/contact", {
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
  return <div className="signup">
    <form onSubmit={handleSubmit}>
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
        <textarea class="form-control" aria-label="With textarea" id="message" placeholder="Message."></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%",background:"orange",border:"none" }}> {status} </button>
    </form>
  </div>

    ;
}
