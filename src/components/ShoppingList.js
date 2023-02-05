import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [foodGroup, setFoodGroup] = useState("Produce");
  const initialFormState = {
    name: "",
    category: foodGroup,
  };
  const [formData, setFormData] = useState(initialFormState);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  function handleSearch(event) {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  function handleInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [key]: value
    })
  };

  function handleFoodGroupChange(event) {
    const newFoodGroup = event.target.value;
    setFoodGroup(newFoodGroup);
    setFormData({
      ...formData,
      category: newFoodGroup
    })
  };

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: foodGroup
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setFoodGroup("Produce");
    setFormData(initialFormState);

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
        name={formData.name} 
        onInput={handleInput} 
        foodGroup={foodGroup} 
        onChangeFoodGroup={handleFoodGroupChange}
        onItemFormSubmit={handleSubmit}/>
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
