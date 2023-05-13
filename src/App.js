import React, { useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Card from "./components/UI/Card";

function App() {
  const [itemList, setItemList] = useState([]);
  const addItemHandler = (enteredInput) => {
    setItemList((prevItemList) => {
      return [
        ...prevItemList,
        {
          text: enteredInput,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <Card>
        <h1>Todo List</h1>
        <AddItem onAddItem={addItemHandler} />
        <ItemList items={itemList} />
      </Card>
    </div>
  );
}

export default App;
