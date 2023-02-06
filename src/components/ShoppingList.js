import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ itemName, itemCategory, items, onItemFormSubmit, onInputChange, onFoodGroupChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  //const [foodGroup, setFoodGroup] = useState("Produce");
  //const initialFormState = {
  //  name: "",
  //  category: foodGroup,
  //};
  //const [formData, setFormData] = useState(initialFormState);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  function handleSearch(event) {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };
  const itemsToDisplay = items
    .filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
      })
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm 
        itemName={itemName}
        itemCategory={itemCategory}
        onInputChange={onInputChange}
        onFoodGroupChange={onFoodGroupChange}
        onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={search} onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
