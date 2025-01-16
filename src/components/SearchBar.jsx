/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import { MdLightMode, MdNightlight, MdOutlineLocationOn } from "react-icons/md";
import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

function SearchBar({ darkmode, setDarkMode }) {
  const { city, setCity, weather } = useWeather();

  const [input, setInput] = useState("");
  function handleDarkMode() {
    setDarkMode((d) => !d);
  }

  function handleSearch() {
    if (input.trim() !== "") {
      setCity(input.toUpperCase());
    }
  }

  return (
    <div className="mt-8 bg-light-lightInput dark:bg-dark-darkInput rounded-xl flex items-center p-4 w-full justify-between shadow-md">
      <h2 className="font-bold text-blue-500 text-sm sm:text-[18px]">
        SkyUpdates
      </h2>
      <div className="items-center gap-1 hidden sm:flex dark:text-white">
        {weather ? <MdOutlineLocationOn /> : ""}
        <p>{city}</p>
      </div>

      <div className="flex items-center gap-2 bg-mainBg p-2 rounded-md outline outline-1 dark:outline dark:outline-white">
        <FaSearch className="dark:text-white" />
        <input
          className="w-full outline-none text-sm bg-inherit dark:text-white"
          type="text"
          placeholder="Search for your city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>

      <span
        className="cursor-pointer text-2xl items-center justify-center dark:text-white"
        onClick={handleDarkMode}
      >
        {darkmode ? <MdLightMode /> : <MdNightlight />}
      </span>
    </div>
  );
}

export default SearchBar;
