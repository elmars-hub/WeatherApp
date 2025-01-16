import { useState, useEffect } from "react";

const KEY = "60fde3dd246747f683174e029325690a";

export function WeatherApi(city) {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      setWeather(null);
      return;
    }

    const controller = new AbortController();

    async function fetchWeather() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("City not found or network issue");

        const data = await res.json();

        setWeather(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, [city]);

  return { weather, isLoading, error };
}
