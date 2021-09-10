import React, { Component } from "react";

export default class Cards extends Component{
  
  render () {

    return (

      //generates each weather card in the top row
      //redundant
      <div className="forecast">
        <div className="col">
          <div className="small-date">{(new Date(this.props.forecast.list[1].dt_txt)).toString().substring(0,15)}</div>
          <div className="temp">
            {Math.round(this.props.forecast.list[1].main.temp)}°C
          </div>
          <div className="weather">{this.props.forecast.list[1].weather[0].main}</div>
        </div>

        <div className="col">
          <div className="small-date">{(new Date(this.props.forecast.list[9].dt_txt)).toString().substring(0,15)}</div>
            <div className="temp">
              {Math.round(this.props.forecast.list[9].main.temp)}°C
            </div>
          <div className="weather">{this.props.forecast.list[9].weather[0].main}</div>
        </div> 

        <div className="col">
          <div className="small-date">{(new Date(this.props.forecast.list[17].dt_txt)).toString().substring(0,15)}</div>
            <div className="temp">
              {Math.round(this.props.forecast.list[17].main.temp)}°C
            </div>
          <div className="weather">{this.props.forecast.list[17].weather[0].main}</div>
        </div>

        <div className="col">
          <div className="small-date">{(new Date(this.props.forecast.list[25].dt_txt)).toString().substring(0,15)}</div>
            <div className="temp">
              {Math.round(this.props.forecast.list[25].main.temp)}°C
            </div>
          <div className="weather">{this.props.forecast.list[25].weather[0].main}</div>
        </div>

        <div className="col">
          <div className="small-date">{(new Date(this.props.forecast.list[33].dt_txt)).toString().substring(0,15)}</div>
            <div className="temp">
              {Math.round(this.props.forecast.list[33].main.temp)}°C
            </div>
          <div className="weather">{this.props.forecast.list[33].weather[0].main}</div>
        </div>
      </div>
    )
  }
}