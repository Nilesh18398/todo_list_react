import React, { useState } from "react";
import InputArea from "./components/inputarea";
import "./styles.css";
import ToDoItem from "./components/todoitem";

export default function App() {
  const [items, setItems] = useState([]);

  const deleteitem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const addItme = (inputText) => {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div>
        <ul>
          <InputArea onAdd={addItme} />
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
