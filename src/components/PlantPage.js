import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((response) => response.json())
      .then((data) => {
        // Assuming each plant initially has a "stock" property set to true
        const updatedData = data.map((plant) => ({ ...plant, stock: true }));
        setPlants(updatedData);
      });
  }, []);

  const toggleStock = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, stock: !plant.stock } : plant
      )
    );
  };

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} onToggleStock={toggleStock} />
    </main>
  );
}

export default PlantPage;
