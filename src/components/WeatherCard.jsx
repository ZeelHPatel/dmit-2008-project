export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="card p-4">
      <h2>{weather.city}</h2>
      <p>{weather.temperature}°C</p>
      <p>{weather.description}</p>
     <img
  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
  alt={weather.description}
/>
    </div>
  );
}