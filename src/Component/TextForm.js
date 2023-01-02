import React, { useState } from "react";
import "../Component/All.css";
const TextForm = (props) => {
  const handleUpClick = () => {
    // using toUpperCase string method chage text
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // using toUpperCase string method chage text
    let newText = text.toLowerCase();
    setText(newText);
  };

  //   Handle for event for use event.target.value
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //   use for usestate for settext
  const [text, setText] = useState("Enter Your Text here");
  return (
    <>
      {/* props add into app.js  */}
      <div className="container">
        <h1 className="headingTag">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 btn-6" onClick={handleUpClick}>
          <span>UpperCase</span>
        </button>
        <button
          className="btn btn-primary my-3 mx-3 btn-6"
          onClick={handleLoClick}
        >
          <span>LowerCase</span>
        </button>
      </div>
      <div className="container">
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
