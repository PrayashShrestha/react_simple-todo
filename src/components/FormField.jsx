import React from "react";
import Button from "./Button";
import "./FormField.css";
import InputField from "./InputField";

const FormField = ({ todo, handleChange, addTodo, editItem }) => {
  return (
    <form className="input_Area" onSubmit={addTodo}>
      <InputField todo={todo} handleChange={handleChange} editItem={editItem} />
      <Button type="submit" editItem={editItem} />
    </form>
  );
};

export default FormField;
