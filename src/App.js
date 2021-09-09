import React, { useState } from "react";

const api = {
  key: "8e4863d596f6b5dbac14fc594c9b1ead",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [forecast, setForecast] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setForecast(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
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
        {(typeof forecast.list != "undefined") ? ( //check if a search query has been done
          <div>
            <div className="location-box">
              <div className="location">{forecast.city.name}, {forecast.city.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(forecast.list[0].main.temp)}°C
                <div className="weather">{forecast.list[0].weather[0].main}</div>
              </div>
            </div>
            <div className="header">
              Daily
            </div>
            <div className="forecast">
              <div className="col">
                <div className="small-date">{(forecast.list[1].dt_txt).slice(0, -9)}</div>
                <div className="temp">
                  {Math.round(forecast.list[1].main.temp)}°C
                </div>
                <div className="weather">{forecast.list[1].weather[0].main}</div>
              </div>

              <div className="col">
                <div className="small-date">{(forecast.list[9].dt_txt).slice(0, -9)}</div>
                  <div className="temp">
                    {Math.round(forecast.list[9].main.temp)}°C
                  </div>
                <div className="weather">{forecast.list[9].weather[0].main}</div>
              </div> 

              <div className="col">
                <div className="small-date">{(forecast.list[17].dt_txt).slice(0, -9)}</div>
                  <div className="temp">
                    {Math.round(forecast.list[17].main.temp)}°C
                  </div>
                <div className="weather">{forecast.list[17].weather[0].main}</div>
              </div>

              <div className="col">
                <div className="small-date">{(forecast.list[25].dt_txt).slice(0, -9)}</div>
                  <div className="temp">
                    {Math.round(forecast.list[25].main.temp)}°C
                  </div>
                <div className="weather">{forecast.list[25].weather[0].main}</div>
              </div>

              <div className="col">
                <div className="small-date">{(forecast.list[33].dt_txt).slice(0, -9)}</div>
                  <div className="temp">
                    {Math.round(forecast.list[33].main.temp)}°C
                  </div>
                <div className="weather">{forecast.list[33].weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : ('')}

      </main>
    </div>
  );
}

export default App;
