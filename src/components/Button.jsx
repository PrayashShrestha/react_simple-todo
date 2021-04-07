import React from "react";
import "./Button.css";

const Button = ({ editItem }) => {
  return (
    <div className="btn_div">
      {editItem ? (
        <button
          className="btn"
          style={{ backgroundColor: "rgb(238, 164, 80)" }}
        >
          Edit
        </button>
      ) : (
        <button className="btn">Add</button>
      )}
    </div>
  );
};

export default Button;
