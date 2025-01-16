import WeatherList from "./WeatherList";

/* eslint-disable react/prop-types */
function WeatherDisplay({ weather }) {
  if (!weather || !weather.main) return null;
  // local time
  const localTime = weather?.dt
    ? new Date(weather.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const currentTemp = Math.round(weather.main.temp);
  const highTemp = Math.round(weather.main.temp_max);
  const weatherCondition = weather.weather[0].description;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <>
      <div className=" flex flex-col mt-8 bg-light-lightInput dark:bg-dark-darkInput dark:text-white w-full rounded-2xl p-4 shadow-md">
        <p className="text-[12px]">Current Weather</p>
        <span className="font-semibold pt">{localTime}</span>

        <span className="flex items-center gap-3 pt-4">
          <img src={iconUrl} alt={iconUrl} className="w-10 h-10" />
          <p>{currentTemp}°C</p>
          <p className="text-[14px] capitalize">{weatherCondition}</p>
        </span>

        <p className="pt-3">
          There will be mostly{" "}
          <span className="capitalize">{weatherCondition}</span> . The high will
          be {highTemp}°C.
        </p>
      </div>

      <WeatherList weather={weather} />
    </>
  );
}

export default WeatherDisplay;
