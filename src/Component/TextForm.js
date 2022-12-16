import React, { useState } from "react";
import "../Component/All.css";
const TextForm = (props) => {
  const handleUpClick = () => {
    // using toUpperCase string method chage text
    let newText = text.toUpperCase();
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
      <h1 className="headingTag">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3 btn-6" onClick={handleUpClick}>
          <span>UpperCase</span>
        </button>
      </div>
    </>
  );
};

export default TextForm;
