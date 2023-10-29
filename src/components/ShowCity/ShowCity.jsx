// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import * as citiesAPI from "../../../utilities/city-api";
import "./ShowCity.css";

export default function ShowCity({ user }) {
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(function () {
    async function getCities() {
      const allCities = await citiesAPI.getCities(user);
      setCities(allCities);
    }
    getCities();
  }, []);

  function setDayOfTheWeek(arr) {
    const dayOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    const day = date.getDay();
    for (let num = 0; num < 7; num++) {
      arr[num].dayOfTheWeek = dayOfTheWeek[(day + num) % 7];
    }
  }

  async function handleShow(evt) {
    evt.preventDefault();
    const results = await citiesAPI.getWeatherForCity(evt.target.id);
    delete results.daily[7];
    // insert the name of the day
    setDayOfTheWeek(results.daily);
    setWeather(results.daily);
    const cityNameId = document.getElementById('cityName');
    cityNameId.innerText = results.location;

    console.log(results.daily);
  }

  function getIconPath(icon) {
    return `../../../public/images/${icon}@2x.png`;
  }

  return (
    <>
      <div className="row">
        <div className="col s12 m4 l3">
          <center>
            <h1 class="cityTitles"> Cities </h1>
          </center>
          <div className="cityContainer">
            {cities.map((city) => (
              <div className="cityTitles cityNames" key={city._id}>
                {city.city} , {city.state_code}{" "}
                <button
                  className="GetWeatherButton"
                  onClick={handleShow}
                  id={city._id}
                >
                  {" "}
                  Get Weather{" "}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col s12 m8 l9">
          <center>
            <h1 className="cityTitles" id="cityName"> 7-day Forecast </h1>
          </center>
          <div className="weatherContainer" key={99}>
            {weather.map((day) => (
              <div className="weatherDay" key={day.key}>
                {day.dayOfTheWeek} <br />
                <img src={getIconPath(day.weather[0].icon)}></img>
                <br />
                {/* {day.weather[0].description} <br /> */}
                High: {Math.floor(day.temp.max)} <br />
                Low: {Math.floor(day.temp.min)} <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
