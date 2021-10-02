import { Container } from "@mui/material";
import "./App.css";
import { useState } from "react";
import "./index.css";

// import Input from "@mui/material/Input";
const api = {
  key: "d5c2642b92a84bb35b072f49153c44e6",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  const getDate = new Date();
  const currentDate = getDate.toDateString();

  return (
    <Container>
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? "App warm" : "App") : "App" }>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by city name.."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            ></input>
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name} {weather.sys.country}
                </div>
                <div className="date">{currentDate}</div>
              </div>
              <div className="weather">{Math.round(weather.main.temp)}°c</div>
              <div className="weather-box">{weather.weather[0].main}</div>
              <div className="note">All data displayed here is realtime <b>Weather App</b>  All Rights Reserved ©
 2021 <br/> <br /> <i> Developed By Prajwal Ladkat</i></div>
            </div>
          ) : (
            ""
          )}
          

  
          
        </main>
      </div>
    </Container>
  );
}

export default App;
