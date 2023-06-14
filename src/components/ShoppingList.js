import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    const searchTerm = search.toLowerCase();
    const itemName = item.name.toLowerCase();
    const itemCategory = item.category.toLowerCase();

    if (selectedCategory !== "All" && itemCategory !== selectedCategory.toLowerCase()) {
      return false;
    }

    return itemName.includes(searchTerm) || itemCategory.includes(searchTerm);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        search={search}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
