import React from "react";

const TextForm = (props) => {
  return (
    <>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </>
  );
};

export default TextForm;
