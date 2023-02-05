import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ formData, onInput }) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={onInput}/>
      </label>

      <label>
        Category:
        <select name="category">
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
