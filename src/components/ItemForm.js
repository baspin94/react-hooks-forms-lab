import React from "react";


function ItemForm({ formData, onInput, foodGroup, onChangeFoodGroup, onItemFormSubmit }) {
  
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={onInput}/>
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={foodGroup} 
          onChange={onChangeFoodGroup} 
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
