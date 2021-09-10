import React, { useState } from "react";
import Cards from './Components/Cards';
import DataTracker from "./DataTracker";

//for production this API key would need to be hidden
const api = {
  key: "8e4863d596f6b5dbac14fc594c9b1ead",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [forecast, setForecast] = useState({});

  //on search enter, fetch data
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setForecast(result);
        setQuery('');
      });
    }
  }

  return (
    <div className="app">
      <main>
        <h1 className="title">React Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeHolder="Enter a city!"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          >
          </input>
        </div>
        {(typeof forecast.list !== "undefined") ? ( //check if a search query has been done
          <div>
            <div className="location-box">
              <div className="location">{forecast.city.name}, {forecast.city.country}</div>
            </div>
            <Cards forecast={forecast} />
            <DataTracker forecast={forecast}/>
          </div>
        ) : ('')}
        <footer>
          <a href="https://github.com/QuintonEL/weather-forecast-app">https://github.com/QuintonEL/weather-forecast-app</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
