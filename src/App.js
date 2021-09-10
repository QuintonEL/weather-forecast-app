import React, { useState } from "react";
import Cards from './Components/Cards';

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
        
        //loop through all data, create arrays
        let temps = [];
        for (let i = 0; i < result.list.length; i++) {
          temps.push(result.list[i].main.temp);
        }

        //split into chunks for each day
        function chunkArray(myArray, chunk_size){
          let arrayLength = myArray.length;
          let tempArray = [];
          
          for (let i = 0; i < arrayLength; i += chunk_size) {
              let myChunk = myArray.slice(i, i + chunk_size);
              // Do something if you want with the group
              tempArray.push(myChunk);
          }
      
          return tempArray;
        }

        // call function to create nested array for each day of week
        var oneDay = chunkArray(temps, 8);
        let roundedOneDay = [];
        for (let i = 0; i < oneDay.length; i++) {
          roundedOneDay[i] = oneDay[i].map(item => Math.round(item));
        }
        console.log('oneDay', roundedOneDay);


        // find the max temp for each day
        function showMax(days) {
          let maxTemp = [];
          let rounded = [];
          for (let i = 0; i < days.length; i++) {
            //round the temperatures
            rounded[i] = days[i].map(item => Math.round(item));
            maxTemp.push(Math.max(...rounded[i]));
          }
          return maxTemp;
        }
        console.log('max', showMax(oneDay));


        //find the min temp for each day
        function showMin(days) {
          let minTemp = [];
          let rounded = [];
          for (let i = 0; i < days.length; i++) {
            //round the temperatures
            rounded[i] = days[i].map(item => Math.round(item));
            minTemp.push(Math.min(...rounded[i]));
          }
          return minTemp;
        }
        console.log('min', showMin(oneDay));


        //find the mean temp for each day
        function showMean(days) {
          let meanTemp = [];
          for (let i = 0; i < days.length; i++) {
            //round the temperatures
            const average = (array) => array.reduce((a, b) => a + b) / array.length;
            var rounded = days[i].map(item => Math.round(item));
            meanTemp.push((average(rounded)));
          }
          return meanTemp;
        }
        console.log('mean', showMean(oneDay));


        //find the mode temp for each day
        function find_mode(days) {
          let arr = [];
          for (let i = 0; i < days.length; i++) {
            let modeArr = [];
            let mode = {};
            let count = 0;
            //round the temperatures
            var rounded = days[i].map(item => Math.round(item));
            rounded.forEach(e => {
                if (mode[e]) { mode[e]++; }
                else { mode[e] = 1; }
        
                if (count<mode[e]) {
                    modeArr = e;
                    count = mode[e];
                }
            });
            arr.push(modeArr);
          }
          return arr;
        }
      console.log('mode', find_mode(oneDay));
      });
    }
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
        {(typeof forecast.list !== "undefined") ? ( //check if a search query has been done
          <div>
            <div className="location-box">
              <div className="location">{forecast.city.name}, {forecast.city.country}</div>
            </div>
            <Cards forecast={forecast}/>
          </div>
        ) : ('')}

      </main>
    </div>
  );
}

export default App;
