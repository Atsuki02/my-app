import React from "react";
import classes from "./ItemList.module.css";

const ItemList = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.items.map((item) => (
        <li key={item.id} className={classes.listItem}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
