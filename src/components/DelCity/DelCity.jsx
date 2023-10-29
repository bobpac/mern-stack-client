import { useState, useEffect } from "react";
import * as citiesAPI from "../../../utilities/city-api";

export default function DelCity({ user }) {
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

  return (
    <div className="row">
      <div className="col s12 m4 l3">
        <center>
          <h1 class="cityTitles"> Delete City </h1>
        </center>
        <div className="cityContainer">
          {cities.map((city) => (
            <div className="cityTitles cityNames" key={city._id}>
              {city.city} , {city.state_code}{" "}
              <button className="DeleteCityButton" onClick={handleDelete} id={city._id}>
                {" "}
                Delete{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
