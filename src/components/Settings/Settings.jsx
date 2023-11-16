import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCityInfoFromZipCode } from "../../../utilities/city-api";
import * as citiesAPI from "../../../utilities/city-api";
import "./Settings.css";
import "../../index.css";

export default function Settings({ user }) {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  useEffect(function () {
    async function getCities() {
      const cities = await citiesAPI.getCities(user);
      setCities(cities);
    }
    getCities();
  }, []);

  async function handleDelete(evt) {
    const deletedCity = await citiesAPI.delCity(evt.target.id);
    const updatedCities = cities.filter((city) => city._id != deletedCity._id);
    setCities(updatedCities);
  }

  async function handleAddCity(city) {
    setCities([...cities, city]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const cityObj = await getCityInfoFromZipCode(zipCode);
    handleAddCity(cityObj);
    setZipCode("");
  }

  function handleDataChange(evt) {
    setZipCode(evt.target.value);
  }

  return (
    <div className="row">
      <div className="col s12 m4 l3 cityContainer">
        <h1 className="cityTitles"> Settings </h1>
        <div className="cityForecastContainer">

        <form className="cityNames" autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            id="zipcode"
            pattern="[0-9]{5}"
            title="Please enter a 5-digit zip code"
            onChange={handleDataChange}
            value={zipCode}
            placeholder="Enter Zip Code"
            required
          />
          <input className="AddCityButton" type="submit" value="Add City" />
        </form>
          {cities.map((city) => (
            <div className="cityTitles cityNames" key={city._id}>
              {city.city} , {city.state_code}
              <button
                className="DeleteCityButton"
                onClick={handleDelete}
                id={city._id}
              >
                Delete City
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
