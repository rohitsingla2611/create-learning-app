import React, { Component } from "react";
import "./Box.css";

import backGrd from "./images/background.jpg";
import searchIcon from "./images/searchIcon.svg";

import thunderstorm from "./images/thunder.svg";
import rain from "./images/rainy.svg";
import snow from "./images/snowy.svg";
import clouds from "./images/cloudy.svg";
import day from "./images/day.svg";

class Box extends Component {
  state = {
    date: new Date(),
    inputValue: "",
    inputdata: "ludhiana",
    list: [],
    lat: 0,
    lon: 0,
    imageWea: "",
    imageWeaSecond: "",
    imageWeaThird: "",
    imageWeaForth: "",
    temp: 0,
    secondDayTemp: 0,
    thirdDayTemp: 0,
    fourthDayTemp: 0,
    min: 0,
    max: 0,
    feelsLike: 0,
    wind: 0,
    humidity: 0,
  };
  componentDidMount() {
    this.fetchWeatherData("ludhiana");
  }
  fetchWeatherData(input) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4b9c4abbeba4d3ce6eab331d3efeaa6f`
    )
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          lat: result.coord.lat,
          lon: result.coord.lon,
        });
      })
      .then(() => {
        this.fetchApi2();
      });
  }

  fetchApi2() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=hourly,minutely,current&appid=0501bb922994503a0ecc3b64ad266b6c`
    )
      .then((result) => result.json())
      .then((result) =>
        this.setState({
          list: result,
        })
      )
      .then(() => {
        const list = this.state.list;

        const temp = this.convertTempCelsius(list.daily[0].temp.day);
        const secondDayTemp = this.convertTempCelsius(list.daily[1].temp.day);
        const thirdDayTemp = this.convertTempCelsius(list.daily[2].temp.day);
        const fourthDayTemp = this.convertTempCelsius(list.daily[3].temp.day);

        const min = this.convertTempCelsius(list.daily[0].temp.min);
        const max = this.convertTempCelsius(list.daily[0].temp.max);
        const feelsLike = this.convertTempCelsius(list.daily[0].feels_like.day);

        const wind = list.daily[0].wind_speed;
        const humidity = list.daily[0].humidity;

        const imageWea = list.daily[0].weather[0].main;
        const imageWeaSecond = list.daily[1].weather[0].main;
        const imageWeaThird = list.daily[2].weather[0].main;
        const imageWeaForth = list.daily[3].weather[0].main;

        this.setState({
          temp,
          secondDayTemp,
          thirdDayTemp,
          fourthDayTemp,
          min,
          max,
          feelsLike,
          wind,
          humidity,
          imageWea,
          imageWeaSecond,
          imageWeaThird,
          imageWeaForth,
        });
      });
  }

  convertTempCelsius(temp) {
    return Math.round(temp - 273.15);
  }

  onInputChangeHandler(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      inputValue: value,
    });
  }

  onInputSubmitHandler(event) {
    this.fetchWeatherData(this.state.inputValue);
    this.setState({ inputdata: this.state.inputValue, inputValue: "" });
    event.preventDefault();
  }

  getWeatherCon(condition) {
    let message = "";
    switch (condition) {
      case "Thunderstorm":
        message = thunderstorm;
        break;
      case "Rain":
        message = rain;
        break;
      case "Snow":
        message = snow;
        break;
      case "Clouds":
        message = clouds;
        break;

      default:
        message = day;
    }
    return message;
  }

  getDayOfWeek(day) {
    let dayText;
    switch (day) {
      case 0:
      case 7:
        dayText = "Sunday";
        break;
      case 1:
      case 8:
        dayText = "Monday";
        break;
      case 2:
      case 9:
        dayText = "Tuesday";
        break;
      case 3:
        dayText = "Wednesday";
        break;
      case 4:
        dayText = "Thurday";
        break;
      case 5:
        dayText = "Friday";
        break;
      case 6:
        dayText = "Saturday";
        break;
      default:
        break;
    }
    return dayText;
  }
  render() {
    const inputdata = this.state.inputdata;

    const temp = this.state.temp;
    const secondDayTemp = this.state.secondDayTemp;
    const thirdDayTemp = this.state.thirdDayTemp;
    const fourthDayTemp = this.state.fourthDayTemp;
    const min = this.state.min;
    const max = this.state.max;
    const feelsLike = this.state.feelsLike;
    const wind = this.state.wind;
    const humidity = this.state.humidity;

    const imageWea = this.getWeatherCon(this.state.imageWea);
    const imageWeaSecond = this.getWeatherCon(this.state.imageWeaSecond);
    const imageWeaThird = this.getWeatherCon(this.state.imageWeaThird);
    const imageWeaForth = this.getWeatherCon(this.state.imageWeaForth);

    const day = this.state.date.getDay();
    const getThirdDay = this.getDayOfWeek(day + 2);
    const getFourthDay = this.getDayOfWeek(day + 3);

    return (
      <div className="container">
        <div className="box-back-img">
          <img src={backGrd} className="background-img" alt="" />
        </div>
        <div className="box-overlay">
          <h1 style={{ color: "white", fontWeight: "500" }}>
            WEATHER REPORT CARD
          </h1>
          <div className="box-0">
            <div>
              <form onSubmit={(event) => this.onInputSubmitHandler(event)}>
                <input
                  type="text"
                  name="inputValue"
                  placeholder="SEARCH BY CITY"
                  onChange={(event) => this.onInputChangeHandler(event)}
                  value={this.state.inputValue}
                />
                <button
                  type="submit"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <img src={searchIcon} height="25px" width="25px" alt="" />
                </button>
              </form>
            </div>
          </div>
          <div className="box-1">
            <img src={imageWea} alt="" width="150px" height="150px" />
            <h2>{temp}</h2>
            <h2>
              <sup>°</sup>
            </h2>
            <h2>&nbsp;{inputdata}</h2>
          </div>
          <div className="box-2">
            <div className="box-2-item">
              <p>
                {min}
                <sup> °</sup> / {max}
                <sup> °</sup>
              </p>
              <p>Min /Max</p>
            </div>
            <div className="box-2-item">
              <p>
                {feelsLike} <sup>°</sup>{" "}
              </p>
              <p>Feels Like</p>
            </div>
            <div className="box-2-item">
              <p>{wind} </p>
              <p>Wind</p>
            </div>
            <div className="box-2-item">
              <p>{humidity} </p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="box-3">
            <div className="box-3-item">
              <p className="box-3-p-up">Today</p>
              <img src={imageWea} alt="" />
              <p className="box-3-p-down">
                {temp} <sup>°</sup>
              </p>
            </div>
            <div className="box-3-item">
              <p className="box-3-p-up">Tommorrow</p>
              <img src={imageWeaSecond} alt="" />
              <p className="box-3-p-down">
                {secondDayTemp} <sup>°</sup>
              </p>
            </div>
            <div className="box-3-item">
              <p className="box-3-p-up">{getThirdDay}</p>
              <img src={imageWeaThird} alt="" />
              <p className="box-3-p-down">
                {thirdDayTemp} <sup>°</sup>
              </p>
            </div>
            <div className="box-3-item">
              <p className="box-3-p-up">{getFourthDay}</p>
              <img src={imageWeaForth} alt="" />
              <p className="box-3-p-down">
                {fourthDayTemp} <sup>°</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
