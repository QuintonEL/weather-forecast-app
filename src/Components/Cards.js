import React from "react";

export default class Cards extends React.Component{
  render () {
    return (
      <div className="forecast">
                <div className="col">
                  <div className="small-date">{(this.props.forecast.list[1].dt_txt).slice(0, -9)}</div>
                  <div className="temp">
                    {Math.round(this.props.forecast.list[1].main.temp)}°C
                  </div>
                  <div className="weather">{this.props.forecast.list[1].weather[0].main}</div>
                </div>

                <div className="col">
                  <div className="small-date">{(this.props.forecast.list[9].dt_txt).slice(0, -9)}</div>
                    <div className="temp">
                      {Math.round(this.props.forecast.list[9].main.temp)}°C
                    </div>
                  <div className="weather">{this.props.forecast.list[9].weather[0].main}</div>
                </div> 

                <div className="col">
                  <div className="small-date">{(this.props.forecast.list[17].dt_txt).slice(0, -9)}</div>
                    <div className="temp">
                      {Math.round(this.props.forecast.list[17].main.temp)}°C
                    </div>
                  <div className="weather">{this.props.forecast.list[17].weather[0].main}</div>
                </div>

                <div className="col">
                  <div className="small-date">{(this.props.forecast.list[25].dt_txt).slice(0, -9)}</div>
                    <div className="temp">
                      {Math.round(this.props.forecast.list[25].main.temp)}°C
                    </div>
                  <div className="weather">{this.props.forecast.list[25].weather[0].main}</div>
                </div>

                <div className="col">
                  <div className="small-date">{(this.props.forecast.list[33].dt_txt).slice(0, -9)}</div>
                    <div className="temp">
                      {Math.round(this.props.forecast.list[33].main.temp)}°C
                    </div>
                  <div className="weather">{this.props.forecast.list[33].weather[0].main}</div>
                </div>
              </div>
    )
  }
}