import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

describe("WeatherCard", () => {
  it("renders weather information", () => {
    const weather = {
      city: "Edmonton",
      temperature: 10,
      description: "clear sky",
      icon: "01d",
    };

    render(<WeatherCard weather={weather} />);

    expect(screen.getByText(/Edmonton/i)).toBeInTheDocument();
    expect(screen.getByText(/10°C/i)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
  });
});