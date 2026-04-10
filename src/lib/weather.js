export async function getWeather(location, apiKey) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}