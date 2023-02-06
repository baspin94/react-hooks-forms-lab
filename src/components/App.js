import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemName, setItemName] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleInput(event) {
    setItemName(event.target.value)
  };
  
  function handleFoodGroupChange(event) {
    const newCategory = event.target.value;
    setItemCategory(newCategory);
  };

  function handleItemFormSubmit(newItem){
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
        itemName={itemName}
        itemCategory={itemCategory}
        items={items} 
        onInputChange={handleInput}
        onFoodGroupChange={handleFoodGroupChange}
        onItemFormSubmit={handleItemFormSubmit}
        />
    </div>
  );
}

export default App;
