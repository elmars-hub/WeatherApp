/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";
import { WeatherApi } from "../hooks/WeatherApi";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [city, setCity] = useState("");
  const { weather, isLoading, error } = WeatherApi(city);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        isLoading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}

export { WeatherProvider, useWeather };
