import React, { useState } from "react";
import classes from "./ItemList.module.css";

const ItemList = (props) => {
  const deleteHandler = (event) => {
    //I want to get the clicked key, but get undefined, so can't delete the intended item.
    props.onDeleteItem(props.key);
  };
  return (
    <div className={classes.todoList}>
      {props.items.map((item) => (
        <div
          key={item.id}
          className={classes.todoItem}
          item={item}
          onClick={deleteHandler}
        >
          <div className={classes.listItem}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
