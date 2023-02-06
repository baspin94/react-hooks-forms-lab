import React from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ itemName, itemCategory, onInputChange, onFoodGroupChange, onItemFormSubmit }) {
  
  function handleSubmit(event){
    event.preventDefault();
    debugger;
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    debugger;
    onItemFormSubmit(newItem);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name={"name"} value={itemName} onChange={onInputChange}/>
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={itemCategory} 
          onChange={onFoodGroupChange} 
        >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
