// import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  //getWeatherDetails using AXIOS or fetchAPI using ASYNC AWAIT
  // const getWeatherDetails = (cityName) => {
  //   if (!cityName) return;
  //   const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
  //   axios.get(apiURL).then((res) => {
  //     console.log("response", res.data)
  //     setData(res.data)
  //   }).catch((err) => {
  //     console.log("err", err)
  //   })
  // }

  //getting API using async await
  const fetchWeatherAPI = async (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    const response = await fetch(apiURL);
    const resJson = await response.json();
    setData(resJson);
  };

  useEffect(() => {
    fetchWeatherAPI("dhanbad");
  }, []);

  const handleChangeInput = (event) => {
    // console.log("value", event.target.value);
    setInputCity(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherAPI(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center mt-5">
            <div className="shadow rounded weatherResultBox">
              <img
                className="weatherIcon"
                src="https://imgs.search.brave.com/niPdNj606HUHf3NAoESgd5XHk6sCJJ56LlO7FRsAspM/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/TDVUZEk4bFNtY29Z/c3QtVEJKcGpBSGFG/aiZwaWQ9QXBp"
                alt="Weatherimage"
              />

              <h5 className="weatherCity">{data?.name}</h5>
              <h6 className="weatherTemp">
                {(data?.main?.temp - 273.15).toFixed(2)}°C
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
