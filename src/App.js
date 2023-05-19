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

  // const deleteItemHandler = (key) => {
  //   const newItemList = [...itemList];
  //   newItemList.splice(key, 1);
  //   setItemList(newItemList);
  // };
  const deleteItemHandler = (itemKey) => {
    setItemList((prevItem) => {
      const updatedItem = prevItem.filter((item) => item.key !== itemKey);
      return updatedItem;
    });
  };

  return (
    <div>
      <Card>
        <AddItem onAddItem={addItemHandler} />
        <ItemList items={itemList} onDeleteItem={deleteItemHandler} />
      </Card>
    </div>
  );
}

export default App;
