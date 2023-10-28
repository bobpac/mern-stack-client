import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCityInfoFromZipCode } from "../../../utilities/city-api";
import "./AddCity.css";

export default function AddCity({ handleAddCity, cities, user }) {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(evt) {
    evt.preventDefault()
    const cityObj = await getCityInfoFromZipCode(zipCode)
    handleAddCity(cityObj);
    setZipCode("")
    navigate('/cities')
  }

  function handleDataChange(evt) {
    setZipCode(evt.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s3">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <input
                type="text"
                autoFocus
                size="5"
                maxLength="5"
                minLength="5"
                id="zipcode"
                onChange={handleDataChange}
                value={zipCode}
                required
              />
              <input type="submit" value="Add City" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
