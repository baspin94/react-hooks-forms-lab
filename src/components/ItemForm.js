import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {
  
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemName, setItemName] = useState("");

  function handleInput(event) {
    setItemName(event.target.value)
  };
    
  function handleFoodGroupChange(event) {
    const newCategory = event.target.value;
    setItemCategory(newCategory);
  };
  
  function handleSubmit(event){
    event.preventDefault();
    console.log(itemName);
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleInput}/>
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={itemCategory} 
          onChange={handleFoodGroupChange} 
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
