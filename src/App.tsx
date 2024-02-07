import React from 'react'
import { useState, useEffect } from 'react'

import { Brewery } from "./misc/type";

const App = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/v1/breweries')
      .then((response) => response.json())
      .then((breweries) => setBreweries(breweries));
  }, []);


  return (
    <div>
    {breweries.map(brewery => (
      <div key={brewery.id}>
        <h2>{brewery.name}</h2>
        <p>City: {brewery.city}</p>
        <p>Country: {brewery.country}</p>
        <p>Phone: {brewery.phone}</p>
      </div>
    ))}
  </div>
  )
}

export default App