import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCityInfoFromZipCode } from "../../../utilities/city-api";
import "./AddCity.css";

export default function AddCity({ handleAddCity }) {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    const cityObj = await getCityInfoFromZipCode(zipCode);
    handleAddCity(cityObj);
    setZipCode("");
    navigate("/cities");
  }

  function handleDataChange(evt) {
    setZipCode(evt.target.value);
  }

  return (
    <div className="row">
      <div className="col s12 m4 l3">
        <center>
          <h1 class="cityTitles"> Add City </h1>
        </center>

        <div className="cityContainer">
          <form className="cityNames" autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="text"
              autoFocus
              id="zipcode"
              onChange={handleDataChange}
              value={zipCode}
              required
            /> <input className="AddCityButton" type="submit" value="Add City" />
          </form>
        </div>
      </div>
    </div>
  );
}
