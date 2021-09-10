import React, { Component } from "react";

export default class DataTracker extends Component {
  render () {

    //loop through all data, create arrays
    let temps = [];
    for (let i = 0; i < this.props.forecast.list.length; i++) {
      temps.push(this.props.forecast.list[i].main.temp);
    }

    //split into chunks for each day
    function chunkArray(myArray, chunk_size){
      let arrayLength = myArray.length;
      let tempChunk = [];
      
      for (let i = 0; i < arrayLength; i += chunk_size) {
          let myChunk = myArray.slice(i, i + chunk_size);
          // Do something if you want with the group
          tempChunk.push(myChunk);
      }
  
      return tempChunk;
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
    function showMode(days) {
      let modeResults = [];
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
        modeResults.push(modeArr);
      }
      return modeResults;
    }
    console.log('mode', showMode(oneDay));
    

    return (

      //redundant
      <div className="forecast">
        <div className="col">
          <div className="dataTracker">
            High: {showMax(oneDay)[0]}°C
          </div>
          <div className="dataTracker">
            Low: {showMin(oneDay)[0]}°C
          </div>
          <div className="dataTracker">
            Mean: {showMean(oneDay)[0].toFixed(1)}°C
          </div>
          <div className="dataTracker">
            Mode: {showMode(oneDay)[0]}°C
          </div>
        </div>
        <div className="col">
          <div className="dataTracker">
            High: {showMax(oneDay)[1]}°C
          </div>
          <div className="dataTracker">
            Low: {showMin(oneDay)[1]}°C
          </div>
          <div className="dataTracker">
            Mean: {showMean(oneDay)[1].toFixed(1)}°C
          </div>
          <div className="dataTracker">
            Mode: {showMode(oneDay)[1]}°C
          </div>
        </div>
        <div className="col">
          <div className="dataTracker">
            High: {showMax(oneDay)[2]}°C
          </div>
          <div className="dataTracker">
            Low: {showMin(oneDay)[2]}°C
          </div>
          <div className="dataTracker">
            Mean: {showMean(oneDay)[2].toFixed(1)}°C
          </div>
          <div className="dataTracker">
            Mode: {showMode(oneDay)[2]}°C
          </div>
        </div>
        <div className="col">
          <div className="dataTracker">
            High: {showMax(oneDay)[3]}°C
          </div>
          <div className="dataTracker">
            Low: {showMin(oneDay)[3]}°C
          </div>
          <div className="dataTracker">
            Mean: {showMean(oneDay)[3].toFixed(1)}°C
          </div>
          <div className="dataTracker">
            Mode: {showMode(oneDay)[3]}°C
          </div>
        </div>
        <div className="col">
          <div className="dataTracker">
            High: {showMax(oneDay)[4]}°C
          </div>
          <div className="dataTracker">
            Low: {showMin(oneDay)[4]}°C
          </div>
          <div className="dataTracker">
            Mean: {showMean(oneDay)[4].toFixed(1)}°C
          </div>
          <div className="dataTracker">
            Mode: {showMode(oneDay)[4]}°C
          </div>
        </div>
      </div>
    )
  }
}