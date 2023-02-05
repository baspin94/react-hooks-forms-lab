import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ formData, onInput, foodGroup, onChangeFoodGroup }) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={onInput}/>
      </label>

      <label>
        Category:
        <select name="category" value={foodGroup} onChange={onChangeFoodGroup}>
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
