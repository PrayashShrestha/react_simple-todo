import React from "react";
import "./InputField.css";

const InputField = ({ handleChange, todo, editItem }) => {
  return (
    <div>
      <input
        className="inp"
        onChange={handleChange}
        placeholder={editItem ? "Edit" : "Add Todo"}
        value={todo}
      />
    </div>
  );
};

export default InputField;
