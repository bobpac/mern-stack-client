// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import * as citiesAPI from "../../../utilities/city-api";

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
    console.log(results);
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
      <h1> Weather for City </h1>
      {/* {weatherDays.map(day => (
      <div key={day.key}>
        {day.description} High: {day.high} Low: {day.low}
      </div> )
    )} */}
    </>
  );
}