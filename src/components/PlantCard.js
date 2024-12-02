import React, { useState } from "react";

function PlantCard({ plant, toggleStock }) {
  const [isInStock, setIsInStock] = useState(plant.stock); // Set initial state based on the plant's stock status

  const handleStockToggle = () => {
    const newStockStatus = !isInStock; // Toggle the stock status
    setIsInStock(newStockStatus); // Update local state
    toggleStock(plant.id, newStockStatus); // Call the toggleStock function passed from parent to update the state in the parent component (if needed)
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
