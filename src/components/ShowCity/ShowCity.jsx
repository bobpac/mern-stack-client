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

  async function handleShow(evt) {
    evt.preventDefault();
    const results = await citiesAPI.getWeatherForCity(evt.target.id);
    delete results.daily[7];
    setWeather(results.daily);
    console.log(results.daily);
  }
  function getIconPath(icon) {
    return `../../../public/images/${icon}@2x.png`;
  }
  return (
    <>
      {cities.map((city) => (
        <div key={city._id}>
          {city.city} , {city.state_code}{" "}
          <button onClick={handleShow} id={city._id}>
            {" "}
            Get Weather{" "}
          </button>
        </div>
      ))}
      <center><h1> 7-day Forecast </h1></center>
      <div className="weatherContainer">
        {weather.map((day) => (
          <div className="weatherDay" key={day.key}>
            <img src={getIconPath(day.weather[0].icon)}></img>
            <br />
            {/* {day.weather[0].description} <br /> */}
            High: {day.temp.max} <br />
            Low: {day.temp.min} <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
