import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
  
    </div>
  );
}

// Fetch the db.json file from a server running on a specific port (e.g., 5000)
fetch('http://localhost:6001/plants')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Log the retrieved data to the console
    console.log('Retrieved data:', data);
  })
  .catch(error => {
    console.error('Error fetching the data:', error);
  });

export default App;
