import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [foodGroup, setFoodGroup] = useState("Produce");
  const [formData, setFormData] = useState({
    name: "banana",
    category: foodGroup,
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    const newSearch = event.target.value;
    setSearch(newSearch);
  }

  function handleInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const itemsToDisplay = items
    .filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
      })
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));



  return (
    <div className="ShoppingList">
      <ItemForm formData={formData} onInput={handleInput} foodGroup={foodGroup}/>
      <Filter search={search} onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
