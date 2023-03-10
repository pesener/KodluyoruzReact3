import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İzmir");
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b25c76ce67cdbdbcf01daab7e01b8d5e`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  const values = { city, setCity, weather };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
