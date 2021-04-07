import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Card from "./components/Card";
import Header from "./components/Header";
import FormField from "./components/FormField";
import Nav from "./components/Nav";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState("");
  const [editItem, setEditItem] = useState("");
  const [completed, setCompleted] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    setList([...list, { id: uuid(), title: todo, isCompleted: false }]);
    setTodo("");
    setEditItem("");

    console.log(list);
  };
  const checkStatus = (e) => {
    list.map((item) => {
      if (item.id === e.target.checked) {
        item.isCompleted = e.target.checked;
        console.log(e.target.checked);
      }
    });
    setList(list);
  };
  const edit = (e) => {
    e.preventDefault();
    list.map((item) => {
      if (item.id === e.target.id && !item.isCompleted) {
        setEditItem(item.title);
        setTodo(item.title);
      }
    });
    setList(
      list.filter((item) => {
        return item.id !== e.target.id && !item.isCompleted;
      })
    );
  };
  const del = (e) => {
    e.preventDefault();
    setList(
      list.filter((item) => {
        return !(item.id === e.target.id);
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <div className="body">
        <FormField
          todo={todo}
          handleChange={handleChange}
          addTodo={addTodo}
          editItem={editItem}
        />
        <Nav />
        <h4 className="todo_head">ToDo 's</h4>
        <Card list={list} edit={edit} del={del} checkStatus={checkStatus} />
      </div>
    </div>
  );
}

export default App;
