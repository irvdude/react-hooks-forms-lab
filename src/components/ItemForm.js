import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [itemName, setName] = useState("")
  const [itemCategory, setCategory] = useState("")

  function handleItemName(e) {
    setName(e.target.value)
  }

  function handleItemCategory(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
    setName("")
    setCategory("")

  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory} value={itemCategory}>
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
