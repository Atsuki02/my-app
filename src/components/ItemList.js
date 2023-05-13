import React, { useState } from "react";
import classes from "./ItemList.module.css";

const ItemList = (props) => {
  return (
    <div className={classes.todoList}>
      {props.items.map((item) => (
        <div
          key={item.id}
          className={classes.todoItem}
          item={item}
          onClick={props.onDeleteItem}
        >
          <div className={classes.listItem}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
