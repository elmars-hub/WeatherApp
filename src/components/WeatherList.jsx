/* eslint-disable react/prop-types */
import { WiHumidity } from "react-icons/wi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaWind } from "react-icons/fa";

function WeatherList({ weather }) {
  const pressure = Math.round(weather.main.pressure);
  const humidity = weather.main.humidity;
  const wind = (weather.wind.speed * 2.23694).toFixed(1);

  return (
    <div className="sm:flex-row flex-col flex gap-4 mt-8 w-full">
      <div className="rounded-xl p-4 bg-light-lightInput w-full dark:bg-dark-darkInput dark:text-white shadow-md">
        <span className="flex items-center gap-2">
          <WiHumidity className="text-2xl" />
          <p className="">Humidty</p>
        </span>

        <p className="pl-10 pt-2">{humidity}%</p>
      </div>
      <div className="rounded-xl p-4 bg-light-lightInput w-full dark:bg-dark-darkInput dark:text-white shadow-md">
        <span className="flex items-center gap-2">
          <MdOutlineRemoveRedEye className="text-2xl" />
          <p className="">Pressure</p>
        </span>

        <p className="pl-10 pt-2">{pressure}</p>
      </div>
      <div className="rounded-xl p-4 bg-light-lightInput w-full dark:bg-dark-darkInput dark:text-white shadow-md">
        <span className="flex items-center gap-2">
          <FaWind className="text-2xl" />
          <p className="">Wind</p>
        </span>

        <p className="pl-10 pt-2">{wind} mph</p>
      </div>
    </div>
  );
}

export default WeatherList;
