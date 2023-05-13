import React, { useState } from "react";
import classes from "./AddItem.module.css";

const AddItem = (props) => {
  const [inputText, setInputText] = useState("");

  const addItemHandler = (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      props.onAddItem(inputText);
      setInputText("");
    }
  };

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <form onSubmit={addItemHandler} className={classes.todo}>
      <h1 className={classes.todoTitle}>Todo List</h1>
      <input
        type="text"
        name="text"
        placeholder="Add New Task"
        value={inputText}
        className={classes.todoInput}
        onChange={inputHandler}
      ></input>
      <button className={classes.todoButton}>Add todo</button>
    </form>
  );
};

export default AddItem;
